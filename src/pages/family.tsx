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
      {/* HERO */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Family Education"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Сімейна форма <span className="text-amber-400">навчання</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg">
            Офіційні документи та матеріали для учнів.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-4">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className={`border ${section.border} rounded-2xl overflow-hidden transition-all ${
                  openSection === i ? 'shadow-md' : 'shadow-sm'
                }`}
              >
                <button
                  className="w-full text-left p-6 flex items-start gap-4"
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                >
                  <div className={`w-12 h-12 ${section.bg} ${section.color} rounded-xl flex items-center justify-center`}>
                    <FileText className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{section.title}</h3>
                    <p className="text-gray-500 text-sm">{section.desc}</p>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      openSection === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {openSection === i && (
                  <div className={`border-t ${section.border}`}>
                    <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">

                      {section.semesters.map((sem) => (
                        <div key={sem.label} className="p-6">
                          <p className={`text-xs font-bold uppercase ${section.color} mb-3`}>
                            {sem.label}
                          </p>

                          <ul className="space-y-2">
                            {sem.classes.map((item) => (
                              <li key={item.cls}>
                                <a
                                  href={item.href}
                                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50"
                                >
                                  <CheckCircle className={`w-4 h-4 ${section.color}`} />
                                  <span className="text-sm text-gray-700 flex-1">
                                    {item.cls}
                                  </span>
                                  <BookOpen className="w-4 h-4 text-gray-300" />
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
      <section className="py-16 bg-amber-50 border-t border-amber-100 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Маєте запитання?
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-xl"
        >
          Зателефонувати
        </a>
      </section>
    </div>
  );
}
