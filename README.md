# EAN-13 Code Generator

This JavaScript function generates valid EAN-13 codes with customizable country codes and company parts. It ensures that the generated codes are unique among previously generated ones.

## Installation

This function can be directly included in your JavaScript project or used in any JavaScript environment.

## Usage

After including the function in your code you can use it as follows:

```javascript
const previousCodes = ["0123456789123", "1234567890128"]; // Array of previously generated codes
const countryCode = "621"; // Example country code (Syria)
const companyPart = "12345"; // Example company part (variable length)
const generatedCode = generateEAN13(countryCode, companyPart, previousCodes);
console.log("Generated EAN-13 code:", generatedCode);
```

### Parameters

- `countryCode: string | number`: The country code part of the EAN-13 code. You can find a list of country codes in the following [link](https://en.wikipedia.org/wiki/List_of_GS1_country_codes).
- `companyPart: string | number`: The company part of the EAN-13 code. Its length should not exceed `9 digits` the remaining length available after the country code `3 digits` and check digit `1 digit`.
- `previousCodes: string[]`: An array containing previously generated EAN-13 codes. This function ensures that the generated code is unique among these codes.

### Error Handling

If the company part exceeds the remaining length, an error will be thrown.

## License

This function is licensed under the [MIT License](https://opensource.org/licenses/MIT).
