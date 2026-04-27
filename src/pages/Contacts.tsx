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
          <h1 className="text-4xl text-white font-bold">
            Контакти
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-4">
            <p>📍 Київ</p>
            <p>📞 +380 44 292 3133</p>
            <p>✉️ lyceum167@ukr.net</p>

            <a
              href="tel:+380442923133"
              className="block bg-red-600 text-white text-center py-3 rounded"
            >
              Подзвонити
            </a>
          </div>

          {/* RIGHT */}
          <div>
            {submitted ? (
              <div className="text-center">
                <CheckCircle className="mx-auto text-green-500" />
                <p>Відправлено!</p>
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
                  className="w-full border p-2"
                />

                <input
                  name="phone"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border p-2"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border p-2"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Повідомлення"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border p-2"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3"
                >
                  {loading ? '...' : 'Надіслати'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="text-center pb-10">
        <a href="https://maps.google.com/?q=Київ" target="_blank">
          Відкрити карту
        </a>
      </section>

    </div>
  );
}
