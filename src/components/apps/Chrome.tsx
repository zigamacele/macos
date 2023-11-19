import ChromeNavigation from './Chrome/ChromeNavigation'

const Chrome = () => {
  return (
    <main className='flex h-full w-full flex-col rounded-lg'>
      <ChromeNavigation />
      <iframe
        className='h-full w-full rounded-b-lg'
        title='GACHAREVENUE'
        src='https://gacharevenue.com/'
      />
    </main>
  )
}

export default Chrome
