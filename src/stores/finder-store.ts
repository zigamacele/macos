import { create } from 'zustand'

import { FileStructure, fileStructure } from '@/constants/file-structure'
import { FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'
import { capitalize } from '@/utils/format'
import { areArraysEqual } from '@/utils/global'

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
  selectedFile: null,
  focusedDirectory: FinderMenu.USER,
  setFocusedDirectory: (focusedDirectory) => set(() => ({ focusedDirectory })),
  setSelectFile: (selectedFile) => set(() => ({ selectedFile })),
  moveDirectory: (direction) => {
    const { directoryHistory, directoryHistoryIndex, updateCurrentDirectory } =
      get()

    if (
      (directoryHistoryIndex === directoryHistory.length - 1 &&
        direction === Direction.FORWARD) ||
      (!directoryHistoryIndex && direction === Direction.BACKWARD)
    ) {
      return
    }
    const directoryHistoryOffset = direction === Direction.BACKWARD ? -1 : 1
    const directory = directoryHistory[
      directoryHistoryIndex + directoryHistoryOffset
    ] as string[]
    updateCurrentDirectory(directory, direction)
    set(() => ({
      directoryHistoryIndex: directoryHistoryIndex + directoryHistoryOffset,
      focusedDirectory: capitalize(
        directory[directory.length - 2] === 'root'
          ? 'Macintosh HD'
          : directory[directory.length - 2],
      ),
    }))
  },
  updateCurrentDirectory: (directory, direction) => {
    set(() => ({ selectedFile: null }))

    const {
      currentDirectory: currentStateDirectory,
      directoryHistory,
      directoryHistoryIndex,
    } = get()
    let currentDirectory: string[]
    if (Array.isArray(directory)) {
      if (areArraysEqual(directory, currentStateDirectory)) return
      currentDirectory = directory
    } else {
      const newCurrentDirectory = [
        ...currentStateDirectory,
        directory,
        'children',
      ]
      if (areArraysEqual(newCurrentDirectory, currentStateDirectory)) return
      currentDirectory = newCurrentDirectory
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
}))

export default useFinderStore
