import { useState } from 'react';
import {
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
  Users,
  Globe,
  FileText,
  X,
} from 'lucide-react';

/* ================= DATA ================= */

const milestones = [
  { year: '1960', event: 'Відкрито середню школу № 167' },
  { year: '1991', event: 'Середня школа № 167 отримала статус гімназії № 167 міста Києва' },
  { year: '2008', event: 'Укладено угоду про партнерство з Бургау-гімназією, м. Дюрен, Німеччина' },
  { year: '2013', event: 'Гімназію № 167 міста Києва перейменовано...' },
  { year: '2014', event: 'Змінено тип закладу освіти...' },
  { year: '2024', event: 'Зміна типу закладу освіти на Ліцей № 167' },
  { year: '2026', event: 'Рейтинг 4.86 у Google Reviews' },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Якість освіти',
    desc: 'Поєднуємо класичні методи з сучасними.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Повага й підтримка',
    desc: 'Безпечне середовище для розвитку.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Інновації',
    desc: 'Сучасні технології в освіті.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Відкритість світу',
    desc: 'Міжнародні можливості.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

/* ================= COMPONENT ================= */

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-20">
      
      {/* ================= HERO ================= */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Наша <span className="text-red-500">історія</span>
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="bg-red-600 text-white px-6 py-3 rounded-2xl flex gap-2 items-center"
          >
            <FileText className="w-5 h-5" />
            ДСД
          </button>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`flex ${
                i % 2 ? 'flex-row-reverse' : ''
              } mb-6`}
            >
              <div className="w-1/2 p-4">
                <div className="bg-white p-4 rounded-xl shadow">
                  <b className="text-red-600">{m.year}</b>
                  <p>{m.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 bg-white">
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map(v => (
            <div key={v.title} className="p-6 border rounded-2xl text-center">
              <div className={`w-14 h-14 ${v.bg} ${v.color} mx-auto mb-3 flex items-center justify-center rounded-xl`}>
                {v.icon}
              </div>
              <h3 className="font-bold">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 bg-gray-50 text-center">
        <Users className="mx-auto text-red-600 w-6 h-6" />
        <p>50+ педагогів</p>
      </section>

      {/* ================= POPUP ================= */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div className="bg-white p-6 rounded-2xl max-w-xl w-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3"
            >
              <X />
            </button>

            <h2 className="font-bold text-lg mb-3">ДСД</h2>

            <a
              href="https://docs.google.com/document/d/e/2PACX..."
              target="_blank"
              className="block bg-red-600 text-white text-center py-2 rounded-xl"
            >
              Відкрити
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
