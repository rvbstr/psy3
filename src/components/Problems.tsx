const items = [
  {
    n: '01',
    title: 'Тревога и\u00a0сложные состояния',
    text: 'Стресс, тревожность, одиночество, упадок сил, ощущение растерянности или\u00a0внутреннего напряжения.',
  },
  {
    n: '02',
    title: 'Отношения и\u00a0близость',
    text: 'Конфликты и\u00a0изменения в\u00a0отношениях, ревность, трудности с\u00a0близостью, границами или\u00a0доверием, расставание или\u00a0начало новых отношений.',
  },
  {
    n: '03',
    title: 'Самооценка и\u00a0отношение к\u00a0себе',
    text: 'Самокритика, чувство недостаточности, зависимость от\u00a0чужой оценки, трудности с\u00a0пониманием собственных потребностей.',
  },
  {
    n: '04',
    title: 'Прошлый опыт и\u00a0семья',
    text: 'Тяжёлые переживания детства, отношения с\u00a0родителями, привычные сценарии, которые продолжают влиять на\u00a0взрослую жизнь.',
  },
  {
    n: '05',
    title: 'Работа, выбор и\u00a0изменения',
    text: 'Выгорание, отсутствие мотивации, сложные рабочие отношения, амбиции, сомнения и\u00a0необходимость принимать важные решения.',
  },
  {
    n: '06',
    title: 'Когда трудно понять, что\u00a0именно не\u00a0так',
    text: 'Можно прийти без\u00a0чётко сформулированного запроса. Мы\u00a0сможем исследовать происходящее вместе и\u00a0постепенно определить, с\u00a0чем важно работать.',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="bg-base py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 mb-16">
          <div>
            <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight">
              С&nbsp;чем можно прийти в&nbsp;терапию
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-[17px] text-muted leading-[1.65] max-w-[560px]">
              Не&nbsp;обязательно заранее точно формулировать запрос. Иногда ощущения, что&nbsp;что-то не&nbsp;так или&nbsp;хочется жить иначе, уже достаточно, чтобы начать разговор.
            </p>
          </div>
        </div>

        <div className="border-t border-rule">
          <div className="grid lg:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={item.n}
                className={`py-8 lg:py-9 border-b border-rule ${
                  i % 2 === 0 ? 'lg:border-r lg:pr-10 xl:pr-16' : 'lg:pl-10 xl:pl-16'
                }`}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-sans text-[11px] text-muted/70 tracking-[0.12em] uppercase tabular-nums">
                    {item.n}
                  </span>
                  <h3 className="font-serif text-[24px] lg:text-[26px] text-ink leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-[15.5px] text-muted leading-[1.65] ml-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
