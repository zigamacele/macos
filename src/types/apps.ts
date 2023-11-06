export enum App {
  FINDER = 'Finder',
}

export type Menubar = {
  [key in App]: Menu[]
}

type Menu = {
  label: string
  submenu?: SubMenu[]
}

export type SubMenu = {
  label: string
  shortcut?: string
  onClick?: () => void
}
