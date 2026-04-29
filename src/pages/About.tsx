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
  { year: '2013', event: 'Гімназію № 167 міста Києва перейменовано...' },
  { year: '2014', event: 'Змінено тип закладу освіти...' },
  { year: '2024', event: 'Ліцей № 167 Дніпровського району' },
  { year: '2026', event: 'Рейтинг 4.86 у Google Reviews' }
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Якість освіти',
    desc: 'Ми прагнемо до найвищих стандартів навчання.',
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Повага й підтримка',
    desc: 'Кожен учень — особистість.',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Інновації',
    desc: 'Сучасні технології та методики.',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Відкритість світу',
    desc: 'Мовна освіта відкриває кордони.',
    color: 'text-green-600',
    bg: 'bg-green-50'
  }
];

export default function About() {
  const [open, setOpen] = useState(false);

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
          <h1 className="text-4xl text-white mb-4">
            Наша <span className="text-red-500">історія</span>
          </h1>

          <p className="text-gray-300 mb-6">
            Понад 55 років ми формуємо майбутнє
          </p>

          {/* КНОПКА */}
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl"
          >
            <FileText className="w-5 h-5" />
            Відкрити документ
          </button>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {milestones.map(({ year, event }) => (
            <div key={year} className="bg-white p-5 rounded-xl shadow-sm">
              <span className="text-red-600 font-bold">{year}</span>
              <p>{event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon, title, desc, color, bg }) => (
            <div key={title} className="text-center p-6 border rounded-2xl">
              <div className={`w-14 h-14 ${bg} ${color} flex items-center justify-center mx-auto mb-4`}>
                {icon}
              </div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />

          <div className="relative bg-white rounded-2xl p-6 w-full max-w-md">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="text-xl font-bold mb-4">
              Документ ДСД
            </h2>

            <a
              href="/your-document.pdf"
              target="_blank"
              className="block text-center bg-red-600 text-white py-3 rounded-xl"
            >
              Відкрити файл
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
