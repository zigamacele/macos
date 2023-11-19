import { Direction } from '@/stores/finder-store'

import { FinderMenu } from '@/constants/icons'

import { FileStructure } from './../constants/file-structure'
import { App, ManageAppAction } from './apps'

export enum SystemScreen {
  BOOT = 'BOOT',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
}

export interface SystemStore {
  screen: SystemScreen
  setScreen: (screen: SystemScreen) => void
}

export interface ChromeStore {
  focusedTab: number | null
  setFocusedTab: (focusedTab: number | null) => void
}

export interface WindowManagerStore {
  focusedWindow: App
  minimizedWindows: App[]
  openWindows: App[]
  setFocusWindow: (focusedWindow: App) => void
  isAppOpen: (app: App) => boolean
  isAppFocused: (app: App) => boolean
  manageApp: (app: App, action: ManageAppAction) => void
}

export interface FinderStore {
  route: FileStructure
  currentDirectory: string[]
  directoryHistoryIndex: number
  directoryHistory: string[][]
  selectedFile: string | null
  focusedDirectory: string | FinderMenu
  setFocusedDirectory: (focusedDirectory: string) => void
  setSelectFile: (selectedFile: string | null) => void
  updateCurrentDirectory: (
    currentDirectory: string | string[],
    direction?: Direction,
  ) => void
  goBackDirectory: () => void
  goForwardDirectory: () => void
}
