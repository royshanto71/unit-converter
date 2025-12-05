const unitData = {
    length: {
        base: 'm',
        units: {
            m: { name: 'Meter', rate: 1 },
            km: { name: 'Kilometer', rate: 0.001 },
            cm: { name: 'Centimeter', rate: 100 },
            mm: { name: 'Millimeter', rate: 1000 },
            um: { name: 'Micrometer', rate: 1e6 },
            nm: { name: 'Nanometer', rate: 1e9 },
            mile: { name: 'Mile', rate: 0.000621371 },
            yard: { name: 'Yard', rate: 1.09361 },
            ft: { name: 'Foot', rate: 3.28084 },
            inch: { name: 'Inch', rate: 39.3701 },
            nmi: { name: 'Nautical Mile', rate: 0.000539957 },
            ly: { name: 'Light-year', rate: 1.057e-16 },
            au: { name: 'Astronomical Unit', rate: 6.6846e-12 }
        }
    },
    area: {
        base: 'sqm',
        units: {
            sqm: { name: 'Square Meter', rate: 1 },
            sqkm: { name: 'Square Kilometer', rate: 1e-6 },
            sqmile: { name: 'Square Mile', rate: 3.861e-7 },
            sqyd: { name: 'Square Yard', rate: 1.19599 },
            sqft: { name: 'Square Foot', rate: 10.7639 },
            sqin: { name: 'Square Inch', rate: 1550 },
            hectare: { name: 'Hectare', rate: 1e-4 },
            acre: { name: 'Acre', rate: 0.000247105 },
            sqcm: { name: 'Square Centimeter', rate: 10000 },
            sqmm: { name: 'Square Millimeter', rate: 1e6 }
        }
    },
    volume: {
        base: 'l',
        units: {
            l: { name: 'Liter', rate: 1 },
            ml: { name: 'Milliliter', rate: 1000 },
            cm3: { name: 'Cubic Centimeter', rate: 1000 },
            m3: { name: 'Cubic Meter', rate: 0.001 },
            in3: { name: 'Cubic Inch', rate: 61.0237 },
            ft3: { name: 'Cubic Foot', rate: 0.0353147 },
            yd3: { name: 'Cubic Yard', rate: 0.00130795 },
            tsp: { name: 'US Teaspoon', rate: 202.884 },
            tbsp: { name: 'US Tablespoon', rate: 67.628 },
            floz: { name: 'US Fluid Ounce', rate: 33.814 },
            cup: { name: 'US Cup', rate: 4.22675 },
            pt: { name: 'US Pint', rate: 2.11338 },
            qt: { name: 'US Quart', rate: 1.05669 },
            gal: { name: 'US Gallon', rate: 0.264172 },
            imp_pt: { name: 'Imperial Pint', rate: 1.75975 },
            imp_qt: { name: 'Imperial Quart', rate: 0.879877 },
            imp_gal: { name: 'Imperial Gallon', rate: 0.219969 }
        }
    },
    mass: {
        base: 'kg',
        units: {
            kg: { name: 'Kilogram', rate: 1 },
            g: { name: 'Gram', rate: 1000 },
            mg: { name: 'Milligram', rate: 1e6 },
            ug: { name: 'Microgram', rate: 1e9 },
            t: { name: 'Tonne', rate: 0.001 },
            lb: { name: 'Pound', rate: 2.20462 },
            oz: { name: 'Ounce', rate: 35.274 },
            st: { name: 'Stone', rate: 0.157473 }
        }
    },
    temperature: {
        // Special handling
        units: {
            c: { name: 'Celsius' },
            f: { name: 'Fahrenheit' },
            k: { name: 'Kelvin' }
        }
    },
    speed: {
        base: 'mps',
        units: {
            mps: { name: 'Meter/Second', rate: 1 },
            kph: { name: 'Kilometer/Hour', rate: 3.6 },
            mph: { name: 'Mile/Hour', rate: 2.23694 },
            knot: { name: 'Knot', rate: 1.94384 },
            fps: { name: 'Foot/Second', rate: 3.28084 }
        }
    },
    time: {
        base: 'sec',
        units: {
            sec: { name: 'Second', rate: 1 },
            ms: { name: 'Millisecond', rate: 1000 },
            us: { name: 'Microsecond', rate: 1e6 },
            ns: { name: 'Nanosecond', rate: 1e9 },
            min: { name: 'Minute', rate: 1/60 },
            hr: { name: 'Hour', rate: 1/3600 },
            day: { name: 'Day', rate: 1/86400 },
            week: { name: 'Week', rate: 1/604800 },
            month: { name: 'Month (Avg)', rate: 1/2.628e6 },
            year: { name: 'Year', rate: 1/31536000 }
        }
    },
    pressure: {
        base: 'pa',
        units: {
            pa: { name: 'Pascal', rate: 1 },
            kpa: { name: 'Kilopascal', rate: 0.001 },
            bar: { name: 'Bar', rate: 1e-5 },
            mbar: { name: 'Millibar', rate: 0.01 },
            atm: { name: 'Atmosphere', rate: 9.8692e-6 },
            psi: { name: 'PSI', rate: 0.000145038 },
            torr: { name: 'Torr', rate: 0.00750062 },
            inhg: { name: 'Inch of Mercury', rate: 0.0002953 }
        }
    },
    energy: {
        base: 'j',
        units: {
            j: { name: 'Joule', rate: 1 },
            kj: { name: 'Kilojoule', rate: 0.001 },
            cal: { name: 'Calorie', rate: 0.239006 },
            kcal: { name: 'Kilocalorie', rate: 0.000239006 },
            btu: { name: 'BTU', rate: 0.000947817 },
            ev: { name: 'Electronvolt', rate: 6.242e18 },
            wh: { name: 'Watt-hour', rate: 0.000277778 },
            kwh: { name: 'Kilowatt-hour', rate: 2.7778e-7 }
        }
    },
    power: {
        base: 'w',
        units: {
            w: { name: 'Watt', rate: 1 },
            kw: { name: 'Kilowatt', rate: 0.001 },
            mw: { name: 'Megawatt', rate: 1e-6 },
            hp: { name: 'Horsepower', rate: 0.00134102 }
        }
    },
    digital: {
        base: 'byte',
        units: {
            bit: { name: 'Bit', rate: 8 },
            byte: { name: 'Byte', rate: 1 },
            kb: { name: 'Kilobyte', rate: 1/1000 },
            mb: { name: 'Megabyte', rate: 1/1e6 },
            gb: { name: 'Gigabyte', rate: 1/1e9 },
            tb: { name: 'Terabyte', rate: 1/1e12 },
            pb: { name: 'Petabyte', rate: 1/1e15 },
            kib: { name: 'Kibibyte', rate: 1/1024 },
            mib: { name: 'Mebibyte', rate: 1/1048576 },
            gib: { name: 'Gibibyte', rate: 1/1.074e9 }
        }
    },
    dataTransfer: {
        base: 'bps',
        units: {
            bps: { name: 'bps', rate: 1 },
            kbps: { name: 'Kbps', rate: 0.001 },
            mbps: { name: 'Mbps', rate: 1e-6 },
            gbps: { name: 'Gbps', rate: 1e-9 },
            tbps: { name: 'Tbps', rate: 1e-12 }
        }
    },
    frequency: {
        base: 'hz',
        units: {
            hz: { name: 'Hertz', rate: 1 },
            khz: { name: 'Kilohertz', rate: 0.001 },
            mhz: { name: 'Megahertz', rate: 1e-6 },
            ghz: { name: 'Gigahertz', rate: 1e-9 }
        }
    },
    fuel: {
        // Special handling: L/100km is volume/distance, others are distance/volume
        units: {
            kml: { name: 'km/Liter' },
            l100: { name: 'Liters/100 km' },
            mpg_us: { name: 'Miles/Gallon (US)' },
            mpg_uk: { name: 'Miles/Gallon (UK)' }
        }
    },
    angle: {
        base: 'deg',
        units: {
            deg: { name: 'Degree', rate: 1 },
            rad: { name: 'Radian', rate: 0.0174533 },
            grad: { name: 'Gradian', rate: 1.11111 },
            arcmin: { name: 'Minute of Arc', rate: 60 },
            arcsec: { name: 'Second of Arc', rate: 3600 }
        }
    },
    torque: {
        base: 'nm',
        units: {
            nm: { name: 'Newton-meter', rate: 1 },
            lbft: { name: 'Pound-foot', rate: 0.737562 }
        }
    },
    density: {
        base: 'kgm3',
        units: {
            kgm3: { name: 'kg/m³', rate: 1 },
            gcm3: { name: 'g/cm³', rate: 0.001 },
            lbft3: { name: 'lb/ft³', rate: 0.062428 },
            lbin3: { name: 'lb/in³', rate: 3.6127e-5 }
        }
    },
    currency: {
        base: 'usd',
        units: {
            usd: { name: 'US Dollar', rate: 1 },
            eur: { name: 'Euro', rate: 0.95 },
            gbp: { name: 'British Pound', rate: 0.79 },
            bdt: { name: 'Bangladesh Taka', rate: 120.5 },
            inr: { name: 'Indian Rupee', rate: 84.5 },
            jpy: { name: 'Japanese Yen', rate: 149.2 },
            cad: { name: 'Canadian Dollar', rate: 1.41 },
            aud: { name: 'Australian Dollar', rate: 1.54 },
            cny: { name: 'Chinese Yuan', rate: 7.25 }
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

    // Set default selection
    const keys = Object.keys(units);
    fromSelect.value = keys[0];
    toSelect.value = keys[1] || keys[0];
    
    // Set smart defaults
    if (currentCategory === 'temperature') {
        fromSelect.value = 'c';
        toSelect.value = 'f';
    } else if (currentCategory === 'length') {
        fromSelect.value = 'm';
        toSelect.value = 'ft';
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
    } else if (currentCategory === 'fuel') {
        result = convertFuel(value, fromUnit, toUnit);
    } else {
        const rates = unitData[currentCategory].units;
        const fromRate = rates[fromUnit].rate;
        const toRate = rates[toUnit].rate;
        
        // Base = Value / Rate_of_From
        // Result = Base * Rate_of_To
        const baseValue = value / fromRate;
        result = baseValue * toRate;
    }

    // Formatting
    toInput.value = formatResult(result);
    updateFormula();
}

function formatResult(val) {
    if (Number.isInteger(val)) return val;
    // Avoid scientific notation for simple small numbers, but use it for very large/small
    if (Math.abs(val) < 1e-6 || Math.abs(val) > 1e7) {
        return val.toExponential(4);
    }
    return parseFloat(val.toFixed(6));
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

function convertFuel(value, from, to) {
    if (from === to) return value;

    // Normalize to km/L first
    let kml;

    if (from === 'kml') kml = value;
    else if (from === 'l100') kml = 100 / value;
    else if (from === 'mpg_us') kml = value * 0.425144;
    else if (from === 'mpg_uk') kml = value * 0.354006;

    // Convert km/L to target
    if (to === 'kml') return kml;
    if (to === 'l100') return 100 / kml;
    if (to === 'mpg_us') return kml / 0.425144;
    if (to === 'mpg_uk') return kml / 0.354006;
}

function updateFormula() {
    const fromUnitName = fromSelect.options[fromSelect.selectedIndex].text;
    const toUnitName = toSelect.options[toSelect.selectedIndex].text;
    
    let formulaStr = '';
    
    if (currentCategory === 'temperature') {
         formulaStr = 'Temp conversion uses custom formula';
    } else if (currentCategory === 'fuel') {
        formulaStr = 'Fuel conversion uses custom formula';
    } else {
        const rates = unitData[currentCategory].units;
        const fromRate = rates[fromSelect.value].rate;
        const toRate = rates[toSelect.value].rate;
        const rate = (1 / fromRate) * toRate;
        const rateStr = formatResult(rate);
        formulaStr = `1 ${fromUnitName} = ${rateStr} ${toUnitName}`;
    }
    
    formulaText.textContent = formulaStr;
}

// Event Listeners
fromInput.addEventListener('input', calculate);
fromSelect.addEventListener('change', calculate);
toSelect.addEventListener('change', calculate);

swapBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    calculate();
});

// Init
init();
