import apple_logo from '@/assets/icons/apple-logo.svg'
import battery from '@/assets/icons/battery.svg'
import control_center from '@/assets/icons/control-center.svg'
import airdrop from '@/assets/icons/finder/airdrop.png'
import applications from '@/assets/icons/finder/applications.png'
import desktop from '@/assets/icons/finder/desktop.png'
import documents from '@/assets/icons/finder/documents.png'
import downloads from '@/assets/icons/finder/downloads.png'
import user from '@/assets/icons/finder/user.png'
import aldente from '@/assets/icons/hiddenbar/aldente.png'
import alttab from '@/assets/icons/hiddenbar/alttab.png'
import commandx from '@/assets/icons/hiddenbar/commandx.png'
import klack from '@/assets/icons/hiddenbar/klack.png'
import raycast from '@/assets/icons/hiddenbar/raycast.png'
import rectangle from '@/assets/icons/hiddenbar/rectangle.png'
import slidepad from '@/assets/icons/hiddenbar/slidepad.png'
import wifi from '@/assets/icons/wifi.svg'

export enum Icon {
  APPLE_LOGO = 'apple_logo',
  WIFI = 'wifi',
  CONTROL_CENTER = 'control_center ',
  BATTERY = 'battery',
  ALDENTE = 'aldente',
  ALTTAB = 'alttab',
  COMMANDX = 'commandx',
  RAYCAST = 'raycast',
  RECTANGLE = 'rectangle',
  SLIDEPAD = 'slidepad',
  KLACK = 'klack',
}

export const iconLibrary = {
  [Icon.APPLE_LOGO]: apple_logo,
  [Icon.WIFI]: wifi,
  [Icon.CONTROL_CENTER]: control_center,
  [Icon.BATTERY]: battery,
  [Icon.ALDENTE]: aldente,
  [Icon.ALTTAB]: alttab,
  [Icon.COMMANDX]: commandx,
  [Icon.RAYCAST]: raycast,
  [Icon.RECTANGLE]: rectangle,
  [Icon.SLIDEPAD]: slidepad,
  [Icon.KLACK]: klack,
}

export const hiddenBarIcons = [
  {
    icon: iconLibrary[Icon.COMMANDX],
    link: 'https://apps.apple.com/tr/app/command-x/id6448461551?mt=12',
  },
  {
    icon: iconLibrary[Icon.RECTANGLE],
    link: 'https://github.com/rxhanson/Rectangle',
  },
  {
    icon: iconLibrary[Icon.ALDENTE],
    link: 'https://github.com/AppHouseKitchen/AlDente-Charge-Limiter',
  },
  {
    icon: iconLibrary[Icon.RAYCAST],
    link: 'https://www.raycast.com/',
  },
  {
    icon: iconLibrary[Icon.KLACK],
    link: 'https://tryklack.com/',
  },
  {
    icon: iconLibrary[Icon.ALTTAB],
    link: 'https://github.com/lwouis/alt-tab-macos',
  },

  {
    icon: iconLibrary[Icon.SLIDEPAD],
    link: 'https://slidepad.app/',
  },
]

export enum FinderMenu {
  AIRDROP = 'AirDrop',
  DESKTOP = 'Desktop',
  DOWNLOADS = 'Downloads',
  USER = 'User',
  DOCUMENTS = 'Documents',
  APPLICATIONS = 'Applications',
}

export const finderIcons = {
  [FinderMenu.AIRDROP]: airdrop,
  [FinderMenu.DESKTOP]: desktop,
  [FinderMenu.DOWNLOADS]: downloads,
  [FinderMenu.USER]: user,
  [FinderMenu.DOCUMENTS]: documents,
  [FinderMenu.APPLICATIONS]: applications,
}
