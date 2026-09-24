'use strict';
/* Facts from official sources (lenders, Maruti Suzuki, IRDAI, Government of India, Global NCAP, Bharat NCAP), checked 24-09-2026. */
const FACTS_DATA = {
 "checkedOn": "24-09-2026",
 "ncap": [
  {
   "model": "Dzire",
   "programme": "Global NCAP",
   "protocol": "2022+",
   "adultStars": 5,
   "childStars": 4,
   "testDate": "2024",
   "source": "https://www.globalncap.org/news/new-dzire-from-maruti-suzuki-achieves-five-star-rating-in-global-ncap-voluntary-test"
  },
  {
   "model": "Victoris",
   "programme": "Global NCAP",
   "protocol": "2022+",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.globalncap.org/news/five-star-victoris"
  },
  {
   "model": "Celerio (6 airbags)",
   "programme": "Global NCAP",
   "protocol": "2022+",
   "adultStars": 3,
   "childStars": 2,
   "testDate": "2025",
   "source": "https://www.globalncap.org/news/mixed-results-for-maruti-suzuki"
  },
  {
   "model": "Brezza",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2026",
   "source": "https://www.bncap.in/vehicle/maruti-brezza/"
  },
  {
   "model": "Dzire",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-dzire-gasoline/"
  },
  {
   "model": "e VITARA",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-suzuki-e-vitara/"
  },
  {
   "model": "Invicto",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-suzuki-invicto/"
  },
  {
   "model": "Victoris",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-suzuki-victoris/"
  },
  {
   "model": "Baleno (2 airbags)",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 4,
   "childStars": 3,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-baleno-gasoline-2-airbags/"
  },
  {
   "model": "Baleno (6 airbags)",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 4,
   "childStars": 3,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-baleno-gasoline-6-airbags/"
  }
 ],
 "ncapNote": "Only ratings that apply to the version on sale today are shown. Earlier tests of previous generations or lower-airbag versions are listed on the programmes’ own websites.",
 "loans": [
  {
   "lender": "SBI",
   "rateFrom": 8.4,
   "rateTo": 9.35,
   "basis": "Credit-score based; 3-month MCLR-linked",
   "maxTenureMonths": null,
   "processingFee": "",
   "source": "https://sbi.bank.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/auto-loans"
  },
  {
   "lender": "HDFC Bank",
   "rateFrom": 9.0,
   "rateTo": null,
   "basis": "Rate table says 9% onwards; the same page’s FAQ says 9.40% onwards",
   "maxTenureMonths": 96,
   "processingFee": "Up to 0.5% of loan amount, subject to min Rs 3,500 and max Rs 8,000.",
   "source": "https://www.hdfc.bank.in/car-loan/interest-rates-and-charges"
  },
  {
   "lender": "ICICI Bank",
   "rateFrom": 8.4,
   "rateTo": null,
   "basis": "Tenure over 36 months; below 36 months from 10.25%",
   "maxTenureMonths": 84,
   "processingFee": "",
   "source": "https://www.icicibank.com/Personal-Banking/loans/car-loan/car-loan-interest-rate.page"
  },
  {
   "lender": "Axis Bank",
   "rateFrom": 8.9,
   "rateTo": 11.7,
   "basis": "Fixed rate; MCLR + spread",
   "maxTenureMonths": null,
   "processingFee": "Up to 2% of loan amount + GST.",
   "source": "https://www.axis.bank.in/loans/car-loan/interest-rates-charges"
  },
  {
   "lender": "Bank of Baroda",
   "rateFrom": 7.6,
   "rateTo": 11.3,
   "basis": "Digital Car Loan; credit-score based",
   "maxTenureMonths": 84,
   "processingFee": "0.50% of loan amount + GST.",
   "source": "https://bankofbaroda.bank.in/loans/vehicle-loan/baroda-car-loan"
  },
  {
   "lender": "Canara Bank",
   "rateFrom": 7.45,
   "rateTo": 15.0,
   "basis": "Range of loans actually sanctioned, from 12-12-2025",
   "maxTenureMonths": 84,
   "processingFee": "0.25% of loan amount, min Rs 1,000 + GST, max Rs 5,000 + GST (50% waiver 01-07-2026 to 30-09-2026 as a festival offer).",
   "source": "https://www.canarabank.bank.in/pages/interest-rate-range-on-loans"
  },
  {
   "lender": "Union Bank of India",
   "rateFrom": 7.6,
   "rateTo": 10.0,
   "basis": "Salaried; credit-score based, EBLR-linked",
   "maxTenureMonths": null,
   "processingFee": "",
   "source": "https://www.unionbankofindia.bank.in/pdf/retail_roi.pdf"
  },
  {
   "lender": "IDFC FIRST Bank",
   "rateFrom": 8.99,
   "rateTo": null,
   "basis": "Floating or fixed",
   "maxTenureMonths": 120,
   "processingFee": "",
   "source": "https://www.idfcfirst.bank.in/personal-banking/loans/car-loan"
  },
  {
   "lender": "Bank of Maharashtra",
   "rateFrom": 7.45,
   "rateTo": 11.75,
   "basis": "Salaried; credit-score based, RLLR-linked",
   "maxTenureMonths": null,
   "processingFee": "",
   "source": "https://bankofmaharashtra.bank.in/retail-interest-rates"
  }
 ],
 "smartFinancePartners": {
  "url": "https://www.marutisuzuki.com/arena/arena-finance",
  "count": 43,
  "names": [
   "Bank of India",
   "IndusInd Bank",
   "Punjab & Sind Bank",
   "Toyota Financial Services",
   "Bajaj Finance",
   "Canara Bank",
   "Cholamandalam Investment and Finance (Chola)",
   "Federal Bank",
   "Haryana Gramin Bank",
   "HDB Financial Services",
   "Indian Bank",
   "Punjab National Bank",
   "Saraswat Bank",
   "Sundaram Finance",
   "UCO Bank",
   "Union Bank of India",
   "Yes Bank"
  ]
 },
 "service": {
  "schedule": [],
  "standardWarranty": "3 years or 1,00,000 km, whichever comes first, for cars bought on or after 09-07-2024 (earlier cars: 2 years or 40,000 km). Covers engine, transmission, mechanical, electrical and air-conditioning parts; consumables excluded.",
  "extendedWarranty": [
   {
    "name": "Platinum",
    "detail": "Up to the 4th year or 1,20,000 km"
   },
   {
    "name": "Royal Platinum",
    "detail": "Up to the 5th year or 1,40,000 km"
   },
   {
    "name": "Solitaire",
    "detail": "Up to the 6th year or 1,60,000 km"
   }
  ],
  "roadside": "Maruti Suzuki Road Service, 24 × 7 across India: towing, battery jump-start, lost keys, flat tyres and minor on-site repairs. Toll-free 1800-102-1800. Charges depend on the service and distance.",
  "warrantySource": "https://www.marutisuzuki.com/arena/service/warranty",
  "genuinePartsTips": [
   "Look for the Maruti Suzuki Genuine Parts (MSGP) label on the pack.",
   "Scan the QR code on the label with Maruti Suzuki’s “Scan & Assure” app to confirm the part is genuine."
  ],
  "partsPriceUrl": "https://www.marutisuzuki.com/genuine-parts/search",
  "accessoriesUrl": "https://www.marutisuzuki.com/genuine-accessories",
  "trueValueUrl": "https://www.marutisuzukitruevalue.com/",
  "rewardsUrl": "https://www.marutisuzuki.com/more-from-us/maruti-suzuki-rewards"
 },
 "insurance": {
  "msiUrl": "https://www.marutisuzukiinsurance.com",
  "ncb": [
   {
    "years": "1 claim-free year",
    "percent": 20
   },
   {
    "years": "2 claim-free years",
    "percent": 25
   },
   {
    "years": "3 claim-free years",
    "percent": 35
   },
   {
    "years": "4 claim-free years",
    "percent": 45
   },
   {
    "years": "5 claim-free years or more",
    "percent": 50
   }
  ],
  "ncbSource": "https://irdai.gov.in/documents/37343/993134/60_GEN893.pdf/9513384e-0178-d466-f84f-7ffea9cf085b?version=1.1&t=1668236846220&download=true",
  "idvDepreciation": [
   {
    "age": "Up to 6 months",
    "percent": 5
   },
   {
    "age": "Over 6 months up to 1 year",
    "percent": 15
   },
   {
    "age": "Over 1 year up to 2 years",
    "percent": 20
   },
   {
    "age": "Over 2 years up to 3 years",
    "percent": 30
   },
   {
    "age": "Over 3 years up to 4 years",
    "percent": 40
   },
   {
    "age": "Over 4 years up to 5 years",
    "percent": 50
   },
   {
    "age": "Beyond 5 years / obsolete models",
    "percent": "By agreement with the insurer"
   }
  ],
  "idvSource": "https://irdai.gov.in/documents/37343/993134/60_GEN893.pdf/9513384e-0178-d466-f84f-7ffea9cf085b?version=1.1&t=1668236846220&download=true",
  "thirdPartyPrivateCar": [
   {
    "band": "Up to 1,000 cc",
    "premium": "₹2,094"
   },
   {
    "band": "1,001 cc to 1,500 cc",
    "premium": "₹3,416"
   },
   {
    "band": "Above 1,500 cc",
    "premium": "₹7,897"
   }
  ],
  "thirdPartyNote": "Base premium for one year, as notified by the Government of India on 25-05-2022 (effective 01-06-2022). Your insurer will confirm the current amount.",
  "thirdPartySource": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1828414"
 },
 "csr": {}
};
