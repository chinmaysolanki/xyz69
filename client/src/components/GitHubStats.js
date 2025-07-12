import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch('https://api.github.com/users/chinmaysolanki');
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/chinmaysolanki/repos?sort=updated&per_page=6');
        const reposData = await reposResponse.json();

        setStats(userData);
        setRepos(reposData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-2 border-[#a855f7] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-secondary-enhanced">Loading GitHub stats...</p>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-enhanced">Unable to load GitHub data</p>
      </div>
    );
  }

  const StatCard = ({ label, value, icon, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-6 text-center hover:bg-opacity-30 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-[32px] mb-2">{icon}</div>
      <div className="text-[24px] font-bold text-primary-enhanced mb-1">
        {value?.toLocaleString()}
      </div>
      <div className="text-[14px] text-secondary-enhanced">{label}</div>
    </motion.div>
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-primary-enhanced font-bold text-[32px] mb-4">
            Live GitHub Activity
          </h3>
          <p className="text-secondary-enhanced text-[16px] max-w-2xl mx-auto">
            Real-time statistics from my GitHub profile showcasing active development
          </p>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard 
            label="Public Repos" 
            value={stats.public_repos} 
            icon="📁" 
            delay={0} 
          />
          <StatCard 
            label="Followers" 
            value={stats.followers} 
            icon="👥" 
            delay={0.1} 
          />
          <StatCard 
            label="Following" 
            value={stats.following} 
            icon="➡️" 
            delay={0.2} 
          />
          <StatCard 
            label="Total Stars" 
            value={repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)} 
            icon="⭐" 
            delay={0.3} 
          />
        </div>

        {/* Recent Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-primary-enhanced font-bold text-[24px] mb-8 text-center">
            Recent Repositories
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-6 hover:bg-opacity-30 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h5 className="text-primary-enhanced font-semibold text-[16px] line-clamp-1 group-hover:text-[#00d4ff] transition-colors">
                    {repo.name}
                  </h5>
                  <div className="flex gap-2 text-[12px] text-gray-400">
                    <span className="flex items-center gap-1">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      🍴 {repo.forks_count}
                    </span>
                  </div>
                </div>
                
                <p className="text-secondary-enhanced text-[14px] mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className="px-2 py-1 text-[11px] bg-[#a855f7] bg-opacity-20 text-[#a855f7] rounded-full">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d4ff] text-[12px] font-semibold hover:text-[#a855f7] transition-colors"
                  >
                    View Code →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href={stats.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#a855f7] to-[#00d4ff] text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
          >
            🚀 Explore My GitHub (@chinmaysolanki)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats; 