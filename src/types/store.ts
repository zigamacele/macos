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
  focusedMenu: FinderMenu
  setFocusMenu: (focusedMenu: FinderMenu) => void
  updateCurrentDirectory: (currentDirectory: string) => void
  goBackDirectory: () => void
}
