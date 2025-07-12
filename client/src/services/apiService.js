// API Service for Portfolio Backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic fetch wrapper with error handling
  async fetchWithErrorHandling(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw error;
    }
  }

  // Server Status & Health Check
  async getServerStatus() {
    return this.fetchWithErrorHandling('/api/status');
  }

  async getServerMetrics() {
    return this.fetchWithErrorHandling('/api/metrics');
  }

  // Profile Data
  async getProfile() {
    return this.fetchWithErrorHandling('/api/profile');
  }

  // Projects
  async getProjects(filters = {}) {
    const params = new URLSearchParams(filters);
    const queryString = params.toString();
    return this.fetchWithErrorHandling(`/api/projects${queryString ? `?${queryString}` : ''}`);
  }

  async getProjectById(id) {
    return this.fetchWithErrorHandling(`/api/projects/${id}`);
  }

  async getFeaturedProjects() {
    return this.getProjects({ featured: 'true' });
  }

  // Experience
  async getExperience() {
    return this.fetchWithErrorHandling('/api/experience');
  }

  // Skills
  async getSkills(category = null) {
    const params = category ? `?category=${category}` : '';
    return this.fetchWithErrorHandling(`/api/skills${params}`);
  }

  // Portfolio Statistics
  async getStats() {
    return this.fetchWithErrorHandling('/api/stats');
  }

  // Contact Information
  async getContactInfo() {
    return this.fetchWithErrorHandling('/api/contact');
  }

  // Submit Contact Form
  async submitContactForm(formData) {
    return this.fetchWithErrorHandling('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }

  // Connection status check
  async checkConnection() {
    try {
      const status = await this.getServerStatus();
      return {
        isConnected: true,
        status: status.status,
        serverInfo: status
      };
    } catch (error) {
      return {
        isConnected: false,
        error: error.message
      };
    }
  }

  // Real-time server data with refresh
  async getLiveServerData() {
    const [status, metrics] = await Promise.all([
      this.getServerStatus(),
      this.getServerMetrics()
    ]);

    return {
      status,
      metrics,
      lastUpdated: new Date().toISOString()
    };
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;

// Export individual methods for convenience
export const {
  getServerStatus,
  getServerMetrics,
  getProfile,
  getProjects,
  getProjectById,
  getFeaturedProjects,
  getExperience,
  getSkills,
  getStats,
  getContactInfo,
  submitContactForm,
  checkConnection,
  getLiveServerData
} = apiService; 