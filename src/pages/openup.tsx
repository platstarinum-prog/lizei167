import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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

  // 10 ПРОСТОЙ
  {
    title: '10. Матеріально-технічне забезпечення',
    children: true,
    content: (
      <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2">

        <a href="https://drive.google.com/file/d/1hLb8FI0gy4wnQ6WLgPBAOPdP4T1dRTqz/view?usp=sharing" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Кошторис на 2025 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="https://drive.google.com/file/d/1ksv3UcZDBIsOR0tjDlAsRm32fB6y_FcJ/view?usp=sharing" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Звіт за 2025 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600 mb-2">
          Матеріальні цінності за 2025 рік <ChevronRight className="w-4 h-4" />
        </a>

        <a href="https://drive.google.com/file/d/1kd7QvFgeYLvxxfQuQHVZqK9kkjluuegE/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Кошторис на 2024 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="https://drive.google.com/file/d/1mwtBZVrJrVy_z9MGwRxFXlWilYwy3ndS/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Звіт за 2024 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="https://drive.google.com/file/d/1NIZRBR2pE5ctw_dbm0sMXGYaVfuO_aPE/view?usp=drive_link" target="_blank" className="flex justify-between text-sm hover:text-red-600 mb-2">
          Матеріальні цінності за 2024 рік <ChevronRight className="w-4 h-4" />
        </a>

        <a href="https://drive.google.com/file/d/1oTyC1A5uZ3Bv5PakaoaY52ZXCB49XFm6/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Кошторис на 2023 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="https://drive.google.com/file/d/1PQSRD1uU3etWrGnKAYxXPYJMpLqcSif6/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Звіт за 2023 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="https://drive.google.com/file/d/1LO0sCD4mbRhuywiVHNFvLguafBRY45sw/view?usp=drive_link" target="_blank" className="flex justify-between text-sm hover:text-red-600 mb-2">
          Матеріальні цінності за 2023 рік <ChevronRight className="w-4 h-4" />
        </a>

        <a href="https://drive.google.com/file/d/1hIL9FCw0PWQ36O0BdGtkSEFa2hDzCKHi/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Кошторис на 2022 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="https://drive.google.com/file/d/1fV8oaJssoeOeOHjlUeU5RT1WdegLpIwL/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Звіт за 2022 рік <ChevronRight className="w-4 h-4" />
        </a>
        <a href="https://drive.google.com/file/d/1geiPfXFsLgT3sWyAtE5-ea8da09aHaL2/view?usp=drive_link" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Матеріальні цінності за 2022 рік <ChevronRight className="w-4 h-4" />
        </a>

      </div>
    ),
  },

  {
    title: '11. Результати моніторингу якості освіти',
    link: '#',
  },

  // 12
  {
    title: '12. Річний звіт про діяльність закладу',
    children: true,
    content: (
      <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2">

        <a href="https://drive.google.com/file/d/1pa4ascygff7y6J5Lko0APTALNAsggQqd/view?usp=sharing" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Річний звіт за 2024–2025 н. р. <ChevronRight className="w-4 h-4" />
        </a>

        <a href="https://drive.google.com/file/d/1Kq8hGaw2Yej5GJSQy3tCSA0IPKYUpVsD/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Річний звіт за 2023–2024 н. р. <ChevronRight className="w-4 h-4" />
        </a>

      </div>
    ),
  },

  {
    title: '13. Правила прийому',
    link: 'https://docs.google.com/document/d/e/2PACX-1vSTzwGXt5MUO6zxjRbRjAY7dtcDTfpiKU79MJZkxhZJE6X3F8En3RGAr0jpxUhHXQp6aS8Rav4mJleX/pub',
  },
  { title: '14. Умови доступності для осіб з ООП', link: '#' },
  { title: '15. Додаткові освітні послуги', link: '#' },
  { title: '16. Правила поведінки здобувача освіти', link: '#' },
  {
    title: '17. Протидія булінгу',
    link: 'https://docs.google.com/document/d/e/2PACX-1vSLvSwAPJ88RiyDVhCaKXI3vndUh3LRQz4AWNmgFohN7WDTviAlP9lRCsOYiB0-2lhYquAp-Y8yoSo3/pub',
  },
];

export default function Openup() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (item: any, index: number) => {
    if (item.children) {
      setOpenIndex(openIndex === index ? null : index);
    } else if (item.link) {
      window.open(item.link, '_blank');
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          <div className="flex flex-col gap-3">
            {openData.map((item, i) => (
              <div key={i}>

                <button
                  onClick={() => handleClick(item, i)}
                  className="group w-full flex items-center justify-between text-left px-6 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                >
                  <span className="text-gray-900 font-medium">
                    {item.title}
                  </span>

                  <ChevronRight className={`w-5 h-5 transition ${
                    openIndex === i
                      ? 'rotate-90 text-red-600'
                      : 'text-gray-400 group-hover:text-red-600 group-hover:translate-x-1'
                  }`} />
                </button>

                {item.children && openIndex === i && (
                  <div>{item.content}</div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
