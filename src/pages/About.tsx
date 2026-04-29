import { CheckCircle, Target, Heart, Lightbulb, Globe } from 'lucide-react';

const milestones = [
  { year: '1960', event: 'Відкрито середню школу № 167' },
  { year: '1991', event: 'Середня школа № 167 отримала статус гімназії № 167 міста Києва' },
  { year: '2008', event: 'Укладено угоду про партнерство з Бургау-гімназією, м. Дюрен, Німеччина' },
  { year: '2013', event: 'Гімназію № 167 перейменовано з поглибленим вивченням німецької мови' },
  { year: '2014', event: 'Змінено тип закладу освіти на НВК № 167' },
  { year: '2024', event: 'Зміна типу на Ліцей № 167 Дніпровського району' },
  { year: '2026', event: 'Рейтинг 4.86 у Google Reviews. 66 років якісної освіти' },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Якість освіти',
    desc: 'Ми прагнемо до найвищих стандартів навчання.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Повага й підтримка',
    desc: 'Кожен учень — особистість.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Інновації',
    desc: 'Сучасні технології навчання.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Відкритість світу',
    desc: 'Освіта без кордонів.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-amber-400 text-xs uppercase">Про нас</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Наша <span className="text-red-500">історія</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg">
            Понад 55 років ми формуємо майбутнє через освіту.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-red-600 text-xs uppercase">Наша місія</span>
            <h2 className="text-3xl font-extrabold mt-3 mb-5">
              Виховуємо особистостей
            </h2>

            <ul className="space-y-3">
              {[
                'Академічна досконалість',
                'Німецька мова',
                'Патріотизм',
                'Міжкультурний діалог',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Ключові моменти
          </h2>

          <div className="space-y-6">
            {milestones.map(({ year, event }) => (
              <div key={year} className="bg-white p-5 rounded-xl shadow-sm border">
                <span className="text-red-600 font-bold">{year}</span>
                <p className="text-gray-700 text-sm mt-1">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-10">
            Що нами керує
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc, bg, color }) => (
              <div key={title} className="p-6 rounded-2xl border hover:shadow-md transition">
                <div className={`w-14 h-14 ${bg} ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {icon}
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔴 КНОПКА ВМЕСТО УЧИТЕЛЕЙ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-extrabold mb-6">
            Офіційний документ
          </h2>

          <p className="text-gray-500 mb-8">
            Натисніть кнопку нижче, щоб переглянути документ
          </p>

          <a
            href="https://docs.google.com/" // ← ВСТАВЬ СВОЮ ССЫЛКУ
            target="_blank"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-10 py-5 rounded-xl shadow-md transition-all duration-200 hover:scale-105"
          >
            Відкрити документ
          </a>

        </div>
      </section>

    </div>
  );
}
