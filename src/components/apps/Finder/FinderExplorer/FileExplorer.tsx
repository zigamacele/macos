import useFinderStore from '@/stores/finder-store'

const FileExplorer = () => {
  const { route, updateCurrentDirectory } = useFinderStore()

  const onDirectoryClick = (directory: string) => {
    updateCurrentDirectory(directory)
  }

  return (
    <section>
      {Object.keys(route).map((key) => {
        return (
          <div key={key} onClick={() => onDirectoryClick(key)}>
            {route[key]?.name}
          </div>
        )
      })}
    </section>
  )
}

export default FileExplorer
