import { create } from 'zustand'

import { App } from '@/types/apps'
import { WindowManagerStore } from '@/types/store'

const useWindowManager = create<WindowManagerStore>()((set) => ({
  window: App.FINDER,
  setFocusWindow: (window: App) => set(() => ({ window })),
}))

export default useWindowManager
