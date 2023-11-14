import { create } from 'zustand'

import { FileStructure, fileStructure } from '@/constants/file-structure'
import { FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'

import { FinderStore } from '@/types/store'

const useFinderStore = create<FinderStore>()((set, get) => ({
  route: fileStructure['root']?.children?.['users']?.children?.[username]
    ?.children as FileStructure,
  currentDirectory: [
    'root',
    'children',
    'users',
    'children',
    username,
    'children',
  ],
  focusedMenu: FinderMenu.USER,
  setFocusMenu: (focusedMenu: FinderMenu) => set(() => ({ focusedMenu })),
  updateCurrentDirectory: (directory: string) => {
    const currentDirectory = [...get().currentDirectory, directory, 'children']
    let route = fileStructure
    currentDirectory.forEach((dir) => {
      route = route[dir] as unknown as FileStructure
    })
    set(() => ({ route, currentDirectory }))
  },
  goBackDirectory: () => {
    const stateCurrentDirectory = get().currentDirectory
    if (stateCurrentDirectory.length <= 2) return

    const currentDirectory = stateCurrentDirectory.slice(0, -2)
    let route = fileStructure
    currentDirectory.forEach((dir) => {
      route = route[dir] as unknown as FileStructure
    })
    set(() => ({ route, currentDirectory }))
  },
}))

export default useFinderStore
