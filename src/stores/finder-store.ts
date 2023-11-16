import { create } from 'zustand'

import { FileStructure, fileStructure } from '@/constants/file-structure'
import { FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'
import { capitalize } from '@/utils/format'

import { FinderStore } from '@/types/store'

const initialState = {
  currentDirectory: [
    'root',
    'children',
    'users',
    'children',
    username,
    'children',
  ],
}

export enum Direction {
  FORWARD = 'FORWARD',
  BACKWARD = 'BACKWARD',
}

const useFinderStore = create<FinderStore>()((set, get) => ({
  route: fileStructure['root']?.children?.['users']?.children?.[username]
    ?.children as FileStructure,
  currentDirectory: initialState.currentDirectory,
  directoryHistory: [initialState.currentDirectory],
  directoryHistoryIndex: 0,
  focusedDirectory: FinderMenu.USER,
  setFocusedDirectory: (focusedDirectory) => set(() => ({ focusedDirectory })),
  updateCurrentDirectory: (directory, direction) => {
    const {
      currentDirectory: currentStateDirectory,
      directoryHistory,
      directoryHistoryIndex,
    } = get()
    let currentDirectory: string[]
    if (Array.isArray(directory)) {
      currentDirectory = directory
    } else {
      currentDirectory = [...currentStateDirectory, directory, 'children']
    }

    let route = fileStructure
    currentDirectory.forEach((dir) => {
      route = route[dir] as unknown as FileStructure
    })

    if (!direction && directoryHistoryIndex !== directoryHistory.length - 1) {
      set(() => ({
        route,
        currentDirectory,
        directoryHistory: directoryHistory.slice(0, directoryHistoryIndex + 2),
        directoryHistoryIndex: directoryHistoryIndex + 1,
      }))
      return
    }

    if (!direction && directoryHistoryIndex === directoryHistory.length - 1) {
      set(() => ({
        directoryHistory: [...directoryHistory, currentDirectory],
      }))
    }

    set(() => ({
      route,
      currentDirectory,
      directoryHistoryIndex: directoryHistory.length,
    }))
  },
  goBackDirectory: () => {
    const { directoryHistory, directoryHistoryIndex, updateCurrentDirectory } =
      get()
    if (!directoryHistoryIndex) return

    const directory = directoryHistory[directoryHistoryIndex - 1] as string[]

    updateCurrentDirectory(directory, Direction.BACKWARD)

    set(() => ({
      directoryHistoryIndex: directoryHistoryIndex - 1,
      focusedDirectory: capitalize(
        directory[directory.length - 2] === 'root'
          ? 'Macintosh HD'
          : directory[directory.length - 2],
      ),
    }))
  },
  goForwardDirectory: () => {
    const { directoryHistory, directoryHistoryIndex, updateCurrentDirectory } =
      get()
    if (directoryHistoryIndex === directoryHistory.length - 1) return

    const directory = directoryHistory[directoryHistoryIndex + 1] as string[]

    updateCurrentDirectory(directory, Direction.FORWARD)

    set(() => ({
      directoryHistoryIndex: directoryHistoryIndex + 1,
      focusedDirectory: capitalize(directory[directory.length - 2]),
    }))
  },
}))

export default useFinderStore
