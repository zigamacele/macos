import { CheckCheck, GitBranch, GitCommitHorizontal } from 'lucide-react'

import Icon from '@/components/Icon'

import githubCopilotIcon from '@/assets/apps/vscode/ copilot.png'
import remoteHost from '@/assets/apps/vscode/remote-host.png'

const StatusBar = () => (
  <section className='absolute bottom-0 z-20 flex h-6 w-full items-center justify-between rounded-b-lg border-t border-neutral-700 bg-[#1E1E1E] pl-2 pr-3 text-xs text-neutral-500'>
    <div className='flex items-center gap-3.5'>
      <img src={remoteHost} alt='copilot-icon' className='h-4' />
      <span className='flex items-center gap-1'>
        <GitBranch className='h-3.5 w-3.5' />
        <p>main*</p>
      </span>
      <Icon icon='GitHubLogoIcon' className='h-3.5 w-3.5' />
    </div>
    <div className='flex items-center gap-3.5'>
      <GitCommitHorizontal className='h-4 w-4' />
      <img src={githubCopilotIcon} alt='copilot-icon' className='h-4' />
      <span className='flex items-center gap-1'>
        <CheckCheck className='h-4 w-4' />
        <p>Prettier</p>
      </span>
    </div>
  </section>
)

export default StatusBar
