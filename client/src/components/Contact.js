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
          to_name: 'Chinmay',
          from_email: form.email,
          to_email: 'your-email@example.com',
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
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row gap-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-tertiary p-8 rounded-2xl"
          >
            <p className="text-white font-medium text-[16px]">
              Get in touch with me
            </p>
            <h3 className="text-white font-black text-[30px]">
              Contact.
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-[#915EFF] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 h-[500px]"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Float
                speed={1.5}
                rotationIntensity={1}
                floatIntensity={2}
                position={[0, 0, 0]}
              >
                <Text
                  color="#915EFF"
                  fontSize={1}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign="center"
                  font="https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwC4Q4FqL_KWxWMT.woff2"
                >
                  Let's Connect!
                </Text>
              </Float>
            </Canvas>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-tertiary p-8 rounded-2xl text-center"
          >
            <h3 className="text-white font-black text-[20px]">Phone</h3>
            <p className="text-secondary mt-2">+91 9659757000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-tertiary p-8 rounded-2xl text-center"
          >
            <h3 className="text-white font-black text-[20px]">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/chinmay-solanki-27bb22276/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary mt-2 hover:text-[#915EFF] transition-colors"
            >
              linkedin.com/in/chinmay-solanki-27bb22276/
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 