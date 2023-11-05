import { create } from 'zustand'

import { App } from '@/types/apps'
import { SystemScreen, SystemStore } from '@/types/store'

const useSystemStore = create<SystemStore>()((set) => ({
  screen: SystemScreen.BOOT,
  window: App.FINDER,
  setScreen: (screen: SystemScreen) => set(() => ({ screen })),
  setFocusWindow: (window: App) => set(() => ({ window })),
}))

export default useSystemStore
