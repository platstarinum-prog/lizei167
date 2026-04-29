import { CheckCircle, Target, Heart, Lightbulb, Users, Globe } from 'lucide-react';

const milestones = [
  { year: '1960', event: 'Відкрито середню школу № 167' },
  { year: '1991', event: 'Середня школа № 167 отримала статус гімназії № 167 міста Києва' },
  { year: '2008', event: 'Укладено угоду про партнерство з Бургау-гімназією, м. Дюрен, Німеччина' },
  { year: '2013', event: 'Гімназію № 167 міста Києва перейменовано у гімназію № 167 міста Києва з поглибленим вивченням німецької мови' },
  { year: '2014', event: 'Змінено тип закладу освіти на навчально-виховний комплекс № 167 з поглибленим вивченням німецької мови' },
  { year: '2024', event: 'Зміна типу закладу освіти на Ліцей № 167 Дніпровського району' },
  { year: '2026', event: 'Рейтинг 4.86 у Google Reviews. 66 років якісної освіти' },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Якість освіти',
    desc: 'Ми прагнемо до найвищих стандартів навчання...',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Повага й підтримка',
    desc: 'Кожен учень — особистість...',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Інновації',
    desc: 'Впроваджуємо сучасні технології...',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Відкритість світу',
    desc: 'Мовна освіта відкриває кордони...',
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
          <h1 className="text-4xl text-white font-bold">
            Наша <span className="text-red-500">історія</span>
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">

          {milestones.map(({ year, event }, i) => (
            <div
              key={year}
              className={`flex ${
                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } gap-6 mb-6`}
            >
              <div className="w-1/2">
                <div className="bg-white p-4 rounded-xl shadow">
                  <span className="text-red-600 font-bold">{year}</span>
                  <p>{event}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">

          {values.map(({ icon, title, desc, color, bg }) => (
            <div key={title} className="p-4 border rounded-xl text-center">
              <div className={`${bg} ${color} w-12 h-12 flex items-center justify-center mx-auto`}>
                {icon}
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="text-center">
          <Users className="mx-auto text-red-600" />
          <p>50+ педагогів</p>
        </div>
      </section>

    </div>
  );
}
