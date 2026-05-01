import { useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  CheckCircle,
  FileText,
  GraduationCap,
  Users,
  Calendar,
  Target
} from 'lucide-react';

const sections = [
  {
    title: 'Навчальний план',
    icon: GraduationCap,
    border: 'border-red-100',
    bg: 'bg-red-50',
    color: 'text-red-600',
    desc: 'Офіційні навчальні плани для сімейної форми навчання.',
    semesters: [
      {
        label: '1 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/plan-sem1-1.pdf' },
          { cls: '2 клас', href: '/docs/plan-sem1-2.pdf' },
          { cls: '3 клас', href: '/docs/plan-sem1-3.pdf' },
          { cls: '4 клас', href: '/docs/plan-sem1-4.pdf' },
          { cls: '5 клас', href: '/docs/plan-sem1-5.pdf' },
          { cls: '6 клас', href: '/docs/plan-sem1-6.pdf' },
          { cls: '7 клас', href: '/docs/plan-sem1-7.pdf' },
          { cls: '8 клас', href: '/docs/plan-sem1-8.pdf' },
          { cls: '9 клас', href: '/docs/plan-sem1-9.pdf' },
          { cls: '10 клас', href: '/docs/plan-sem1-10.pdf' },
          { cls: '11 клас', href: '/docs/plan-sem1-11.pdf' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/plan-sem2-1.pdf' },
          { cls: '2 клас', href: '/docs/plan-sem2-2.pdf' },
          { cls: '3 клас', href: '/docs/plan-sem2-3.pdf' },
          { cls: '4 клас', href: '/docs/plan-sem2-4.pdf' },
          { cls: '5 клас', href: '/docs/plan-sem2-5.pdf' },
          { cls: '6 клас', href: '/docs/plan-sem2-6.pdf' },
          { cls: '7 клас', href: '/docs/plan-sem2-7.pdf' },
          { cls: '8 клас', href: '/docs/plan-sem2-8.pdf' },
          { cls: '9 клас', href: '/docs/plan-sem2-9.pdf' },
          { cls: '10 клас', href: '/docs/plan-sem2-10.pdf' },
          { cls: '11 клас', href: '/docs/plan-sem2-11.pdf' },
        ],
      },
    ],
  },

  {
    title: 'Завдання для атестації',
    icon: Target,
    border: 'border-amber-100',
    bg: 'bg-amber-50',
    color: 'text-amber-600',
    desc: 'Річне оцінювання учнів на сімейній формі.',
    semesters: [
      {
        label: '1 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/att-1-1.pdf' },
          { cls: '2 клас', href: '/docs/att-1-2.pdf' },
          { cls: '3 клас', href: '/docs/att-1-3.pdf' },
          { cls: '4 клас', href: '/docs/att-1-4.pdf' },
          { cls: '5 клас', href: '/docs/att-1-5.pdf' },
          { cls: '6 клас', href: '/docs/att-1-6.pdf' },
          { cls: '7 клас', href: '/docs/att-1-7.pdf' },
          { cls: '8 клас', href: '/docs/att-1-8.pdf' },
          { cls: '9 клас', href: '/docs/att-1-9.pdf' },
          { cls: '10 клас', href: '/docs/att-1-10.pdf' },
          { cls: '11 клас', href: '/docs/att-1-11.pdf' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/att-2-1.pdf' },
          { cls: '2 клас', href: '/docs/att-2-2.pdf' },
          { cls: '3 клас', href: '/docs/att-2-3.pdf' },
          { cls: '4 клас', href: '/docs/att-2-4.pdf' },
          { cls: '5 клас', href: '/docs/att-2-5.pdf' },
          { cls: '6 клас', href: '/docs/att-2-6.pdf' },
          { cls: '7 клас', href: '/docs/att-2-7.pdf' },
          { cls: '8 клас', href: '/docs/att-2-8.pdf' },
          { cls: '9 клас', href: '/docs/att-2-9.pdf' },
          { cls: '10 клас', href: '/docs/att-2-10.pdf' },
          { cls: '11 клас', href: '/docs/att-2-11.pdf' },
        ],
      },
    ],
  },

  {
    title: 'Розклад консультацій',
    icon: Calendar,
    border: 'border-blue-100',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    desc: 'Графік консультацій для учнів.',
    semesters: [
      {
        label: '1 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/cons-1-1.pdf' },
          { cls: '2 клас', href: '/docs/cons-1-2.pdf' },
          { cls: '3 клас', href: '/docs/cons-1-3.pdf' },
          { cls: '4 клас', href: '/docs/cons-1-4.pdf' },
          { cls: '5 клас', href: '/docs/cons-1-5.pdf' },
          { cls: '6 клас', href: '/docs/cons-1-6.pdf' },
          { cls: '7 клас', href: '/docs/cons-1-7.pdf' },
          { cls: '8 клас', href: '/docs/cons-1-8.pdf' },
          { cls: '9 клас', href: '/docs/cons-1-9.pdf' },
          { cls: '10 клас', href: '/docs/cons-1-10.pdf' },
          { cls: '11 клас', href: '/docs/cons-1-11.pdf' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/cons-2-1.pdf' },
          { cls: '2 клас', href: '/docs/cons-2-2.pdf' },
          { cls: '3 клас', href: '/docs/cons-2-3.pdf' },
          { cls: '4 клас', href: '/docs/cons-2-4.pdf' },
          { cls: '5 клас', href: '/docs/cons-2-5.pdf' },
          { cls: '6 клас', href: '/docs/cons-2-6.pdf' },
          { cls: '7 клас', href: '/docs/cons-2-7.pdf' },
          { cls: '8 клас', href: '/docs/cons-2-8.pdf' },
          { cls: '9 клас', href: '/docs/cons-2-9.pdf' },
          { cls: '10 клас', href: '/docs/cons-2-10.pdf' },
          { cls: '11 клас', href: '/docs/cons-2-11.pdf' },
        ],
      },
    ],
  },

  // 🔥 4-Й АККОРДЕОН
  {
    title: 'Додаткові матеріали',
    icon: Users,
    border: 'border-green-100',
    bg: 'bg-green-50',
    color: 'text-green-600',
    desc: 'Додаткові навчальні матеріали.',
    semesters: [
      {
        label: '1 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/add-1-1.pdf' },
          { cls: '2 клас', href: '/docs/add-1-2.pdf' },
          { cls: '3 клас', href: '/docs/add-1-3.pdf' },
          { cls: '4 клас', href: '/docs/add-1-4.pdf' },
          { cls: '5 клас', href: '/docs/add-1-5.pdf' },
          { cls: '6 клас', href: '/docs/add-1-6.pdf' },
          { cls: '7 клас', href: '/docs/add-1-7.pdf' },
          { cls: '8 клас', href: '/docs/add-1-8.pdf' },
          { cls: '9 клас', href: '/docs/add-1-9.pdf' },
          { cls: '10 клас', href: '/docs/add-1-10.pdf' },
          { cls: '11 клас', href: '/docs/add-1-11.pdf' },
        ],
      },
      {
        label: '2 Семестр',
        classes: [
          { cls: '1 клас', href: '/docs/add-2-1.pdf' },
          { cls: '2 клас', href: '/docs/add-2-2.pdf' },
          { cls: '3 клас', href: '/docs/add-2-3.pdf' },
          { cls: '4 клас', href: '/docs/add-2-4.pdf' },
          { cls: '5 клас', href: '/docs/add-2-5.pdf' },
          { cls: '6 клас', href: '/docs/add-2-6.pdf' },
          { cls: '7 клас', href: '/docs/add-2-7.pdf' },
          { cls: '8 клас', href: '/docs/add-2-8.pdf' },
          { cls: '9 клас', href: '/docs/add-2-9.pdf' },
          { cls: '10 клас', href: '/docs/add-2-10.pdf' },
          { cls: '11 клас', href: '/docs/add-2-11.pdf' },
        ],
      },
    ],
  },
];

export default function FamilyEducation() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="pt-20">

      {/* HERO — НЕ ТРОГАЮ */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-full object-cover opacity-20"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col">
          <div className="flex-1 bg-gray-700" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-amber-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-white">
            Сімейна форма <span className="text-amber-400">навчання</span>
          </h1>
          <p className="text-gray-300 mt-3">
            Документи та матеріали
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-4">

          {sections.map((section, i) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className={`border ${section.border} rounded-2xl overflow-hidden`}
              >

                <button
                  className="w-full flex justify-between p-6"
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                >

                  <div className="flex gap-4">
                    <div className={`w-12 h-12 ${section.bg} ${section.color} flex items-center justify-center rounded-xl`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">{section.title}</h3>
                      <p className="text-sm text-gray-500">{section.desc}</p>
                    </div>
                  </div>

                  <ChevronRight className={`transition-transform ${openSection === i ? 'rotate-90' : ''}`} />

                </button>

                {openSection === i && (
                  <div className={`border-t ${section.border} grid md:grid-cols-2`}>

                    {section.semesters.map((sem) => (
                      <div key={sem.label} className="p-6">

                        <p className={`text-sm font-bold mb-3 ${section.color}`}>
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
                              <BookOpen className="w-4 h-4 text-gray-300 ml-auto" />
                            </a>
                          ))}
                        </div>

                      </div>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
