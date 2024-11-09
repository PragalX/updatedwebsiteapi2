import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-purple-300 mb-8"
        >
          Blog Posts
        </motion.h1>
        <div className="space-y-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg bg-purple-900/20 space-y-4"
            >
              <h2 className="text-2xl font-bold text-cyan-400">{blog.title}</h2>
              <p className="text-purple-300">{blog.date}</p>
              <p className="text-gray-300">{blog.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}