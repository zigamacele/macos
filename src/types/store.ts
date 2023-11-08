import { App } from './apps'

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
}

export enum SystemScreen {
  BOOT = 'BOOT',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
}
