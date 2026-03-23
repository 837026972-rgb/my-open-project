/**
 * My Open Source Project - Utility Library
 * A lightweight JavaScript utility library for string processing, date formatting, and array operations
 * @version 1.0.0
 * @author 837026972-rgb
 * @license MIT
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
   * Convert string to kebab-case
   * @param {string} str - Input string
   * @returns {string} kebab-case string
   */
  static toKebabCase(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '').replace(/[\s_]+/g, '-');
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

  /**
   * Capitalize first letter
   * @param {string} str - Input string
   * @returns {string} Capitalized string
   */
  static capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Remove whitespace from both ends
   * @param {string} str - Input string
   * @returns {string} Trimmed string
   */
  static trim(str) {
    return str.trim();
  }

  /**
   * Check if string contains substring
   * @param {string} str - Main string
   * @param {string} search - Substring to search
   * @returns {boolean} True if contains
   */
  static contains(str, search) {
    return str.includes(search);
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
   * Format date to local string
   * @param {Date} date - Input date
   * @returns {string} Formatted local date string
   */
  static formatLocal(date = new Date()) {
    return date.toLocaleDateString();
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
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
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

  /**
   * Add days to date
   * @param {Date} date - Input date
   * @param {number} days - Number of days to add
   * @returns {Date} New date
   */
  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /**
   * Get days between two dates
   * @param {Date} date1 - First date
   * @param {Date} date2 - Second date
   * @returns {number} Number of days
   */
  static getDaysBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}

class ArrayUtils {
  /**
   * Remove duplicates from array
   * @param {Array} arr - Input array
   * @returns {Array} Array without duplicates
   */
  static unique(arr) {
    return [...new Set(arr)];
  }

  /**
   * Flatten nested array
   * @param {Array} arr - Input array
   * @returns {Array} Flattened array
   */
  static flatten(arr) {
    return arr.reduce((acc, val) =>
      Array.isArray(val) ? acc.concat(ArrayUtils.flatten(val)) : acc.concat(val), []);
  }

  /**
   * Shuffle array
   * @param {Array} arr - Input array
   * @returns {Array} Shuffled array
   */
  static shuffle(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  /**
   * Chunk array into smaller arrays
   * @param {Array} arr - Input array
   * @param {number} size - Chunk size
   * @returns {Array} Array of chunks
   */
  static chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  /**
   * Get random item from array
   * @param {Array} arr - Input array
   * @returns {*} Random item
   */
  static random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

class ValidationUtils {
  /**
   * Check if email is valid
   * @param {string} email - Email to validate
   * @returns {boolean} True if valid
   */
  static isEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  /**
   * Check if URL is valid
   * @param {string} url - URL to validate
   * @returns {boolean} True if valid
   */
  static isURL(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check if number is in range
   * @param {number} num - Number to check
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {boolean} True if in range
   */
  static isInRange(num, min, max) {
    return num >= min && num <= max;
  }

  /**
   * Check if string is empty
   * @param {string} str - String to check
   * @returns {boolean} True if empty
   */
  static isEmpty(str) {
    return !str || str.trim().length === 0;
  }
}

// Export all utilities
module.exports = { StringUtils, DateUtils, ArrayUtils, ValidationUtils };

// Demo usage
if (require.main === module) {
  console.log('=== StringUtils Demo ===');
  console.log('Reverse:', StringUtils.reverse('Hello World'));
  console.log('CamelCase:', StringUtils.toCamelCase('hello-world'));
  console.log('SnakeCase:', StringUtils.toSnakeCase('helloWorld'));
  console.log('KebabCase:', StringUtils.toKebabCase('helloWorld'));
  console.log('Capitalize:', StringUtils.capitalize('hello'));
  console.log('Truncate:', StringUtils.truncate('This is a very long string', 10));

  console.log('\n=== DateUtils Demo ===');
  console.log('ISO Format:', DateUtils.formatISO());
  console.log('Local Format:', DateUtils.formatLocal());
  console.log('Relative Time:', DateUtils.getRelativeTime(new Date(Date.now() - 3600000)));
  console.log('Is Today:', DateUtils.isToday(new Date()));
  console.log('Add Days:', DateUtils.addDays(new Date(), 5));

  console.log('\n=== ArrayUtils Demo ===');
  console.log('Unique:', ArrayUtils.unique([1, 2, 2, 3, 3, 3]));
  console.log('Flatten:', ArrayUtils.flatten([1, [2, [3, 4]]]));
  console.log('Chunk:', ArrayUtils.chunk([1, 2, 3, 4, 5], 2));
  console.log('Random:', ArrayUtils.random(['a', 'b', 'c']));

  console.log('\n=== ValidationUtils Demo ===');
  console.log('Is Email:', ValidationUtils.isEmail('test@example.com'));
  console.log('Is URL:', ValidationUtils.isURL('https://github.com'));
  console.log('Is In Range:', ValidationUtils.isInRange(5, 1, 10));
  console.log('Is Empty:', ValidationUtils.isEmpty(''));
}
