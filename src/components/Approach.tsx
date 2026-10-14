export default function Approach() {
  return (
    <section id="approach" className="bg-surface py-28 lg:py-36 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20">
          <div className="lg:pt-1">
            <h2 className="font-serif text-[44px] lg:text-[50px] leading-[1.1] text-ink tracking-tight sticky top-28">
              Как&nbsp;я&nbsp;работаю
            </h2>
          </div>

          <div className="max-w-[680px]">
            <p className="font-serif text-[24px] lg:text-[27px] leading-[1.45] text-ink mb-8">
              Для&nbsp;меня терапия — это совместное исследование того, как&nbsp;вы&nbsp;переживаете себя, отношения и&nbsp;происходящее вокруг.
            </p>

            <div className="font-sans text-[17px] text-muted leading-[1.68] space-y-5 mb-12">
              <p>
                Основной подход, в&nbsp;котором я&nbsp;работаю, — <strong className="text-ink font-semibold">гештальт-терапия</strong>. Также я&nbsp;использую отдельные методы и&nbsp;техники <strong className="text-ink font-semibold">когнитивно-поведенческой терапии (КПТ)</strong>, когда они подходят конкретной задаче.
              </p>
              <p>
                Мне важно не&nbsp;давать человеку готовых рецептов, а&nbsp;помогать лучше замечать собственные чувства, потребности, ограничения и&nbsp;способы действовать.
              </p>
              <p>
                В&nbsp;работе я&nbsp;опираюсь на&nbsp;осознанность, ответственность и&nbsp;авторство собственной жизни, свободу выбора и&nbsp;внимание к&nbsp;тому, что&nbsp;происходит с&nbsp;человеком здесь и&nbsp;сейчас.
              </p>
              <p>
                Цель терапии для&nbsp;меня — не&nbsp;только решить отдельный запрос, но&nbsp;и&nbsp;сделать жизнь человека в&nbsp;целом более устойчивой, свободной и&nbsp;подходящей ему самому.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-pine pl-6 py-1">
              <p className="font-serif italic text-[19px] lg:text-[21px] text-ink leading-[1.55]">
                Не&nbsp;обязательно становиться другим человеком. Часто важнее лучше понять, как&nbsp;устроен именно ваш способ жить — и&nbsp;где в&nbsp;нём появляется возможность выбора.
              </p>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  )
}
