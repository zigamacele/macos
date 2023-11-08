import { create } from 'zustand'

import { App } from '@/types/apps'
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
}))

export default useWindowManager
