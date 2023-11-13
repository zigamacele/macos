import FinderExplorer from './Finder/FinderExplorer'
import FinderSidebar from './Finder/FinderSidebar'

const Finder = () => {
  return (
    <main className='grid h-full w-full grid-cols-7'>
      <FinderSidebar />
      <FinderExplorer />
    </main>
  )
}

export default Finder
