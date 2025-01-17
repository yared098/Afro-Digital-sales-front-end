class BaseService {
    // Create data
    async create(collection, data) {
      throw new Error('create() must be implemented in a derived class.');
    }
  
    // Read data
    async read(collection, query = {}) {
      throw new Error('read() must be implemented in a derived class.');
    }
  
    // Update data
    async update(collection, id, data) {
      throw new Error('update() must be implemented in a derived class.');
    }
  
    // Delete data
    async delete(collection, id) {
      throw new Error('delete() must be implemented in a derived class.');
    }
  }
  
  export default BaseService;
  