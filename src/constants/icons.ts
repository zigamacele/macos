import apple_logo from '@/assets/icons/apple-logo.svg'
import battery from '@/assets/icons/battery.svg'
import control_center from '@/assets/icons/control-center.svg'
import wifi from '@/assets/icons/wifi.svg'

export enum Icon {
  APPLE_LOGO = 'apple_logo',
  WIFI = 'wifi',
  CONTROL_CENTER = 'control_center ',
  BATTERY = 'battery',
}

export const iconLibrary = {
  [Icon.APPLE_LOGO]: apple_logo,
  [Icon.WIFI]: wifi,
  [Icon.CONTROL_CENTER]: control_center,
  [Icon.BATTERY]: battery,
}
