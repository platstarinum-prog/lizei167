import { BookOpen, ChevronRight, CheckCircle, FileText } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    title: 'Навчальний план',
    subtitle: 'Програми',
    desc: 'Офіційні навчальні плани для сімейної форми навчання за класами та семестрами.',
    badge: 'Плани',
    badgeColor: 'bg-red-100 text-red-700',
    border: 'border-red-100',
    bg: 'bg-red-50',
    color: 'text-red-600',
    semesters: [
      {
        label: '1 Семестр',
        classes: [
          { cls: '1 клас', href: '#' },
          { cls: '2 клас', href: '#' },
          { cls: '3 клас', href: '#' },
          { cls: '4 клас', href: '#' },
          { cls: '5 клас', href: '#' },
          { cls: '6 клас', href: '#' },
          { cls: '7 клас', href: '#' },
          { cls: '8 клас', href: '#' },
          { cls: '9 клас', href: '#' },
          { cls: '10 клас', href: '#' },
          { cls: '11 клас', href: '#' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '#' },
          { cls: '2 клас', href: '#' },
          { cls: '3 клас', href: '#' },
          { cls: '4 клас', href: '#' },
          { cls: '5 клас', href: '#' },
          { cls: '6 клас', href: '#' },
          { cls: '7 клас', href: '#' },
          { cls: '8 клас', href: '#' },
          { cls: '9 клас', href: '#' },
          { cls: '10 клас', href: '#' },
          { cls: '11 клас', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Завдання для атестації',
    subtitle: 'Атестація',
    desc: 'Завдання для річного оцінювання учнів на сімейній формі навчання.',
    badge: 'Атестація',
    badgeColor: 'bg-amber-100 text-amber-700',
    border: 'border-amber-100',
    bg: 'bg-amber-50',
    color: 'text-amber-600',
    semesters: [
      {
        label: '1 Семестр',
        classes: [
          { cls: '1 клас', href: '#' },
          { cls: '2 клас', href: '#' },
          { cls: '3 клас', href: '#' },
          { cls: '4 клас', href: '#' },
          { cls: '5 клас', href: '#' },
          { cls: '6 клас', href: '#' },
          { cls: '7 клас', href: '#' },
          { cls: '8 клас', href: '#' },
          { cls: '9 клас', href: '#' },
          { cls: '10 клас', href: '#' },
          { cls: '11 клас', href: '#' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '#' },
          { cls: '2 клас', href: '#' },
          { cls: '3 клас', href: '#' },
          { cls: '4 клас', href: '#' },
          { cls: '5 клас', href: '#' },
          { cls: '6 клас', href: '#' },
          { cls: '7 клас', href: '#' },
          { cls: '8 клас', href: '#' },
          { cls: '9 клас', href: '#' },
          { cls: '10 клас', href: '#' },
          { cls: '11 клас', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Розклад консультацій',
    subtitle: 'Консультації',
    desc: 'Графік індивідуальних та групових консультацій для учнів на сімейному навчанні.',
    badge: 'Консультації',
    badgeColor: 'bg-blue-100 text-blue-700',
    border: 'border-blue-100',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    semesters: [
      {
        label: '1 Семестр',
        classes: [
          { cls: '1 клас', href: '#' },
          { cls: '2 клас', href: '#' },
          { cls: '3 клас', href: '#' },
          { cls: '4 клас', href: '#' },
          { cls: '5 клас', href: '#' },
          { cls: '6 клас', href: '#' },
          { cls: '7 клас', href: '#' },
          { cls: '8 клас', href: '#' },
          { cls: '9 клас', href: '#' },
          { cls: '10 клас', href: '#' },
          { cls: '11 клас', href: '#' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '#' },
          { cls: '2 клас', href: '#' },
          { cls: '3 клас', href: '#' },
          { cls: '4 клас', href: '#' },
          { cls: '5 клас', href: '#' },
          { cls: '6 клас', href: '#' },
          { cls: '7 клас', href: '#' },
          { cls: '8 клас', href: '#' },
          { cls: '9 клас', href: '#' },
          { cls: '10 клас', href: '#' },
          { cls: '11 клас', href: '#' },
        ],
      },
    ],
  },
];

export default function FamilyEducation() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Family Education"
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
            Сімейне навчання
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Сімейна форма <span className="text-amber-400">навчання</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
            Офіційні документи, навчальні плани та матеріали для учнів на сімейній формі навчання.
          </p>
        </div>
      </section>

      {/* Accordion sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Документи та матеріали
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
              Навчальні ресурси
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Оберіть розділ та завантажте необхідні матеріали для вашого класу.
            </p>
          </div>

          <div className="space-y-4">
            {sections.map(({ title, desc, badge, badgeColor, border, bg, color, semesters }, i) => (
              <div
                key={title}
                className={`border ${border} rounded-2xl overflow-hidden transition-all duration-300 ${
                  openSection === i ? 'shadow-md' : 'shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  className="w-full text-left p-6 flex items-start gap-4"
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                >
                  <div className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center shrink-0 mt-0.5`}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeColor}`}>
                        {badge}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 mt-1 ${
                      openSection === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {openSection === i && (
                  <div className={`border-t ${border}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                      {semesters.map((sem) => (
                        <div key={sem.label} className="p-6">
                          <div className="mb-4">
                            <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>
                              {sem.label}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {sem.classes.map(({ cls, href }) => (
                              <li key={cls}>
                                
                                  href={href}
                                  className="flex items-center gap-3 group py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <CheckCircle className={`w-4 h-4 ${color} shrink-0`} />
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 flex-1">
                                    {cls}
                                  </span>
                                  <BookOpen className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Маєте запитання щодо сімейного навчання?
          </h2>
          <p className="text-gray-600 mb-6">
            Зверніться до нас — ми допоможемо з оформленням документів та підбором програми.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            
              href="#"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              Зателефонувати
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
