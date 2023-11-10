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

export type SubMenu = {
  label: string
  shortcut?: string
  onClick?: () => void
}
