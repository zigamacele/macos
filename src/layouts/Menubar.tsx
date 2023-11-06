import MenubarBattery from '@/components/menubar/MenubarBattery'
import MenubarDateTime from '@/components/menubar/MenubarDateTime'
import MenubarHiddenBar from '@/components/menubar/MenubarHiddenBar'
import MenubarTrigger from '@/components/menubar/MenubarTrigger'
import MenubarWindow from '@/components/menubar/MenubarWindow'

import useSystemStore from '@/stores/system-store.ts'

import { Icon } from '@/constants/icons'
import { cn } from '@/utils/styles'

import { SystemScreen } from '@/types/store.ts'

const Menubar = () => {
  const { screen } = useSystemStore()

  if (screen === SystemScreen.BOOT) {
    return null
  }

  const isHomeScreen = screen === SystemScreen.HOME

  return (
    <>
      {/* TODO: refactor this. for some reason backdrop-blur inside of backdrop-blur doesnt work.. */}
      {isHomeScreen && (
        <div className='absolute left-4 z-50 mt-[5px] flex items-center gap-2.5 text-[13px]'>
          <MenubarTrigger
            icon={Icon.APPLE_LOGO}
            className='mb-0.5 h-4 w-4 cursor-pointer drop-shadow-lg'
          />
          <MenubarWindow />
        </div>
      )}
      <div
        className={cn(
          'absolute z-40 flex h-[34px] w-screen items-center justify-end px-4 ',
          isHomeScreen && 'bg-black/20 backdrop-blur-2xl',
        )}
      >
        <div className='flex items-center gap-5'>
          <MenubarHiddenBar />
          <MenubarBattery />
          <MenubarTrigger icon={Icon.WIFI} className='h-[18px] w-[18px]' />
          <MenubarTrigger icon={Icon.CONTROL_CENTER} className='h-4 w-4' />
          <MenubarDateTime />
        </div>
      </div>
    </>
  )
}

export default Menubar
