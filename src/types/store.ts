import { App } from './apps'

export interface SystemStore {
  screen: SystemScreen
  window: App
  setScreen: (screen: SystemScreen) => void
  setFocusWindow: (window: App) => void
}

export enum SystemScreen {
  BOOT = 'BOOT',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
}
