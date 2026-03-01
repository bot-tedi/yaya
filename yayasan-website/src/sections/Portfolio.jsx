import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ExternalLink, Heart, Users, MapPin, Calendar } from 'lucide-react';
import Button from '../components/Button';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const portfolioItems = [
    {
      id: 1,
      title: 'Renovasi SDN Sukamaju',
      category: 'Pendidikan',
      description: 'Renovasi total 6 ruang kelas, perpustakaan, dan toilet siswa untuk meningkatkan kualitas belajar.',
      image: '/api/placeholder/600/400',
      location: 'Desa Sukamaju, Jawa Barat',
      date: '2024-01-15',
      impact: {
        students: 150,
        classrooms: 6,
        teachers: 8
      },
      status: 'completed',
      partner: 'PT. Maju Bersama'
    },
    {
      id: 2,
      title: 'Klinik Kesehatan Desa',
      category: 'Kesehatan',
      description: 'Pembangunan klinik dengan fasilitas pemeriksaan umum, laboratorium, dan apotek mini.',
      image: '/api/placeholder/600/400',
      location: 'Desa Mekarjaya, Banten',
      date: '2024-02-20',
      impact: {
        patients: 5000,
        services: 15,
        staff: 12
      },
      status: 'ongoing',
      partner: 'Dinas Kesehatan'
    },
    {
      id: 3,
      title: 'Pelatihan UMKM Digital',
      category: 'Pemberdayaan',
      description: 'Program pelatihan digital marketing dan pengelolaan keuangan untuk 100 pelaku UMKM.',
      image: '/api/placeholder/600/400',
      location: 'Jakarta Selatan',
      date: '2024-03-01',
      impact: {
        participants: 100,
        businesses: 80,
        income: 40
      },
      status: 'completed',
      partner: 'Gojek Foundation'
    },
    {
      id: 4,
      title: 'Bantuan Korban Banjir',
      category: 'Bencana',
      description: 'Evakuasi dan bantuan darurat bagi 200 korban banjir dengan menyediakan kebutuhan pokok.',
      image: '/api/placeholder/600/400',
      location: 'Jakarta Utara',
      date: '2024-02-28',
      impact: {
        victims: 200,
        families: 50,
        volunteers: 30
      },
      status: 'completed',
      partner: 'PMI Jakarta'
    },
    {
      id: 5,
      title: 'Beasiswa Anak Yatim',
      category: 'Pendidikan',
      description: 'Program beasiswa pendidikan untuk 50 anak yatim piatu dari SD hingga SMA.',
      image: '/api/placeholder/600/400',
      location: 'Seluruh Indonesia',
      date: '2024-01-01',
      impact: {
        students: 50,
        schools: 25,
        years: 12
      },
      status: 'ongoing',
      partner: 'Donatur Perorangan'
    },
    {
      id: 6,
      title: 'Rumah Layak Huni',
      category: 'Sosial',
      description: 'Pembangunan 20 rumah layak huni bagi keluarga tidak mampu di daerah pinggiran.',
      image: '/api/placeholder/600/400',
      location: 'Bekasi, Jawa Barat',
      date: '2024-03-10',
      impact: {
        houses: 20,
        families: 20,
        members: 80
      },
      status: 'ongoing',
      partner: 'Tanoto Foundation'
    }
  ];

  const filters = ['Semua', 'Pendidikan', 'Kesehatan', 'Pemberdayaan', 'Bencana', 'Sosial'];
  
  const filteredPortfolio = selectedFilter === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedFilter);

  const categoryColors = {
    'Pendidikan': 'bg-blue-100 text-blue-800',
    'Kesehatan': 'bg-red-100 text-red-800',
    'Pemberdayaan': 'bg-green-100 text-green-800',
    'Bencana': 'bg-orange-100 text-orange-800',
    'Sosial': 'bg-purple-100 text-purple-800'
  };

  const statusColors = {
    'completed': 'bg-green-100 text-green-800',
    'ongoing': 'bg-yellow-100 text-yellow-800',
    'planned': 'bg-gray-100 text-gray-800'
  };

  const statusText = {
    'completed': 'Selesai',
    'ongoing': 'Berjalan',
    'planned': 'Rencana'
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
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
            Portfolio & Kegiatan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat berbagai program yang telah kami jalankan dan dampak positif
            yang telah kami ciptakan bersama para mitra dan donatur.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full transition-colors flex items-center ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                      {statusText[item.status]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Location & Date */}
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(item.date).toLocaleDateString('id-ID')}
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {Object.entries(item.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {typeof value === 'number' ? value.toLocaleString('id-ID') : value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {key === 'students' ? 'Siswa' :
                           key === 'classrooms' ? 'Kelas' :
                           key === 'teachers' ? 'Guru' :
                           key === 'patients' ? 'Pasien' :
                           key === 'services' ? 'Layanan' :
                           key === 'staff' ? 'Staf' :
                           key === 'participants' ? 'Peserta' :
                           key === 'businesses' ? 'UMKM' :
                           key === 'income' ? '% Naik' :
                           key === 'victims' ? 'Korban' :
                           key === 'families' ? 'Keluarga' :
                           key === 'volunteers' ? 'Relawan' :
                           key === 'houses' ? 'Rumah' :
                           key === 'members' ? 'Anggota' :
                           key === 'schools' ? 'Sekolah' :
                           key === 'years' ? 'Tahun' : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Partner */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Mitra:</span> {item.partner}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Detail
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
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
            Lihat Semua Portfolio
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ingin Menjadi Mitra Kami?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Bergabunglah dengan kami dalam menciptakan dampak sosial yang lebih besar
              untuk masyarakat Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Users className="w-5 h-5 mr-2" />
                Jadilah Mitra
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
