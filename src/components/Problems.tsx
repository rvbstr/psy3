const items = [
  {
    n: '01',
    title: 'Тревога и сложные состояния',
    text: 'Стресс, тревожность, одиночество, упадок сил, ощущение растерянности или внутреннего напряжения.',
  },
  {
    n: '02',
    title: 'Отношения и близость',
    text: 'Конфликты и изменения в отношениях, ревность, трудности с близостью, границами или доверием, расставание или начало новых отношений.',
  },
  {
    n: '03',
    title: 'Самооценка и отношение к себе',
    text: 'Самокритика, чувство недостаточности, зависимость от чужой оценки, трудности с пониманием собственных потребностей.',
  },
  {
    n: '04',
    title: 'Прошлый опыт и семья',
    text: 'Тяжёлые переживания детства, отношения с родителями, привычные сценарии, которые продолжают влиять на взрослую жизнь.',
  },
  {
    n: '05',
    title: 'Работа, выбор и изменения',
    text: 'Выгорание, отсутствие мотивации, сложные рабочие отношения, амбиции, сомнения и необходимость принимать важные решения.',
  },
  {
    n: '06',
    title: 'Когда трудно понять, что именно не так',
    text: 'Можно прийти без чётко сформулированного запроса. Мы сможем исследовать происходящее вместе и постепенно определить, с чем важно работать.',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="bg-base py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 mb-16">
          <div>
            <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight">
              С чем можно прийти в терапию
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-[17px] text-muted leading-[1.65] max-w-[560px]">
              Не обязательно заранее точно формулировать запрос. Иногда ощущения, что что-то не так или хочется жить иначе, уже достаточно, чтобы начать разговор.
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
