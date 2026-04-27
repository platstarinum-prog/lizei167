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

      {/* Hidden form for Netlify */}
      <form name="contact" data-netlify="true" hidden>
        <input name="name" />
        <input name="phone" />
        <input name="email" />
        <input name="subject" />
        <textarea name="message" />
      </form>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                Наші контакти
              </h2>

              {/* КНОПКА — FIX */}
              <a
                href="tel:+380442923133"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Зателефонувати зараз
              </a>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                    <p>Повідомлення надіслано</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    name="contact"
                    data-netlify="true"
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <input
                      type="text"
                      placeholder="Ім’я"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />

                    <button type="submit">
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
      <section className="bg-gray-50 py-10">
        <div className="text-center">

          {/* FIX ВТОРОГО <a> */}
          <a
            href="https://maps.google.com/?q=просп.+Соборності,+12В,+Київ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
          >
            Відкрити в Google Maps
          </a>

        </div>
      </section>

    </div>
  );
}
