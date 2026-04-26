import { motion } from 'motion/react';
import { Headphones, Battery, Cable, Smartphone } from 'lucide-react';

const categories = [
  {
    name: 'Wireless Earbuds',
    icon: Headphones,
    count: 120,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Power Banks',
    icon: Battery,
    count: 85,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Chargers & Cables',
    icon: Cable,
    count: 150,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    name: 'Mobile Accessories',
    icon: Smartphone,
    count: 200,
    gradient: 'from-orange-600 to-red-600'
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-900/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Shop by Category</h2>
          <p className="text-slate-400 text-lg">Explore our wide range of premium tech accessories</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10`}>
                  <category.icon size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{category.name}</h3>
                <p className="text-slate-400 text-sm relative z-10">{category.count} Products</p>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
