const generateEAN13 = (countryCode, companyPart, previousCodes) => {
  // Calculate the remaining code length
  const remainingLength =
    13 - 1 - countryCode.toString().length - companyPart.toString().length;

  // Check if remaining length is negative
  if (remainingLength < 0) {
    throw new Error("Invalid company part length.");
  }

  // Concatenate the country code and company part
  const prefix = countryCode.toString() + companyPart.toString();

  // Generate random numbers for the remaining digits
  let randomNumber = "";
  for (let i = 0; i < remainingLength; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }

  // Concatenate the prefix, separator, and random numbers
  const code = prefix + randomNumber;

  // Calculate the check digit
  let sum = 0;
  for (let i = 0; i < code.length; i++) {
    const digit = parseInt(code[i]);
    sum += i % 2 === 0 ? digit : digit * 3;
  }
  const checkDigit = (10 - (sum % 10)) % 10;

  // Concatenate the check digit to the code
  const finalCode = code + checkDigit;

  // Check if the generated code is unique among previous codes
  if (previousCodes.includes(finalCode)) {
    // If not unique, generate a new code recursively
    return generateEAN13(countryCode, companyPart, previousCodes);
  }

  // Return the generated code
  return finalCode;
};

// usage
// console.log(generateEAN13(621, 1234, []));
