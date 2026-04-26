import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed Khan',
    city: 'Karachi',
    rating: 5,
    comment: 'Excellent quality earbuds! Sound is crystal clear and battery lasts all day. COD was super convenient.',
    product: 'Wireless Earbuds Pro'
  },
  {
    name: 'Fatima Ali',
    city: 'Lahore',
    rating: 5,
    comment: 'Fast delivery and genuine products. The power bank is exactly as described. Highly recommended!',
    product: '20000mAh Power Bank'
  },
  {
    name: 'Hassan Raza',
    city: 'Islamabad',
    rating: 4,
    comment: 'Great service and quality. Received my order in just 3 days. Will buy again!',
    product: 'Fast Charging Cable'
  },
  {
    name: 'Ayesha Malik',
    city: 'Multan',
    rating: 5,
    comment: 'Best online shopping experience! Products are premium quality and prices are reasonable.',
    product: 'Phone Holder Stand'
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-slate-400 text-lg">Join thousands of satisfied customers across Pakistan</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              <Quote className="text-purple-500/30 mb-4" size={32} />

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}
                  />
                ))}
              </div>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{review.comment}</p>

              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{review.name}</div>
                <div className="text-xs text-slate-400">{review.city}</div>
                <div className="text-xs text-purple-400 mt-1">{review.product}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
