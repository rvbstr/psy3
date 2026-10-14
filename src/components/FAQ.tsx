import { useState } from 'react'

const items = [
  {
    q: 'Нужно ли заранее знать точный запрос?',
    a: 'Нет. Чётко сформулированный запрос не обязателен. Иногда достаточно ощущения, что что-то не устраивает, повторяется или мешает жить. Разобраться, что именно происходит, тоже может быть частью терапии.',
  },
  {
    q: 'Как долго длится терапия?',
    a: 'Продолжительность зависит от запроса. Я могу работать как в относительно краткосрочном формате, так и в долгосрочной терапии. После первых нескольких встреч полезно вместе оценить, что происходит в терапии, изменился ли первоначальный запрос и стоит ли продолжать работу в том же направлении.',
  },
  {
    q: 'Как часто проходят встречи?',
    a: 'Обычно я рекомендую начинать с одной встречи в неделю. Лучше, если у консультаций есть регулярное время: это помогает поддерживать непрерывность терапевтического процесса. В дальнейшем частоту можно корректировать совместно.',
  },
  {
    q: 'Конфиденциальны ли консультации?',
    a: 'Да. Я не раскрываю содержание наших встреч другим людям. Я могу обсуждать свою работу с супервизором или в профессиональной супервизорской группе, но клиентский материал при этом обезличивается. Если мы случайно встретимся вне терапии, я не стану первым обозначать наше знакомство, чтобы решение о контакте оставалось за вами.',
  },
  {
    q: 'Насколько эффективна онлайн-терапия?',
    a: 'Онлайн-формат позволяет полноценно вести индивидуальную терапию, хотя у него есть некоторые ограничения — например, меньше возможностей непосредственно работать с телесным взаимодействием. Большую часть этих ограничений можно учесть при организации встречи. Перед началом терапии я объясняю, как подготовиться к онлайн-сессии.',
  },
  {
    q: 'С какими запросами вы не работаете?',
    a: 'Я не специализируюсь на терапии химических зависимостей и некоторых тяжёлых клинических состояний. Если понимаю, что другому специалисту будет проще оказать подходящую помощь, я скажу об этом и предложу обратиться за профильной поддержкой.',
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
