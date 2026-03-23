/**
 * My Open Source Project - Utility Library
 * A simple utility library for string processing and date formatting
 */

class StringUtils {
  /**
   * Reverse a string
   * @param {string} str - Input string
   * @returns {string} Reversed string
   */
  static reverse(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
  }

  /**
   * Convert string to camelCase
   * @param {string} str - Input string
   * @returns {string} camelCase string
   */
  static toCamelCase(str) {
    return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  }

  /**
   * Convert string to snake_case
   * @param {string} str - Input string
   * @returns {string} snake_case string
   */
  static toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
  }

  /**
   * Truncate string to specified length
   * @param {string} str - Input string
   * @param {number} maxLength - Maximum length
   * @returns {string} Truncated string
   */
  static truncate(str, maxLength = 50) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
  }
}

class DateUtils {
  /**
   * Format date to ISO string
   * @param {Date} date - Input date
   * @returns {string} Formatted date string
   */
  static formatISO(date = new Date()) {
    return date.toISOString();
  }

  /**
   * Get relative time string (e.g., "2 hours ago")
   * @param {Date} date - Input date
   * @returns {string} Relative time string
   */
  static getRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }

  /**
   * Check if date is today
   * @param {Date} date - Input date
   * @returns {boolean} True if today
   */
  static isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }
}

// Export utilities
module.exports = { StringUtils, DateUtils };

// Demo usage
if (require.main === module) {
  console.log('=== StringUtils Demo ===');
  console.log('Reverse:', StringUtils.reverse('Hello World'));
  console.log('CamelCase:', StringUtils.toCamelCase('hello-world'));
  console.log('SnakeCase:', StringUtils.toSnakeCase('helloWorld'));
  console.log('Truncate:', StringUtils.truncate('This is a very long string', 10));

  console.log('\n=== DateUtils Demo ===');
  console.log('ISO Format:', DateUtils.formatISO());
  console.log('Relative Time:', DateUtils.getRelativeTime(new Date(Date.now() - 3600000)));
  console.log('Is Today:', DateUtils.isToday(new Date()));
}
