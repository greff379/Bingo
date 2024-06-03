import { BingReturnType } from '@/lib/hooks/use-bing'

const exampleMessages = [
  {
    heading: '🧐 Задавайте сложные вопросы',
    message: `Что я могу приготовить для своего придирчивого ребенка, который ест только оранжевые продукты?`
  },
  {
    heading: '🙌 Получите лучшие ответы',
    message: 'Каковы плюсы и минусы трех самых продаваемых пылесосов для домашних животных?'
  },
  {
    heading: '🎨 Получите творческое вдохновение',
    message: `Напишите хайку голосом пирата о крокодиле в открытом космосе.`
  }
]

export function WelcomeScreen({ setInput }: Pick<BingReturnType, 'setInput'>) {
  return (
    <div className="welcome-container flex">
      {exampleMessages.map(example => (
        <button key={example.heading} className="welcome-item w-4/5 sm:w-[240px]" type="button" onClick={() => setInput(example.message)}>
          <div className="item-title">{example.heading}</div>
          <div className="item-content">
            <div className="item-body">
              <div className="item-header"></div>
              <div>&ldquo;{example.message}&rdquo;</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
