export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Продажа автомобилей",
      description: "Широкий выбор новых и подержанных автомобилей от ведущих мировых производителей",
      icon: "🚗",
      features: ["Гарантия качества", "Трейд-ин", "Рассрочка", "Лизинг"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Техническое обслуживание",
      description: "Профессиональное обслуживание и диагностика вашего автомобиля",
      icon: "🔧",
      features: ["Диагностика", "Замена масла", "Регулировка", "Проверка систем"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Ремонт и восстановление",
      description: "Качественный ремонт любой сложности с использованием оригинальных запчастей",
      icon: "⚙️",
      features: ["Кузовной ремонт", "Двигатель", "Трансмиссия", "Электрика"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Шиномонтаж",
      description: "Услуги по шиномонтажу, балансировке и хранению колес",
      icon: "⭕",
      features: ["Монтаж/демонтаж", "Балансировка", "Хранение", "Ремонт проколов"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Автострахование",
      description: "Помощь в оформлении страховых полисов и сопровождение при ДТП",
      icon: "🛡️",
      features: ["ОСАГО", "КАСКО", "Страхование жизни", "Консультации"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Автокредитование",
      description: "Выгодные условия кредитования и лизинга для покупки автомобиля",
      icon: "💳",
      features: ["Кредит от 0%", "Быстрое одобрение", "Минимум документов", "Гибкие условия"],
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 py-16">
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-blue-100">
              Комплексный подход к обслуживанию вашего автомобиля
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16" aria-label="Наши услуги">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {services.map((service) => (
              <article
                key={service.id}
                role="listitem"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none"
                tabIndex={0}
              >
                {/* Service Header */}
                <div className={`h-32 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`} aria-hidden="true">
                  <div className="text-6xl opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Включает:
                    </h3>
                    <ul className="space-y-2" role="list">
                      {service.features.map((feature, index) => (
                        <li key={index} role="listitem" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex-shrink-0" aria-hidden="true"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]"
                    aria-label={`Узнать больше об услуге: ${service.title}`}
                  >
                    Узнать больше
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 pb-16" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 id="why-us-heading" className="text-3xl font-bold text-white mb-4">
                Почему выбирают нас?
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Мы предлагаем полный спектр услуг для вашего автомобиля с гарантией качества
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8" role="list">
              <div className="text-center" role="listitem">
                <div className="text-4xl mb-3" aria-hidden="true">🏆</div>
                <h3 className="text-xl font-bold text-white mb-2">Опыт работы</h3>
                <p className="text-blue-100">Более 14 лет на рынке</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="text-4xl mb-3" aria-hidden="true">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">Гарантия качества</h3>
                <p className="text-blue-100">Официальная гарантия на все услуги</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="text-4xl mb-3" aria-hidden="true">👨‍🔧</div>
                <h3 className="text-xl font-bold text-white mb-2">Профессионалы</h3>
                <p className="text-blue-100">Квалифицированные специалисты</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

