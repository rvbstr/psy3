const steps = [
  {
    n: '01',
    title: 'Первая встреча',
    text: 'Мы\u00a0знакомимся, обсуждаем, что\u00a0сейчас происходит в\u00a0вашей жизни и\u00a0с\u00a0чем вы\u00a0хотели\u00a0бы работать.',
    note: 'Не\u00a0страшно, если сформулировать запрос пока трудно.',
  },
  {
    n: '02',
    title: 'Определяем направление',
    text: 'Постепенно уточняем запрос и\u00a0договариваемся о\u00a0том, на\u00a0что\u00a0будем обращать особое внимание в\u00a0работе.',
    note: null,
  },
  {
    n: '03',
    title: 'Регулярные встречи',
    text: 'Обычно я\u00a0рекомендую начинать с\u00a0одной встречи в\u00a0неделю. Регулярность создаёт необходимую непрерывность процесса.',
    note: null,
  },
  {
    n: '04',
    title: 'Проверяем, что\u00a0меняется',
    text: 'Через несколько встреч мы\u00a0можем вместе оценить происходящее: что\u00a0изменилось, остаётся\u00a0ли запрос прежним и\u00a0в\u00a0каком направлении стоит двигаться дальше.',
    note: null,
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-base py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight mb-16">
          Как&nbsp;проходит терапия
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
