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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('name', form.name);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('subject', form.subject);
    formData.append('message', form.message);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      setSubmitted(true);
    } catch (e) {
      alert('Помилка відправки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Контакти
          </h1>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                Наші контакти
              </h2>

              <div className="space-y-5">

                {/* Адреса */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Адреса</p>
                    <p className="text-sm text-gray-600">
                      просп. Соборності, 12В,<br />Київ
                    </p>
                  </div>
                </div>

                {/* Телефон */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Телефон</p>
                    <a
                      href="tel:+380442923133"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      +380 44 292 3133
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a
                      href="mailto:lyceum167@ukr.net"
                      className="text-red-600 font-semibold hover:underline text-sm"
                    >
                      lyceum167@ukr.net
                    </a>
                  </div>
                </div>

                {/* Графік */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Графік роботи</p>
                    <p className="text-sm text-gray-600">Пн–Пт: 08:00</p>
                    <p className="text-sm text-gray-600">Сб–Нд: вихідні</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT (FORM) */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 border">

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                    <p>Повідомлення надіслано!</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <input
                      name="name"
                      required
                      placeholder="Ім'я"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border px-4 py-2 rounded"
                    />

                    <input
                      name="phone"
                      placeholder="Телефон"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border px-4 py-2 rounded"
                    />

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border px-4 py-2 rounded"
                    />

                    <textarea
                      name="message"
                      required
                      placeholder="Повідомлення"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border px-4 py-2 rounded"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex justify-center gap-2 bg-red-600 text-white py-3 rounded"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? 'Відправка...' : 'Надіслати повідомлення'}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-10 text-center">
        <a
          href="https://maps.google.com/?q=Київ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold"
        >
          Відкрити в Google Maps
        </a>
      </section>

    </div>
  );
}
