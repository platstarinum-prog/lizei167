import { Calendar, Tag, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: 'Конкурси',
    date: '15 квітня 2024',
    title: 'Наші учні перемогли на Всеукраїнській олімпіаді з німецької мови',
    desc: 'Команда ліцею здобула перші місця у двох вікових категоріях. Вітаємо переможців та дякуємо вчителям за підготовку!',
    img: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    id: 2,
    category: 'Поїздки',
    date: '2 квітня 2024',
    title: 'Навчальна поїздка до Мюнхена: культура та мова на практиці',
    desc: 'Учні 10-А класу повернулися з двотижневого навчального візиту до партнерської гімназії у Мюнхені. Враження на все життя!',
    img: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 3,
    category: 'Події',
    date: '20 березня 2024',
    title: 'День весни та мови: фестиваль у ліцеї',
    desc: 'Щорічний мовний фестиваль зібрав понад 400 учасників. Вистави, пісні, декламування та конкурс творчих робіт.',
    img: 'https://images.pexels.com/photos/1708392/pexels-photo-1708392.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    id: 4,
    category: 'Досягнення',
    date: '10 березня 2024',
    title: 'Goethe-Zertifikat B2: 98% успішності в нашому ліцеї',
    desc: 'У зимовій сесії іспитів Goethe-Institut майже всі учні 10 класу успішно склали B2. Це найвищий показник за всю історію.',
    img: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    id: 5,
    category: 'Обмін',
    date: '1 березня 2024',
    title: 'Зустріч з учнями партнерської школи з Відня',
    desc: 'Наш ліцей прийняв делегацію з австрійської школи. Спільні уроки, екскурсії Києвом та культурний обмін.',
    img: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    id: 6,
    category: 'Навчання',
    date: '14 лютого 2024',
    title: 'Новий курс: "Німецька для IT-спеціалістів" у 10–11 класах',
    desc: 'Запускаємо факультативний курс із вивчення технічної мови. Читання документації, ділове листування та презентації.',
    img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
];

export default function News() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Events"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
          <div className="flex-1 bg-gray-700" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-amber-400" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full mb-4">
            Новини та події
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Шкільне <span className="text-amber-400">життя</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
            Конкурси, поїздки, досягнення та яскраві події нашого ліцею.
          </p>
        </div>
      </section>

      {/* News grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Головна новина
            </span>
          </div>
          <div className="grid lg:grid-cols-5 gap-6 mb-8">
            <div className="lg:col-span-3 group">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={newsItems[0].img}
                    alt={newsItems[0].title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 left-4 text-xs font-semibold ${newsItems[0].bg} ${newsItems[0].color} px-3 py-1 rounded-full`}>
                    {newsItems[0].category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {newsItems[0].date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{newsItems[0].title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{newsItems[0].desc}</p>
                  <button className="flex items-center gap-1.5 text-red-600 font-semibold text-sm mt-4 hover:gap-2.5 transition-all">
                    Читати далі <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {newsItems.slice(1, 3).map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-28 h-full object-cover shrink-0 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Tag className={`w-3 h-3 ${item.color}`} />
                      <span className={`text-xs font-semibold ${item.color}`}>{item.category}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rest of news */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-semibold ${item.bg} ${item.color} px-2.5 py-0.5 rounded-full`}>
                    {item.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                  <button className="flex items-center gap-1.5 text-red-600 font-semibold text-sm mt-3 hover:gap-2.5 transition-all">
                    Читати далі <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Найближчі заходи
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-4">
              Плануємо разом
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { date: 'трав 10', event: 'День Європи. Мовний марафон', type: 'Захід' },
              { date: 'трав 23', event: 'Іспит Goethe-Zertifikat B1/B2 (весняна сесія)', type: 'Іспит' },
              { date: 'чер 5', event: 'Випускний вечір 11 класів', type: 'Урочистість' },
            ].map(({ date, event, type }) => (
              <div key={date} className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-colors">
                <div className="text-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 min-w-[60px]">
                  <p className="text-xs text-gray-400 uppercase font-medium">{date.split(' ')[0]}</p>
                  <p className="text-xl font-extrabold text-red-600">{date.split(' ')[1]}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{type}</span>
                  <p className="text-sm font-semibold text-gray-900 mt-1 leading-snug">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
