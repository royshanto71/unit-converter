const unitData = {
    length: {
        base: 'm',
        units: {
            m: { name: 'Meter', rate: 1 },
            km: { name: 'Kilometer', rate: 0.001 },
            cm: { name: 'Centimeter', rate: 100 },
            mm: { name: 'Millimeter', rate: 1000 },
            mile: { name: 'Mile', rate: 0.000621371 },
            yard: { name: 'Yard', rate: 1.09361 },
            ft: { name: 'Foot', rate: 3.28084 },
            inch: { name: 'Inch', rate: 39.3701 }
        }
    },
    weight: {
        base: 'kg',
        units: {
            kg: { name: 'Kilogram', rate: 1 },
            g: { name: 'Gram', rate: 1000 },
            mg: { name: 'Milligram', rate: 1000000 },
            lb: { name: 'Pound', rate: 2.20462 },
            oz: { name: 'Ounce', rate: 35.274 },
            ton: { name: 'Metric Ton', rate: 0.001 }
        }
    },
    volume: {
        base: 'l',
        units: {
            l: { name: 'Liter', rate: 1 },
            ml: { name: 'Milliliter', rate: 1000 },
            gal: { name: 'Gallon (US)', rate: 0.264172 },
            qt: { name: 'Quart (US)', rate: 1.05669 },
            pt: { name: 'Pint (US)', rate: 2.11338 },
            cup: { name: 'Cup', rate: 4.22675 },
            floz: { name: 'Fluid Ounce (US)', rate: 33.814 }
        }
    },
    area: {
        base: 'sqm',
        units: {
            sqm: { name: 'Square Meter', rate: 1 },
            sqkm: { name: 'Square Kilometer', rate: 0.000001 },
            sqmile: { name: 'Square Mile', rate: 3.861e-7 },
            sqft: { name: 'Square Foot', rate: 10.7639 },
            acre: { name: 'Acre', rate: 0.000247105 },
            hectare: { name: 'Hectare', rate: 0.0001 }
        }
    },
    speed: {
        base: 'mps',
        units: {
            mps: { name: 'Meter/Second', rate: 1 },
            kph: { name: 'Kilometer/Hour', rate: 3.6 },
            mph: { name: 'Mile/Hour', rate: 2.23694 },
            knot: { name: 'Knot', rate: 1.94384 }
        }
    },
    time: {
        base: 'sec',
        units: {
            sec: { name: 'Second', rate: 1 },
            min: { name: 'Minute', rate: 1/60 },
            hr: { name: 'Hour', rate: 1/3600 },
            day: { name: 'Day', rate: 1/86400 },
            week: { name: 'Week', rate: 1/604800 },
            year: { name: 'Year', rate: 1/31536000 }
        }
    },
    data: {
        base: 'byte',
        units: {
            bit: { name: 'Bit', rate: 8 },
            byte: { name: 'Byte', rate: 1 },
            kb: { name: 'Kilobyte', rate: 1/1024 },
            mb: { name: 'Megabyte', rate: 1/1048576 },
            gb: { name: 'Gigabyte', rate: 1/1073741824 },
            tb: { name: 'Terabyte', rate: 1/1099511627776 }
        }
    },
    temperature: {
        // Temp is special, handled separately
        units: {
            c: { name: 'Celsius' },
            f: { name: 'Fahrenheit' },
            k: { name: 'Kelvin' }
        }
    }
};

// DOM Elements
const categoryBtns = document.querySelectorAll('.nav-btn');
const fromInput = document.getElementById('from-value');
const toInput = document.getElementById('to-value');
const fromSelect = document.getElementById('from-unit');
const toSelect = document.getElementById('to-unit');
const swapBtn = document.getElementById('swap-btn');
const formulaText = document.getElementById('conversion-formula');

// State
let currentCategory = 'length';

// Initialize
function init() {
    unitData.length.units.m.rate = 1; // Explicitly set base
    populateUnits();
    calculate();
}

// Populate Select Options based on Category
function populateUnits() {
    const units = unitData[currentCategory].units;
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    Object.keys(units).forEach(key => {
        const option1 = document.createElement('option');
        option1.value = key;
        option1.textContent = units[key].name;
        fromSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = key;
        option2.textContent = units[key].name;
        toSelect.appendChild(option2);
    });

    // Set default selection (first and second logic)
    const keys = Object.keys(units);
    fromSelect.value = keys[0];
    toSelect.value = keys[1] || keys[0];
    
    // For temperature, set reasonable defaults
    if (currentCategory === 'temperature') {
        fromSelect.value = 'c';
        toSelect.value = 'f';
    }
}

// Handle Category Switch
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // UI
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Logic
        currentCategory = btn.dataset.category;
        populateUnits();
        calculate();
    });
});

// Conversion Logic
function calculate() {
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;
    const value = parseFloat(fromInput.value);

    if (isNaN(value)) {
        toInput.value = '';
        return;
    }

    let result;

    if (currentCategory === 'temperature') {
        result = convertTemperature(value, fromUnit, toUnit);
    } else {
        // Standard conversion via base unit
        // value / fromRate * toRate? No.
        // value is in fromUnit. 
        // to base: value / fromRate (if rate is "units per base")
        // wait, my rate definitions:
        // cm rate is 100. 1m = 100cm.
        // so to get base (m) from cm: cm / 100.
        // Correct: baseValue = value / unitData[...].rate
        // then targetValue = baseValue * unitData[...].rate
        
        const rates = unitData[currentCategory].units;
        const fromRate = rates[fromUnit].rate;
        const toRate = rates[toUnit].rate;
        
        const baseValue = value / fromRate;
        result = baseValue * toRate;
    }

    // Formatting
    toInput.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
    
    updateFormula();
}

function convertTemperature(value, from, to) {
    if (from === to) return value;
    
    let celsius;
    // To Celsius
    if (from === 'c') celsius = value;
    else if (from === 'f') celsius = (value - 32) * 5/9;
    else if (from === 'k') celsius = value - 273.15;
    
    // From Celsius to Target
    if (to === 'c') return celsius;
    if (to === 'f') return (celsius * 9/5) + 32;
    if (to === 'k') return celsius + 273.15;
}

function updateFormula() {
    const fromUnitName = fromSelect.options[fromSelect.selectedIndex].text;
    const toUnitName = toSelect.options[toSelect.selectedIndex].text;
    
    // Calculate rate for 1 unit
    let rate;
    if (currentCategory === 'temperature') {
         formulaText.textContent = `Temperature conversion varies by formula`;
         return;
    } else {
        const rates = unitData[currentCategory].units;
        const fromRate = rates[fromSelect.value].rate;
        const toRate = rates[toSelect.value].rate;
        rate = (1 / fromRate) * toRate;
    }
    
    // Format rate slightly pretty
    const rateString = Number.isInteger(rate) ? rate : parseFloat(rate.toFixed(5));
    formulaText.textContent = `1 ${fromUnitName} = ${rateString} ${toUnitName}`;
}

// Event Listeners
fromInput.addEventListener('input', calculate);
fromSelect.addEventListener('change', () => { calculate(); });
toSelect.addEventListener('change', () => { calculate(); });

swapBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    calculate();
});

// Init
init();
