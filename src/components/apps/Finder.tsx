import FinderSidebar from './Finder/FinderSidebar'

interface FinderProps {
  isAppFocused: boolean
}

const Finder = ({ isAppFocused }: FinderProps) => {
  return (
    <main className='grid h-full w-full grid-cols-7'>
      <FinderSidebar isAppFocused={isAppFocused} />
      <section className='col-span-6 rounded-r-lg bg-[#1F1F20]' />
    </main>
  )
}

export default Finder
