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

  // 10
  {
    title: '10. Матеріально-технічне забезпечення',
    children: true,
    content: (
      <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2">
        {[2025, 2024, 2023, 2022].map((year) => (
          <div key={year} className="flex flex-col">

            <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
              Кошторис на {year} рік <ChevronRight className="w-4 h-4" />
            </a>

            <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
              Звіт за {year} рік <ChevronRight className="w-4 h-4" />
            </a>

            <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600 mb-2">
              Матеріальні цінності за {year} рік <ChevronRight className="w-4 h-4" />
            </a>

          </div>
        ))}
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

        <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Річний звіт за 2024–2025 н. р. <ChevronRight className="w-4 h-4" />
        </a>

        <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Річний звіт за 2023–2024 н. р. <ChevronRight className="w-4 h-4" />
        </a>

        <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
          Річний звіт за 2022–2023 н. р. <ChevronRight className="w-4 h-4" />
        </a>

      </div>
    ),
  },

  // 13
  {
    title: '13. Правила прийому',
    children: true,
    content: (
      <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2">

        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSTzwGXt5MUO6zxjRbRjAY7dtcDTfpiKU79MJZkxhZJE6X3F8En3RGAr0jpxUhHXQp6aS8Rav4mJleX/pub"
          target="_blank"
          className="flex justify-between text-sm hover:text-red-600"
        >
          Правила прийому <ChevronRight className="w-4 h-4" />
        </a>

      </div>
    ),
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

  // 17
  {
    title: '17. Протидія булінгу',
    children: true,
    content: (
      <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2">

        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSLvSwAPJ88RiyDVhCaKXI3vndUh3LRQz4AWNmgFohN7WDTviAlP9lRCsOYiB0-2lhYquAp-Y8yoSo3/pub"
          target="_blank"
          className="flex justify-between text-sm hover:text-red-600"
        >
          План заходів щодо протидії булінгу
          <ChevronRight className="w-4 h-4" />
        </a>

      </div>
    ),
  },
];
