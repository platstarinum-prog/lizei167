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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('name', form.name);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('subject', form.subject);
    formData.append('message', form.message);

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    setSubmitted(true);
  };

  return (
    <div className="pt-20">

      {/* Hidden Netlify form */}
      <form name="contact" data-netlify="true" hidden>
        <input name="name" />
        <input name="phone" />
        <input name="email" />
        <input name="subject" />
        <textarea name="message" />
      </form>

      {/* HERO */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
          <div className="flex-1 bg-gray-700" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-amber-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-amber-400 text-xs uppercase">Контакти</span>
          <h1 className="text-4xl font-bold text-white mt-2">
            Зв'яжіться <span className="text-amber-400">з нами</span>
          </h1>
          <p className="text-gray-300 mt-2">
            Ми завжди раді відповісти на ваші запитання.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Наші контакти</h2>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <MapPin />
                  <div>
                    <p>Адреса</p>
                    <p className="text-sm">Київ, Україна</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone />
                  <div>
                    <p>Телефон</p>
                    <a href="tel:+380442923133" className="text-red-600">
                      +380 44 292 3133
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail />
                  <div>
                    <p>Email</p>
                    <a href="mailto:test@test.com" className="text-red-600">
                      lyceum167@ukr.net
                    </a>
                  </div>
                </div>

              </div>

              {/* CALL BUTTON */}
              <a
                href="tel:+380442923133"
                className="mt-6 block bg-red-600 text-white text-center py-3 rounded-lg"
              >
                Зателефонувати зараз
              </a>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3">
              <div className="bg-gray-100 p-6 rounded-xl">

                {submitted ? (
                  <div className="text-center">
                    <CheckCircle className="mx-auto text-green-500" />
                    <p>Надіслано!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input type="hidden" name="form-name" value="contact" />

                    <input
                      placeholder="Ім’я"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full p-2 border"
                    />

                    <input
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full p-2 border"
                    />

                    <textarea
                      placeholder="Повідомлення"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full p-2 border"
                    />

                    <button className="bg-red-600 text-white px-4 py-2 flex gap-2 items-center">
                      <Send className="w-4 h-4" />
                      Надіслати
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
          className="text-red-600"
        >
          Відкрити в Google Maps
        </a>
      </section>

    </div>
  );
}
