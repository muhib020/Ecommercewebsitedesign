import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import logo from '../../imports/SMART_TECH_EVERYDAY.png';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-20 pb-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
        <motion.img
          src={logo}
          alt="Tech Cart Logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="h-12 md:h-16 w-auto drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm"
            >
              <span className="text-purple-300 text-sm font-medium">TECH CART</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Tech Cart Premium Tech Accessories
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover premium wireless earbuds, power banks, and accessories. Fast delivery across Pakistan with Cash on Delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 flex items-center gap-2 justify-center cursor-pointer"
              >
                <ShoppingBag size={20} />
                Shop Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                View Deals
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-slate-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">10k+</div>
                <div className="text-sm text-slate-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-slate-400">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl backdrop-blur-xl border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                      <ShoppingBag size={80} className="text-white" />
                    </div>
                    <div className="mt-6 text-2xl font-bold text-white">Premium Earbuds</div>
                    <div className="text-green-400 font-semibold mt-2">50% OFF</div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
