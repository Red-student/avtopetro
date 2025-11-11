export default function CarsPage() {
  const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry 2024",
      price: "2 450 000 ₽",
      year: 2024,
      mileage: "0 км",
      engine: "2.5 л",
      transmission: "Автомат",
      image: "🚗",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      brand: "BMW",
      model: "X5 2023",
      price: "5 800 000 ₽",
      year: 2023,
      mileage: "15 000 км",
      engine: "3.0 л",
      transmission: "Автомат",
      image: "🚙",
      color: "from-gray-600 to-gray-800"
    },
    {
      id: 3,
      brand: "Mercedes-Benz",
      model: "E-Class 2024",
      price: "4 200 000 ₽",
      year: 2024,
      mileage: "5 000 км",
      engine: "2.0 л",
      transmission: "Автомат",
      image: "🚕",
      color: "from-silver-400 to-gray-600"
    },
    {
      id: 4,
      brand: "Audi",
      model: "A6 2023",
      price: "3 900 000 ₽",
      year: 2023,
      mileage: "20 000 км",
      engine: "2.0 л",
      transmission: "Автомат",
      image: "🚐",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      brand: "Volkswagen",
      model: "Tiguan 2024",
      price: "2 800 000 ₽",
      year: 2024,
      mileage: "0 км",
      engine: "2.0 л",
      transmission: "Автомат",
      image: "🚗",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 6,
      brand: "Lexus",
      model: "RX 350 2023",
      price: "4 500 000 ₽",
      year: 2023,
      mileage: "12 000 км",
      engine: "3.5 л",
      transmission: "Автомат",
      image: "🚙",
      color: "from-purple-500 to-pink-500"
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
              Каталог автомобилей
            </h1>
            <p className="text-xl text-blue-100">
              Выберите автомобиль своей мечты
            </p>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8" aria-label="Фильтры поиска">
        <div className="max-w-7xl mx-auto">
          <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <label htmlFor="brand-filter" className="sr-only">Марка автомобиля</label>
              <select 
                id="brand-filter"
                name="brand"
                aria-label="Выберите марку автомобиля"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[44px]"
              >
                <option value="">Все марки</option>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="audi">Audi</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="lexus">Lexus</option>
              </select>
              <label htmlFor="model-filter" className="sr-only">Тип кузова</label>
              <select 
                id="model-filter"
                name="model"
                aria-label="Выберите тип кузова"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[44px]"
              >
                <option value="">Все модели</option>
                <option value="sedan">Седан</option>
                <option value="suv">Внедорожник</option>
                <option value="crossover">Кроссовер</option>
              </select>
              <label htmlFor="price-filter" className="sr-only">Ценовой диапазон</label>
              <select 
                id="price-filter"
                name="price"
                aria-label="Выберите ценовой диапазон"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[44px]"
              >
                <option value="">Цена</option>
                <option value="0-2000000">До 2 млн</option>
                <option value="2000000-4000000">2-4 млн</option>
                <option value="4000000-6000000">4-6 млн</option>
                <option value="6000000">От 6 млн</option>
              </select>
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]"
                aria-label="Применить фильтры поиска"
              >
                Найти
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="container mx-auto px-4 pb-16" aria-label="Каталог автомобилей">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {cars.map((car) => (
              <article
                key={car.id}
                role="listitem"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none"
                tabIndex={0}
              >
                {/* Car Image */}
                <div className={`h-48 bg-gradient-to-br ${car.color} flex items-center justify-center relative overflow-hidden`} aria-hidden="true">
                  <div className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {car.image}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 px-3 py-1.5 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                    {car.year}
                  </div>
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {car.brand} {car.model}
                    </h2>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" aria-label={`Цена: ${car.price}`}>
                      {car.price}
                    </div>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-lg" aria-hidden="true">📊</span>
                      <span className="text-sm">
                        <span className="sr-only">Пробег: </span>
                        {car.mileage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-lg" aria-hidden="true">⚙️</span>
                      <span className="text-sm">
                        <span className="sr-only">Двигатель: </span>
                        {car.engine}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-lg" aria-hidden="true">🔧</span>
                      <span className="text-sm">
                        <span className="sr-only">Коробка передач: </span>
                        {car.transmission}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-lg" aria-hidden="true">✅</span>
                      <span className="text-sm">В наличии</span>
                    </div>
                  </dl>

                  <div className="flex gap-3">
                    <button 
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]"
                      aria-label={`Подробнее о ${car.brand} ${car.model}`}
                    >
                      Подробнее
                    </button>
                    <button 
                      className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] min-w-[44px]"
                      aria-label={`Связаться по поводу ${car.brand} ${car.model}`}
                    >
                      <span aria-hidden="true">💬</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

