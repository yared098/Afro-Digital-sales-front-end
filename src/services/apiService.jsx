class ApiService {
    async create(url, data) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  
    async read(url, query = {}) {
      const response = await fetch(url + new URLSearchParams(query));
      return response.json();
    }
  
    async update(url, id, data) {
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  
    async delete(url, id) {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      return response.json();
    }
  }
  
  export default new ApiService();
  