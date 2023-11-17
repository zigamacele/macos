import FileExplorer from './FinderExplorer/FileExplorer'
import Footer from './FinderExplorer/Footer'
import Toolbar from './FinderExplorer/Toolbar'

const FinderExplorer = () => {
  return (
    <section
      className=' col-span-6
      grid h-full grid-rows-[79px_auto_50px]
      rounded-r-lg bg-[repeating-linear-gradient(to_top,_#2B2A2A_0px,_#2B2A2A_18px,_#1F1F20_18px,_#1F1F20_38px)]'
    >
      <Toolbar />
      <FileExplorer />
      <Footer />
    </section>
  )
}

export default FinderExplorer
