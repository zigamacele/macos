import Finder from '@/components/apps/Finder'

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

import { App, Menubar } from '@/types/apps'

export const AppWindowConfig = {
  [App.FINDER]: { width: 1024, height: 576, component: Finder },
  [App.CHROME]: { width: 1366, height: 768, component: Finder },
  [App.BIN]: { width: 1024, height: 576, component: Finder },
  [App.DISCORD]: { width: 1024, height: 576, component: Finder },
  [App.DOCKER]: { width: 1024, height: 576, component: Finder },
  [App.BITWARDEN]: { width: 1024, height: 576, component: Finder },
  [App.FIGMA]: { width: 1366, height: 768, component: Finder },
  [App.ITERM2]: { width: 800, height: 600, component: Finder },
  [App.OBSIDIAN]: { width: 1366, height: 768, component: Finder },
  [App.SPOTIFY]: { width: 1024, height: 576, component: Finder },
  [App.VSCODE]: { width: 1366, height: 768, component: Finder },
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
        { label: 'hr' },
        { label: 'Settings...', shortcut: '⌘ N' },
        { label: 'hr' },
        { label: 'Empty Bin...' },
        { label: 'hr' },
        { label: 'Services' },
        { label: 'hr' },
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
        { label: 'hr' },
        { label: 'Get Info', shortcut: '⌘ I' },
        { label: 'Rename' },
        { label: 'Compress' },
        { label: 'Duplicate', shortcut: '⌘ D' },
        { label: 'Make Alias', shortcut: '⌘ A' },
        { label: 'Quick Look "Desktop"', shortcut: '⌘ Y' },
        { label: 'Print', shortcut: '⌘ P' },
        { label: 'hr' },
        { label: 'Share...' },
        { label: 'hr' },
        { label: 'Show Original', shortcut: '⌘ R' },
        { label: 'Add to Dock', shortcut: '⌘ T' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', shortcut: '⌘ Z' },
        { label: 'Redo' },
        { label: 'hr' },
        { label: 'Cut', shortcut: '⌘ X' },
        { label: 'Copy', shortcut: '⌘ C' },
        { label: 'Paste', shortcut: '⌘ V' },
        { label: 'Select All', shortcut: '⌘ A' },
        { label: 'hr' },
        { label: 'Show Clipboard' },
        { label: 'hr' },
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
        { label: 'hr' },
        { label: 'Use Groups', shortcut: '⌘ 0' },
        { label: 'Sort By' },
        { label: 'Clean Up' },
        { label: 'Clean Up By' },
        { label: 'hr' },
        { label: 'Hide Sidebar', shortcut: '⌘ S' },
        { label: 'Show Preview', shortcut: '⌘ P' },
        { label: 'hr' },
        { label: 'Hide Toolbar', shortcut: '⌘ T' },
        { label: 'Show All Tabs', shortcut: '⌘ /' },
        { label: 'Hide Path Bar', shortcut: '⌘ P' },
        { label: 'Hide Status Bar' },
        { label: 'hr' },
        { label: 'Customise Toolbar...' },
        { label: 'hr' },
        { label: 'Show View Options', shortcut: '⌘ J' },
        { label: 'Show Preview Options' },
        { label: 'hr' },
        { label: 'Enter Full Screen' },
      ],
    },
    {
      label: 'Go',
      submenu: [
        { label: 'Back', shortcut: '⌘ [' },
        { label: 'Forward', shortcut: '⌘ ]' },
        { label: 'Select Startup Disk' },
        { label: 'hr' },
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
        { label: 'hr' },
        { label: 'Recent Folders' },
        { label: 'hr' },
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
        { label: 'hr' },
        { label: 'Remove Window from Set' },
        { label: 'Cycle Through Windows', shortcut: '⌘ `' },
        { label: 'Show Progress Window' },
        { label: 'hr' },
        { label: 'Show Previous Tab' },
        { label: 'Show Next Tab' },
        { label: 'Move Tab to New Window' },
        { label: 'Merge All Windows' },
        { label: 'hr' },
        { label: 'Bring All to Front' },
        { label: 'hr' },
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
