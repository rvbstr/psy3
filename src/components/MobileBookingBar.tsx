import { useState, useEffect } from 'react'

export default function MobileBookingBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-rule px-5 pt-3" style={{ paddingBottom: 'max(12px, var(--sab))' }}>
      <a
        href="https://t.me/nikita_gestalt"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-[50px] w-full bg-pine text-white font-sans text-[15px] font-medium rounded-[6px] hover:bg-pine-deep transition-colors duration-150"
      >
        Записаться на&nbsp;встречу
      </a>
    </div>
  )
}
