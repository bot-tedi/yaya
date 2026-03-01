import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';
import Button from '../components/Button';

const VideoProfile = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videos = [
    {
      id: 1,
      title: 'Profile Yayasan Gemilang',
      description: 'Kenali lebih dekat Yayasan Gemilang dan visi kami untuk menciptakan Indonesia yang lebih baik melalui pendidikan, kesehatan, dan pemberdayaan sosial.',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      duration: '5:30',
      views: '15.2K',
      category: 'Profile'
    },
    {
      id: 2,
      title: 'Renovasi Sekolah Sukamaju',
      description: 'Dokumentasi lengkap proses renovasi SDN Sukamaju yang telah memberikan fasilitas belajar yang lebih baik bagi 150 siswa.',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      duration: '3:45',
      views: '8.5K',
      category: 'Pendidikan'
    },
    {
      id: 3,
      title: 'Program Kesehatan Gratis',
      description: 'Layanan kesehatan gratis yang telah melayani lebih dari 10,000 pasien di daerah terpencil.',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      duration: '4:20',
      views: '12.1K',
      category: 'Kesehatan'
    },
    {
      id: 4,
      title: 'Pelatihan UMKM Digital',
      description: 'Bagaimana kami membantu 100 pelaku UMKM meningkatkan pendapatan hingga 40% melalui pelatihan digital.',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      duration: '6:15',
      views: '9.8K',
      category: 'Pemberdayaan'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Budi Santoso',
      role: 'Ketua Yayasan',
      content: 'Setiap hari kami berkomitmen untuk memberikan yang terbaik bagi masyarakat. Bersama-sama, kita bisa membuat perubahan.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Penerima Beasiswa',
      content: 'Terima kasih Yayasan Gemilang. Karena bantuan kalian, saya bisa melanjutkan pendidikan dan meraih mimpi saya.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Andi Wijaya',
      role: 'Donatur',
      content: 'Saya bangga bisa menjadi bagian dari Yayasan Gemilang. Transparansi dan dampak nyata yang mereka ciptakan sangat luar biasa.',
      avatar: '/api/placeholder/80/80'
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="video" className="py-20 bg-gray-50">
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
            Video Profile & Dokumentasi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Saksikan langsung program-program kami dan lihat bagaimana donasi Anda
            memberikan dampak nyata bagi masyarakat Indonesia.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-video bg-black">
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-gray-900 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-8 h-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>

              {/* Video Controls */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePlayPause}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={handleMuteToggle}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <span className="text-sm">
                      {formatTime(currentTime)} / {videos[0].duration}
                    </span>
                  </div>
                  <button className="hover:text-blue-400 transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {videos[0].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {videos[0].description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{videos[0].views} views</span>
                  <span>•</span>
                  <span>{videos[0].duration}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Share Video
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Video Lainnya
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(1).map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{video.views} views</span>
                      <span>2 hari yang lalu</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Apa Kata Mereka
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Subscribe Channel YouTube Kami
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Dapatkan video terbaru tentang program dan kegiatan kami
              serta lihat langsung dampak yang kami ciptakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                <Play className="w-5 h-5 mr-2" />
                Subscribe YouTube
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Lihat Semua Video
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoProfile;
