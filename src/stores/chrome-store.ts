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
}))

export default useChromeStore
