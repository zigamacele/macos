import background from '@/assets/background.jpg'

const Background = () => {
  return (
    <img
      src={background}
      className='absolute top-0 z-[-1] h-screen w-screen object-cover animate-in fade-in'
    />
  )
}

export default Background
