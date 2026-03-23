# String & Date Utility Library

A lightweight JavaScript utility library for string processing, date formatting, array operations, and data validation. Perfect for Node.js and browser applications.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](index.js)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](package.json)

## Features

### StringUtils
- `reverse(str)` - Reverse a string
- `toCamelCase(str)` - Convert string to camelCase
- `toSnakeCase(str)` - Convert string to snake_case
- `toKebabCase(str)` - Convert string to kebab-case
- `capitalize(str)` - Capitalize first letter
- `truncate(str, maxLength)` - Truncate string to specified length
- `contains(str, search)` - Check if string contains substring
- `trim(str)` - Remove whitespace from both ends

### DateUtils
- `formatISO(date)` - Format date to ISO string
- `formatLocal(date)` - Format date to local string
- `getRelativeTime(date)` - Get relative time (e.g., "2 hours ago")
- `isToday(date)` - Check if date is today
- `addDays(date, days)` - Add days to date
- `getDaysBetween(date1, date2)` - Get days between two dates

### ArrayUtils
- `unique(arr)` - Remove duplicates from array
- `flatten(arr)` - Flatten nested array
- `shuffle(arr)` - Shuffle array randomly
- `chunk(arr, size)` - Chunk array into smaller arrays
- `random(arr)` - Get random item from array

### ValidationUtils
- `isEmail(email)` - Validate email address
- `isURL(url)` - Validate URL
- `isInRange(num, min, max)` - Check if number is in range
- `isEmpty(str)` - Check if string is empty

## Installation

```bash
npm install my-open-source-project
```

## Usage

```javascript
const { StringUtils, DateUtils, ArrayUtils, ValidationUtils } = require('my-open-source-project');

// String utilities
StringUtils.reverse('Hello');        // "olleH"
StringUtils.toCamelCase('hello-world');  // "helloWorld"
StringUtils.toSnakeCase('helloWorld');   // "hello_world"
StringUtils.truncate('Hello World', 5);  // "He..."
StringUtils.capitalize('hello');     // "Hello"

// Date utilities
DateUtils.formatISO();              // "2024-01-01T00:00:00.000Z"
DateUtils.formatLocal();            // "1/1/2024"
DateUtils.getRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"
DateUtils.isToday(new Date());      // true
DateUtils.addDays(new Date(), 5);   // Date + 5 days
DateUtils.getDaysBetween(d1, d2);  // Number of days

// Array utilities
ArrayUtils.unique([1, 2, 2, 3]);   // [1, 2, 3]
ArrayUtils.flatten([1, [2, 3]]);   // [1, 2, 3]
ArrayUtils.chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
ArrayUtils.random([1, 2, 3]);      // Random item

// Validation utilities
ValidationUtils.isEmail('test@example.com');  // true
ValidationUtils.isURL('https://github.com');   // true
ValidationUtils.isInRange(5, 1, 10);           // true
ValidationUtils.isEmpty('');                   // true
```

## Testing

```bash
node test/index.test.js
```

## Project Goals

This library aims to provide lightweight, dependency-free utilities that can be easily integrated into any JavaScript/Node.js project. We welcome contributions from the community!

## Why This Project?

- Zero dependencies
- Lightweight (~3KB minified)
- TypeScript compatible
- Thoroughly tested
- MIT Licensed

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Star us on GitHub if you find this useful!**
