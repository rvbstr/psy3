export default function Approach() {
  return (
    <section id="approach" className="bg-surface py-28 lg:py-36 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20">
          <div className="lg:pt-1">
            <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight sticky top-28">
              Как я работаю
            </h2>
          </div>

          <div className="max-w-[680px]">
            <p className="font-serif text-[24px] lg:text-[27px] leading-[1.45] text-ink mb-8">
              Для меня терапия — это совместное исследование того, как вы переживаете себя, отношения и происходящее вокруг.
            </p>

            <div className="font-sans text-[17px] text-muted leading-[1.68] space-y-5 mb-12">
              <p>
                Основной подход, в котором я работаю, — <strong className="text-ink font-semibold">гештальт-терапия</strong>. Также я использую отдельные методы и техники <strong className="text-ink font-semibold">когнитивно-поведенческой терапии (КПТ)</strong>, когда они подходят конкретной задаче.
              </p>
              <p>
                Мне важно не давать человеку готовых рецептов, а помогать лучше замечать собственные чувства, потребности, ограничения и способы действовать.
              </p>
              <p>
                В работе я опираюсь на осознанность, ответственность и авторство собственной жизни, свободу выбора и внимание к тому, что происходит с человеком здесь и сейчас.
              </p>
              <p>
                Цель терапии для меня — не только решить отдельный запрос, но и сделать жизнь человека в целом более устойчивой, свободной и подходящей ему самому.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-pine pl-6 py-1">
              <p className="font-serif italic text-[19px] lg:text-[21px] text-ink leading-[1.55]">
                Не обязательно становиться другим человеком. Часто важнее лучше понять, как устроен именно ваш способ жить — и где в нём появляется возможность выбора.
              </p>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  )
}
