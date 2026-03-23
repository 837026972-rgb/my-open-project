# String & Date Utility Library

A lightweight JavaScript utility library for string processing and date formatting, designed for developers who need simple, reliable helper functions in their projects.

## Features

### StringUtils
- `reverse(str)` - Reverse a string
- `toCamelCase(str)` - Convert string to camelCase
- `toSnakeCase(str)` - Convert string to snake_case
- `truncate(str, maxLength)` - Truncate string to specified length

### DateUtils
- `formatISO(date)` - Format date to ISO string
- `getRelativeTime(date)` - Get relative time (e.g., "2 hours ago")
- `isToday(date)` - Check if date is today

## Installation

```bash
npm install my-open-source-project
```

## Usage

```javascript
const { StringUtils, DateUtils = require('my-open-source-project');

// String utilities
StringUtils.reverse('Hello');        // "olleH"
StringUtils.toCamelCase('hello-world');  // "helloWorld"
StringUtils.toSnakeCase('helloWorld');   // "hello_world"
StringUtils.truncate('Hello World', 5);  // "He..."

// Date utilities
DateUtils.formatISO();              // "2024-01-01T00:00:00.000Z"
DateUtils.getRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"
DateUtils.isToday(new Date());      // true
```

## Project Goals

This library aims to provide lightweight, dependency-free utilities that can be easily integrated into any JavaScript/Node.js project. We welcome contributions from the community!

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
