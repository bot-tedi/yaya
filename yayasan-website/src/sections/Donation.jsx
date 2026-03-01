import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, TrendingUp, Calendar, Award } from 'lucide-react';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [donationType, setDonationType] = useState('once');
  const [currentDonation, setCurrentDonation] = useState(75000000);

  const presetAmounts = ['50000', '100000', '250000', '500000', '1000000', '5000000'];
  
  const donationGoals = [
    {
      title: 'Renovasi Sekolah Desa',
      target: 100000000,
      current: 75000000,
      deadline: '2024-06-30',
      description: 'Renovasi 3 sekolah dasar di daerah terpencil',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Bantuan Kesehatan',
      target: 50000000,
      current: 35000000,
      deadline: '2024-05-15',
      description: 'Pengadaan obat-obatan dan alat kesehatan',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Beasiswa Anak Yatim',
      target: 75000000,
      current: 45000000,
      deadline: '2024-07-31',
      description: 'Beasiswa pendidikan untuk 100 anak yatim',
      image: '/api/placeholder/400/300'
    }
  ];

  const impactStats = [
    {
      icon: Users,
      value: '15,000+',
      label: 'Penerima Manfaat'
    },
    {
      icon: Target,
      value: '95%',
      label: 'Tingkat Kepuasan'
    },
    {
      icon: TrendingUp,
      value: '200%',
      label: 'Pertumbuhan Dampak'
    },
    {
      icon: Calendar,
      value: '5+',
      label: 'Tahun Berdedikasi'
    }
  ];

  const testimonials = [
    {
      name: 'Andi Wijaya',
      role: 'Donatur',
      content: 'Saya merasa sangat bahagia bisa membantu anak-anak mendapatkan pendidikan yang layak melalui yayasan ini.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Penerima Beasiswa',
      content: 'Terima kasih atas bantuan beasiswa yang diberikan. Sekarang saya bisa melanjutkan pendidikan ke jenjang yang lebih tinggi.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Budi Santoso',
      role: 'Relawan',
      content: 'Bergabung sebagai relawan di yayasan ini memberikan pengalaman yang sangat berharga dan bermakna.',
      avatar: '/api/placeholder/60/60'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDonation(prev => {
        const increment = Math.floor(Math.random() * 100000) + 50000;
        const newTotal = prev + increment;
        return newTotal > 100000000 ? 75000000 : newTotal;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setDonationAmount(amount);
  };

  const handleDonate = () => {
    if (!donationAmount) {
      alert('Silakan pilih nominal donasi');
      return;
    }
    alert(`Terima kasih atas donasi Rp ${parseInt(donationAmount).toLocaleString('id-ID')}!`);
  };

  return (
    <section id="donation" className="py-20 bg-white">
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
            Donasi Sekarang, Ubah Masa Depan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setiap donasi Anda akan membantu kami melanjutkan program-program
            yang memberikan dampak positif bagi masyarakat.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Donation Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Target Donasi Mendesak
            </h3>
            <div className="space-y-6">
              {donationGoals.map((goal, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {goal.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {goal.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Deadline</div>
                      <div className="text-sm font-medium text-gray-900">
                        {new Date(goal.deadline).toLocaleDateString('id-ID')}
                      </div>
                    </div>
                  </div>
                  <ProgressBar
                    value={goal.current}
                    max={goal.target}
                    showValue={true}
                    showPercentage={true}
                    color="blue"
                    size="md"
                  />
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">
                      Rp {goal.current.toLocaleString('id-ID')}
                    </span>
                    <span className="text-gray-400 mx-2">/</span>
                    <span>
                      Rp {goal.target.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Donasi Sekarang
              </h3>
              
              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                  Jenis Donasi
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDonationType('once')}
                    className={`py-3 px-4 rounded-lg border transition-colors ${
                      donationType === 'once'
                        ? 'bg-white text-blue-600 border-white'
                        : 'bg-transparent text-white border-white/30 hover:border-white/50'
                    }`}
                  >
                    Sekali
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`py-3 px-4 rounded-lg border transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-white text-blue-600 border-white'
                        : 'bg-transparent text-white border-white/30 hover:border-white/50'
                    }`}
                  >
                    Bulanan
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                  Pilih Nominal
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border transition-colors ${
                        selectedAmount === amount
                          ? 'bg-white text-blue-600 border-white'
                          : 'bg-transparent text-white border-white/30 hover:border-white/50'
                      }`}
                    >
                      Rp {parseInt(amount).toLocaleString('id-ID')}
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <input
                  type="number"
                  placeholder="Nominal lainnya"
                  value={donationAmount}
                  onChange={(e) => {
                    setDonationAmount(e.target.value);
                    setSelectedAmount('');
                  }}
                  className="w-full py-3 px-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>

              {/* Donate Button */}
              <Button
                onClick={handleDonate}
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-gray-100"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donasi Sekarang
              </Button>

              {/* Security Info */}
              <div className="mt-6 text-sm opacity-80">
                <div className="flex items-center mb-2">
                  <Award className="w-4 h-4 mr-2" />
                  Donasi aman dan terpercaya
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  100% donasi disalurkan kepada penerima manfaat
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Apa Kata Mereka
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
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
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;
