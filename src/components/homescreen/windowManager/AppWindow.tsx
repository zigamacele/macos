import { Rnd } from 'react-rnd'

interface AppWindowProps {
  width: number
  height: number
  app: string
}

const AppWindow = ({ width, height, app }: AppWindowProps) => {
  const style = {
    border: 'solid 1px rgba(255, 255, 255, 0.45)',
  }

  const defaultWindowSize = {
    x: window.innerWidth / 2 - width / 2,
    y: window.innerHeight / 2 - height / 2,
    width,
    height,
  }

  return (
    <Rnd
      className='rounded bg-red-500'
      style={style}
      default={defaultWindowSize}
    >
      {app}
    </Rnd>
  )
}

export default AppWindow
