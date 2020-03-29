/**
 * Session interface that provides methods for storing, and retrieving.
 * The window.sessionStorage class is used by default
 */
class Session {
  /**
   * @constructor
   * @param {*} [storage=sessionStorage]
   */
  constructor(storage = window.sessionStorage) {
    this.storage = storage;
  }
  /**
   * Gets an item from the storage provider by key
   * @param {string} key
   * @returns {string|null|undefined}
   */
  getItem = (key) => (
    this.storage.getItem(key)
  )
  /**
   * Sets an item in the storage provider using the key and value.
   * @param key
   * @param value
   * @returns {*}
   */
  setItem = (key, value) => (
    this.storage.setItem(key, value)
  )
}

export default new Session();