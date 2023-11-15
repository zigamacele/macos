import useFinderStore from '@/stores/finder-store'

import { capitalize } from '@/utils/format'

const FileExplorer = () => {
  const { route, updateCurrentDirectory, setFocusedDirectory } =
    useFinderStore()

  const onDirectoryClick = (directory: string) => {
    setFocusedDirectory(capitalize(directory))
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
