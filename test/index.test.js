/**
 * Test suite for StringUtils
 */

const { StringUtils, DateUtils, ArrayUtils, ValidationUtils } = require('../index.js');

console.log('Running tests...\n');

// StringUtils Tests
console.log('--- StringUtils Tests ---');
console.assert(StringUtils.reverse('hello') === 'olleh', 'reverse test failed');
console.log('✓ reverse');

console.assert(StringUtils.toCamelCase('hello-world') === 'helloWorld', 'toCamelCase test failed');
console.log('✓ toCamelCase');

console.assert(StringUtils.toSnakeCase('helloWorld') === 'hello_world', 'toSnakeCase test failed');
console.log('✓ toSnakeCase');

console.assert(StringUtils.toKebabCase('helloWorld') === 'hello-world', 'toKebabCase test failed');
console.log('✓ toKebabCase');

console.assert(StringUtils.capitalize('hello') === 'Hello', 'capitalize test failed');
console.log('✓ capitalize');

console.assert(StringUtils.truncate('Hello World', 5) === 'He...', 'truncate test failed');
console.log('✓ truncate');

console.assert(StringUtils.contains('Hello World', 'World') === true, 'contains test failed');
console.log('✓ contains');

console.assert(StringUtils.contains('Hello World', 'Foo') === false, 'contains test 2 failed');
console.log('✓ contains (negative)');

// DateUtils Tests
console.log('\n--- DateUtils Tests ---');
console.assert(DateUtils.isToday(new Date()) === true, 'isToday test failed');
console.log('✓ isToday');

console.assert(DateUtils.getDaysBetween(new Date('2024-01-01'), new Date('2024-01-10')) === 9, 'getDaysBetween test failed');
console.log('✓ getDaysBetween');

const futureDate = DateUtils.addDays(new Date('2024-01-01'), 5);
console.assert(futureDate.getDate() === 6, 'addDays test failed');
console.log('✓ addDays');

// ArrayUtils Tests
console.log('\n--- ArrayUtils Tests ---');
console.assert(JSON.stringify(ArrayUtils.unique([1, 2, 2, 3])) === '[1,2,3]', 'unique test failed');
console.log('✓ unique');

console.assert(JSON.stringify(ArrayUtils.flatten([1, [2, [3, 4]]])) === '[1,2,3,4]', 'flatten test failed');
console.log('✓ flatten');

console.assert(ArrayUtils.chunk([1, 2, 3, 4], 2).length === 2, 'chunk test failed');
console.log('✓ chunk');

console.assert(typeof ArrayUtils.random([1, 2, 3]) === 'number', 'random test failed');
console.log('✓ random');

// ValidationUtils Tests
console.log('\n--- ValidationUtils Tests ---');
console.assert(ValidationUtils.isEmail('test@example.com') === true, 'isEmail test failed');
console.log('✓ isEmail');

console.assert(ValidationUtils.isEmail('invalid') === false, 'isEmail negative test failed');
console.log('✓ isEmail (negative)');

console.assert(ValidationUtils.isURL('https://github.com') === true, 'isURL test failed');
console.log('✓ isURL');

console.assert(ValidationUtils.isInRange(5, 1, 10) === true, 'isInRange test failed');
console.log('✓ isInRange');

console.assert(ValidationUtils.isEmpty('') === true, 'isEmpty test failed');
console.log('✓ isEmpty');

console.log('\n✅ All tests passed!');
