import { useState } from 'react';
import { FileText, DollarSign, Users, BarChart2, ChevronRight } from 'lucide-react';

const openData = [
  'Статут закладу освіти',
  'Ліцензії на провадження освітньої діяльності. Свідоцтво про атестацію',
  'Структура та органи управління закладу освіти',
  'Кадровий склад згідно з ліцензійними умовами',
  'Освітні програми та перелік освітніх компонентів',
  'Територія обслуговування, закріплена за закладом',
  'Ліцензований обсяг та фактична кількість здобувачів освіти',
  'Мова освітнього процесу',
  'Наявність вакантних посад, умови та порядок проведення конкурсу',
  'Матеріально-технічне забезпечення',
  'Результати моніторингу якості освіти',
  'Річний звіт про діяльність закладу',
  'Правила прийому',
  'Умови доступності для осіб з особливими освітніми потребами',
  'Перелік додаткових освітніх та інших послуг',
  'Правила поведінки здобувача освіти',
  'Протидія булінгу, насильству та жорстокому поводженню з дітьми',
];

export default function Transparency() {
  const [openModal, setOpenModal] = useState(false);

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

      {/* Публичная информация */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Відкритість
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Публічна інформація
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Повний перелік відкритих даних відповідно до вимог законодавства.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {openData.map((title, i) => (
              <button
                key={i}
                onClick={() => i === 2 && setOpenModal(true)}
                className="group w-full flex items-center justify-between text-left px-6 py-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-red-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="text-gray-900 font-medium leading-snug">
                  {title}
                </span>

                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Блок 1 */}
      <section className="py-20 bg-gray-50">
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

      {/* CTA */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Маєте запитання щодо діяльності ліцею?
          </h2>
          <p className="text-gray-600 mb-6">
            Ми завжди відкриті до діалогу. Зв'яжіться з нами.
          </p>

          <a
            href="tel:+380442923133"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            Зателефонувати
          </a>
        </div>
      </section>

      {/* POPUP */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
            
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-bold text-gray-900">
                Структура управління
              </h2>

              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5 text-sm text-gray-700 space-y-4">
              {/* вставь сюда свой полный текст */}
              <p><strong>І. Загальні положення</strong></p>
              <p>Ліцей №167 є комунальним закладом освіти...</p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
