import { motion } from 'motion/react';
import { ShieldCheck, Truck, RotateCcw, Headset } from 'lucide-react';

const badges = [
  {
    icon: ShieldCheck,
    title: 'Cash on Delivery',
    description: 'Pay when you receive'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: '3-5 days across Pakistan'
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '7-day return policy'
  },
  {
    icon: Headset,
    title: 'Official Warranty',
    description: '6 months guarantee'
  }
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-900/95 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/5 rounded-xl p-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <badge.icon size={24} className="text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{badge.title}</div>
                <div className="text-xs text-slate-400">{badge.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
