const credentials = [
  { title: 'Гештальт-терапия', institution: 'Московский гештальт-институт' },
  { title: 'Клиническая психология', institution: 'Московский институт психоанализа' },
  { title: 'КПТ', institution: 'Дополнительная подготовка' },
  { title: 'Супервизия', institution: 'Регулярная профессиональная практика' },
]

export default function About() {
  return (
    <section id="about" className="bg-surface py-28 lg:py-36 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-16 lg:gap-20 mb-20">

          {/* Text */}
          <div className="max-w-[660px]">
            <p className="font-sans text-[12px] text-muted tracking-[0.12em] uppercase mb-6">
              Обо мне
            </p>
            <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight mb-8">
              Я практикующий гештальт-терапевт и клинический психолог
            </h2>

            <div className="font-sans text-[17px] text-muted leading-[1.68] space-y-5">
              <p>
                Я занимаюсь терапией — личной, групповой, учебной и супервизионной — с 2018 года и веду активную терапевтическую практику более трёх лет.
              </p>
              <p>
                Гештальт-терапии я обучался в <strong className="text-ink font-medium">Московском гештальт-институте</strong>, на первой и второй ступени программы у <strong className="text-ink font-medium">Льва Черняева и Нины Тимошенко</strong>.
              </p>
              <p>
                В рамках обучения и профессионального развития я прошёл более 1000 часов практики, участвовал в профессиональных интенсивах и продолжаю регулярно работать с супервизором и интервизорской группой.
              </p>
              <p>
                Я также получил подготовку в области <strong className="text-ink font-medium">клинической психологии</strong> в Московском институте психоанализа и проходил обучение техникам когнитивно-поведенческой терапии.
              </p>
            </div>
          </div>

          {/* Portrait */}
          <div className="bg-rule/20 overflow-hidden self-start">
            <img
              src={`${import.meta.env.BASE_URL}pics/IMG_4184.PNG`}
              alt="Никита Нечаев — документальный портрет"
              width={1086}
              height={1448}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '5/4' }}
            />
          </div>
        </div>

        {/* Credentials */}
        <div className="border-t border-rule pt-10">
          <p className="font-sans text-[11px] text-muted tracking-[0.14em] uppercase mb-8">
            Образование и профессиональная подготовка
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-rule">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className={`pt-6 pb-7 ${
                  i < credentials.length - 1 ? 'lg:border-r border-rule lg:pr-8' : ''
                } ${i > 0 ? 'lg:pl-8' : ''} ${i < 2 ? 'sm:border-b lg:border-b-0 border-rule' : ''} ${
                  i % 2 === 0 && i < credentials.length - 1 ? 'sm:border-r border-rule' : ''
                } sm:pr-6`}
              >
                <p className="font-sans text-[14px] font-semibold text-ink mb-1.5">{cred.title}</p>
                <p className="font-sans text-[13px] text-muted leading-snug">{cred.institution}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
