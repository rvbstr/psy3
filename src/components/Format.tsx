const items = [
  {
    label: 'Онлайн',
    text: 'Встречаемся по видеосвязи. Перед началом работы я расскажу, как лучше подготовить пространство для онлайн-сессий.',
  },
  {
    label: '60 минут',
    text: 'Одна индивидуальная консультация длится 60 минут.',
  },
  {
    label: 'Обычно раз в неделю',
    text: 'В начале терапии я рекомендую еженедельные встречи. В дальнейшем частоту можно обсуждать вместе.',
  },
  {
    label: 'Стоимость',
    text: '3500 ₽ test/ 60 минут',
    price: true,
  },
]

export default function Format() {
  return (
    <section id="format" className="bg-base py-28 lg:py-36 border-t border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 mb-16">
          <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight">
            Формат работы
          </h2>
          <div className="flex items-end">
            <p className="font-sans text-[17px] text-muted leading-[1.65] max-w-[540px]">
              Чтобы договориться о консультации, напишите мне в Telegram или WhatsApp. Мы выберем подходящее время, после чего я пришлю ссылку на видеовстречу и информацию о подготовке.
            </p>
          </div>
        </div>

        {/* Format items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-rule mb-16">
          {items.map((item, i) => (
            <div
              key={i}
              className={`pt-8 pb-10 ${i < items.length - 1 ? 'lg:border-r border-rule lg:pr-8' : ''} ${
                i > 0 ? 'lg:pl-8' : ''
              } ${i < 2 ? 'sm:border-b lg:border-b-0 border-rule' : ''} ${
                i % 2 === 0 && i < items.length - 1 ? 'sm:border-r border-rule' : ''
              } sm:pr-6`}
            >
              <p className="font-sans text-[11px] text-muted/60 tracking-[0.12em] uppercase mb-3">
                {item.label}
              </p>
              <p
                className={`font-serif leading-snug ${
                  item.price
                    ? 'text-[22px] lg:text-[24px] text-ink font-medium'
                    : 'text-[18px] lg:text-[20px] text-ink'
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="border-t border-rule pt-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="https://t.me/nikita_nechaev_psy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-[50px] px-7 bg-pine text-white font-sans text-[15px] font-medium rounded-[6px] hover:bg-pine-deep transition-colors duration-150"
            >
              Записаться на первую встречу
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/nikita_nechaev_psy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors duration-150 underline underline-offset-4 decoration-rule hover:decoration-muted"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors duration-150 underline underline-offset-4 decoration-rule hover:decoration-muted"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
