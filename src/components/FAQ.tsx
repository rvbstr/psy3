import { useState } from 'react'

const items = [
  {
    q: 'Нужно\u00a0ли заранее знать точный запрос?',
    a: 'Нет. Чётко сформулированный запрос не\u00a0обязателен. Иногда достаточно ощущения, что\u00a0что-то не\u00a0устраивает, повторяется или\u00a0мешает жить. Разобраться, что\u00a0именно происходит, тоже может быть частью терапии.',
  },
  {
    q: 'Как\u00a0долго длится терапия?',
    a: 'Продолжительность зависит от\u00a0запроса. Я\u00a0могу работать как\u00a0в\u00a0относительно краткосрочном формате, так и\u00a0в\u00a0долгосрочной терапии. После первых нескольких встреч полезно вместе оценить, что\u00a0происходит в\u00a0терапии, изменился\u00a0ли первоначальный запрос и\u00a0стоит\u00a0ли продолжать работу в\u00a0том\u00a0же направлении.',
  },
  {
    q: 'Как\u00a0часто проходят встречи?',
    a: 'Обычно я\u00a0рекомендую начинать с\u00a0одной встречи в\u00a0неделю. Лучше, если у\u00a0консультаций есть регулярное время: это помогает поддерживать непрерывность терапевтического процесса. В\u00a0дальнейшем частоту можно корректировать совместно.',
  },
  {
    q: 'Конфиденциальны\u00a0ли консультации?',
    a: 'Да. Я\u00a0не\u00a0раскрываю содержание наших встреч другим людям. Я\u00a0могу обсуждать свою работу с\u00a0супервизором или\u00a0в\u00a0профессиональной супервизорской группе, но\u00a0клиентский материал при\u00a0этом обезличивается. Если мы\u00a0случайно встретимся вне терапии, я\u00a0не\u00a0стану первым обозначать наше знакомство, чтобы решение о\u00a0контакте оставалось за\u00a0вами.',
  },
  {
    q: 'Насколько эффективна онлайн-терапия?',
    a: 'Онлайн-формат позволяет полноценно вести индивидуальную терапию, хотя у\u00a0него есть некоторые ограничения — например, меньше возможностей непосредственно работать с\u00a0телесным взаимодействием. Большую часть этих ограничений можно учесть при\u00a0организации встречи. Перед началом терапии я\u00a0объясняю, как\u00a0подготовиться к\u00a0онлайн-сессии.',
  },
  {
    q: 'С\u00a0какими запросами вы\u00a0не\u00a0работаете?',
    a: 'Я\u00a0не\u00a0специализируюсь на\u00a0терапии химических зависимостей и\u00a0некоторых тяжёлых клинических состояний. Если понимаю, что\u00a0другому специалисту будет проще оказать подходящую помощь, я\u00a0скажу об\u00a0этом и\u00a0предложу обратиться за\u00a0профильной поддержкой.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-rule">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-[17px] font-semibold text-ink group-hover:text-pine transition-colors duration-150 leading-snug pr-4">
          {q}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-muted group-hover:text-pine transition-colors duration-150">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="M3 6l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-7 -mt-1">
          <p className="font-sans text-[16px] text-muted leading-[1.7] max-w-[720px]">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-surface py-28 lg:py-36 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20">
          <div>
            <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight sticky top-28">
              FAQ
            </h2>
          </div>

          <div className="border-t border-rule">
            {items.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
