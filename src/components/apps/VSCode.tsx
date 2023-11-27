import { Editor } from '@monaco-editor/react'

import ActivityBar from './VSCode/ActivityBar'
import StatusBar from './VSCode/StatusBar'
import TitleBar from './VSCode/TitleBar'

const VSCode = () => (
  <div className='h-full w-full rounded-lg border-b bg-[#1E1E1E]'>
    <TitleBar />
    <ActivityBar />
    <Editor
      className='pb-2 pr-12 pt-7'
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
