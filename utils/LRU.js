export class LRUCache {
  constructor(capacity) {
    if (LRUCache._instance) {
      return LRUCache._instance;
    }
    this.capacity = capacity;
    this.cache = new Map();
    LRUCache._instance = this;
  }

  has(key) {
    return this.cache.has(key);
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }

  static getInstance(capacity = 1000) {
    if (!LRUCache._instance) {
      LRUCache._instance = new LRUCache(capacity);
    }
    return LRUCache._instance;
  }
}
