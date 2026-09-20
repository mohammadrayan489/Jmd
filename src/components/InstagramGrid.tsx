import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { IMAGES } from '../data/images';
import { BUSINESS_INFO } from '../data/content';
import { Button } from './ui/Button';

export const InstagramGrid = () => {
  return (
    <section className="py-24 bg-[#0b0d10]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#dfb775] font-black uppercase text-xs tracking-widest mb-4">
              <Instagram size={16} />
              Stay Connected
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">See What We're Creating</h2>
            <p className="text-gray-400 mt-4 max-w-xl">
              Follow us @{BUSINESS_INFO.contact.instagramHandle} for behind-the-scenes, new arrivals, and recent project dispatches.
            </p>
          </div>
          
          <Button variant="outline" size="lg" onClick={() => window.open(BUSINESS_INFO.contact.instagramUrl, '_blank')}>
            Follow Us on Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {IMAGES.instagram.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0b0d10]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Heart size={20} fill="white" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <MessageCircle size={20} fill="white" />
                  {post.comments}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
