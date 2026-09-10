'use strict';
/* Pure arithmetic for the private design preview; no lender data or eligibility decision. */
function loanEstimate(principal, annualRate, months) {
  if (![principal, annualRate, months].every(Number.isFinite) || principal < 0 || annualRate < 0 || months < 1 || !Number.isInteger(months)) throw new RangeError('Enter a valid amount, rate and whole-month tenure.');
  const r = annualRate / 1200;
  const emi = r === 0 ? principal / months : principal * r / (-Math.expm1(-months * Math.log1p(r)));
  return {emi, total:emi * months, interest:emi * months - principal};
}
function budgetEstimate(monthly, annualRate, months, downPayment) {
  if (![monthly, downPayment].every(Number.isFinite) || monthly < 0 || downPayment < 0) throw new RangeError('Enter valid budget amounts.');
  const unit = loanEstimate(1, annualRate, months).emi;
  return {principal:monthly / unit, budget:monthly / unit + downPayment};
}
if (typeof module !== 'undefined') module.exports = {loanEstimate, budgetEstimate};
