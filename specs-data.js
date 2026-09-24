'use strict';
/* Specifications from official Maruti Suzuki, NEXA and Commercial pages and brochures, checked 24-09-2026.
   Every record lists its sources. Null means not published on an official page. Arena prices: official price feed, Delhi ex-showroom. */
const SPECS_CHECKED = '24-09-2026';
const SPECS_DATA = [
 {
  "id": "swift",
  "name": "Swift",
  "channel": "Arena",
  "bodyType": "Hatchback",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2L Z12E (Z-Series) Dual Jet, Dual VVT petrol engine with Idle Start-Stop",
  "displacementCc": 1197,
  "powerPs": {
   "Petrol": 82.93,
   "CNG": 69.75
  },
  "torqueNm": {
   "Petrol": 112.4,
   "CNG": 101.8
  },
  "transmissions": [
   "5MT",
   "AGS"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 25.35,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AMT",
    "value": 26.25,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 35.07,
    "unit": "km/kg"
   },
   {
    "fuel": "CNG",
    "transmission": "AMT",
    "value": 35.34,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3860,
  "widthMm": 1735,
  "heightMm": 1520,
  "wheelbaseMm": 2450,
  "groundClearanceMm": 163,
  "bootLitres": 265,
  "fuelTankLitres": 37,
  "airbags": "6 Airbags (standard across all variants)",
  "safetyHighlights": [
   "6 Airbags",
   "ABS with Electronic Brake Distribution",
   "Electronic Stability Program (ESP)",
   "Hill Hold Assist",
   "ISOFIX child seat anchorage",
   "Reverse Camera"
  ],
  "keyFeatures": [
   "9-inch SmartPlay Pro+ infotainment",
   "Wireless Android Auto & Apple CarPlay",
   "Wireless charger",
   "Rear AC vents",
   "Cruise Control",
   "Auto Gear Shift (AGS) technology"
  ],
  "exShowroomFrom": {
   "inr": 583900,
   "city": "Delhi",
   "asPrinted": "₹ 5.84 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/swift",
   "https://www.marutisuzuki.com/content/dam/msil/arena/in/en/assets/cars/swift/brochures/Vertical%20Brochure%20revised_5.pdf",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=SI&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "brezza",
  "name": "Brezza",
  "channel": "Arena",
  "bodyType": "SUV",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.5L K15C Smart Hybrid petrol (6MT/6AT, also Petrol+CNG bi-fuel) and 1.0L K10C DiTC Turbo Boosterjet petrol (6MT only)",
  "displacementCc": 1462,
  "powerPs": {
   "Petrol": 110.12,
   "CNG": 87.8
  },
  "torqueNm": {
   "Petrol": 170,
   "CNG": 121.5
  },
  "transmissions": [
   "6MT",
   "6AT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 21.09,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 20.81,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT",
    "value": 20.17,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol Turbo",
    "transmission": "MT",
    "value": 20.47,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol Turbo",
    "transmission": "MT",
    "value": 19.96,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 26.9,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3995,
  "widthMm": 1790,
  "heightMm": 1685,
  "wheelbaseMm": 2500,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 48,
  "airbags": "6 Airbags (Front, Side and Curtain)",
  "safetyHighlights": [
   "6 Airbags",
   "Electronic Stability Program (ESP)",
   "Hill Hold Assist",
   "Blind View Monitoring",
   "Front and Rear Parking Sensors",
   "Rear Cross Traffic Alert"
  ],
  "keyFeatures": [
   "10.1\" SmartPlay Pro+ with built-in Alexa",
   "360 View Camera",
   "Tyre Pressure Monitoring System (TPMS)",
   "PM2.5 Filter",
   "Suzuki Navigation",
   "Electric Sunroof"
  ],
  "exShowroomFrom": {
   "inr": 749900,
   "city": "Delhi",
   "asPrinted": "₹ 7.50 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/brezza",
   "https://www.marutisuzuki.com/arena/brezza/price",
   "https://www.marutisuzuki.com/content/dam/msil/arena/in/en/assets/cars/brezza/final-new-brezza/The%20New%20Brezza%20Brochure.pdf",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=VZ&channel=NRM,NRC&variantInfoRequired=true",
   "https://www.marutisuzuki.com/graphql/execute.json/msil-platform/arenaVariantList;modelCd=VZ"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "dzire",
  "name": "Dzire",
  "channel": "Arena",
  "bodyType": "Sedan",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2L Z12E (Z-Series) Dual Jet, Dual VVT petrol engine with Idle Start-Stop",
  "displacementCc": 1197,
  "powerPs": {
   "Petrol": 82.93,
   "CNG": 69.75
  },
  "torqueNm": {
   "Petrol": 112.4,
   "CNG": 101.8
  },
  "transmissions": [
   "5MT",
   "AGS"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 25.15,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AMT",
    "value": 26.13,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 35.63,
    "unit": "km/kg"
   },
   {
    "fuel": "CNG",
    "transmission": "AMT",
    "value": 36.47,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3995,
  "widthMm": 1735,
  "heightMm": 1525,
  "wheelbaseMm": 2450,
  "groundClearanceMm": 163,
  "bootLitres": 382,
  "fuelTankLitres": 37,
  "airbags": "6 Airbags (standard across all variants)",
  "safetyHighlights": [
   "6 Airbags",
   "3-point ELR seatbelts",
   "Electronic Stability Program (ESP)",
   "Hill Hold Assist",
   "ABS with EBD",
   "ISOFIX child seat anchorages"
  ],
  "keyFeatures": [
   "Electric Sunroof",
   "360° HD View Camera",
   "Suzuki Connect",
   "9\" SmartPlay Pro+ infotainment",
   "Auto Climate Control",
   "Wireless charger"
  ],
  "exShowroomFrom": {
   "inr": 628800,
   "city": "Delhi",
   "asPrinted": "₹ 6.29 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/dzire",
   "https://www.marutisuzuki.com/content/dam/msil/arena/in/en/assets/cars/dzire/brochures/DZire-brochure_.pdf",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=DE&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "alto-k10",
  "name": "Alto K10",
  "channel": "Arena",
  "bodyType": "Hatchback",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.0L K10C Dual Jet, Dual VVT petrol engine",
  "displacementCc": 998,
  "powerPs": {
   "Petrol": 68.5
  },
  "torqueNm": {
   "Petrol": 89
  },
  "transmissions": [
   "5MT",
   "AGS"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 24.39,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AGS",
    "value": 24.9,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 33.4,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3530,
  "widthMm": 1490,
  "heightMm": 1520,
  "wheelbaseMm": 2380,
  "groundClearanceMm": null,
  "bootLitres": 214,
  "fuelTankLitres": 27,
  "airbags": "6 Airbags as Standard",
  "safetyHighlights": [
   "6 Airbags as Standard",
   "Electronic Stability Program (ESP) as Standard",
   "Reverse Parking Sensor",
   "3-point ELR (Emergency Locking Retractor)",
   "HEARTECT Platform"
  ],
  "keyFeatures": [
   "SmartPlay Studio with Smartphone Navigation",
   "Steering Mounted Audio and Voice Control",
   "Digital Speed Display",
   "4 Speakers",
   "Auto Gear Shift Technology"
  ],
  "exShowroomFrom": {
   "inr": 369900,
   "city": "Delhi",
   "asPrinted": "₹ 3.70 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/alto-k10",
   "https://www.marutisuzuki.com/content/dam/msil/arena/in/en/assets/cars/alto-k10/documents/AltoK10-KV-Brochure.pdf",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=AT&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "s-presso",
  "name": "S-Presso",
  "channel": "Arena",
  "bodyType": "Hatchback",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.0L K10C petrol engine",
  "displacementCc": 998,
  "powerPs": {
   "Petrol": 66.6
  },
  "torqueNm": {
   "Petrol": 89
  },
  "transmissions": [
   "5MT",
   "AGS"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT/AGS",
    "value": 25.3,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 32.73,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3565,
  "widthMm": 1520,
  "heightMm": 1567,
  "wheelbaseMm": 2380,
  "groundClearanceMm": null,
  "bootLitres": 240,
  "fuelTankLitres": 27,
  "airbags": "Dual Airbags",
  "safetyHighlights": [
   "Dual Airbags",
   "ABS with Electronic Brake Distribution",
   "Electronic Stability Program (ESP)",
   "Hill Hold Assist",
   "Reverse Parking Sensors",
   "HEARTECT Platform"
  ],
  "keyFeatures": [
   "SmartPlay Studio with Audio and Voice Controls",
   "Auto Gear Shift Technology",
   "Centrally Located Power Window Switches",
   "Uniquely Positioned Instrument Cluster"
  ],
  "exShowroomFrom": {
   "inr": 349900,
   "city": "Delhi",
   "asPrinted": "₹ 3.50 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/s-presso",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=SP&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "celerio",
  "name": "Celerio",
  "channel": "Arena",
  "bodyType": "Hatchback",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.0L K10C petrol engine (3-cylinder)",
  "displacementCc": 998,
  "powerPs": {
   "Petrol": 68.5,
   "CNG": 56.6
  },
  "torqueNm": {
   "Petrol": 91.1,
   "CNG": 82.1
  },
  "transmissions": [
   "5MT",
   "AGS"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT/AGS",
    "value": 26.0,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 34.43,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3695,
  "widthMm": 1655,
  "heightMm": 1555,
  "wheelbaseMm": 2435,
  "groundClearanceMm": null,
  "bootLitres": 292,
  "fuelTankLitres": 32,
  "airbags": "6 Airbags",
  "safetyHighlights": [
   "6 Airbags",
   "ABS with Electronic Brake Distribution",
   "Hill Hold Assist",
   "Reverse Parking Sensors",
   "HEARTECT Platform",
   "3-Point Rear Middle Seatbelt"
  ],
  "keyFeatures": [
   "SmartPlay Studio with Smartphone Navigation",
   "Steering Mounted Audio and Voice Controls",
   "Engine Push Start-Stop Button",
   "Door Request Switch with Smart Key"
  ],
  "exShowroomFrom": {
   "inr": 469900,
   "city": "Delhi",
   "asPrinted": "₹ 4.70 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/celerio",
   "https://www.marutisuzuki.com/content/dam/msil/arena/in/en/assets/cars/celerio/documents/Arena-Celerio-Brochure.pdf",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=CL&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "wagonr",
  "name": "WagonR",
  "channel": "Arena",
  "bodyType": "Hatchback",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.0L K10C petrol / 1.2L K12N petrol (variant dependent); 1.0L K10C S-CNG",
  "displacementCc": 1197,
  "powerPs": {
   "Petrol": 90.9,
   "CNG": 56.6
  },
  "torqueNm": {
   "Petrol": 113.7,
   "CNG": 82.1
  },
  "transmissions": [
   "5MT",
   "AGS"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "AGS",
    "value": 24.43,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 23.56,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 24.35,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AGS",
    "value": 25.19,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 33.47,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3655,
  "widthMm": 1620,
  "heightMm": 1675,
  "wheelbaseMm": 2435,
  "groundClearanceMm": 165,
  "bootLitres": 341,
  "fuelTankLitres": 32,
  "airbags": "6 Airbags",
  "safetyHighlights": [
   "6 Airbags",
   "ABS with Electronic Brake Distribution",
   "Electronic Stability Program (ESP)",
   "Hill Hold Assist",
   "HEARTECT Platform"
  ],
  "keyFeatures": [
   "Auto Gear Shift Technology",
   "SmartPlay Studio with Navigation",
   "Swivel Seat technology"
  ],
  "exShowroomFrom": {
   "inr": 498900,
   "city": "Delhi",
   "asPrinted": "₹ 4.99 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/wagon-r",
   "https://www.marutisuzuki.com/content/dam/msil/arena/in/en/assets/cars/wagonr/documents/Arena-Wagon-r-Brochure.pdf",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=WA&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "eeco",
  "name": "Eeco",
  "channel": "Arena",
  "bodyType": "Van",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2L K12N Advanced Dual Jet, Dual VVT petrol / S-CNG",
  "displacementCc": 1197,
  "powerKw": {
   "CNG": 52.7
  },
  "torqueNm": {
   "Petrol": 105.5
  },
  "transmissions": [
   "5MT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 19.71,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 26.78,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 3675,
  "widthMm": 1475,
  "heightMm": 1825,
  "wheelbaseMm": 2350,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 32,
  "airbags": "6 Airbags as Standard (all passenger variants)",
  "safetyHighlights": [
   "6 Airbags as Standard",
   "ABS with Electronic Brake Distribution",
   "Electronic Stability Program (ESP)",
   "Reverse Parking Sensors",
   "3-point ELR seat belts (all rear seats)"
  ],
  "keyFeatures": [
   "Air Conditioner with Heater",
   "5- and 6-Seater options",
   "Large boot space",
   "Spacious cabin",
   "Front Mud Flaps",
   "Stylish Clear Lens Headlamps"
  ],
  "exShowroomFrom": {
   "inr": 528100,
   "city": "Delhi",
   "asPrinted": "₹ 5.28 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/eeco",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=VR&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "ertiga",
  "name": "Ertiga",
  "channel": "Arena",
  "bodyType": "MPV",
  "seating": 7,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.5L K15C petrol engine",
  "displacementCc": 1462,
  "powerPs": {
   "Petrol": 103.06
  },
  "torqueNm": {
   "Petrol": 139.0
  },
  "transmissions": [
   "5MT",
   "6AT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT/AT",
    "value": 20.51,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 26.11,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 4395,
  "widthMm": 1735,
  "heightMm": 1690,
  "wheelbaseMm": 2740,
  "groundClearanceMm": 185,
  "bootLitres": 209,
  "fuelTankLitres": 45,
  "airbags": "6 Airbags (standard)",
  "safetyHighlights": [
   "6 Airbags",
   "ABS with EBD",
   "Hill Hold Assist",
   "HEARTECT Platform",
   "Tyre Pressure Monitoring System (TPMS)"
  ],
  "keyFeatures": [
   "Smart Flexi Seating",
   "USB Fast Charger (Type-C)",
   "SmartPlay Pro with Surrounded Sense by ARKAMYS",
   "6-Speed AT with Paddle Shifters",
   "Cruise Control",
   "Rear AC vents"
  ],
  "exShowroomFrom": {
   "inr": 890000,
   "city": "Delhi",
   "asPrinted": "₹ 8.90 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/ertiga",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=ER&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "victoris",
  "name": "Victoris",
  "channel": "Arena",
  "bodyType": "SUV",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG",
   "Strong Hybrid"
  ],
  "engine": "1.5L K15C Smart Hybrid petrol (also Petrol+CNG) and 1.5L M15D Strong Hybrid petrol",
  "displacementCc": 1462,
  "powerPs": {
   "Petrol": 103.06,
   "CNG": 87.8
  },
  "torqueNm": {
   "Petrol": 139,
   "CNG": 121.5
  },
  "transmissions": [
   "5MT",
   "6AT",
   "eCVT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 21.18,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT",
    "value": 21.06,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT (AllGrip AWD)",
    "value": 19.07,
    "unit": "km/l"
   },
   {
    "fuel": "Strong Hybrid",
    "transmission": "eCVT",
    "value": 28.65,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 27.02,
    "unit": "km/kg"
   }
  ],
  "lengthMm": 4360,
  "widthMm": 1795,
  "heightMm": 1655,
  "wheelbaseMm": 2600,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 45,
  "airbags": "6 Airbags Standard",
  "safetyHighlights": [
   "6 Airbags Standard",
   "Advanced Level 2 ADAS",
   "360° View HD Camera with 11 Views",
   "Electronic Parking Brake with Brake Hold",
   "Suzuki-Tect Platform"
  ],
  "keyFeatures": [
   "Alexa Auto Voice AI",
   "Immersive Infinity speakers with Dolby Atmos Spatial Sound",
   "In-Built Application Store with 35+ Apps",
   "64-colour ambient lighting",
   "Panoramic Sunroof",
   "Smart Powered Tailgate with Gesture Control"
  ],
  "exShowroomFrom": {
   "inr": 1049900,
   "city": "Delhi",
   "asPrinted": "₹ 10.49 Lakh"
  },
  "sources": [
   "https://www.marutisuzuki.com/arena/victoris",
   "https://www.marutisuzuki.com/content/dam/msil/arena/in/en/assets/cars/Victoris/brochures/Victoris_Brochure_Vertical_Aug-26.pdf",
   "https://www.marutisuzuki.com/pricing/v2/common/pricing/ex-showroom-detail?forCode=08&modelCodes=EC&channel=NRM,NRC&variantInfoRequired=true"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "fronx",
  "name": "FRONX",
  "channel": "NEXA",
  "bodyType": "SUV",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2 L K-Series Dual Jet Dual VVT / 1.0 L Turbo Boosterjet",
  "displacementCc": [
   1197,
   998
  ],
  "powerPs": {
   "Petrol": 100.06,
   "CNG": 77.5
  },
  "torqueNm": {
   "Petrol": 147.6,
   "CNG": 98.5
  },
  "transmissions": [
   "5MT",
   "5AMT",
   "6AT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 21.79,
    "unit": "km/l",
    "notes": "1.2L K-Series"
   },
   {
    "fuel": "Petrol",
    "transmission": "AMT",
    "value": 22.89,
    "unit": "km/l",
    "notes": "1.2L K-Series"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 28.51,
    "unit": "km/kg",
    "notes": "1.2L K-Series"
   },
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 21.5,
    "unit": "km/l",
    "notes": "1.0L Turbo Boosterjet"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT",
    "value": 20.01,
    "unit": "km/l",
    "notes": "1.0L Turbo Boosterjet, 6AT"
   }
  ],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 3995,
  "widthMm": 1765,
  "heightMm": 1550,
  "wheelbaseMm": 2520,
  "groundClearanceMm": null,
  "bootLitres": 308,
  "fuelTankLitres": 37,
  "airbags": "6 standard (front, side & curtain) across all variants",
  "safetyHighlights": [
   "6 airbags standard (NEXA Safety Shield)",
   "Electronic Stability Program (ESP) with Hill-Hold Assist",
   "ABS with EBD",
   "ISOFIX child-seat anchorage",
   "3-point ELR seatbelts (all seats) with reminders",
   "Reverse parking sensors"
  ],
  "keyFeatures": [
   "22.86 cm SmartPlay Pro+ infotainment with Surround Sense by Arkamys (Alpha)",
   "360-degree view camera",
   "Head-Up Display",
   "Wireless smartphone charger",
   "Suzuki Connect (40+ connected-car features)",
   "Cruise control with paddle shifters (AT)"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.nexaexperience.com/fronx",
   "https://www.nexaexperience.com/fronx/price",
   "https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/fronx/documents/NEXA-Fronx-Brochure.pdf"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "baleno",
  "name": "BALENO",
  "channel": "NEXA",
  "bodyType": "Hatchback",
  "seating": 5,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2 L K-Series Dual Jet Dual VVT",
  "displacementCc": 1197,
  "powerPs": {
   "Petrol": 89.7,
   "CNG": 77.5
  },
  "torqueNm": {
   "Petrol": 113,
   "CNG": 98.5
  },
  "transmissions": [
   "5MT",
   "5AMT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 22.35,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AMT",
    "value": 22.94,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 30.61,
    "unit": "km/kg"
   }
  ],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 3990,
  "widthMm": 1745,
  "heightMm": 1500,
  "wheelbaseMm": 2520,
  "groundClearanceMm": null,
  "bootLitres": 318,
  "fuelTankLitres": 37,
  "airbags": "6 standard across all variants",
  "safetyHighlights": [
   "6 airbags standard (NEXA Safety Shield)",
   "ESP with Hill-Hold",
   "ABS with EBD and Brake Assist",
   "ISOFIX child-seat anchorages",
   "3-point ELR seatbelts with pre-tensioner/force limiter",
   "Reverse parking sensors (Alpha: 360 view camera)"
  ],
  "keyFeatures": [
   "22.86 cm SmartPlay Pro+ touchscreen (Alpha)",
   "Head-up display (Alpha)",
   "Cruise control (Alpha)",
   "Suzuki Connect",
   "Wireless Android Auto/Apple CarPlay (higher variants)",
   "Auto climate control"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.nexaexperience.com/baleno",
   "https://www.nexaexperience.com/baleno/price",
   "https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/baleno/documents/NEXA-Baleno-Brochure.pdf"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "grand-vitara",
  "name": "GRAND VITARA",
  "channel": "NEXA",
  "bodyType": "SUV",
  "seating": 5,
  "fuels": [
   "Petrol",
   "Hybrid"
  ],
  "engine": "1.5 L K-Series (Petrol) / 1.5 L Strong Hybrid",
  "displacementCc": [
   1462,
   1490
  ],
  "powerPs": {
   "Petrol": 103.06,
   "Hybrid": 92.45
  },
  "torqueNm": {
   "Petrol": 139,
   "Hybrid": 122
  },
  "transmissions": [
   "5MT",
   "6AT",
   "e-CVT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 21.11,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT",
    "value": 20.58,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT",
    "value": 19.2,
    "unit": "km/l",
    "notes": "AllGrip Select 4x4 AT"
   },
   {
    "fuel": "Hybrid",
    "transmission": "e-CVT",
    "value": 27.97,
    "unit": "km/l"
   }
  ],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 4345,
  "widthMm": 1795,
  "heightMm": 1645,
  "wheelbaseMm": 2600,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 45,
  "airbags": "6 standard across all variants",
  "safetyHighlights": [
   "6 airbags standard",
   "Electronic Stability Program (ESP)",
   "Hill-Hold Assist / Hill-Descent Control",
   "ABS with EBD and Brake Assist",
   "360-degree view camera (higher variants)",
   "Tyre Pressure Monitoring System"
  ],
  "keyFeatures": [
   "Strong Hybrid powertrain (85kW/115.56PS total system power)",
   "AllGrip Select 4x4 (petrol variants)",
   "Panoramic sunroof",
   "Head-up display",
   "Wireless charger",
   "Suzuki Connect"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.nexaexperience.com/grand-vitara",
   "https://www.nexaexperience.com/grand-vitara/price",
   "https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/grand-vitara/sigma/documents/NEXA-Grand-Vitara-brochure.pdf"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "xl6",
  "name": "XL6",
  "channel": "NEXA",
  "bodyType": "MPV",
  "seating": 6,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.5 L K15C Smart Hybrid",
  "displacementCc": 1462,
  "powerPs": {
   "Petrol": 103.06,
   "CNG": 100.63
  },
  "torqueNm": {
   "Petrol": 139,
   "CNG": 137.1
  },
  "transmissions": [
   "5MT",
   "6AT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 20.9,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT",
    "value": 20.27,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 26.23,
    "unit": "km/kg"
   }
  ],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 4485,
  "widthMm": 1775,
  "heightMm": 1745,
  "wheelbaseMm": 2740,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 45,
  "airbags": "Varies by variant (see brochure)",
  "safetyHighlights": [
   "ESP (Electronic Stability Program)",
   "Hill Hold Control / Hill Descent Control",
   "ABS with EBD and Brake Assist",
   "Rear-view camera / 360 view camera (Alpha+)",
   "ISOFIX child-seat anchorage",
   "Brake Limited Slip Differential"
  ],
  "keyFeatures": [
   "K15C Smart Hybrid engine with idle start-stop",
   "Captain seats (2nd row) with one-touch recline & slide",
   "Auto AC",
   "SmartPlay Pro+/Pro infotainment",
   "Cruise control",
   "Suzuki Connect"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.nexaexperience.com/xl6",
   "https://www.nexaexperience.com/xl6/price",
   "https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/xl6/Documents/NEXA-Xl6-Brochure.pdf"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "jimny",
  "name": "JIMNY",
  "channel": "NEXA",
  "bodyType": "SUV",
  "seating": 4,
  "fuels": [
   "Petrol"
  ],
  "engine": "1.5 L K15B with Idle Start-Stop",
  "displacementCc": 1462,
  "powerPs": {
   "Petrol": 104.8
  },
  "torqueNm": {
   "Petrol": 134.2
  },
  "transmissions": [
   "5MT",
   "4AT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 16.94,
    "unit": "km/l"
   },
   {
    "fuel": "Petrol",
    "transmission": "AT",
    "value": 16.39,
    "unit": "km/l"
   }
  ],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 3985,
  "widthMm": 1645,
  "heightMm": 1720,
  "wheelbaseMm": 2590,
  "groundClearanceMm": 210,
  "bootLitres": 211,
  "fuelTankLitres": 40,
  "airbags": "6 standard (dual front + side & curtain) across all variants",
  "safetyHighlights": [
   "6 airbags standard",
   "ESP with Hill-Hold and Hill-Descent Control",
   "ABS with EBD and Brake Assist",
   "Brake Limited Slip Differential",
   "ISOFIX child-seat anchorages",
   "Rear-view camera"
  ],
  "keyFeatures": [
   "ALLGRIP PRO 4WD with low-range transfer gear",
   "Ladder-frame chassis, 3-link rigid axles",
   "36° approach / 46° departure angle",
   "Cruise control (Alpha)",
   "22.86 cm SmartPlay Pro+ touchscreen (Alpha)",
   "LED headlamps (Alpha)"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.nexaexperience.com/jimny",
   "https://www.nexaexperience.com/jimny/price",
   "https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/jimny/documents/NEXA-Jimny-Brochure.pdf"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "invicto",
  "name": "INVICTO",
  "channel": "NEXA",
  "bodyType": "MPV",
  "seating": 7,
  "fuels": [
   "Hybrid"
  ],
  "engine": "2.0 L Strong Hybrid (Petrol/Hybrid)",
  "displacementCc": 1987,
  "powerPs": {
   "Hybrid": 188.9
  },
  "torqueNm": null,
  "transmissions": [
   "e-CVT"
  ],
  "mileage": [
   {
    "fuel": "Hybrid",
    "transmission": "e-CVT",
    "value": 22.16,
    "unit": "km/l"
   }
  ],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 4755,
  "widthMm": 1845,
  "heightMm": 1795,
  "wheelbaseMm": 2850,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 52,
  "airbags": "6 (Dual Front + Front Side & Curtain) standard across variants",
  "safetyHighlights": [
   "Dual front airbags + front side & curtain airbags (6 total)",
   "Vehicle Stability Control with Hill Start Assist",
   "ABS with EBD",
   "Electronic Parking Brake with Auto Hold",
   "Emergency Call (eCall) with SOS button",
   "ISOFIX child-seat anchorage"
  ],
  "keyFeatures": [
   "Strong Hybrid powertrain, EV drive mode",
   "7/8-seater captain-seat layout with walk-in slide & recline",
   "SmartPlay Magnum/Magnum+ touchscreen with wireless Apple CarPlay",
   "Panoramic sunroof (Alpha+)",
   "Ventilated front seats (Alpha+)",
   "Suzuki Connect"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.nexaexperience.com/invicto",
   "https://www.nexaexperience.com/invicto/price",
   "https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/invicto/documents/NEXA-Invicto-Brochure.pdf"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "e-vitara",
  "name": "e VITARA",
  "channel": "NEXA",
  "bodyType": "SUV",
  "seating": 5,
  "fuels": [
   "Electric"
  ],
  "engine": "3-Phase AC Permanent Magnet Synchronous Motor",
  "displacementCc": null,
  "torqueNm": {
   "Electric": 193
  },
  "transmissions": [
   "Single-speed (electric 2WD)"
  ],
  "mileage": [],
  "evBatteryKwh": [
   49,
   61
  ],
  "evRangeKm": [
   {
    "battery": 49,
    "value": 440,
    "basis": "as printed in brochure"
   },
   {
    "battery": 61,
    "value": 543,
    "basis": "as printed in brochure"
   }
  ],
  "payloadKg": null,
  "lengthMm": 4275,
  "widthMm": 1800,
  "heightMm": 1640,
  "wheelbaseMm": 2700,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": null,
  "airbags": "7 airbags standard across all variants",
  "safetyHighlights": [
   "7 airbags standard",
   "Electronic Stability Program (ESP)",
   "ABS with EBD and Brake Assist",
   "Advanced Driver Assistance features incl. AEB, Lane Keep Assist, Adaptive Cruise Control (Alpha)",
   "Hill Hold Control",
   "Electronic Parking Brake"
  ],
  "keyFeatures": [
   "Lithium Ferrophosphate (LFP) battery, 8-yr/160,000km warranty",
   "DC rapid charging 10-80% in ~45 minutes",
   "49kWh (Delta, 440km) / 61kWh (Zeta/Alpha, 543km) battery options",
   "Battery-as-a-Service (BaaS) introductory pricing option",
   "Panoramic sunroof / advanced infotainment",
   "V2L (vehicle-to-load) and connected-car features"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.nexaexperience.com/e-vitara",
   "https://www.nexaexperience.com/e-vitara/price",
   "https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/evitara/documents/e%20VITARA%20Web%20Brochure%20Sep%2726.pdf"
  ],
  "checkedOn": "24-09-2026",
  "powerKw": {
   "Electric": 128
  }
 },
 {
  "id": "super-carry",
  "name": "Super Carry",
  "channel": "Commercial",
  "bodyType": "Pickup",
  "seating": 2,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2 L Advanced K-Series Dual Jet Dual VVT",
  "displacementCc": 1197,
  "powerPs": {
   "Petrol": 80.7,
   "CNG": 71.6
  },
  "torqueNm": {
   "Petrol": 104.4,
   "CNG": 95
  },
  "transmissions": [
   "5MT"
  ],
  "mileage": [],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": 750,
  "lengthMm": 3800,
  "widthMm": 1562,
  "heightMm": 1883,
  "wheelbaseMm": 2110,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 30,
  "airbags": null,
  "safetyHighlights": [
   "Electronic Stability Program (ESP) - first in mini-truck segment",
   "ABS with EBD",
   "Front ventilated disc brakes",
   "Rear parking sensor system",
   "Seat belt reminder (driver & co-driver)",
   "Engine immobilizer"
  ],
  "keyFeatures": [
   "3-year / 100,000km warranty (extendable to 6 years)",
   "CNG variant with 5L emergency petrol tank",
   "2183mm deck length (petrol cargo)",
   "80 km/h top speed, 34% gradeability",
   "Ventilated front disc / rear drum brakes",
   "MacPherson strut front, leaf-spring rigid rear axle"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.marutisuzukicommercial.com/super-carry",
   "https://www.marutisuzukicommercial.com/content/dam/msil/commercial/in/en/assets/documents/ESPSuperCarryLeafletA4-Eng.pdf"
  ],
  "checkedOn": "24-09-2026"
 },
 {
  "id": "eeco-cargo",
  "name": "Eeco Cargo",
  "channel": "Commercial",
  "bodyType": "Van",
  "seating": 2,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2 L K12N",
  "displacementCc": 1197,
  "torqueNm": {
   "Petrol": 105.5,
   "CNG": 95
  },
  "transmissions": [
   "5MT"
  ],
  "mileage": [],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 3675,
  "widthMm": 1475,
  "heightMm": 1825,
  "wheelbaseMm": 2350,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 32,
  "airbags": null,
  "safetyHighlights": [
   "Electronic Stability Program (ESP)",
   "Side impact beams",
   "Reverse parking sensor system",
   "Seat belt reminder (driver & co-driver)",
   "Engine immobilizer",
   "Speed-limiting device (80 km/h)"
  ],
  "keyFeatures": [
   "1.2L Advanced K-Series Dual Jet, Dual VVT engine",
   "Digital instrument cluster",
   "Covered cargo cabin, flat cargo bed",
   "Available in Petrol, CNG and CNG+AC variants",
   "10+ safety features incl. 4 reverse parking sensors",
   "Available colours: Solid White, Metallic Silky Silver"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.marutisuzukicommercial.com/eeco-cargo",
   "https://www.marutisuzukicommercial.com/content/dam/msil/commercial/in/en/assets/vehicles/eeco_cargo/New-Eeco-CARGO-RTO-Leaflet-2025-A4.pdf"
  ],
  "checkedOn": "24-09-2026",
  "powerKw": {
   "Petrol": 60.5,
   "CNG": 52.7
  }
 },
 {
  "id": "tour-v",
  "name": "Eeco Tour V",
  "channel": "Commercial",
  "bodyType": "Van",
  "seating": 6,
  "fuels": [
   "Petrol",
   "CNG"
  ],
  "engine": "1.2 L K12N",
  "displacementCc": 1197,
  "torqueNm": {
   "Petrol": 105.5,
   "CNG": 95
  },
  "transmissions": [
   "5MT"
  ],
  "mileage": [
   {
    "fuel": "Petrol",
    "transmission": "MT",
    "value": 20.2,
    "unit": "km/l"
   },
   {
    "fuel": "CNG",
    "transmission": "MT",
    "value": 27.05,
    "unit": "km/kg"
   }
  ],
  "evBatteryKwh": null,
  "evRangeKm": null,
  "payloadKg": null,
  "lengthMm": 3675,
  "widthMm": 1475,
  "heightMm": 1825,
  "wheelbaseMm": 2350,
  "groundClearanceMm": null,
  "bootLitres": null,
  "fuelTankLitres": 32,
  "airbags": "Dual front airbags standard; side & curtain airbags also fitted (exact count not printed)",
  "safetyHighlights": [
   "Dual front airbags (driver & co-driver)",
   "Side and curtain airbags",
   "ABS with EBD",
   "Electronic Stability Program (ESP)",
   "Offset crash compliance (as per AIS 098)",
   "3-point ELR seatbelts for all rear seats with pre-tensioner & force limiter (front)"
  ],
  "keyFeatures": [
   "5-seater or 6-seater layouts, Petrol or Petrol+CNG",
   "3-year / 100,000km warranty (extendable to 6 years)",
   "Reverse parking sensor system",
   "Speed-limiting device (80 km/h, per CMVR Rule 118 for taxi use)",
   "Available colours: Solid White, Metallic Silky Silver, Bluish Black",
   "Strictly for taxi/commercial passenger use"
  ],
  "exShowroomFrom": null,
  "sources": [
   "https://www.marutisuzukicommercial.com/eeco-tour-v",
   "https://www.marutisuzukicommercial.com/content/dam/msil/commercial/in/en/assets/vehicles/eeco-tour-v/documents/TOUR-V-EECO.pdf"
  ],
  "checkedOn": "24-09-2026",
  "powerKw": {
   "Petrol": 60.5,
   "CNG": 52.7
  }
 }
];
