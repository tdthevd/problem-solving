// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

function excludingVatPrice(price) {
    if (price === null) {
      return -1;
    }
  
    // Calculate the price without VAT
    let priceWithoutVat = price / 1.15;
  
    // Round to 2 decimal places
    return Math.round(priceWithoutVat * 100) / 100;
  }