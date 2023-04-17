// Get references to the input and output elements for weight conversion
const weightInput = document.getElementById("weight");
const weightUnitSelect = document.getElementById("unit");
const convertedWeightSpan = document.getElementById("converted-weight");
const weightConvertButton = document.querySelector("fieldset:nth-of-type(1) button");

// Add event listener for the weight conversion button
weightConvertButton.addEventListener("click", () => {
  // Convert weight
  const weight = Number(weightInput.value);
  const unit = weightUnitSelect.value;
  let convertedWeight;
  if (unit === "kg") {
    // Convert from kg to lb
    convertedWeight = weight * 2.20462;
  } else {
    // Convert from lb to kg
    convertedWeight = weight * 0.453592;
  }
  convertedWeightSpan.textContent = convertedWeight.toFixed(2);
});

// Get references to the input and output elements for temperature conversion
const tempInput = document.getElementById("temperature");
const tempScaleSelect = document.getElementById("scale");
const convertedTempSpan = document.getElementById("converted-temperature");
const tempConvertButton = document.querySelector("fieldset:nth-of-type(2) button");

// Add event listener for the temperature conversion button
tempConvertButton.addEventListener("click", () => {
  // Convert temperature
  const temp = Number(tempInput.value);
  const scale = tempScaleSelect.value;
  let convertedTemp;
  if (scale === "C") {
    // Convert from C to F
    convertedTemp = Math.round((temp * 9 / 5) + 32);
  } else {
    // Convert from F to C
    convertedTemp = Math.round((temp - 32) * 5 / 9);
  }
  convertedTempSpan.textContent = parseFloat(convertedTemp.toFixed(1)).toString();
});
