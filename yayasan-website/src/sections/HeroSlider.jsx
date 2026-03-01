import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '../components/Button';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Bersama Membangun Masa Depan Anak Indonesia',
      subtitle: 'Mari wujudkan pendidikan yang layak untuk setiap anak di pelosok negeri',
      image: '/api/placeholder/1920/1080',
      ctaText: 'Donasi Sekarang',
      ctaSecondary: 'Lihat Program',
      stats: {
        children: '5,000+',
        schools: '50+',
        volunteers: '200+'
      }
    },
    {
      id: 2,
      title: 'Kesehatan untuk Semua',
      subtitle: 'Memberikan akses layanan kesehatan dasar bagi masyarakat yang membutuhkan',
      image: '/api/placeholder/1920/1080',
      ctaText: 'Donasi Sekarang',
      ctaSecondary: 'Lihat Program',
      stats: {
        patients: '10,000+',
        clinics: '15+',
        doctors: '50+'
      }
    },
    {
      id: 3,
      title: 'Pemberdayaan Ekonomi UMKM',
      subtitle: 'Membantu pelaku usaha kecil berkembang dan mandiri secara ekonomi',
      image: '/api/placeholder/1920/1080',
      ctaText: 'Donasi Sekarang',
      ctaSecondary: 'Lihat Program',
      stats: {
        businesses: '300+',
        training: '100+',
        income: '40% naik'
      }
    }
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="h-full"
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl md:text-2xl text-gray-200 mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        {slide.ctaText}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-gray-900"
                      >
                        {slide.ctaSecondary}
                      </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="grid grid-cols-3 gap-8"
                    >
                      {Object.entries(slide.stats).map(([key, value], idx) => (
                        <div key={key} className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">
                            {value}
                          </div>
                          <div className="text-gray-300 text-sm capitalize">
                            {key === 'children' ? 'Anak Terbantu' :
                             key === 'schools' ? 'Sekolah' :
                             key === 'volunteers' ? 'Relawan' :
                             key === 'patients' ? 'Pasien' :
                             key === 'clinics' ? 'Klinik' :
                             key === 'doctors' ? 'Dokter' :
                             key === 'businesses' ? 'UMKM' :
                             key === 'training' ? 'Pelatihan' :
                             key === 'income' ? 'Peningkatan' : key}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination */}
      <div className="swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-10" />

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-10 text-white">
        <span className="text-sm font-medium">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default HeroSlider;
