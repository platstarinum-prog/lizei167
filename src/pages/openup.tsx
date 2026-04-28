import { useState } from 'react';
import { FileText, ChevronRight } from 'lucide-react';

const openData = [
  { title: '1. Статут закладу освіти', link: 'https://www.lyzeum167.com/_files/ugd/09b7e1_9c641be4511042039cc3eb68e9b4d6bf.pdf' },
  { title: '2. Ліцензії на провадження освітньої діяльності', link: 'https://www.lyzeum167.com/_files/ugd/09b7e1_4681c065983e4e3aa825521d93606f48.pdf' },
  { title: '3. Структура та органи управління закладу освіти', modal: true },
  { title: '4. Кадровий склад згідно з ліцензійними умовами', link: 'https://www.lyzeum167.com/_files/ugd/09b7e1_b660df42a31248588626a3ed9d512983.pdf' },
  { title: '5. Освітні програми та перелік освітніх компонентів', link: 'https://drive.google.com/file/d/1Ca2cP_wmMVqt0kPzLprrEjHPGQVXQMR0/view?usp=sharing' },
  { title: '6. Територія обслуговування', link: 'https://maps.app.goo.gl/UztaEwAx1RFrGLEP6' },
  { title: '7. Ліцензований обсяг та фактична кількість здобувачів освіти', link: 'https://docs.google.com/document/d/e/2PACX-1vSWNBte_d7dK--5GuLyTelmHHytPP_-pc-_mg3NlaR4ZOxLQ2lMdSBdxoooQjhcJaq-0fl9uy0-HSfw/pub' },
  { title: '8. Мова освітнього процесу', link: 'https://docs.google.com/document/d/e/2PACX-1vRZNdnUSOwDc84Y2URcyISm3eXWLiLJ47-HFKddJPUQ0iQ_xH6rQG__oVo2LZJHggWqYSTcw91nIBrU/pub' },
  { title: '9. Наявність вакантних посад', link: 'https://docs.google.com/document/d/e/2PACX-1vQIh91BZfXegzf2WE7XkrZDIkbrquEHTdxQ9Kbm3v1UtvIc91M2fJ5MPoHCCghOTBIlNTutECwplQMK/pub' },

  { title: '10. Матеріально-технічне забезпечення' },
  { title: '11. Результати моніторингу якості освіти', link: '#' },
  { title: '12. Річний звіт про діяльність закладу', link: '#' },
  { title: '13. Правила прийому', link: '#' },
  { title: '14. Умови доступності для осіб з ООП', link: '#' },
  { title: '15. Перелік додаткових освітніх послуг', link: '#' },
  { title: '16. Правила поведінки здобувача освіти', link: '#' },
  { title: '17. Протидія булінгу, насильству', link: '#' },
];

export default function Transparency() {
  const [openModal, setOpenModal] = useState(false);
  const [openSection, setOpenSection] = useState(null);

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
        <div className="max-w-5xl mx-auto px-4">

          <div className="flex flex-col gap-3">
            {openData.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">

                <button
                  onClick={() => {
                    if (item.modal) return setOpenModal(true);
                    if (i === 9) return setOpenSection(openSection === i ? null : i);
                    if (item.link) window.open(item.link, '_blank');
                  }}
                  className="group w-full flex items-center justify-between text-left px-6 py-4 bg-white hover:bg-gray-50 transition"
                >
                  <span className="text-gray-900 font-medium">
                    {item.title}
                  </span>

                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition ${
                      openSection === i
                        ? 'rotate-90 text-red-600'
                        : 'group-hover:text-red-600 group-hover:translate-x-1'
                    }`}
                  />
                </button>

                {/* ▼ раскрытие для 10 пункта */}
                {i === 9 && openSection === i && (
                 <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2">

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Кошторис на 2025 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Звіт за 2025 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Кошторис на 2024 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="https://drive.google.com/file/d/1mwtBZVrJrVy_z9MGwRxFXlWilYwy3ndS/view" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Звіт за 2024 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Матеріальні цінності за 2024 рік <ChevronRight className="w-4 h-4" />
  </a>

  {/* 2023 */}
  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Кошторис на 2023 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Звіт за 2023 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Матеріальні цінності за 2023 рік <ChevronRight className="w-4 h-4" />
  </a>

  {/* 2022 */}
  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Кошторис на 2022 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Звіт за 2022 рік <ChevronRight className="w-4 h-4" />
  </a>

  <a href="#" target="_blank" className="flex justify-between text-sm hover:text-red-600">
    Матеріальні цінності за 2022 рік <ChevronRight className="w-4 h-4" />
  </a>

</div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-3xl h-[80vh] rounded-xl flex flex-col">
            
            <div className="flex justify-between p-4 border-b">
              <h2 className="font-bold">Структура управління</h2>
              <button onClick={() => setOpenModal(false)}>✕</button>
            </div>

            <div className="overflow-y-auto p-4 text-sm">
              {/* вставь сюда свой текст */}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
