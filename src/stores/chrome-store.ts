import { create } from 'zustand'

import gacharevenueIcon from '@/assets/apps/chrome/tabs/gacharevenue.png'

import { ChromeStore } from '@/types/store'

const useChromeStore = create<ChromeStore>()((set) => ({
  tabs: [
    {
      icon: gacharevenueIcon,
      title: 'GACHAREVENUE',
      url: 'https://gacharevenue.com',
    },
  ],
  focusedTab: 0,
  setFocusedTab: (focusedTab) => set(() => ({ focusedTab })),
  addTab: (tab) =>
    set((state) => ({
      tabs: [...state.tabs, tab],
      focusedTab: state.tabs.length,
    })),
  removeTab: (tab) =>
    set((state) => ({
      tabs: state.tabs.filter((t) => t !== tab),
      focusedTab: state.tabs.length - 1,
    })),
}))

export default useChromeStore
