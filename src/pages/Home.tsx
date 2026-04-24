import { useState } from 'react';
import {
  Award, BookOpen, Users, Globe, ChevronRight,
  Star, Phone, ArrowRight, CheckCircle, X
} from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const advantages = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Поглиблена німецька',
    desc: 'Інтенсивна програма вивчення мови з першого класу. Носії мови та сертифіковані викладачі.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Підготовка до Goethe-Zertifikat',
    desc: 'Офіційна підготовка до міжнародних іспитів Goethe-Institut: A1–C1.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Досвідчені педагоги',
    desc: '50+ вчителів з вищою педагогічною освітою та міжнародними сертифікатами.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Культурний обмін',
    desc: 'Щорічні поїздки до Німеччини, Австрії та Швейцарії. Партнерство з німецькими школами.',
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

interface FormData {
  name: string;
  phone: string;
  grade: string;
  comment: string;
}

export default function Home({ navigate }: HomeProps) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormData>({ name: '', phone: '', grade: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        {/* German stripe accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
          <div className="flex-1 bg-gray-700" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-amber-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block bg-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-amber-400/30">
                Державний заклад освіти · Київ
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Ліцей №167<br />
              <span className="text-red-500">з поглибленим</span><br />
              <span className="text-amber-400">вивченням</span> німецької
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              Провідний мовний заклад Києва. Ми готуємо учнів до успіху в навчанні, міжнародних іспитах
              та майбутній кар'єрі через глибоке знання&nbsp;
              <span className="text-amber-400 font-semibold">Deutsche Sprache</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
              >
                Вступити до ліцею
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('contacts')}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Контакти
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold">4.86</span>
              <span className="text-gray-400 text-sm">у Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center group">
                <p className="text-3xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors">
                  {value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Наші переваги
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Чому обирають Ліцей №167?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ми поєднуємо якісну загальну освіту з глибоким вивченням німецької мови та культури.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map(({ icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Про заклад
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-5">
                Більше 55 років<br />якісної освіти
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ліцей №167 — заклад з багатою традицією вивчення німецької мови. Заснований у 1969 році,
                ми виховали тисячі успішних випускників, які продовжили навчання в провідних університетах
                України, Німеччини та Австрії.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Акредитований ліцей державної форми власності',
                  'Партнер Goethe-Institut Ukraina',
                  'Міжнародні програми обміну учнями',
                  'Сучасна матеріально-технічна база',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('about')}
                className="flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
              >
                Детальніше про нас
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600/10 rounded-2xl" />
              <img
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying"
                className="relative rounded-2xl shadow-xl w-full object-cover h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Готові стати частиною нашої спільноти?
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Подайте заявку на вступ вже сьогодні або зателефонуйте нам для консультації.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
            >
              Подати заявку
            </button>
            <a
              href="tel:+380442923133"
              className="flex items-center gap-2 bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-red-800 transition-colors border border-red-500"
            >
              <Phone className="w-4 h-4" />
              +380 44 292 3133
            </a>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setShowModal(false); setSubmitted(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-9 h-9 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Заявку надіслано!</h3>
                <p className="text-gray-500 text-sm">Ми зв'яжемося з вами найближчим часом.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Заявка на вступ</h3>
                <p className="text-sm text-gray-500 mb-6">Заповніть форму — ми зателефонуємо вам.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ваше ім'я *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Іван Іваненко"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+380 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">До якого класу вступаєте?</label>
                    <select
                      value={form.grade}
                      onChange={(e) => setForm({ ...form, grade: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Оберіть клас</option>
                      {Array.from({ length: 11 }, (_, i) => i + 1).map((c) => (
                        <option key={c} value={c}>{c} клас</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Коментар</label>
                    <textarea
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      rows={3}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="Додаткова інформація..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    Надіслати заявку
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
