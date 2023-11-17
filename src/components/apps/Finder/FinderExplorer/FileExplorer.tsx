import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'
import Icon from '@/components/Icon'

import useFinderStore from '@/stores/finder-store'
import useWindowManager from '@/stores/window_manager-store'

import { FileIcons, FileType } from '@/constants/file-structure'
import { capitalize } from '@/utils/format'
import { cn } from '@/utils/styles'

const FileExplorer = () => {
  const {
    route,
    updateCurrentDirectory,
    setFocusedDirectory,
    setSelectFile,
    selectedFile,
  } = useFinderStore()

  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)

  const onDirectoryClick = (directory: string) => {
    setFocusedDirectory(capitalize(directory)),
      updateCurrentDirectory(directory)
  }

  const selectedFocusedWindow = (file: string | undefined) => {
    const focusedWindow = isAppFocused(currentApp)
    const isFileFocused = selectedFile === file
    if (focusedWindow && isFileFocused) {
      return 'bg-blue-700'
    }
    if (!focusedWindow && isFileFocused) {
      return 'bg-neutral-600'
    }

    return
  }

  return (
    <section className='mx-2 text-[13px]'>
      {Object.keys(route).map((key) => {
        const fileType = route[key]?.type as FileType
        const isFolder = fileType === FileType.FOLDER
        return (
          <div
            key={key}
            className={cn(
              'flex items-center gap-1 rounded',
              selectedFocusedWindow(route[key]?.name),
              route[key]?.extension && 'pl-4',
            )}
            onClick={() => setSelectFile(route[key]?.name as string)}
            onDoubleClick={() => isFolder && onDirectoryClick(key)}
          >
            {isFolder && (
              <Icon icon='ChevronRightIcon' className='h-3 w-3 opacity-60' />
            )}
            <img
              src={FileIcons[fileType].icon}
              className={FileIcons[fileType].styles}
            />
            <span className='ml-0.5 opacity-90'>
              {route[key]?.name}
              {route[key]?.extension && `.${route[key]?.extension}`}
            </span>
          </div>
        )
      })}
    </section>
  )
}

export default FileExplorer
