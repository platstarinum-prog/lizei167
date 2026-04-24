import { useState, useEffect } from 'react';
import { LogOut, Menu, X, Plus, Trash2, CreditCard as Edit2, Eye, EyeOff } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface AdminProps {
  onLogout: () => void;
}

type Tab = 'news' | 'reviews' | 'pages';

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string | null;
  date: string;
  published: boolean;
}

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  published: boolean;
}

export default function Admin({ onLogout }: AdminProps) {
  const [activeTab, setActiveTab] = useState<Tab>('news');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  // News state
  const [news, setNews] = useState<News[]>([]);
  const [newsForm, setNewsForm] = useState<Partial<News>>({
    title: '',
    description: '',
    category: 'Новини',
    image_url: '',
    date: new Date().toISOString().split('T')[0],
    published: true,
  });
  const [editingNews, setEditingNews] = useState<string | null>(null);

  // Reviews state
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewForm, setReviewForm] = useState<Partial<Review>>({
    name: '',
    role: '',
    rating: 5,
    text: '',
    date: new Date().toISOString().split('T')[0],
    published: true,
  });
  const [editingReview, setEditingReview] = useState<string | null>(null);

  // Load data
  useEffect(() => {
    loadNews();
    loadReviews();
  }, []);

  const loadNews = async () => {
    const { data } = await supabase.from('news_articles').select('*').order('date', { ascending: false });
    if (data) setNews(data as News[]);
  };

  const loadReviews = async () => {
    const { data } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (data) setReviews(data as Review[]);
  };

  // News handlers
  const saveNews = async () => {
    setLoading(true);
    try {
      if (editingNews) {
        await supabase.from('news_articles').update(newsForm).eq('id', editingNews);
        setEditingNews(null);
      } else {
        await supabase.from('news_articles').insert([newsForm]);
      }
      await loadNews();
      setNewsForm({
        title: '',
        description: '',
        category: 'Новини',
        image_url: '',
        date: new Date().toISOString().split('T')[0],
        published: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteNews = async (id: string) => {
    if (confirm('Видалити цю новину?')) {
      await supabase.from('news_articles').delete().eq('id', id);
      await loadNews();
    }
  };

  const editNews = (item: News) => {
    setNewsForm(item);
    setEditingNews(item.id);
    setActiveTab('news');
  };

  // Reviews handlers
  const saveReview = async () => {
    setLoading(true);
    try {
      if (editingReview) {
        await supabase.from('reviews').update(reviewForm).eq('id', editingReview);
        setEditingReview(null);
      } else {
        await supabase.from('reviews').insert([reviewForm]);
      }
      await loadReviews();
      setReviewForm({
        name: '',
        role: '',
        rating: 5,
        text: '',
        date: new Date().toISOString().split('T')[0],
        published: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteReview = async (id: string) => {
    if (confirm('Видалити цей відгук?')) {
      await supabase.from('reviews').delete().eq('id', id);
      await loadReviews();
    }
  };

  const editReview = (item: Review) => {
    setReviewForm(item);
    setEditingReview(item.id);
    setActiveTab('reviews');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-screen bg-gray-900 text-white transition-all duration-300 z-40 ${
          sidebarOpen ? 'w-64' : 'w-0 lg:w-20'
        }`}
      >
        <div className="p-4 border-b border-gray-800">
          <h1 className={`font-bold text-lg ${!sidebarOpen && 'lg:text-xs lg:text-center'}`}>
            {sidebarOpen ? 'Адмінпанель' : '⚙'}
          </h1>
        </div>
        <nav className="p-4 space-y-2">
          {[
            { id: 'news', label: 'Новини', icon: '📰' },
            { id: 'reviews', label: 'Відгуки', icon: '⭐' },
            { id: 'pages', label: 'Сторінки', icon: '📄' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id as Tab);
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-red-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              } ${!sidebarOpen && 'lg:px-2 lg:text-center'}`}
            >
              <span className={sidebarOpen ? 'mr-2' : ''}>{item.icon}</span>
              {sidebarOpen && item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={onLogout}
          className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors w-56 lg:w-16"
        >
          <LogOut className="w-4 h-4" />
          {sidebarOpen && 'Вихід'}
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between lg:hidden">
          <h2 className="font-bold text-gray-900">Адмінпанель</h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {editingNews ? 'Редагувати новину' : 'Додати новину'}
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Заголовок"
                    value={newsForm.title || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <textarea
                    placeholder="Опис"
                    value={newsForm.description || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, description: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Категорія"
                      value={newsForm.category || ''}
                      onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                      className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="date"
                      value={newsForm.date || ''}
                      onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                      className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <input
                    type="url"
                    placeholder="URL зображення (Pexels)"
                    value={newsForm.image_url || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, image_url: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={newsForm.published || false}
                      onChange={(e) => setNewsForm({ ...newsForm, published: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Опублікувати</span>
                  </label>
                  <button
                    onClick={saveNews}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    {editingNews ? 'Оновити' : 'Додати'}
                  </button>
                  {editingNews && (
                    <button
                      onClick={() => {
                        setEditingNews(null);
                        setNewsForm({
                          title: '',
                          description: '',
                          category: 'Новини',
                          image_url: '',
                          date: new Date().toISOString().split('T')[0],
                          published: true,
                        });
                      }}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 rounded-lg transition-colors"
                    >
                      Скасувати
                    </button>
                  )}
                </div>
              </div>

              {/* News list */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900">Новини ({news.length})</h3>
                </div>
                <div className="divide-y">
                  {news.map((item) => (
                    <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
                        <p className="text-sm text-gray-500 truncate">{item.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                            {item.category}
                          </span>
                          {item.published ? (
                            <Eye className="w-4 h-4 text-green-600" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => editNews(item)}
                          className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteNews(item.id)}
                          className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {editingReview ? 'Редагувати відгук' : 'Додати відгук'}
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ім'я"
                    value={reviewForm.name || ''}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Роль (напр. Батько учня)"
                    value={reviewForm.role || ''}
                    onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <textarea
                    placeholder="Текст відгуку"
                    value={reviewForm.text || ''}
                    onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Рейтинг</label>
                      <select
                        value={reviewForm.rating || 5}
                        onChange={(e) => setReviewForm({ ...reviewForm, rating: parseInt(e.target.value) })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        {[5, 4, 3, 2, 1].map((r) => (
                          <option key={r} value={r}>
                            {r} зірок
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      type="text"
                      placeholder="Дата (напр. березень 2024)"
                      value={reviewForm.date || ''}
                      onChange={(e) => setReviewForm({ ...reviewForm, date: e.target.value })}
                      className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={reviewForm.published || false}
                      onChange={(e) => setReviewForm({ ...reviewForm, published: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Опублікувати</span>
                  </label>
                  <button
                    onClick={saveReview}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    {editingReview ? 'Оновити' : 'Додати'}
                  </button>
                  {editingReview && (
                    <button
                      onClick={() => {
                        setEditingReview(null);
                        setReviewForm({
                          name: '',
                          role: '',
                          rating: 5,
                          text: '',
                          date: new Date().toISOString().split('T')[0],
                          published: true,
                        });
                      }}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 rounded-lg transition-colors"
                    >
                      Скасувати
                    </button>
                  )}
                </div>
              </div>

              {/* Reviews list */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900">Відгуки ({reviews.length})</h3>
                </div>
                <div className="divide-y">
                  {reviews.map((item) => (
                    <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.role}</p>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.text}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-amber-600">{'⭐'.repeat(item.rating)}</span>
                          {item.published ? (
                            <Eye className="w-4 h-4 text-green-600" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => editReview(item)}
                          className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteReview(item.id)}
                          className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Управління сторінками</h2>
              <p className="text-gray-500">Функція розширення контентуページ буде доступна скоро.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
