import { Editor } from '@monaco-editor/react'

import StatusBar from './VSCode/StatusBar'

const VSCode = () => (
  <div className='h-full w-full rounded-lg border-b bg-[#3A3838]'>
    <Editor
      className='pb-2 pt-[38px]'
      defaultLanguage='typescript'
      theme='vs-dark'
      options={{
        minimap: {
          enabled: false,
        },
      }}
    />
    <StatusBar />
  </div>
)

export default VSCode
