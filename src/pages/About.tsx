import {
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
  Users,
  Globe
} from 'lucide-react';

const milestones = [
  { year: '1960', event: 'Відкрито середню школу № 167' },
  { year: '1991', event: 'Середня школа № 167 отримала статус гімназії № 167 міста Києва' },
  { year: '2008', event: 'Укладено угоду про партнерство з Бургау-гімназією, м. Дюрен, Німеччина' },
  { year: '2013', event: 'Гімназію № 167 міста Києва перейменовано у гімназію № 167 міста Києва з поглибленим вивченням німецької мови' },
  { year: '2014', event: 'Змінено тип закладу освіти на навчально-виховний комплекс № 167 з поглибленим вивченням німецької мови' },
  { year: '2024', event: 'Зміна типу закладу освіти на Ліцей № 167 Дніпровського району' },
  { year: '2026', event: 'Рейтинг 4.86 у Google Reviews. 66 років якісної освіти' }
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Якість освіти',
    desc: 'Ми прагнемо до найвищих стандартів навчання, поєднуючи класичні методи з сучасними підходами.',
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Повага й підтримка',
    desc: 'Кожен учень — особистість. Ми створюємо безпечне середовище для розвитку та самовираження.',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Інновації',
    desc: 'Впроваджуємо сучасні технології та методики, щоб освіта була цікавою та ефективною.',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Відкритість світу',
    desc: 'Мовна освіта відкриває кордони. Ми виховуємо громадян Європи та світу.',
    color: 'text-green-600',
    bg: 'bg-green-50'
  }
];

export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="School building"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
          <div className="flex-1 bg-gray-700" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-amber-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full mb-4">
            Про нас
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Наша <span className="text-red-500">історія</span>
          </h1>

          <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
            Понад 55 років ми формуємо майбутнє через освіту, мову та культуру.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
                Наша місія
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-5">
                Виховуємо особистостей,<br />відкритих до Європи
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Місія Ліцею №167 — забезпечити якісну загальну середню освіту...
              </p>

              <ul className="space-y-3">
                {[
                  'Академічна досконалість у всіх предметах',
                  'Вільне володіння німецькою мовою',
                  'Громадянська відповідальність та патріотизм',
                  'Готовність до міжкультурного діалогу'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-2xl shadow-md object-cover h-52 w-full" />
              <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-2xl shadow-md object-cover h-52 w-full mt-8" />
              <img src="https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-2xl shadow-md object-cover h-52 w-full -mt-8" />
              <img src="https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-2xl shadow-md object-cover h-52 w-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Хронологія
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Ключові моменти нашої історії
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map(({ year, event }) => (
              <div key={year} className="bg-white p-5 rounded-xl shadow-sm">
                <span className="text-red-600 font-bold">{year}</span>
                <p>{event}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon, title, desc, color, bg }) => (
            <div key={title} className="text-center p-6 rounded-2xl border">
              <div className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {icon}
              </div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 text-center">
        <Users className="mx-auto text-red-600" />
        <p className="mt-4">50+ педагогів</p>
      </section>

    </div>
  );
}
