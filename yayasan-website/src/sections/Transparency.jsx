import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp, Users, DollarSign, Calendar, Filter, Search, FileText, PieChart, BarChart } from 'lucide-react';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

const Transparency = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [selectedReport, setSelectedReport] = useState('all');

  const financialData = [
    {
      period: '2024',
      totalIncome: 2500000000,
      totalExpense: 2100000000,
      balance: 400000000,
      categories: {
        'Donasi Individu': 1500000000,
        'Donasi Korporasi': 800000000,
        'Grant': 200000000,
        'Program Pendidikan': 800000000,
        'Program Kesehatan': 600000000,
        'Operasional': 700000000
      }
    },
    {
      period: '2023',
      totalIncome: 2000000000,
      totalExpense: 1800000000,
      balance: 200000000,
      categories: {
        'Donasi Individu': 1200000000,
        'Donasi Korporasi': 600000000,
        'Grant': 200000000,
        'Program Pendidikan': 700000000,
        'Program Kesehatan': 500000000,
        'Operasional': 600000000
      }
    }
  ];

  const reports = [
    {
      id: 1,
      title: 'Laporan Keuangan Q1 2024',
      type: 'financial',
      date: '2024-04-15',
      size: '2.5 MB',
      format: 'PDF',
      description: 'Laporan keuangan triwulan pertama tahun 2024 dengan audit lengkap.'
    },
    {
      id: 2,
      title: 'Laporan Tahunan 2023',
      type: 'annual',
      date: '2024-02-28',
      size: '8.2 MB',
      format: 'PDF',
      description: 'Laporan lengkap kegiatan dan keuangan tahun 2023.'
    },
    {
      id: 3,
      title: 'Audit Eksternal 2023',
      type: 'audit',
      date: '2024-01-20',
      size: '3.1 MB',
      format: 'PDF',
      description: 'Hasil audit eksternal oleh KAP Terpercaya.'
    },
    {
      id: 4,
      title: 'Laporan Program Pendidikan',
      type: 'program',
      date: '2024-03-10',
      size: '1.8 MB',
      format: 'PDF',
      description: 'Detail implementasi dan dampak program pendidikan.'
    },
    {
      id: 5,
      title: 'Laporan Program Kesehatan',
      type: 'program',
      date: '2024-03-05',
      size: '2.1 MB',
      format: 'PDF',
      description: 'Laporan lengkap program kesehatan dan layanan medis.'
    },
    {
      id: 6,
      title: 'Sertifikat Akreditasi',
      type: 'certificate',
      date: '2024-01-15',
      size: '0.8 MB',
      format: 'PDF',
      description: 'Sertifikat akreditasi dari lembaga terkait.'
    }
  ];

  const currentData = financialData.find(data => data.period === selectedPeriod) || financialData[0];

  const formatCurrency = (amount) => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  };

  const formatShortCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `Rp ${(amount / 1000000000).toFixed(1)} Miliar`;
    } else if (amount >= 1000000) {
      return `Rp ${(amount / 1000000).toFixed(0)} Juta`;
    }
    return formatCurrency(amount);
  };

  const filteredReports = selectedReport === 'all' 
    ? reports 
    : reports.filter(report => report.type === selectedReport);

  const reportTypes = [
    { value: 'all', label: 'Semua Laporan' },
    { value: 'financial', label: 'Keuangan' },
    { value: 'annual', label: 'Tahunan' },
    { value: 'audit', label: 'Audit' },
    { value: 'program', label: 'Program' },
    { value: 'certificate', label: 'Sertifikat' }
  ];

  return (
    <section id="transparency" className="py-20 bg-white">
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
            Transparansi & Laporan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen untuk transparansi penuh dalam pengelolaan dana.
            Lihat laporan keuangan dan audit kami yang dapat diakses publik.
          </p>
        </motion.div>

        {/* Financial Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Ringkasan Keuangan
            </h3>
            
            {/* Period Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {financialData.map((data) => (
                <button
                  key={data.period}
                  onClick={() => setSelectedPeriod(data.period)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedPeriod === data.period
                      ? 'bg-white text-blue-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Tahun {data.period}
                </button>
              ))}
            </div>

            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Total Pemasukan</span>
                  <TrendingUp className="w-5 h-5 text-green-300" />
                </div>
                <div className="text-3xl font-bold mb-1">
                  {formatShortCurrency(currentData.totalIncome)}
                </div>
                <div className="text-sm text-white/70">
                  {formatCurrency(currentData.totalIncome)}
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Total Pengeluaran</span>
                  <DollarSign className="w-5 h-5 text-red-300" />
                </div>
                <div className="text-3xl font-bold mb-1">
                  {formatShortCurrency(currentData.totalExpense)}
                </div>
                <div className="text-sm text-white/70">
                  {formatCurrency(currentData.totalExpense)}
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Saldo</span>
                  <Users className="w-5 h-5 text-blue-300" />
                </div>
                <div className="text-3xl font-bold mb-1">
                  {formatShortCurrency(currentData.balance)}
                </div>
                <div className="text-sm text-white/70">
                  {formatCurrency(currentData.balance)}
                </div>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Sumber Pemasukan</h4>
                <div className="space-y-3">
                  {Object.entries(currentData.categories).slice(0, 3).map(([category, amount]) => (
                    <div key={category}>
                      <ProgressBar
                        value={amount}
                        max={currentData.totalIncome}
                        label={category}
                        showPercentage={true}
                        color="green"
                        size="sm"
                        className="text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Alokasi Pengeluaran</h4>
                <div className="space-y-3">
                  {Object.entries(currentData.categories).slice(3).map(([category, amount]) => (
                    <div key={category}>
                      <ProgressBar
                        value={amount}
                        max={currentData.totalExpense}
                        label={category}
                        showPercentage={true}
                        color="yellow"
                        size="sm"
                        className="text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Dokumen & Laporan
          </h3>

          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari laporan..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {reportTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {report.format}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2">
                  {report.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {report.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(report.date).toLocaleDateString('id-ID')}
                  </div>
                  <span>{report.size}</span>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Unduh Laporan
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Visualisasi Data
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart Placeholder */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Distribusi Program</h4>
                <PieChart className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-64 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-500">
                  <PieChart className="w-12 h-12 mx-auto mb-2" />
                  <p>Chart akan ditampilkan di sini</p>
                </div>
              </div>
            </div>

            {/* Bar Chart Placeholder */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Pertumbuhan Donasi</h4>
                <BarChart className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-64 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-500">
                  <BarChart className="w-12 h-12 mx-auto mb-2" />
                  <p>Chart akan ditampilkan di sini</p>
                </div>
              </div>
            </div>
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
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Butuh Informasi Lebih Detail?
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Tim kami siap membantu menjawab pertanyaan Anda mengenai laporan dan transparansi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Hubungi Kami
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Request Laporan Khusus
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transparency;
