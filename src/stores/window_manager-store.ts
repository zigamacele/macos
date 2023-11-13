import { create } from 'zustand'

import { App, ManageAppAction } from '@/types/apps'
import { WindowManagerStore } from '@/types/store'

const useWindowManager = create<WindowManagerStore>()((set, get) => ({
  focusedWindow: App.FINDER,
  minimizedWindows: [App.FINDER],
  openWindows: [],
  setFocusWindow: (focusedWindow: App) => set(() => ({ focusedWindow })),
  isAppOpen: (app: App): boolean => {
    const minimizedWindows = get().minimizedWindows
    const openWindows = get().openWindows
    return minimizedWindows.includes(app) || openWindows.includes(app)
  },
  isAppFocused: (app: App): boolean => get().focusedWindow === app,
  manageApp: (app: App, action: ManageAppAction) => {
    const currentFocusedWindow = get().focusedWindow

    if (currentFocusedWindow === app) {
      set(() => ({
        focusedWindow: App.FINDER,
      }))
    }

    switch (action) {
      case ManageAppAction.OPEN:
        set((state) => ({
          ...(!state.openWindows.includes(app) && {
            openWindows: [...state.openWindows, app],
          }),
          ...(state.minimizedWindows.includes(app) && {
            minimizedWindows: state.minimizedWindows.filter(
              (window) => window !== app,
            ),
          }),
        }))
        break
      case ManageAppAction.CLOSE:
        set((state) => ({
          openWindows: state.openWindows.filter((window) => window !== app),
          ...(App.FINDER === app && {
            minimizedWindows: [...state.minimizedWindows, app],
          }),
        }))
        break
      case ManageAppAction.MINIMIZE:
        set((state) => ({
          openWindows: state.openWindows.filter((window) => window !== app),
          minimizedWindows: [...state.minimizedWindows, app],
        }))
        break
    }
  },
}))

export default useWindowManager
