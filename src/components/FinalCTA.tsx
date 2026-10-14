export default function FinalCTA() {
  return (
    <section className="bg-pine-deep py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-end">

          <div>
            <h2 className="font-serif text-[40px] lg:text-[52px] xl:text-[60px] leading-[1.1] text-white tracking-tight mb-6">
              Начать можно с&nbsp;одной встречи
            </h2>
            <p className="font-sans text-[17px] text-white/70 leading-[1.65] max-w-[540px]">
              На&nbsp;первой консультации мы&nbsp;познакомимся, обсудим происходящее и&nbsp;попробуем понять, может&nbsp;ли наша совместная работа быть вам полезна.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <a
              href="https://t.me/nikita_gestalt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center h-[52px] px-7 bg-white text-pine-deep font-sans text-[15px] font-semibold rounded-[6px] hover:bg-white/90 transition-colors duration-150"
            >
              Записаться на&nbsp;встречу
            </a>

            <div className="flex flex-col gap-3 pt-2 border-t border-white/20">
              <p className="font-sans text-[12px] text-white/40 tracking-widest uppercase">Контакты</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://t.me/nikita_gestalt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] text-white/70 hover:text-white transition-colors duration-150 underline underline-offset-4 decoration-white/20 hover:decoration-white/50 w-fit"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/qr/QIBIG3KRZPX5N1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] text-white/70 hover:text-white transition-colors duration-150 underline underline-offset-4 decoration-white/20 hover:decoration-white/50 w-fit"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:nechaev.psy@gmail.com"
                  className="font-sans text-[15px] text-white/70 hover:text-white transition-colors duration-150 underline underline-offset-4 decoration-white/20 hover:decoration-white/50 w-fit"
                >
                  nechaev.psy@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
