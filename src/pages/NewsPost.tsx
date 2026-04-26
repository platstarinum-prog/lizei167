
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';

interface Props {
  id: string;
  onBack: () => void;
}

interface NewsItem {
  title: string;
  date: string;
  body: string;
}

export default function NewsPost({ id, onBack }: Props) {
  const [post, setPost] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/platstarinum-prog/lizei167/main/content/news/${id}`);
        const text = await res.text();
        const lines = text.split('\n');
        const meta: Record<string, string> = {};
        let bodyStart = 0;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('---') && i > 0) { bodyStart = i + 1; break; }
          const match = lines[i].match(/^(\w+):\s*(.+)/);
          if (match) meta[match[1]] = match[2].replace(/['"]/g, '');
        }
        setPost({
          title: meta.title || 'Без назви',
          date: meta.date ? new Date(meta.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
          body: lines.slice(bodyStart).join('\n').trim(),
        });
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    fetchPost();
  }, [id]);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <button onClick={onBack} className="flex items-center gap-2 text-red-600 font-semibold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Назад до новин
        </button>
        {loading && <p className="text-gray-400">Завантаження...</p>}
        {post && (
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6 leading-snug">{post.title}</h1>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap">{post.body}</div>
          </article>
        )}
      </div>
    </div>
  );
}
