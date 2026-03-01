import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Briefcase, Shield, Home } from 'lucide-react';
import Button from '../components/Button';

const Programs = () => {
  const programs = [
    {
      id: 1,
      icon: BookOpen,
      title: 'Pendidikan',
      description: 'Memberikan beasiswa pendidikan, pembangunan sekolah, dan pelatihan guru untuk meningkatkan kualitas pendidikan di daerah terpencil.',
      features: ['Beasiswa Siswa', 'Perpustakaan Desa', 'Pelatihan Guru', 'Fasilitas Belajar'],
      stats: {
        students: '5,000+',
        schools: '50+',
        teachers: '200+'
      },
      color: 'blue'
    },
    {
      id: 2,
      icon: Heart,
      title: 'Kesehatan',
      description: 'Menyediakan layanan kesehatan dasar, program vaksinasi, dan edukasi kesehatan bagi masyarakat kurang mampu.',
      features: ['Klinik Mobile', 'Vaksinasi Gratis', 'Cek Kesehatan', 'Obat-obatan'],
      stats: {
        patients: '10,000+',
        clinics: '15+',
        doctors: '50+'
      },
      color: 'red'
    },
    {
      id: 3,
      icon: Users,
      title: 'Pemberdayaan Sosial',
      description: 'Membantu masyarakat miskin melalui program pelatihan keterampilan, bantuan modal usaha, dan pemberdayaan perempuan.',
      features: ['Pelatihan Keterampilan', 'Bantuan Modal', 'Pemberdayaan Perempuan', 'Konseling'],
      stats: {
        families: '3,000+',
        training: '100+',
        businesses: '300+'
      },
      color: 'green'
    },
    {
      id: 4,
      icon: Briefcase,
      title: 'Pengembangan UMKM',
      description: 'Membantu pengusaha kecil dan menengah berkembang melalui pelatihan, bimbingan, dan akses permodalan.',
      features: ['Pelatihan Bisnis', 'Akses Modal', 'Mentoring', 'Pemasaran Digital'],
      stats: {
        umkm: '300+',
        training: '150+',
        income: '40% naik'
      },
      color: 'purple'
    },
    {
      id: 5,
      icon: Shield,
      title: 'Bantuan Bencana',
      description: 'Memberikan bantuan darurat bagi korban bencana alam seperti banjir, gempa, dan longsor.',
      features: ['Bantuan Darurat', 'Posko Bencana', 'Evakuasi', 'Rehabilitasi'],
      stats: {
        victims: '2,000+',
        disasters: '20+',
        volunteers: '500+'
      },
      color: 'orange'
    },
    {
      id: 6,
      icon: Home,
      title: 'Rumah Layak Huni',
      description: 'Membangun dan renovasi rumah bagi keluarga tidak mampu untuk meningkatkan kualitas tempat tinggal.',
      features: ['Renovasi Rumah', 'Bangun Baru', 'Sanitasi', 'Listrik Gratis'],
      stats: {
        houses: '150+',
        families: '500+',
        locations: '25+'
      },
      color: 'teal'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    red: 'bg-red-100 text-red-600 border-red-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    teal: 'bg-teal-100 text-teal-600 border-teal-200'
  };

  const hoverColorClasses = {
    blue: 'hover:bg-blue-600 hover:text-white',
    red: 'hover:bg-red-600 hover:text-white',
    green: 'hover:bg-green-600 hover:text-white',
    purple: 'hover:bg-purple-600 hover:text-white',
    orange: 'hover:bg-orange-600 hover:text-white',
    teal: 'hover:bg-teal-600 hover:text-white'
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
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
            Program Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai program yang kami jalankan untuk membantu masyarakat Indonesia
            dalam bidang pendidikan, kesehatan, dan pemberdayaan sosial.
          </p>
        </motion.div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Icon Header */}
                <div className={`p-6 border-b ${colorClasses[program.color]} ${hoverColorClasses[program.color]} transition-colors duration-300`}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <program.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Layanan:</h4>
                    <div className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(program.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {key === 'students' ? 'Siswa' :
                           key === 'schools' ? 'Sekolah' :
                           key === 'teachers' ? 'Guru' :
                           key === 'patients' ? 'Pasien' :
                           key === 'clinics' ? 'Klinik' :
                           key === 'doctors' ? 'Dokter' :
                           key === 'families' ? 'Keluarga' :
                           key === 'training' ? 'Pelatihan' :
                           key === 'businesses' ? 'UMKM' :
                           key === 'income' ? 'Pendapatan' :
                           key === 'umkm' ? 'UMKM' :
                           key === 'victims' ? 'Korban' :
                           key === 'disasters' ? 'Bencana' :
                           key === 'volunteers' ? 'Relawan' :
                           key === 'houses' ? 'Rumah' :
                           key === 'locations' ? 'Lokasi' : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ingin Bergabung dengan Program Kami?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Mari bersama-sama membuat perubahan positif bagi masyarakat Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Donasi Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Jadi Relawan
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
