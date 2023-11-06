import apple_logo from '@/assets/icons/apple-logo.svg'
import battery from '@/assets/icons/battery.svg'
import control_center from '@/assets/icons/control-center.svg'
import aldente from '@/assets/icons/hiddenbar/aldente.png'
import alttab from '@/assets/icons/hiddenbar/alttab.png'
import commandx from '@/assets/icons/hiddenbar/commandx.png'
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
}

export const hiddenBarIcons = [
  {
    icon: iconLibrary[Icon.COMMANDX],
    link: 'https://apps.apple.com/tr/app/command-x/id6448461551?mt=12',
  },
  {
    icon: iconLibrary[Icon.SLIDEPAD],
    link: 'https://slidepad.app/',
  },
  {
    icon: iconLibrary[Icon.ALTTAB],
    link: 'https://github.com/lwouis/alt-tab-macos',
  },
  {
    icon: iconLibrary[Icon.RECTANGLE],
    link: 'https://github.com/rxhanson/Rectangle',
  },
  {
    icon: iconLibrary[Icon.RAYCAST],
    link: 'https://www.raycast.com/',
  },
  {
    icon: iconLibrary[Icon.ALDENTE],
    link: 'https://github.com/AppHouseKitchen/AlDente-Charge-Limiter',
  },
]
