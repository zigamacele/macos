import { FinderMenu } from '@/constants/icons'

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
  manageApp: (app: App, action: ManageAppAction) => void
}

export interface FinderStore {
  focusedMenu: FinderMenu
  setFocusMenu: (focusedMenu: FinderMenu) => void
}
