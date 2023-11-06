import finder from '@/assets/apps/finder.png'

import { App, Menubar } from '@/types/apps'

export const AppMenubar: Menubar = {
  [App.FINDER]: [
    {
      label: 'Finder',
      submenu: [
        { label: 'About Finder' },
        { label: 'Settings...', shortcut: '⌘ N' },
        { label: 'Empty Bin...' },
        { label: 'Services' },
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
      ],
    },
    {
      label: 'Edit',
    },
    {
      label: 'View',
    },
    {
      label: 'Go',
    },
    {
      label: 'Window',
    },
    {
      label: 'Help',
    },
  ],
}

export const AppIcon = {
  [App.FINDER]: finder,
}
