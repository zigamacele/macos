import { useState } from 'react'

import useSystemStore from '@/stores/system-store'

import avatar from '@/assets/login/avatar.gif'

import { cn } from '@/utils/styles'

import Icon from '../Icon'

import { SystemScreen } from '@/types/store'

const LoginScreen = () => {
  const [showLoginInput, setShowLoginInput] = useState(false)
  const [validation, setValidation] = useState(false)
  const [loginInput, setLoginInput] = useState('')
  const { setScreen } = useSystemStore()

  const loginAttempt = (
    keyboardEvent?: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const isKeyEnter = keyboardEvent?.key === 'Enter'
    const isPasswordValid = loginInput.length

    if (isPasswordValid && (!keyboardEvent?.key || isKeyEnter)) {
      return setScreen(SystemScreen.HOME)
    } else if (isKeyEnter && !isPasswordValid) {
      setValidation(true)

      setTimeout(() => {
        setValidation(false)
      }, 500)
    }
  }

  return (
    <main
      className='flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black/30 animate-in fade-in-0'
      onClick={() => setShowLoginInput(true)}
    >
      <img src={avatar} className='h-[8.5em] w-[8.5em]' />
      <section className='flex flex-col items-center gap-3'>
        <span className='text-xl font-semibold drop-shadow-lg'>
          Ziga Macele
        </span>
        <div className={cn('opacity-0', showLoginInput && 'opacity-100')}>
          <span
            className={cn(
              'relative flex items-center justify-center',
              validation && 'inputWiggle',
            )}
          >
            <input
              className='w-40 rounded-full bg-white/40 py-1.5 pl-3 text-left font-["Verdana"] text-sm leading-3 text-white outline-none backdrop-blur-md animate-in fade-in placeholder:font-sans placeholder:text-[13px] placeholder:font-medium placeholder:text-white/40'
              type='password'
              placeholder='Enter Password'
              maxLength={12}
              onKeyDown={loginAttempt}
              onChange={(e) => setLoginInput(e.target.value)}
            />
            {!!loginInput.length && (
              <Icon
                icon='ArrowRightIcon'
                className='absolute right-1.5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer rounded-full border-[1.5px] p-0.5 opacity-60 hover:opacity-100'
                onClick={loginAttempt}
              />
            )}
          </span>
        </div>
        <span className='mt-0.5 cursor-pointer text-xs font-medium drop-shadow-lg transition-opacity hover:opacity-60'>
          Touch ID or Enter Password
        </span>
      </section>
      <div className='group absolute bottom-8 flex cursor-pointer flex-col items-center gap-1.5 hover:opacity-80'>
        <Icon
          icon='CrossCircledIcon'
          className='h-9 w-9 rounded-full bg-neutral-700/80 p-1.5 text-white/60 backdrop-blur-lg group-active:bg-neutral-600 group-active:text-white'
        />
        <span className='text-sm drop-shadow-lg'>Cancel</span>
      </div>
    </main>
  )
}

export default LoginScreen
