import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import Button from '../components/Button';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Renovasi Sekolah di Desa Sukamaju Selesai',
      excerpt: 'Setelah 3 bulan pembangunan, sekolah dasar di Desa Sukamaju akhirnya selesai direnovasi. Kini 150 siswa dapat menikmati fasilitas belajar yang lebih baik.',
      image: '/api/placeholder/400/250',
      category: 'Pendidikan',
      author: 'Admin Yayasan',
      date: '2024-03-15',
      readTime: '3 menit',
      featured: true
    },
    {
      id: 2,
      title: 'Program Vaksinasi Gratis Melayani 2,000 Warga',
      excerpt: 'Kerjasama dengan Dinas Kesehatan setempat, kami berhasil menyelenggarakan program vaksinasi gratis bagi 2,000 warga di 5 desa.',
      image: '/api/placeholder/400/250',
      category: 'Kesehatan',
      author: 'Tim Medis',
      date: '2024-03-12',
      readTime: '4 menit',
      featured: true
    },
    {
      id: 3,
      title: 'Pelatihan Keterampilan untuk 100 Ibu Rumah Tangga',
      excerpt: 'Program pelatihan keterampilan menjahit dan masak berhasil diikuti oleh 100 ibu rumah tangga untuk meningkatkan pendapatan keluarga.',
      image: '/api/placeholder/400/250',
      category: 'Pemberdayaan',
      author: 'Tim Sosial',
      date: '2024-03-10',
      readTime: '5 menit',
      featured: false
    },
    {
      id: 4,
      title: 'Bantuan Korban Banjir di Jakarta',
      excerpt: 'Tim relawan kami segera bergerak membantu korban banjir dengan menyediakan makanan, pakaian, dan tempat tinggal sementara.',
      image: '/api/placeholder/400/250',
      category: 'Bencana',
      author: 'Tim Tanggap Darurat',
      date: '2024-03-08',
      readTime: '2 menit',
      featured: false
    },
    {
      id: 5,
      title: 'Beasiswa untuk 50 Anak Yatim Piatu',
      excerpt: 'Program beasiswa tahun ini berhasil membantu 50 anak yatim piatu untuk melanjutkan pendidikan dari SD hingga SMA.',
      image: '/api/placeholder/400/250',
      category: 'Pendidikan',
      author: 'Tim Pendidikan',
      date: '2024-03-05',
      readTime: '3 menit',
      featured: false
    },
    {
      id: 6,
      title: 'Peresmian Klinik Kesehatan Baru',
      excerpt: 'Klinik kesehatan baru di Desa Mekarjaya resmi dibuka dan akan melayani 5,000 warga dengan layanan kesehatan terjangkau.',
      image: '/api/placeholder/400/250',
      category: 'Kesehatan',
      author: 'Direktur Yayasan',
      date: '2024-03-01',
      readTime: '4 menit',
      featured: false
    }
  ];

  const categories = ['Semua', 'Pendidikan', 'Kesehatan', 'Pemberdayaan', 'Bencana'];
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');

  const filteredNews = selectedCategory === 'Semua' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  const categoryColors = {
    'Pendidikan': 'bg-blue-100 text-blue-800',
    'Kesehatan': 'bg-red-100 text-red-800',
    'Pemberdayaan': 'bg-green-100 text-green-800',
    'Bencana': 'bg-orange-100 text-orange-800'
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Berita & Kegiatan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru program-program kami dan lihat dampak
            positif yang kami ciptakan bersama donatur dan relawan.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured News */}
        {selectedCategory === 'Semua' && featuredNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Berita Utama
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString('id-ID')}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:bg-blue-50"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'Semua' ? 'Berita Lainnya' : `Berita ${selectedCategory}`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews
              .filter(article => selectedCategory === 'Semua' ? !article.featured : true)
              .map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('id-ID')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Muat Lebih Banyak
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Berlangganan Newsletter Kami
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Dapatkan informasi terbaru tentang program dan kegiatan kami langsung di inbox Anda
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Berlangganan
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
