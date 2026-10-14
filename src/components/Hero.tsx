export default function Hero() {
  return (
    <section className="bg-base border-b border-rule" style={{ paddingTop: 'calc(64px + var(--sat))' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-0 lg:gap-16 items-start">

          {/* Copy — left column */}
          <div className="flex flex-col justify-center py-8 lg:py-12 max-w-[620px] order-2 lg:order-1">
            <p className="font-sans text-[12px] text-muted tracking-[0.14em] uppercase mb-7">
              Никита Нечаев · психолог и гештальт-терапевт
            </p>

            <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.08] text-ink mb-7 tracking-tight">
              Помогаю лучше понимать себя, свои чувства и отношения — и менять то,{' '}
              <em className="not-italic text-pine">что мешает жить</em>
            </h1>

            <p className="font-sans text-[17px] text-muted leading-[1.65] mb-10 max-w-[520px]">
              Работаю в гештальт-подходе и использую элементы когнитивно-поведенческой терапии.
              Веду индивидуальную терапию онлайн.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-9">
              <a
                href="#format"
                className="inline-flex items-center h-[50px] px-7 bg-pine text-white font-sans text-[15px] font-medium rounded-[6px] hover:bg-pine-deep transition-colors duration-150"
              >
                Записаться на первую встречу
              </a>
              <a
                href="#approach"
                className="font-sans text-[15px] text-pine underline underline-offset-4 decoration-pine/40 hover:decoration-pine transition-all duration-150"
              >
                Узнать, как я работаю
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-rule flex-shrink-0" />
              <p className="font-sans text-[13px] text-muted tracking-wide">
                Онлайн · 60 минут · индивидуальная терапия
              </p>
            </div>
          </div>

          {/* Portrait — right column, top-aligned with eyebrow text */}
          <div className="order-1 lg:order-2 lg:pt-12">
            <div className="overflow-hidden bg-rule/20">
              <img
                src="/pics/IMG_4183.PNG"
                alt="Никита Нечаев — психолог и гештальт-терапевт"
                width={1086}
                height={1448}
                className="w-full object-cover object-top block"
                style={{ aspectRatio: '3/4', maxHeight: '620px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
