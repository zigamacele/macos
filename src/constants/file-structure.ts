import folder from '@/assets/apps/finder/folder.png'
import root from '@/assets/apps/finder/root.png'

import { FinderMenu } from './icons'
import { username } from './system'

export enum FileType {
  ROOT = 'ROOT',
  FOLDER = 'FOLDER',
}

export const FileIcons = {
  [FileType.ROOT]: { icon: root, styles: 'h-3 w-3' },
  [FileType.FOLDER]: { icon: folder, styles: 'h-3.5 w-3.5' },
}

export interface FileStructure {
  [key: string]: {
    name: string
    type: FileType
    children?: FileStructure
  }
}

const userRoute = [
  'root',
  'children',
  'users',
  'children',
  username,
  'children',
]

export const finderSidebarPaths = {
  [FinderMenu.AIRDROP]: ['root', 'children'],
  [FinderMenu.USER]: [...userRoute],
  [FinderMenu.DESKTOP]: [...userRoute, 'desktop', 'children'],
  [FinderMenu.DOWNLOADS]: [...userRoute, 'downloads', 'children'],
  [FinderMenu.DOCUMENTS]: [...userRoute, 'documents', 'children'],
  [FinderMenu.APPLICATIONS]: ['root', 'children', 'applications', 'children'],
}

export const fileStructure: FileStructure = {
  root: {
    name: 'Macintosh HD',
    type: FileType.ROOT,
    children: {
      applications: {
        name: 'Applications',
        type: FileType.FOLDER,
        children: {},
      },
      library: {
        name: 'Library',
        type: FileType.FOLDER,
        children: {},
      },
      system: {
        name: 'System',
        type: FileType.FOLDER,
        children: {},
      },
      users: {
        name: 'Users',
        type: FileType.FOLDER,
        children: {
          [username]: {
            name: username,
            type: FileType.FOLDER,
            children: {
              desktop: {
                name: 'Desktop',
                type: FileType.FOLDER,
                children: {},
              },
              documents: {
                name: 'Documents',
                type: FileType.FOLDER,
                children: {
                  obsidian: {
                    name: 'Obsidian',
                    type: FileType.FOLDER,
                    children: {
                      test: {
                        name: 'Test',
                        type: FileType.FOLDER,
                        children: {},
                      },
                    },
                  },
                },
              },
              downloads: {
                name: 'Downloads',
                type: FileType.FOLDER,
                children: {},
              },
            },
          },
        },
      },
    },
  },
}
