import LogoIcon from '@/assets/images/bing.png'
import Image from 'next/image'

export function ChatHeader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image alt="logo" src={LogoIcon} width={20}/>
      <div className="mt-4 mb-8 font-bold header-title"><a href="https://gpt-chatbot.ru/">GPT-ChatBot.ru</a> is an AI-powered online assistant</div>
    </div>
  )
}
