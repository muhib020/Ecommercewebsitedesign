import { motion } from 'motion/react';
import { X, CreditCard, Smartphone, Wallet } from 'lucide-react';
import { useState } from 'react';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

export function Checkout({ isOpen, onClose, total }: CheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! We will contact you shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-white">Checkout</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Delivery Information</h3>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="03XX XXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Complete Address *</label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                rows={3}
                placeholder="House #, Street, Area, Landmark"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">City *</label>
              <select
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select City</option>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
                <option value="islamabad">Islamabad</option>
                <option value="rawalpindi">Rawalpindi</option>
                <option value="faisalabad">Faisalabad</option>
                <option value="multan">Multan</option>
                <option value="peshawar">Peshawar</option>
                <option value="quetta">Quetta</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Payment Method</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                onClick={() => setPaymentMethod('cod')}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/10 bg-slate-800/30'
                }`}
              >
                <Wallet className={paymentMethod === 'cod' ? 'text-purple-400' : 'text-slate-400'} size={24} />
                <div className="mt-2 font-semibold text-white text-sm">Cash on Delivery</div>
                <div className="text-xs text-slate-400 mt-1">Pay when received</div>
              </div>

              <div
                onClick={() => setPaymentMethod('easypaisa')}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'easypaisa'
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/10 bg-slate-800/30'
                }`}
              >
                <Smartphone className={paymentMethod === 'easypaisa' ? 'text-purple-400' : 'text-slate-400'} size={24} />
                <div className="mt-2 font-semibold text-white text-sm">Easypaisa</div>
                <div className="text-xs text-slate-400 mt-1">Digital payment</div>
              </div>

              <div
                onClick={() => setPaymentMethod('jazzcash')}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'jazzcash'
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/10 bg-slate-800/30'
                }`}
              >
                <CreditCard className={paymentMethod === 'jazzcash' ? 'text-purple-400' : 'text-slate-400'} size={24} />
                <div className="mt-2 font-semibold text-white text-sm">JazzCash</div>
                <div className="text-xs text-slate-400 mt-1">Digital payment</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="bg-slate-800/30 rounded-xl p-4 space-y-2 mb-6">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Delivery Charges</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between">
                <span className="text-white font-bold text-lg">Total Amount</span>
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold text-lg">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white shadow-lg shadow-purple-500/30"
            >
              Place Order
            </motion.button>

            <p className="text-center text-xs text-slate-400 mt-4">
              By placing your order, you agree to our terms and conditions
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
