import { App } from './apps'

export interface SystemStore {
  screen: SystemScreen
  setScreen: (screen: SystemScreen) => void
}

export interface WindowManagerStore {
  window: App
  setFocusWindow: (screen: App) => void
}

export enum SystemScreen {
  BOOT = 'BOOT',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
}
