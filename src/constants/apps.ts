import Chrome from '@/components/apps/Chrome'
import Finder from '@/components/apps/Finder'
import Placeholder from '@/components/apps/Placeholder'

import bin from '@/assets/apps/bin.png'
import bitwarden from '@/assets/apps/bitwarden.png'
import chrome from '@/assets/apps/chrome.png'
import discord from '@/assets/apps/discord.png'
import docker from '@/assets/apps/docker.png'
import figma from '@/assets/apps/figma.png'
import finder from '@/assets/apps/finder.png'
import iterm2 from '@/assets/apps/iterm2.png'
import obsidian from '@/assets/apps/obsidian.png'
import spotify from '@/assets/apps/spotify.png'
import vscode from '@/assets/apps/vscode.png'

import { App, Menubar, SubMenuType } from '@/types/apps'

export const AppWindowConfig = {
  [App.FINDER]: { width: 1024, height: 576, component: Finder },
  [App.CHROME]: { width: 1366, height: 768, component: Chrome },
  [App.BIN]: { width: 1024, height: 576, component: Placeholder },
  [App.DISCORD]: { width: 1024, height: 576, component: Placeholder },
  [App.DOCKER]: { width: 1024, height: 576, component: Placeholder },
  [App.BITWARDEN]: { width: 1024, height: 576, component: Placeholder },
  [App.FIGMA]: { width: 1366, height: 768, component: Placeholder },
  [App.ITERM2]: { width: 800, height: 600, component: Placeholder },
  [App.OBSIDIAN]: { width: 1366, height: 768, component: Placeholder },
  [App.SPOTIFY]: { width: 1024, height: 576, component: Placeholder },
  [App.VSCODE]: { width: 1366, height: 768, component: Placeholder },
}

export const AppIcon = {
  [App.FINDER]: finder,
  [App.BIN]: bin,
  [App.BITWARDEN]: bitwarden,
  [App.CHROME]: chrome,
  [App.DISCORD]: discord,
  [App.FIGMA]: figma,
  [App.ITERM2]: iterm2,
  [App.OBSIDIAN]: obsidian,
  [App.SPOTIFY]: spotify,
  [App.VSCODE]: vscode,
  [App.DOCKER]: docker,
}

export const AppMenubar: Menubar = {
  [App.FINDER]: [
    {
      label: App.FINDER,
      submenu: [
        { label: 'About Finder' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Settings...', shortcut: '⌘ N' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Empty Bin...' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Services' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Hide Finder', shortcut: '⌘ H' },
        { label: 'Hide Others' },
        { label: 'Show All', shortcut: '⌘ A' },
      ],
    },
    {
      label: 'File',
      submenu: [
        { label: 'New Finder Window', shortcut: '⌘ N' },
        { label: 'New Folder' },
        { label: 'New Folder with Selection' },
        { label: 'New Smart Folder' },
        { label: 'New Tab', shortcut: '⌘ T' },
        { label: 'Open', shortcut: '⌘ O' },
        { label: 'Open With', shortcut: '⌘ N' },
        { label: 'Close Window', shortcut: '⌘ W' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Get Info', shortcut: '⌘ I' },
        { label: 'Rename' },
        { label: 'Compress' },
        { label: 'Duplicate', shortcut: '⌘ D' },
        { label: 'Make Alias', shortcut: '⌘ A' },
        { label: 'Quick Look "Desktop"', shortcut: '⌘ Y' },
        { label: 'Print', shortcut: '⌘ P' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Share...' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Show Original', shortcut: '⌘ R' },
        { label: 'Add to Dock', shortcut: '⌘ T' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', shortcut: '⌘ Z' },
        { label: 'Redo' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Cut', shortcut: '⌘ X' },
        { label: 'Copy', shortcut: '⌘ C' },
        { label: 'Paste', shortcut: '⌘ V' },
        { label: 'Select All', shortcut: '⌘ A' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Show Clipboard' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Start Dictation...' },
        { label: 'Emoji & Symbols' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'as icons', shortcut: '⌘ 1' },
        { label: 'as List', shortcut: '⌘ 2' },
        { label: 'as Columns', shortcut: '⌘ 3' },
        { label: 'as Gallery', shortcut: '⌘ 4' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Use Groups', shortcut: '⌘ 0' },
        { label: 'Sort By' },
        { label: 'Clean Up' },
        { label: 'Clean Up By' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Hide Sidebar', shortcut: '⌘ S' },
        { label: 'Show Preview', shortcut: '⌘ P' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Hide Toolbar', shortcut: '⌘ T' },
        { label: 'Show All Tabs', shortcut: '⌘ /' },
        { label: 'Hide Path Bar', shortcut: '⌘ P' },
        { label: 'Hide Status Bar' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Customise Toolbar...' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Show View Options', shortcut: '⌘ J' },
        { label: 'Show Preview Options' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Enter Full Screen' },
      ],
    },
    {
      label: 'Go',
      submenu: [
        { label: 'Back', shortcut: '⌘ [' },
        { label: 'Forward', shortcut: '⌘ ]' },
        { label: 'Select Startup Disk' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Recents', shortcut: '⌘ F' },
        { label: 'Documents', shortcut: '⌘ O' },
        { label: 'Desktop', shortcut: '⌘ D' },
        { label: 'Downloads', shortcut: '⌘ L' },
        { label: 'Home', shortcut: '⌘ H' },
        { label: 'Computer', shortcut: '⌘ C' },
        { label: 'AirDrop', shortcut: '⌘ R' },
        { label: 'Network', shortcut: '⌘ K' },
        { label: 'iCloud Drive', shortcut: '⌘ I' },
        { label: 'Shared', shortcut: '⌘ S' },
        { label: 'Applications', shortcut: '⌘ A' },
        { label: 'Utilities', shortcut: '⌘ U' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Recent Folders' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Go to Folder...', shortcut: '⌘ G' },
        { label: 'Connect to Server...', shortcut: '⌘ K' },
      ],
    },
    {
      label: 'Window',
      submenu: [
        { label: 'Minimise', shortcut: '⌘ M' },
        { label: 'Zoom' },
        { label: 'Tile Window to Left of Screen' },
        { label: 'Tile Window to Right of Screen' },
        { label: 'Replace Tiled Window' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Remove Window from Set' },
        { label: 'Cycle Through Windows', shortcut: '⌘ `' },
        { label: 'Show Progress Window' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Show Previous Tab' },
        { label: 'Show Next Tab' },
        { label: 'Move Tab to New Window' },
        { label: 'Merge All Windows' },
        { type: SubMenuType.SEPARATOR },
        { label: 'Bring All to Front' },
        { type: SubMenuType.SEPARATOR },
        { label: 'zigamacele' },
      ],
    },
    {
      label: 'Help',
      submenu: [{ label: 'Tips for Your Mac' }, { label: 'macOS Help' }],
    },
  ],
  [App.BIN]: [
    {
      label: App.BIN,
    },
  ],
  [App.BITWARDEN]: [
    {
      label: App.BITWARDEN,
    },
  ],
  [App.CHROME]: [
    {
      label: App.CHROME,
    },
  ],
  [App.DISCORD]: [
    {
      label: App.DISCORD,
    },
  ],
  [App.FIGMA]: [
    {
      label: App.FIGMA,
    },
  ],
  [App.ITERM2]: [
    {
      label: App.ITERM2,
    },
  ],
  [App.OBSIDIAN]: [
    {
      label: App.OBSIDIAN,
    },
  ],
  [App.SPOTIFY]: [
    {
      label: App.SPOTIFY,
    },
  ],
  [App.VSCODE]: [
    {
      label: App.VSCODE,
    },
  ],
  [App.DOCKER]: [
    {
      label: App.DOCKER,
    },
  ],
}
