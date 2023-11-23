export enum App {
  FINDER = 'Finder',
  CHROME = 'Chrome',
  VSCODE = 'VSCode',
  DISCORD = 'Discord',
  BITWARDEN = 'Bitwarden',
  DOCKER = 'Docker',
  FIGMA = 'Figma',
  OBSIDIAN = 'Obsidian',
  ITERM2 = 'iTerm2',
  SPOTIFY = 'Spotify',
  BIN = 'Bin',
}

export enum ManageAppAction {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  MINIMIZE = 'MINIMIZE',
  FULLSCREEN = 'FULLSCREEN',
}

export type Menubar = {
  [key in App]: Menu[]
}

interface Menu {
  label: string
  submenu?: SubMenu[]
}

export enum SubMenuType {
  NORMAL = 'NORMAL',
  SEPARATOR = 'SEPARATOR',
  CHECKBOX = 'CHECKBOX',
  RADIO = 'RADIO',
}

export type SubMenu = {
  label?: string
  type?: SubMenuType
  shortcut?: string
  onClick?: () => void
}

export interface ChromeTab {
  icon: string
  title: string
  url: string
}

export interface FigmaProject {
  title: string
  url: null | string
}
