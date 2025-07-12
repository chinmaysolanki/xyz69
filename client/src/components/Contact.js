import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: 'Chinmay Solanki',
          from_email: form.email,
          to_email: 'chinmaysolanki123@gmail.com',
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-primary-enhanced font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me
          </h2>
          <p className="text-secondary-enhanced text-[18px] max-w-2xl mx-auto mt-4">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row gap-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
                            className="flex-1 bg-black bg-opacity-20 border border-gray-700 p-8 rounded-2xl"
          >
            <p className="text-secondary-enhanced font-medium text-[16px]">
              Get in touch with me
            </p>
            <h3 className="text-primary-enhanced font-black text-[30px] mb-2">
              Contact.
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full mb-6"></div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <label className="flex flex-col">
                <span className="text-primary-enhanced font-medium mb-3">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-black bg-opacity-40 border border-gray-600 py-4 px-6 placeholder:text-gray-400 text-primary-enhanced rounded-lg outline-none focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7] focus:ring-opacity-50 font-medium transition-all duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-primary-enhanced font-medium mb-3">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-black bg-opacity-40 border border-gray-600 py-4 px-6 placeholder:text-gray-400 text-primary-enhanced rounded-lg outline-none focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff] focus:ring-opacity-50 font-medium transition-all duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-primary-enhanced font-medium mb-3">Your Message</span>
                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-black bg-opacity-40 border border-gray-600 py-4 px-6 placeholder:text-gray-400 text-primary-enhanced rounded-lg outline-none focus:border-[#ff4757] focus:ring-2 focus:ring-[#ff4757] focus:ring-opacity-50 font-medium transition-all duration-300 resize-none"
                />
              </label>

              <motion.button
                type="submit"
                className="bg-gradient-to-r from-[#a855f7] to-[#00d4ff] py-4 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/25 rounded-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
                            className="flex-1 h-[500px] bg-black bg-opacity-20 border border-gray-700 rounded-xl overflow-hidden"
          >
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
              <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                color="#a855f7"
              />
              <Float
                speed={1.5}
                rotationIntensity={1}
                floatIntensity={2}
                position={[0, 0, 0]}
              >
                <Text
                  color="#00d4ff"
                  fontSize={0.8}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign="center"
                  font="https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwC4Q4FqL_KWxWMT.woff2"
                >
                  Let's Build
                </Text>
              </Float>
              <Float
                speed={1.2}
                rotationIntensity={0.8}
                floatIntensity={1.5}
                position={[0, -1.5, 0]}
              >
                <Text
                  color="#a855f7"
                  fontSize={0.6}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign="center"
                  font="https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwC4Q4FqL_KWxWMT.woff2"
                >
                  Something Amazing!
                </Text>
              </Float>
            </Canvas>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-wrap gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black bg-opacity-20 border border-gray-700 p-6 rounded-2xl text-center hover:bg-opacity-30 transition-all duration-300 min-w-[250px]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-[20px]">@</span>
            </div>
            <h3 className="text-primary-enhanced font-black text-[18px] mb-2">Email</h3>
            <a
              href="mailto:chinmaysolanki123@gmail.com"
              className="text-secondary-enhanced hover:text-[#00d4ff] transition-colors text-[14px] break-all"
            >
              chinmaysolanki123@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black bg-opacity-20 border border-gray-700 p-6 rounded-2xl text-center hover:bg-opacity-30 transition-all duration-300 min-w-[250px]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff4757] to-[#ffa502] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-[20px]">📞</span>
            </div>
            <h3 className="text-primary-enhanced font-black text-[18px] mb-2">Phone</h3>
            <a
              href="tel:+919659757000"
              className="text-secondary-enhanced hover:text-[#ff4757] transition-colors text-[14px]"
            >
              +91 9659757000
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black bg-opacity-20 border border-gray-700 p-6 rounded-2xl text-center hover:bg-opacity-30 transition-all duration-300 min-w-[250px]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#0077b5] to-[#005885] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-[16px]">IN</span>
            </div>
            <h3 className="text-primary-enhanced font-black text-[18px] mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/chinmay-solanki-27bb22276/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-enhanced hover:text-[#0077b5] transition-colors text-[14px] break-all"
            >
              Professional Network
            </a>
            <p className="text-[12px] text-gray-400 mt-2">Let's connect & collaborate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black bg-opacity-20 border border-gray-700 p-6 rounded-2xl text-center hover:bg-opacity-30 transition-all duration-300 min-w-[250px]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff4757] to-[#a855f7] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-[16px]">GH</span>
            </div>
            <h3 className="text-primary-enhanced font-black text-[18px] mb-2">GitHub</h3>
            <a
              href="https://github.com/chinmaysolanki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-enhanced hover:text-[#ff4757] transition-colors text-[14px]"
            >
              View my repositories
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-black bg-opacity-20 border border-gray-700 p-6 rounded-2xl text-center hover:bg-opacity-30 transition-all duration-300 min-w-[250px]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#ffa502] to-[#00d4ff] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-[16px]">📄</span>
            </div>
            <h3 className="text-primary-enhanced font-black text-[18px] mb-2">Resume</h3>
            <a
              href="/Chinmay_Solanki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-enhanced hover:text-[#ffa502] transition-colors text-[14px]"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 