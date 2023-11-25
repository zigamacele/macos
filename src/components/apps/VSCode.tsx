import { Editor } from '@monaco-editor/react'

const VSCode = () => {
  return (
    <div className='h-full w-full rounded-lg bg-[#1E1E1E]'>
      <Editor
        className='pb-2 pt-10'
        defaultLanguage='typescript'
        theme='vs-dark'
      />
      <div className='absolute bottom-0 h-6 w-full rounded-b-lg bg-red-500'></div>
    </div>
  )
}

export default VSCode
