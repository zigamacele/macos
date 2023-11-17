import folder from '@/assets/apps/finder/folder.png'
import root from '@/assets/apps/finder/root.png'
import text from '@/assets/apps/finder/text.png'

import { FinderMenu } from './icons'
import { username } from './system'

export enum FileType {
  ROOT = 'ROOT',
  FOLDER = 'FOLDER',
  TEXT = 'TEXT',
}

export const FileIcons = {
  [FileType.ROOT]: { icon: root, styles: 'h-3 w-3' },
  [FileType.FOLDER]: { icon: folder, styles: 'h-3.5 w-3.5' },
  [FileType.TEXT]: { icon: text, styles: 'h-3.5 w-3.5' },
}

export interface FileStructure {
  [key: string]: {
    name: string
    type: FileType
    extension?: string
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
                  projects: {
                    name: 'Projects',
                    type: FileType.FOLDER,
                    children: {},
                  },
                  resume: {
                    name: 'Resume',
                    type: FileType.TEXT,
                    extension: 'pdf',
                  },
                  starters: {
                    name: 'Starters',
                    type: FileType.FOLDER,
                    children: {},
                  },
                  work: {
                    name: 'Work',
                    type: FileType.FOLDER,
                    children: {},
                  },
                  contribute: {
                    name: 'Contribute',
                    type: FileType.FOLDER,
                    children: {},
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
