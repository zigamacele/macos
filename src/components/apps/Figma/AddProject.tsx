import { useState } from 'react'

import Icon from '@/components/Icon'

import useFigmaStore from '@/stores/figma-store'

import { isValidFigmaProjectUrl } from '@/utils/regex'
import { cn } from '@/utils/styles'

const AddProject = () => {
  const [userInput, setUserInput] = useState('')
  const [isValidFigmaUrl, setIsValidFigmaUrl] = useState(false)
  const { updateCurrentProject } = useFigmaStore()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidFigmaUrl = isValidFigmaProjectUrl(e.target.value)
    setUserInput(e.target.value)
    if (isValidFigmaUrl) {
      setIsValidFigmaUrl(true)
      return
    }
    setIsValidFigmaUrl(false)
  }

  const handleOpenProject = () => {
    updateCurrentProject(userInput)
  }

  return (
    <section className='absolute left-1/2 top-1/2 flex w-1/3 -translate-x-1/2 -translate-y-1/2 flex-col gap-3.5 rounded bg-neutral-800 p-3 drop-shadow-lg'>
      <span className='text-xs'>Open Project</span>
      <hr className='opacity-20' />
      <div className='flex h-9 w-full items-center gap-1.5 rounded bg-[#3B435E] px-2 text-xs'>
        <Icon icon='InfoCircledIcon' className='h-4 w-4 opacity-80' />
        <p>Open projects with "Anyone with the link" set to "can view"</p>
      </div>
      <div className='flex gap-2'>
        <input
          type='text'
          placeholder='Figma Project URL'
          value={userInput}
          onChange={handleInputChange}
          className='focus: h-8 w-full rounded border border-white/20 bg-transparent px-2 text-xs text-white/80 placeholder:text-xs placeholder:text-white/40 focus:outline focus:ring-0'
        />
        <button
          disabled={!isValidFigmaUrl}
          onClick={handleOpenProject}
          className={cn(
            'rounded bg-blue-400 px-2 text-xs font-medium text-neutral-800 active:opacity-60 disabled:bg-neutral-600',
            isValidFigmaUrl,
          )}
        >
          Open
        </button>
      </div>
      <hr className='opacity-20' />
      <div className='flex gap-5'>
        <div className='flex cursor-pointer items-center gap-1 text-xs text-blue-400 hover:opacity-80'>
          <Icon icon='Link2Icon' className='h-4 w-4' />
          <p>Project 1</p>
        </div>
      </div>
    </section>
  )
}

export default AddProject
