import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import apiService from '../services/apiService';

const ServerStatus = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [serverData, setServerData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);

  // Fetch live server data
  const fetchServerData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const data = await apiService.getLiveServerData();
      setServerData(data);
      setIsConnected(true);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to fetch server data:', error);
      setError(error.message);
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchServerData();

    // Set up auto-refresh every 5 seconds
    intervalRef.current = setInterval(fetchServerData, 5000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatUptime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Status Indicator */}
      <motion.div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center space-x-2 bg-gray-900 bg-opacity-80 rounded-lg px-4 py-2 border border-gray-700">
          <div className="relative">
            <div
              className={`w-3 h-3 rounded-full ${
                isConnected ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
            {isConnected && (
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
            )}
          </div>
          <span className="text-white font-mono text-sm">
            {isConnected ? 'ONLINE' : 'OFFLINE'}
          </span>
          <div className="text-gray-400 text-xs">
            {isLoading ? '...' : isConnected ? '●' : '●'}
          </div>
        </div>
      </motion.div>

      {/* Expanded Status Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 w-80 bg-gray-900 bg-opacity-95 rounded-lg border border-gray-700 p-4 shadow-xl"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <h3 className="text-white font-bold text-lg">Backend Server</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Connection Status */}
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`font-semibold ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>

              {/* Error Display */}
              {error && (
                <div className="bg-red-900 bg-opacity-50 border border-red-700 rounded-lg p-3">
                  <p className="text-red-300 text-sm font-mono">{error}</p>
                </div>
              )}

              {/* Server Information */}
              {serverData && (
                <div className="space-y-3">
                  <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
                    <h4 className="text-blue-400 font-semibold mb-2">Server Info</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-400">Status:</span>
                        <span className="text-green-400 ml-2">{serverData.status.status}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Port:</span>
                        <span className="text-white ml-2">{serverData.status.port}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-white ml-2">{formatUptime(serverData.status.uptime)}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Version:</span>
                        <span className="text-white ml-2">{serverData.status.version}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
                    <h4 className="text-purple-400 font-semibold mb-2">System Metrics</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memory (RSS):</span>
                        <span className="text-white">{serverData.metrics.memory.rss}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Heap Used:</span>
                        <span className="text-white">{serverData.metrics.memory.heapUsed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Platform:</span>
                        <span className="text-white">{serverData.metrics.platform}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Node.js:</span>
                        <span className="text-white">{serverData.metrics.nodeVersion}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
                    <h4 className="text-cyan-400 font-semibold mb-2">Available Endpoints</h4>
                    <div className="space-y-1 text-xs font-mono">
                      {[
                        'GET /api/status',
                        'GET /api/profile',
                        'GET /api/projects',
                        'GET /api/skills',
                        'GET /api/stats',
                        'POST /api/contact'
                      ].map((endpoint, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-gray-300">{endpoint}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="border-t border-gray-700 pt-2 text-center">
                <p className="text-gray-400 text-xs">
                  Last updated: {lastUpdated ? formatTimestamp(lastUpdated) : 'Never'}
                </p>
                <button
                  onClick={fetchServerData}
                  className="mt-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                  Refresh Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServerStatus; 