import { useState } from 'react';
import { FileText, ChevronRight } from 'lucide-react';

const openData = [
  {
    title: '1. Статут закладу освіти',
    link: 'https://www.lyzeum167.com/_files/ugd/09b7e1_9c641be4511042039cc3eb68e9b4d6bf.pdf',
  },
  {
    title: '2. Ліцензії на провадження освітньої діяльності',
    link: 'https://www.lyzeum167.com/_files/ugd/09b7e1_4681c065983e4e3aa825521d93606f48.pdf',
  },
  {
    title: '3. Структура та органи управління закладу освіти',
    link: '#',
  },
  {
    title: '4. Кадровий склад згідно з ліцензійними умовами',
    link: 'https://www.lyzeum167.com/_files/ugd/09b7e1_b660df42a31248588626a3ed9d512983.pdf',
  },
  {
    title: '5. Освітні програми та перелік освітніх компонентів',
    link: 'https://drive.google.com/file/d/1Ca2cP_wmMVqt0kPzLprrEjHPGQVXQMR0/view',
  },
  {
    title: '6. Територія обслуговування',
    link: 'https://maps.app.goo.gl/UztaEwAx1RFrGLEP6',
  },
  {
    title: '7. Ліцензований обсяг та фактична кількість здобувачів освіти',
    link: 'https://docs.google.com/document/d/e/2PACX-1vSWNBte_d7dK--5GuLyTelmHHytPP_-pc-_mg3NlaR4ZOxLQ2lMdSBdxoooQjhcJaq-0fl9uy0-HSfw/pub',
  },
  {
    title: '8. Мова освітнього процесу',
    link: 'https://docs.google.com/document/d/e/2PACX-1vRZNdnUSOwDc84Y2URcyISm3eXWLiLJ47-HFKddJPUQ0iQ_xH6rQG__oVo2LZJHggWqYSTcw91nIBrU/pub',
  },
  {
    title: '9. Наявність вакантних посад',
    link: 'https://docs.google.com/document/d/e/2PACX-1vQIh91BZfXegzf2WE7XkrZDIkbrquEHTdxQ9Kbm3v1UtvIc91M2fJ5MPoHCCghOTBIlNTutECwplQMK/pub',
  },

  {
    title: '10. Матеріально-технічне забезпечення',
    children: true,
  },

  {
    title: '11. Результати моніторингу якості освіти',
    link: '#',
  },

  {
    title: '12. Річний звіт про діяльність закладу',
    children: true,
  },

  {
    title: '13. Правила прийому',
    children: true,
  },

  {
    title: '14. Умови доступності для осіб з ООП',
    link: '#',
  },
  {
    title: '15. Додаткові освітні послуги',
    link: '#',
  },
  {
    title: '16. Правила поведінки здобувача освіти',
    link: '#',
  },

  {
    title: '17. Протидія булінгу',
    children: true,
  },
];

export default function Openup() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Ми відкриті <span className="text-amber-400">для вас</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg">
            Документи, звіти та інформація у відкритому доступі.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-3">

          {openData.map((item, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">

              <button
                onClick={() => item.children ? toggle(i) : window.open(item.link, '_blank')}
                className="w-full flex justify-between px-6 py-4 text-left hover:bg-gray-50"
              >
                <span>{item.title}</span>
                <ChevronRight
                  className={`transition ${openIndex === i ? 'rotate-90' : ''}`}
                />
              </button>

              {/* DROPDOWNS */}

              {item.children && openIndex === i && (

                <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2 text-sm">

                  {i === 9 && (
                    [2025, 2024, 2023, 2022].map((year) => (
                      <div key={year} className="flex flex-col gap-1">
                        <a href="#" target="_blank" className="flex justify-between hover:text-red-600">
                          Кошторис на {year} рік <ChevronRight className="w-4 h-4" />
                        </a>
                        <a href="#" target="_blank" className="flex justify-between hover:text-red-600">
                          Звіт за {year} рік <ChevronRight className="w-4 h-4" />
                        </a>
                        <a href="#" target="_blank" className="flex justify-between hover:text-red-600">
                          Матеріальні цінності за {year} рік <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    ))
                  )}

                  {i === 11 && (
                    <>
                      <a href="#" className="flex justify-between hover:text-red-600">
                        Річний звіт за 2024–2025 <ChevronRight className="w-4 h-4" />
                      </a>
                      <a href="#" className="flex justify-between hover:text-red-600">
                        Річний звіт за 2023–2024 <ChevronRight className="w-4 h-4" />
                      </a>
                      <a href="#" className="flex justify-between hover:text-red-600">
                        Річний звіт за 2022–2023 <ChevronRight className="w-4 h-4" />
                      </a>
                    </>
                  )}

                  {i === 12 && (
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vSTzwGXt5MUO6zxjRbRjAY7dtcDTfpiKU79MJZkxhZJE6X3F8En3RGAr0jpxUhHXQp6aS8Rav4mJleX/pub"
                      target="_blank"
                      className="flex justify-between hover:text-red-600"
                    >
                      Правила прийому <ChevronRight className="w-4 h-4" />
                    </a>
                  )}

                  {i === 16 && (
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vSLvSwAPJ88RiyDVhCaKXI3vndUh3LRQz4AWNmgFohN7WDTviAlP9lRCsOYiB0-2lhYquAp-Y8yoSo3/pub"
                      target="_blank"
                      className="flex justify-between hover:text-red-600"
                    >
                      План заходів щодо протидії булінгу <ChevronRight className="w-4 h-4" />
                    </a>
                  )}

                </div>

              )}

            </div>
          ))}

        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-4">
          {[
            { title: 'Статут ліцею', desc: 'Основний документ' },
            { title: 'Ліцензія', desc: 'Дозвіл на діяльність' },
            { title: 'Накази', desc: 'Документи адміністрації' },
          ].map((item) => (
            <div key={item.title} className="p-6 border rounded-xl">
              <FileText className="mb-3" />
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
