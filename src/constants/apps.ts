import finder from '@/assets/apps/finder.png'

import { App, Menubar } from '@/types/apps'

export const AppMenubar: Menubar = {
  [App.FINDER]: [
    { label: 'Finder' },
    {
      label: 'File',
      submenu: [
        { label: 'New Finder Window', shortcut: '⌘ N', onClick: () => {} },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'New Finder Window', shortcut: '⌘ N', onClick: () => {} },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'New Finder Window', shortcut: '⌘ N', onClick: () => {} },
      ],
    },
    {
      label: 'Go',
      submenu: [
        { label: 'New Finder Window', shortcut: '⌘ N', onClick: () => {} },
      ],
    },
    {
      label: 'Window',
      submenu: [
        { label: 'New Finder Window', shortcut: '⌘ N', onClick: () => {} },
      ],
    },
    {
      label: 'Help',
      submenu: [
        { label: 'New Finder Window', shortcut: '⌘ N', onClick: () => {} },
      ],
    },
  ],
}

export const AppIcon = {
  [App.FINDER]: finder,
}
