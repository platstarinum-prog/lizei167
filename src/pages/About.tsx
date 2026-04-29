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
    desc: 'Найвищі стандарти навчання.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Повага',
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
    title: 'Відкритість',
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
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Наша <span className="text-red-500">історія</span>
          </h1>
          <p className="text-gray-300">
            Понад 55 років освіти
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Виховуємо особистостей
            </h2>

            <ul className="space-y-3">
              {[
                'Академічна досконалість',
                'Німецька мова',
                'Патріотизм',
                'Міжкультурний діалог',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle className="text-green-500 w-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {milestones.map(({ year, event }) => (
            <div key={year} className="bg-white p-4 rounded-xl shadow">
              <b className="text-red-600">{year}</b>
              <p>{event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="p-6 border rounded-xl text-center">
              {icon}
              <h3 className="font-bold mt-2">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔴 ВМЕСТО УЧИТЕЛЕЙ — КНОПКА */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Документ закладу
          </h2>

          <a
            href="https://docs.google.com/" // ← СЮДА СВОЮ ССЫЛКУ
            target="_blank"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-10 py-5 rounded-xl shadow-lg transition hover:scale-105"
          >
            Відкрити документ
          </a>

        </div>
      </section>

    </div>
  );
}
