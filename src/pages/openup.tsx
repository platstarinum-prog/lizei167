import { FileText, DollarSign, Users, BarChart2, ChevronRight } from 'lucide-react';

export default function Transparency() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Transparency"
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
            Відкритість та прозорість
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Ми відкриті <span className="text-amber-400">для вас</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
            Документи, звіти та інформація про діяльність ліцею у відкритому доступі.
          </p>
        </div>
      </section>

      {/* Блок 1 — Документи */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Документи
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Офіційні документи
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Статути, ліцензії, накази та інші офіційні матеріали ліцею.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FileText className="w-6 h-6" />, title: 'Статут ліцею', desc: 'Основний установчий документ закладу.' },
              { icon: <FileText className="w-6 h-6" />, title: 'Ліцензія на освітню діяльність', desc: 'Дозвіл на провадження освітньої діяльності.' },
              { icon: <FileText className="w-6 h-6" />, title: 'Накази та розпорядження', desc: 'Актуальні накази адміністрації ліцею.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                  <button className="mt-3 flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
                    Переглянути <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 2 — Фінанси */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Фінанси
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Фінансова звітність
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Відкриті дані про бюджет, видатки та фінансову діяльність закладу.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <DollarSign className="w-6 h-6" />, title: 'Бюджет на 2024 рік', desc: 'Затверджений кошторис доходів та видатків.' },
              { icon: <BarChart2 className="w-6 h-6" />, title: 'Річний фінансовий звіт', desc: 'Звіт про виконання кошторису за минулий рік.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="border border-amber-100 rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                  <button className="mt-3 flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                    Завантажити <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 3 — Управління */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Управління
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Структура управління
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Органи управління ліцею та їхні повноваження.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <Users className="w-6 h-6" />, title: 'Педагогічна рада', desc: 'Колегіальний орган управління навчальним процесом.' },
              { icon: <Users className="w-6 h-6" />, title: 'Батьківський комітет', desc: 'Представники батьків у вирішенні ключових питань.' },
              { icon: <Users className="w-6 h-6" />, title: 'Учнівське самоврядування', desc: 'Голос учнів у житті ліцею.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Маєте запитання щодо діяльності ліцею?
          </h2>
          <p className="text-gray-600 mb-6">Ми завжди відкриті до діалогу. Зв'яжіться з нами.</p>
          
            href="tel:+380442923133"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            Зателефонувати
          </a>
        </div>
      </section>

    </div>
  );
}
