import { motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import { apis } from '../data/apis';
import { Copy, CheckCircle, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function API() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold gradient-text mb-8 text-center"
        >
          API Documentation
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 cyber-border-rainbow p-4 md:p-6 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl text-[#00e1ff] mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-4">
              Welcome to our comprehensive API collection. Each endpoint is designed for immediate use
              and comes with detailed documentation. Choose your preferred programming language
              and start building amazing applications!
            </p>
            <div className="flex justify-between items-center">
              <div className="bg-purple-900/20 p-4 rounded-lg flex-1 mr-4">
                <h3 className="text-lg font-bold text-[#ff006e] mb-2">Base URL</h3>
                <code className="text-[#00e1ff]">https://api.pragyanpandey.com</code>
              </div>
              <Link
                to="/api/examples"
                className="cyber-border p-4 hover:bg-purple-900/30 transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>View Examples</span>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {apis.map((api, i) => (
            <motion.section
              key={api.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="cyber-border-rainbow p-4 md:p-6 relative group"
            >
              <div className="relative z-10">
                <h2 className="text-2xl font-bold gradient-text mb-2">{api.name}</h2>
                <p className="text-[#00e1ff] mb-4">{api.description}</p>
                
                <div className="bg-purple-900/20 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-[#ff006e] mb-2">Endpoint</h3>
                    <span className="text-sm text-purple-300">{api.language}</span>
                  </div>
                  <code className="text-[#00e1ff] block">{api.endpoint}</code>
                </div>

                <div className="relative group">
                  <div className="absolute right-2 top-2 z-20">
                    <button
                      onClick={() => copyToClipboard(api.code, api.id)}
                      className="p-2 rounded-lg bg-purple-900/50 hover:bg-purple-900/70 transition-colors"
                    >
                      {copiedId === api.id ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-purple-300" />
                      )}
                    </button>
                  </div>
                  <SyntaxHighlighter
                    language={api.language.toLowerCase()}
                    style={atomOneDark}
                    className="rounded-lg overflow-hidden"
                    customStyle={{ padding: '1.5rem' }}
                  >
                    {api.code}
                  </SyntaxHighlighter>
                </div>

                <div className="bg-purple-900/20 p-4 rounded-lg mt-4">
                  <h3 className="text-lg font-bold text-[#ff006e] mb-2">Quick Test</h3>
                  <code className="text-[#00e1ff] block break-all">{api.usage}</code>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}