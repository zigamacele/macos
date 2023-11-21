import { create } from 'zustand'

import gacharevenueIcon from '@/assets/apps/chrome/tabs/gacharevenue.png'

import { DEFAULT_TAB } from '@/constants/links'

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
  addTab: () =>
    set((state) => ({
      tabs: [...state.tabs, { ...DEFAULT_TAB }],
      focusedTab: state.tabs.length,
    })),
  removeTab: (index) => {
    set((state) => {
      const tabs = [...state.tabs]
      tabs.splice(index, 1)
      const focusedTab = index === 0 ? 0 : index - 1
      return { tabs, focusedTab }
    })
  },
  updateTabUrl: (index: number, title: string, url: string) => {
    set((state) => {
      const tabs = [...state.tabs]
      const tab = tabs[index]
      if (tab) {
        tab.title = title
        tab.url = url
      }
      return { tabs }
    })
  },
}))

export default useChromeStore
