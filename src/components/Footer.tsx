export default function Footer() {
  return (
    <footer className="bg-base border-t border-rule py-14 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-20 mb-10">

          {/* Brand */}
          <div>
            <p className="font-serif text-[16px] font-medium text-ink mb-1">Никита Нечаев</p>
            <p className="font-sans text-[13px] text-muted mb-4">Психолог · гештальт-терапевт</p>
            <p className="font-sans text-[13px] text-muted">Москва / онлайн</p>
          </div>

          {/* Contacts */}
          <div>
            <p className="font-sans text-[11px] text-muted/60 tracking-[0.12em] uppercase mb-4">Связаться</p>
            <nav className="flex flex-col gap-2.5">
              <a
                href="https://t.me/nikita_gestalt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors duration-150"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/qr/QIBIG3KRZPX5N1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors duration-150"
              >
                WhatsApp
              </a>
              <a
                href="mailto:nechaev.psy@gmail.com"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors duration-150"
              >
                nechaev.psy@gmail.com
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="font-sans text-[11px] text-muted/60 tracking-[0.12em] uppercase mb-4">Документы</p>
            <nav className="flex flex-col gap-2.5">
              <a
                href="#"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors duration-150"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors duration-150"
              >
                Согласие на&nbsp;обработку данных
              </a>
            </nav>
          </div>

        </div>

        <div className="border-t border-rule pt-6">
          <p className="font-sans text-[12px] text-muted/50">
            © {new Date().getFullYear()} Никита Нечаев
          </p>
        </div>
      </div>
    </footer>
  )
}
