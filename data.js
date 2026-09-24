/* Name-only catalogue observed on official OEM pages on 08-09-2026. No stock or price feed. */
'use strict';
const SEHGAL = {
  checked: '08-09-2026',
  models: [
    ['fronx','FRONX','NEXA','A fresh perspective on your everyday drive.'],
    ['brezza','Brezza','Arena','Make room for the everyday and the unexpected.'],
    ['e-vitara','e VITARA','NEXA','Begin exploring your move to electric.'],
    ['swift','Swift','Arena','Find a car that fits your rhythm.'],
    ['baleno','Baleno','NEXA','Discover a new companion for your daily journeys.'],
    ['dzire','Dzire','Arena','Bring a little more possibility to every day.'],
    ['alto-k10','Alto K10','Arena','Your next chapter starts with a first step.'],
    ['s-presso','S-Presso','Arena','Explore a different view of city life.'],
    ['celerio','Celerio','Arena','Start with what matters to your everyday.'],
    ['wagonr','WagonR','Arena','Find your fit for work, family and everything between.'],
    ['eeco','Eeco','Arena','Talk to us about the space your journeys need.'],
    ['ertiga','Ertiga','Arena','Explore possibilities for the whole family.'],
    ['victoris','Victoris','Arena','Get to know the range, then make it your own.'],
    ['grand-vitara','Grand Vitara','NEXA','Discover your next direction.'],
    ['xl6','XL6','NEXA','Make the journey part of your plans.'],
    ['jimny','Jimny','NEXA','Explore a car for your next chapter.'],
    ['invicto','Invicto','NEXA','Start a conversation about your next car.']
  ].map(([id,name,channel,copy]) => ({id,name,channel,copy:`Explore the ${name}, compare your options and arrange a test drive.`})),
  photos: {
    fronx: {src:'assets/fronx-reference-2025.jpg',alt:'Red Suzuki Fronx photographed in Jamaica in 2025; reference image, not Indian specification or dealer stock',note:'FRONX · Jamaica reference photo, 04-02-2025',creator:'Jason Lawrence',source:'https://commons.wikimedia.org/wiki/File:Suzuki_Fronx_(front).jpg',license:'CC BY 2.0',licenseUrl:'https://creativecommons.org/licenses/by/2.0/'},
    brezza: {src:'assets/brezza-reference-2023.jpg',alt:'Second-generation Maruti Suzuki Brezza at an exhibition in 2023; reference image, not dealer stock',note:'Brezza · second-generation reference, 22-12-2023',creator:'Vis M',source:'https://commons.wikimedia.org/wiki/File:Maruti_Suzuki_Brezza_-_front.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
  },
  sources: {Arena:'https://www.marutisuzuki.com/arena',NEXA:'https://www.nexaexperience.com/e-brochure',commercial:'https://www.marutisuzukicommercial.com/super-carry'},
  branches: [
    {name:'Manjri',tag:'Commercial',copy:'Super Carry and business-vehicle enquiries. Operations confirmed by the project owner; address, hours and capabilities await approval.'},
    {name:'Bavdhan',tag:'Directory candidate',copy:'Historical website location. Current channel, facilities and contact information need verification.'},
    {name:'Fatimanagar',tag:'Directory candidate',copy:'Historical website location. Current channel, facilities and contact information need verification.'},
    {name:'Erandwane',tag:'Directory candidate',copy:'Historical website location. Current channel, facilities and contact information need verification.'}
  ]
};

/* Complete official model photography, checked 09-09-2026. */
Object.assign(SEHGAL.photos, {
  "swift": {
    "src": "assets/vehicles/swift.webp",
    "alt": "Swift — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/swift",
    "oem": true,
    "width": 2000,
    "height": 1124
  },
  "brezza": {
    "src": "assets/vehicles/brezza-catalogue.png",
    "alt": "Brezza — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/brezza",
    "oem": true,
    "width": 430,
    "height": 260
  },
  "dzire": {
    "src": "assets/vehicles/dzire.png",
    "alt": "Dzire — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/dzire",
    "oem": true,
    "width": 430,
    "height": 260
  },
  "alto-k10": {
    "src": "assets/vehicles/alto-k10.png",
    "alt": "Alto K10 — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/alto-k10",
    "oem": true,
    "width": 606,
    "height": 296
  },
  "s-presso": {
    "src": "assets/vehicles/s-presso.png",
    "alt": "S-Presso — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/s-presso",
    "oem": true,
    "width": 430,
    "height": 260
  },
  "celerio": {
    "src": "assets/vehicles/celerio.png",
    "alt": "Celerio — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/celerio",
    "oem": true,
    "width": 428,
    "height": 260
  },
  "wagonr": {
    "src": "assets/vehicles/wagonr.png",
    "alt": "WagonR — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/wagon-r",
    "oem": true,
    "width": 430,
    "height": 260
  },
  "eeco": {
    "src": "assets/vehicles/eeco.png",
    "alt": "Eeco — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/eeco",
    "oem": true,
    "width": 430,
    "height": 260
  },
  "ertiga": {
    "src": "assets/vehicles/ertiga.png",
    "alt": "Ertiga — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/ertiga",
    "oem": true,
    "width": 430,
    "height": 260
  },
  "victoris": {
    "src": "assets/vehicles/victoris-catalogue.png",
    "alt": "Victoris — official Maruti Suzuki vehicle image",
    "source": "https://www.marutisuzuki.com/arena/Victoris",
    "oem": true,
    "width": 430,
    "height": 260
  },
  "e-vitara": {
    "src": "assets/vehicles/e-vitara.webp",
    "alt": "e VITARA — official Maruti Suzuki vehicle image",
    "source": "https://www.nexaexperience.com/e-vitara",
    "oem": true,
    "width": 1400,
    "height": 786
  },
  "baleno": {
    "src": "assets/vehicles/baleno.png",
    "alt": "Baleno — official Maruti Suzuki vehicle image",
    "source": "https://www.nexaexperience.com/baleno",
    "oem": true,
    "width": 800,
    "height": 450
  },
  "fronx": {
    "src": "assets/vehicles/fronx.webp",
    "alt": "FRONX — official Maruti Suzuki vehicle image",
    "source": "https://www.nexaexperience.com/fronx",
    "oem": true,
    "width": 1604,
    "height": 766
  },
  "grand-vitara": {
    "src": "assets/vehicles/grand-vitara.webp",
    "alt": "Grand Vitara — official Maruti Suzuki vehicle image",
    "source": "https://www.nexaexperience.com/grand-vitara",
    "oem": true,
    "width": 1463,
    "height": 739
  },
  "xl6": {
    "src": "assets/vehicles/xl6.webp",
    "alt": "XL6 — official Maruti Suzuki vehicle image",
    "source": "https://www.nexaexperience.com/xl6",
    "oem": true,
    "width": 1005,
    "height": 555
  },
  "jimny": {
    "src": "assets/vehicles/jimny.webp",
    "alt": "Jimny — official Maruti Suzuki vehicle image",
    "source": "https://www.nexaexperience.com/jimny",
    "oem": true,
    "width": 1322,
    "height": 767
  },
  "invicto": {
    "src": "assets/vehicles/invicto.webp",
    "alt": "Invicto — official Maruti Suzuki vehicle image",
    "source": "https://www.nexaexperience.com/invicto",
    "oem": true,
    "width": 1005,
    "height": 555
  }
});

SEHGAL.photos.brezza.detailSrc='assets/oem-campaigns/brezza-lifestyle.webp';
SEHGAL.photos.baleno.detailSrc='assets/oem-campaigns/baleno-desktop.jpg';

// Matching Baleno image from the supplied NEXA archive; original bytes preserved.
Object.assign(SEHGAL.photos.baleno,{src:'assets/nexa/baleno-card.jpeg',width:300,height:170});
