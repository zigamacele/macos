import FinderExplorer from './Finder/FinderExplorer'
import FinderSidebar from './Finder/FinderSidebar'

interface FinderProps {
  isAppFocused: boolean
}

const Finder = ({ isAppFocused }: FinderProps) => {
  return (
    <main className='grid h-full w-full grid-cols-7'>
      <FinderSidebar isAppFocused={isAppFocused} />
      <FinderExplorer />
    </main>
  )
}

export default Finder
