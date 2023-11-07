import { create } from 'zustand'

import { SystemScreen, SystemStore } from '@/types/store'

const useSystemStore = create<SystemStore>()((set) => ({
  screen: SystemScreen.BOOT,
  setScreen: (screen: SystemScreen) => set(() => ({ screen })),
}))

export default useSystemStore
