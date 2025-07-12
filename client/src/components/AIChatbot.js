import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "👋 Hi! I'm Chinmay's AI assistant. Ask me about his projects, skills, or experience!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Predefined responses based on Chinmay's portfolio
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('project') || message.includes('work')) {
      return "🚀 Chinmay has worked on several impressive projects including:\n\n• **SentinelMind** - An AI-powered cybersecurity system using Reinforcement Learning and LLMs\n• **Automated Attendance System** - Face recognition-based attendance tracking\n• **Portfolio Website** - This interactive 3D portfolio with advanced features\n\nWould you like to know more about any specific project?";
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "💻 Chinmay is skilled in:\n\n**AI/ML:** Python, TensorFlow, PyTorch, OpenCV, NLP\n**Web Development:** React, Node.js, Express, JavaScript\n**Cybersecurity:** Threat Detection, Network Security\n**Cloud:** AWS, Docker, Kubernetes\n**Databases:** MongoDB, PostgreSQL\n**Tools:** Git, Linux, VS Code\n\nHe's constantly learning new technologies!";
    }
    
    if (message.includes('experience') || message.includes('background')) {
      return "🎓 Chinmay is an AI Engineer and Cybersecurity Expert with 3+ years of experience. He specializes in:\n\n• Building intelligent AI systems\n• Cybersecurity threat detection\n• Full-stack web development\n• Machine learning model training\n\nHe has completed 15+ projects and trained 25+ AI models!";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
      return "📫 You can reach Chinmay through:\n\n• **Email:** chinmaysolanki123@gmail.com\n• **LinkedIn:** [Connect Here](https://www.linkedin.com/in/chinmay-solanki-27bb22276/)\n• **GitHub:** [View Repositories](https://github.com/chinmaysolanki)\n• **Phone:** +91 9659757000\n\nHe's always open to discussing new opportunities!";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return "🎓 Chinmay is continuously learning and staying updated with the latest technologies in AI, cybersecurity, and web development. He believes in practical learning through building real-world projects!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "👋 Hello! I'm here to help you learn more about Chinmay Solanki. Feel free to ask about his projects, skills, experience, or how to get in touch with him!";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "🙏 You're welcome! Is there anything else you'd like to know about Chinmay's work or background?";
    }
    
    // Default response
    return "🤔 That's an interesting question! I can help you learn about:\n\n• Chinmay's **projects** and work\n• His **skills** and technologies\n• His **experience** and background\n• How to **contact** him\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: getAIResponse(inputValue),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What projects has Chinmay worked on?",
    "What are his technical skills?",
    "How can I contact him?",
    "Tell me about his experience"
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-xl relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? {} : { 
            boxShadow: [
              "0 0 0 0 rgba(168, 85, 247, 0.4)",
              "0 0 0 10px rgba(168, 85, 247, 0)",
              "0 0 0 0 rgba(168, 85, 247, 0)"
            ]
          }}
          transition={isOpen ? {} : { duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? '✕' : '🤖'}
          </motion.div>
          
          {/* Notification dot */}
          {!isOpen && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className="fixed bottom-24 right-6 w-96 h-[500px] bg-black bg-opacity-90 border border-gray-700 rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#a855f7] to-[#00d4ff] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">AI Assistant</h3>
                  <p className="text-white text-opacity-80 text-sm">Ask me about Chinmay</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-[#a855f7] to-[#00d4ff] text-white' 
                      : 'bg-gray-800 text-gray-100 border border-gray-700'
                  }`}>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content.split('**').map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="font-bold text-[#00d4ff]">{part}</strong> : part
                      )}
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-white text-opacity-70' : 'text-gray-400'
                    }`}>
                      {message.timestamp}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 border border-gray-700 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-gray-700">
                <p className="text-gray-400 text-xs mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(question);
                        handleSendMessage();
                      }}
                      className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded-lg transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Chinmay..."
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#00d4ff] transition-colors text-sm"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-[#a855f7] to-[#00d4ff] p-2 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot; 