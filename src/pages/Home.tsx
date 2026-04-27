import {
  Award, BookOpen, Users, Globe, ChevronRight,
  Star, Phone, ArrowRight, CheckCircle
} from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const advantages = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Поглиблена німецька',
    desc: 'Інтенсивна програма вивчення мови з першого класу.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Goethe-Zertifikat',
    desc: 'Підготовка до міжнародних іспитів.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Досвідчені педагоги',
    desc: '50+ кваліфікованих викладачів.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Культурний обмін',
    desc: 'Поїздки до Європи.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

const stats = [
  { value: '55+', label: 'Років досвіду' },
  { value: '1200+', label: 'Учнів' },
  { value: '4.86', label: 'Рейтинг Google' },
  { value: '95%', label: 'Вступають до вишів' },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950 pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="School"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/90 to-red-950/40" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
          <div className="flex-1 bg-gray-700" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-amber-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">

            <span className="inline-block bg-amber-400/20 text-amber-400 text-xs px-3 py-1.5 rounded-full mb-6">
              Державний заклад освіти · Київ
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Ліцей №167<br />
              <span className="text-red-500">з поглибленим</span><br />
              <span className="text-amber-400">вивченням</span> німецької
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Провідний мовний заклад Києва.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* 🔥 ГЛАВНАЯ КНОПКА */}
              <button
                onClick={() => navigate('contacts')}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl"
              >
                Вступити до ліцею
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('contacts')}
                className="flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-xl border border-white/20"
              >
                Контакти
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 mt-8">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-white font-bold">4.86</span>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map(a => (
            <div key={a.title} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className={`w-12 h-12 ${a.bg} ${a.color} rounded-xl flex items-center justify-center mb-4`}>
                {a.icon}
              </div>
              <h3 className="font-bold mb-2">{a.title}</h3>
              <p className="text-sm text-gray-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Готові вступити?
        </h2>

        <button
          onClick={() => navigate('contacts')}
          className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold"
        >
          Подати заявку
        </button>
      </section>
    </>
  );
}
