import { Editor } from '@monaco-editor/react'

import StatusBar from './VSCode/StatusBar'
import TitleBar from './VSCode/TitleBar'

const VSCode = () => (
  <div className='h-full w-full rounded-lg border-b bg-[#3A3838]'>
    <TitleBar />
    <Editor
      className='pb-2 pt-7'
      defaultLanguage='typescript'
      theme='vs-dark'
      options={{
        minimap: {
          enabled: false,
        },
      }}
      defaultValue='// typescript'
    />
    <StatusBar />
  </div>
)

export default VSCode
