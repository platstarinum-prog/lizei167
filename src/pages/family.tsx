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
          { cls: '1 клас', href: '/docs/1-sem1.pdf' },
          { cls: '2 клас', href: '/docs/2-sem1.pdf' },
          { cls: '3 клас', href: '/docs/3-sem1.pdf' },
          { cls: '4 клас', href: '/docs/4-sem1.pdf' },
          { cls: '5 клас', href: '/docs/5-sem1.pdf' },
          { cls: '6 клас', href: '/docs/6-sem1.pdf' },
          { cls: '7 клас', href: '/docs/7-sem1.pdf' },
          { cls: '8 клас', href: '/docs/8-sem1.pdf' },
          { cls: '9 клас', href: '/docs/9-sem1.pdf' },
          { cls: '10 клас', href: '/docs/10-sem1.pdf' },
          { cls: '11 клас', href: '/docs/11-sem1.pdf' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/1-sem2.pdf' },
          { cls: '2 клас', href: '/docs/2-sem2.pdf' },
          { cls: '3 клас', href: '/docs/3-sem2.pdf' },
          { cls: '4 клас', href: '/docs/4-sem2.pdf' },
          { cls: '5 клас', href: '/docs/5-sem2.pdf' },
          { cls: '6 клас', href: '/docs/6-sem2.pdf' },
          { cls: '7 клас', href: '/docs/7-sem2.pdf' },
          { cls: '8 клас', href: '/docs/8-sem2.pdf' },
          { cls: '9 клас', href: '/docs/9-sem2.pdf' },
          { cls: '10 клас', href: '/docs/10-sem2.pdf' },
          { cls: '11 клас', href: '/docs/11-sem2.pdf' },
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
          { cls: '1 клас', href: '/docs/att-1-sem1.pdf' },
          { cls: '2 клас', href: '/docs/att-2-sem1.pdf' },
          { cls: '3 клас', href: '/docs/att-3-sem1.pdf' },
          { cls: '4 клас', href: '/docs/att-4-sem1.pdf' },
          { cls: '5 клас', href: '/docs/att-5-sem1.pdf' },
          { cls: '6 клас', href: '/docs/att-6-sem1.pdf' },
          { cls: '7 клас', href: '/docs/att-7-sem1.pdf' },
          { cls: '8 клас', href: '/docs/att-8-sem1.pdf' },
          { cls: '9 клас', href: '/docs/att-9-sem1.pdf' },
          { cls: '10 клас', href: '/docs/att-10-sem1.pdf' },
          { cls: '11 клас', href: '/docs/att-11-sem1.pdf' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/att-1-sem2.pdf' },
          { cls: '2 клас', href: '/docs/att-2-sem2.pdf' },
          { cls: '3 клас', href: '/docs/att-3-sem2.pdf' },
          { cls: '4 клас', href: '/docs/att-4-sem2.pdf' },
          { cls: '5 клас', href: '/docs/att-5-sem2.pdf' },
          { cls: '6 клас', href: '/docs/att-6-sem2.pdf' },
          { cls: '7 клас', href: '/docs/att-7-sem2.pdf' },
          { cls: '8 клас', href: '/docs/att-8-sem2.pdf' },
          { cls: '9 клас', href: '/docs/att-9-sem2.pdf' },
          { cls: '10 клас', href: '/docs/att-10-sem2.pdf' },
          { cls: '11 клас', href: '/docs/att-11-sem2.pdf' },
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
          { cls: '1 клас', href: '/docs/cons-1-sem1.pdf' },
          { cls: '2 клас', href: '/docs/cons-2-sem1.pdf' },
          { cls: '3 клас', href: '/docs/cons-3-sem1.pdf' },
          { cls: '4 клас', href: '/docs/cons-4-sem1.pdf' },
          { cls: '5 клас', href: '/docs/cons-5-sem1.pdf' },
          { cls: '6 клас', href: '/docs/cons-6-sem1.pdf' },
          { cls: '7 клас', href: '/docs/cons-7-sem1.pdf' },
          { cls: '8 клас', href: '/docs/cons-8-sem1.pdf' },
          { cls: '9 клас', href: '/docs/cons-9-sem1.pdf' },
          { cls: '10 клас', href: '/docs/cons-10-sem1.pdf' },
          { cls: '11 клас', href: '/docs/cons-11-sem1.pdf' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/cons-1-sem2.pdf' },
          { cls: '2 клас', href: '/docs/cons-2-sem2.pdf' },
          { cls: '3 клас', href: '/docs/cons-3-sem2.pdf' },
          { cls: '4 клас', href: '/docs/cons-4-sem2.pdf' },
          { cls: '5 клас', href: '/docs/cons-5-sem2.pdf' },
          { cls: '6 клас', href: '/docs/cons-6-sem2.pdf' },
          { cls: '7 клас', href: '/docs/cons-7-sem2.pdf' },
          { cls: '8 клас', href: '/docs/cons-8-sem2.pdf' },
          { cls: '9 клас', href: '/docs/cons-9-sem2.pdf' },
          { cls: '10 клас', href: '/docs/cons-10-sem2.pdf' },
          { cls: '11 клас', href: '/docs/cons-11-sem2.pdf' },
        ],
      },
    ],
  },
];

export default function FamilyEducation() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="pt-20">

      {/* HERO (НЕ ТРОГАЛ) */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg"
            className="w-full h-full object-cover opacity-15"
            alt="Family"
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

      {/* ACCORDION (ТОЖЕ НЕ ТРОГАЛ СТИЛЬ) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`border ${section.border} rounded-2xl overflow-hidden`}
            >

              <button
                className="w-full flex items-center justify-between p-6"
                onClick={() =>
                  setOpenSection(openSection === i ? null : i)
                }
              >
                <div>
                  <h3 className="font-bold text-lg">{section.title}</h3>
                  <p className="text-sm text-gray-500">{section.desc}</p>
                </div>

                <ChevronRight
                  className={`transition-transform ${
                    openSection === i ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {openSection === i && (
                <div className={`border-t ${section.border} grid md:grid-cols-2`}>
                  {section.semesters.map((sem) => (
                    <div key={sem.label} className="p-6">
                      <p className={`font-bold text-sm mb-3 ${section.color}`}>
                        {sem.label}
                      </p>

                      <div className="space-y-2">
                        {sem.classes.map((item) => (
                          <a
                            key={item.cls}
                            href={item.href}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                          >
                            <CheckCircle className={`w-4 h-4 ${section.color}`} />
                            <span className="text-sm">{item.cls}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* CTA (ТОЖЕ НЕ ТРОГАЛ) */}
      <section className="py-16 bg-gray-50 text-center">
        <a
          href="tel:+380000000000"
          className="bg-red-600 text-white px-6 py-3 rounded-xl"
        >
          Зателефонувати
        </a>
      </section>

    </div>
  );
}
