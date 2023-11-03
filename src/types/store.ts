export interface SystemStore {
  screen: SystemScreen
  setScreen: (screen: SystemScreen) => void
}

export enum SystemScreen {
  BOOT = 'BOOT',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
}
