import LogoIcon from '@/assets/images/bing.png'
import Image from 'next/image'

export function ChatHeader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image alt="logo" src={LogoIcon} width={60}/>
      <div className="mt-4 mb-8 font-bold header-title">GPT-ChatBot.ru is an AI-powered online assistant</div>
    </div>
  )
}
