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
    desc: 'Офіційні навчальні плани.',
    semesters: [
      {
        label: '1 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/plan-sem1-${i + 1}.pdf`,
        })),
      },
      {
        label: '2 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/plan-sem2-${i + 1}.pdf`,
        })),
      },
    ],
  },

  {
    title: 'Завдання для атестації',
    icon: Target,
    border: 'border-amber-100',
    bg: 'bg-amber-50',
    color: 'text-amber-600',
    desc: 'Річне оцінювання учнів.',
    semesters: [
      {
        label: '1 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/att-sem1-${i + 1}.pdf`,
        })),
      },
      {
        label: '2 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/att-sem2-${i + 1}.pdf`,
        })),
      },
    ],
  },

  {
    title: 'Розклад консультацій',
    icon: Calendar,
    border: 'border-blue-100',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    desc: 'Графік консультацій.',
    semesters: [
      {
        label: '1 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/cons-sem1-${i + 1}.pdf`,
        })),
      },
      {
        label: '2 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/cons-sem2-${i + 1}.pdf`,
        })),
      },
    ],
  },

  // 🔥 4-Й АККОРДЕОН (НОВЫЙ)
  {
    title: 'Додаткові матеріали',
    icon: Users,
    border: 'border-green-100',
    bg: 'bg-green-50',
    color: 'text-green-600',
    desc: 'Додаткові навчальні ресурси та файли.',
    semesters: [
      {
        label: '1 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/additional-sem1-${i + 1}.pdf`,
        })),
      },
      {
        label: '2 Семестр',
        classes: Array.from({ length: 11 }, (_, i) => ({
          cls: `${i + 1} клас`,
          href: `/docs/additional-sem2-${i + 1}.pdf`,
        })),
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
        <div className="absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white">
            Сімейне навчання
          </h1>
          <p className="text-gray-300 mt-3">
            Документи та навчальні матеріали
          </p>
        </div>
      </section>

      {/* ACCORDIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-4">

          {sections.map((section, i) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className={`border ${section.border} rounded-2xl overflow-hidden`}
              >

                {/* HEADER */}
                <button
                  className="w-full flex items-center justify-between p-6"
                  onClick={() =>
                    setOpenSection(openSection === i ? null : i)
                  }
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${section.bg} ${section.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">{section.title}</h3>
                      <p className="text-sm text-gray-500">{section.desc}</p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`transition-transform ${
                      openSection === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* CONTENT */}
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

      {/* CTA */}
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
