import { create } from 'zustand'

import { ChromeStore, SystemScreen } from '@/types/store'

const useChromeStore = create<ChromeStore>()((set) => ({
  focusedTab: null,
  setFocusedTab: (focusedTab: SystemScreen) => set(() => ({ focusedTab })),
}))

export default useChromeStore
