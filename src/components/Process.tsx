const steps = [
  {
    n: '01',
    title: 'Первая встреча',
    text: 'Мы знакомимся, обсуждаем, что сейчас происходит в вашей жизни и с чем вы хотели бы работать.',
    note: 'Не страшно, если сформулировать запрос пока трудно.',
  },
  {
    n: '02',
    title: 'Определяем направление',
    text: 'Постепенно уточняем запрос и договариваемся о том, на что будем обращать особое внимание в работе.',
    note: null,
  },
  {
    n: '03',
    title: 'Регулярные встречи',
    text: 'Обычно я рекомендую начинать с одной встречи в неделю. Регулярность создаёт необходимую непрерывность процесса.',
    note: null,
  },
  {
    n: '04',
    title: 'Проверяем, что меняется',
    text: 'Через несколько встреч мы можем вместе оценить происходящее: что изменилось, остаётся ли запрос прежним и в каком направлении стоит двигаться дальше.',
    note: null,
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-base py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight mb-16">
          Как проходит терапия
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-rule">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`pt-8 pb-10 ${i < steps.length - 1 ? 'lg:border-r border-rule' : ''} ${
                i % 2 === 0 && i < steps.length - 1 ? 'sm:border-r border-rule' : ''
              } ${i < 2 ? 'sm:border-b lg:border-b-0 border-rule' : ''} lg:px-8 first:lg:pl-0`}
            >
              <span className="block font-sans text-[11px] text-muted/60 tracking-[0.14em] uppercase mb-5">
                {step.n}
              </span>
              <h3 className="font-serif text-[24px] lg:text-[26px] text-ink leading-snug mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-[15px] text-muted leading-[1.65] mb-3">
                {step.text}
              </p>
              {step.note && (
                <p className="font-sans text-[14px] text-muted/70 italic">
                  {step.note}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
