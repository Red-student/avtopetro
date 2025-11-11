export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 py-20">
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              О компании AvtoPetro
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ваш надежный партнер в мире автомобилей с 2010 года
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
        {/* История компании */}
        <section className="mb-16" aria-labelledby="history-heading">
          <div>
            <h2 id="history-heading" className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" aria-hidden="true"></span>
              Наша история
            </h2>
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                AvtoPetro была основана в 2010 году с целью предоставления качественных автомобилей и услуг 
                нашим клиентам. За годы работы мы зарекомендовали себя как надежный партнер, который всегда 
                ставит интересы клиентов на первое место.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Сегодня мы предлагаем широкий выбор автомобилей различных марок и моделей, а также комплексные 
                услуги по обслуживанию и ремонту. Наша команда профессионалов готова помочь вам найти идеальный 
                автомобиль и обеспечить его безупречную работу на долгие годы.
              </p>
            </article>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-16" aria-labelledby="values-heading">
          <div>
            <h2 id="values-heading" className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-3 gap-8" role="list">
              {[
                {
                  title: "Качество",
                  description: "Мы гарантируем высокое качество всех автомобилей и услуг",
                  icon: "✓",
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  title: "Надежность",
                  description: "Проверенные временем решения и честные условия сотрудничества",
                  icon: "🛡️",
                  gradient: "from-blue-500 to-cyan-600"
                },
                {
                  title: "Профессионализм",
                  description: "Опытная команда специалистов с многолетним стажем работы",
                  icon: "⭐",
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((value, index) => (
                <article
                  key={index}
                  role="listitem"
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none"
                  tabIndex={0}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center text-3xl mb-4`} aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="mb-16" aria-labelledby="stats-heading">
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-2xl">
              <h2 id="stats-heading" className="text-3xl font-bold mb-12 text-center text-white">
                AvtoPetro в цифрах
              </h2>
              <div className="grid md:grid-cols-4 gap-8" role="list">
                {[
                  { number: "14+", label: "Лет на рынке" },
                  { number: "5000+", label: "Довольных клиентов" },
                  { number: "2000+", label: "Проданных авто" },
                  { number: "98%", label: "Положительных отзывов" }
                ].map((stat, index) => (
                  <div key={index} role="listitem" className="text-center">
                    <div className="text-5xl font-bold text-white mb-2" aria-label={stat.number}>
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-lg">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section aria-labelledby="team-heading">
          <div>
            <h2 id="team-heading" className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Наша команда
            </h2>
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                В AvtoPetro работает команда опытных специалистов, которые любят свое дело и всегда готовы 
                помочь вам. Наши менеджеры по продажам, технические специалисты и консультанты имеют 
                многолетний опыт работы в автомобильной индустрии и постоянно повышают свою квалификацию.
              </p>
            </article>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}

