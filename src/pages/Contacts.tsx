import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle, Send } from 'lucide-react';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contacts() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact"
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
            Контакти
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Зв'яжіться <span className="text-amber-400">з нами</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
            Ми завжди раді відповісти на ваші запитання та допомогти з вибором.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Наші контакти</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">Адреса</p>
                    <p className="text-gray-600 text-sm">просп. Соборності, 12В,<br />Київ, Україна, 02000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">Телефон</p>
                    <a href="tel:+380442923133" className="text-red-600 font-semibold hover:underline">
                      +380 44 292 3133
                    </a>
                    <p className="text-gray-500 text-xs mt-0.5">Дзвінки: Пн–Пт, 08:00–18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">Email</p>
                    <a href="mailto:lyceum167@ukr.net" className="text-red-600 font-semibold hover:underline text-sm">
                      lyceum167@ukr.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Графік роботи</p>
                    <div className="space-y-0.5 text-sm text-gray-600">
                      <p><span className="font-medium">Пн–Пт:</span> з 08:00</p>
                      <p><span className="font-medium">Сб–Нд:</span> вихідні</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call button */}
              <a
                href="tel:+380442923133"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Зателефонувати зараз
              </a>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Напишіть нам</h2>
                <p className="text-sm text-gray-500 mb-6">Заповніть форму — відповімо протягом одного робочого дня.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-9 h-9 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Повідомлення надіслано!</h3>
                    <p className="text-gray-500">Ми зв'яжемося з вами найближчим часом.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-red-600 font-semibold hover:underline"
                    >
                      Надіслати ще одне
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ваше ім'я *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Іван Іваненко"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="+380 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Тема запиту</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Оберіть тему</option>
                        <option value="enrollment">Вступ до ліцею</option>
                        <option value="german">Програма з німецької мови</option>
                        <option value="goethe">Підготовка до Goethe-Zertifikat</option>
                        <option value="exchange">Програми обміну</option>
                        <option value="other">Інше</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Повідомлення *</label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder="Ваше запитання або повідомлення..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm hover:shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      Надіслати повідомлення
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">Як нас знайти</h2>
            <p className="text-gray-500 text-sm mt-1">просп. Соборності, 12В, Київ</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8432767978!2d30.6423!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c58b826b1a5d%3A0x0!2z0L_RgNC-0YHQv9C10LrRgiDQodC-0LHQvtGA0L3QvtGB0YLRliAxMtCS!5e0!3m2!1suk!2sua!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ліцей №167 на карті"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=просп.+Соборності,+12В,+Київ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-red-600 font-semibold hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Відкрити в Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
