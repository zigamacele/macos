import { create } from 'zustand'

import { FinderMenu } from '@/constants/icons'

import { FinderStore } from '@/types/store'

const useFinderStore = create<FinderStore>()((set) => ({
  focusedMenu: FinderMenu.USER,
  setFocusMenu: (focusedMenu: FinderMenu) => set(() => ({ focusedMenu })),
}))

export default useFinderStore
