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

## Docs

#### Parameters

- `countryCode: string | number`: The country code part of the EAN-13 code. You can find a list of country codes in the following [link](https://en.wikipedia.org/wiki/List_of_GS1_country_codes).
- `companyPart: string | number`: The company part of the EAN-13 code. Its length should not exceed `9 digits` the remaining length available after the country code `3 digits` and check digit `1 digit`.
- `previousCodes: string[]`: An array containing previously generated EAN-13 codes. This function ensures that the generated code is unique among these codes.

#### Error Handling

If the company part exceeds the remaining length, an error will be thrown.

## Disclaimer

This EAN-13 code generator function is provided for demonstration and educational purposes only. It generates EAN-13-like codes but does not provide official GS1-issued codes. It is not endorsed or affiliated with GS1.

Using the generated codes for commercial purposes may not comply with GS1 standards and could lead to legal or compatibility issues. It is strongly recommended to obtain official GS1-issued codes through the GS1 organization or authorized resellers for use in commercial products.

The author and contributors of this function are not liable for any misuse or consequences arising from the use of the generated codes. By using this function, you agree to use it responsibly and in accordance with applicable laws and regulations.

## License

This function is licensed under the [MIT License](https://opensource.org/licenses/MIT).
