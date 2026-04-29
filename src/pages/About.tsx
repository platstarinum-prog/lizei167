import { useState } from 'react';
import {
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
  Users,
  Globe,
  FileText,
  X
} from 'lucide-react';

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
    desc: 'Ми прагнемо до найвищих стандартів навчання, поєднуючи класичні методи з сучасними підходами.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Повага й підтримка',
    desc: 'Кожен учень — особистість. Ми створюємо безпечне середовище для розвитку та самовираження.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Інновації',
    desc: 'Впроваджуємо сучасні технології та методики, щоб освіта була цікавою та ефективною.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Відкритість світу',
    desc: 'Мовна освіта відкриває кордони. Ми виховуємо громадян Європи та світу.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

export default function About() {
  const [open, setOpen] = useState(false);

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

          <p className="text-gray-300 max-w-xl text-lg leading-relaxed mb-8">
            Понад 55 років ми формуємо майбутнє через освіту, мову та культуру.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <FileText className="w-5 h-5" />
          Інформація про програму ДСД
          </button>
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
                Місія Ліцею №167 — забезпечити якісну загальну середню освіту з поглибленим вивченням німецької мови та культури, виховати всебічно розвинених, відповідальних та конкурентоспроможних особистостей, готових до навчання та роботи в Україні та за кордоном.
              </p>

              <ul className="space-y-3">
                {[
                  'Академічна досконалість у всіх предметах',
                  'Вільне володіння німецькою мовою',
                  'Громадянська відповідальність та патріотизм',
                  'Готовність до міжкультурного діалогу',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Classroom" className="rounded-2xl shadow-md object-cover h-52 w-full" />
              <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Students" className="rounded-2xl shadow-md object-cover h-52 w-full mt-8" />
              <img src="https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Learning" className="rounded-2xl shadow-md object-cover h-52 w-full -mt-8" />
              <img src="https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Teacher" className="rounded-2xl shadow-md object-cover h-52 w-full" />
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

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="text-lg font-extrabold text-red-600">{year}</span>
                      <p className="text-gray-700 text-sm mt-1 leading-relaxed">{event}</p>
                    </div>
                  </div>
                  <div className="relative sm:flex items-center justify-center hidden">
                    <div className="w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-md z-10" />
                  </div>
                  <div className="sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Цінності
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4">
              Що нами керує
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc, color, bg }) => (
              <div key={title} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Команда
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Наш педагогічний колектив
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              50+ досвідчених педагогів, закоханих у свою справу.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Марія Ковальська', role: 'Директор ліцею', img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Олена Шевченко', role: 'Заступник директора з навч. роботи', img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Андрій Мельник', role: 'Керівник кафедри нім. мови', img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
            ].map(({ name, role, img }) => (
              <div key={name} className="text-center group">
                <div className="relative inline-block mb-4">
                  <img src={img} alt={name} className="w-24 h-24 rounded-full object-cover mx-auto shadow-md group-hover:shadow-lg transition-shadow" />
                  <div className="absolute inset-0 rounded-full ring-0 group-hover:ring-4 ring-red-200 transition-all" />
                </div>
                <h3 className="font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
              <Users className="w-5 h-5 text-red-600" />
              <span className="text-gray-700 font-medium">50+ педагогів у нашому колективі</span>
            </div>
          </div>
        </div>
      </section>

    {/* Кнопка вместо popup */}
      <div className="flex justify-center mt-10">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vR-h9TzRhZWrWu2OkcpD11KRckb8at1GKm3sgzMkvpjcXE2DiihNQuaWdTcx3sX21l_-mrBzpM_cwmN/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <FileText className="w-5 h-5" />
          Інформація про програму ДСД
        </a>
      </div>

    </div>
  );
}
