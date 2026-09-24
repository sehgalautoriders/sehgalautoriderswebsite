'use strict';
/* Dealer additions, 24-09-2026: model comparison, lender EMI comparison, insurance, service schedule,
   spares, safety and CSR. Figures come only from specs-data.js and facts-data.js, which record their
   official sources. A missing figure shows as "Not published" — never an estimate. */
const SPECS = (typeof SPECS_DATA !== 'undefined' ? SPECS_DATA : []).reduce((all, s) => (all[s.id] = s, all), {});
const FACTS = typeof FACTS_DATA !== 'undefined' ? FACTS_DATA : {};
const NP = '<span class="not-published">Not published</span>';
const PEERS = {swift:['baleno','dzire','wagonr'],baleno:['swift','fronx','dzire'],dzire:['swift','baleno'],'alto-k10':['s-presso','celerio','wagonr'],'s-presso':['alto-k10','celerio'],celerio:['wagonr','alto-k10','s-presso'],wagonr:['celerio','swift','s-presso'],eeco:['ertiga','wagonr'],ertiga:['xl6','invicto'],xl6:['ertiga','invicto'],invicto:['xl6','ertiga'],brezza:['fronx','victoris','grand-vitara'],fronx:['brezza','baleno'],victoris:['grand-vitara','brezza'],'grand-vitara':['victoris','brezza','e-vitara'],jimny:['brezza','grand-vitara'],'e-vitara':['grand-vitara','victoris']};
const num = n => typeof n === 'number' && Number.isFinite(n);
const list = a => Array.isArray(a) && a.length ? a.map(esc).join(' · ') : '';
const maxOf = o => o && typeof o === 'object' && Object.values(o).some(num) ? Math.max(...Object.values(o).filter(num)) : (num(o) ? o : NaN);
const perFuel = (o, unit) => o && typeof o === 'object' && Object.keys(o).length ? Object.entries(o).map(([k, v]) => `${esc(k)} ${esc(v)} ${unit}`).join('<br>') : '';
const sourceLinks = urls => (urls || []).map((u, i) => `<a class="text-link" href="${esc(u)}" target="_blank" rel="noopener noreferrer">Source ${i + 1} ↗</a>`).join(' ');
const stars = n => num(n) ? `<span class="stars" aria-label="${n} of 5 stars">${'★'.repeat(n)}${'☆'.repeat(Math.max(0, 5 - n))}</span>` : NP;
const rupees = n => num(n) ? money(n) : NP;

/* ---------- crash-test ratings ---------- */
function ncapFor(id) {
  const m = modelById(id) || {name: id};
  const key = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  return (FACTS.ncap || []).filter(r => key(r.model).includes(key(m.name).replace('marutisuzuki', '')) || key(m.name).includes(key(r.model)));
}
function ncapText(id) {
  const rows = ncapFor(id);
  return rows.length ? rows.map(r => `${esc(r.programme)} ${esc(r.testDate || '')}${rows.length > 1 && /\(/.test(r.model) ? ' · ' + esc(r.model.replace(/^[^(]*\(|\)$/g, '')) : ''}: adult ${stars(r.adultStars)} child ${stars(r.childStars)}`).join('<br>') : 'No current rating published';
}

/* ---------- model comparison ---------- */
const SPEC_ROWS = [
  ['Channel', s => esc(s.channel)],
  ['Body type', s => esc(s.bodyType)],
  ['Seating', s => num(s.seating) ? `${s.seating} seats` : '', s => s.seating],
  ['Fuel', s => list(s.fuels)],
  ['Engine', s => esc(s.engine || '') + (s.displacementCc ? `<br><span class="meta">${[].concat(s.displacementCc).join(' / ')} cc</span>` : '')],
  ['EV battery', s => (s.evBatteryKwh || []).length ? [].concat(s.evBatteryKwh).join(' / ') + ' kWh' : '', null, s => s.fuels && s.fuels.includes('Electric')],
  ['EV range (claimed)', s => (s.evRangeKm || []).map(r => `${esc(r.value)} km <span class="meta">${esc(r.battery ? r.battery + ' kWh, ' : '')}${esc(r.basis || '')}</span>`).join('<br>'), s => Math.max(...(s.evRangeKm || []).map(r => r.value)), s => s.fuels && s.fuels.includes('Electric')],
  ['Maximum power', s => perFuel(s.powerPs, 'PS') || perFuel(s.powerKw, 'kW'), s => num(maxOf(s.powerPs)) ? maxOf(s.powerPs) : maxOf(s.powerKw) * 1.35962],
  ['Maximum torque', s => perFuel(s.torqueNm, 'Nm'), s => maxOf(s.torqueNm)],
  ['Transmission', s => list(s.transmissions)],
  ['Claimed fuel efficiency', s => (s.mileage || []).map(m => `${esc(m.fuel)} ${esc(m.transmission || '')}: <b>${esc(m.value)}</b> ${esc(m.unit || '')}`).join('<br>'), s => Math.max(...(s.mileage || []).filter(m => m.unit === 'km/l').map(m => m.value))],
  ['Length', s => num(s.lengthMm) ? `${s.lengthMm.toLocaleString('en-IN')} mm` : ''],
  ['Wheelbase', s => num(s.wheelbaseMm) ? `${s.wheelbaseMm.toLocaleString('en-IN')} mm` : '', s => s.wheelbaseMm],
  ['Ground clearance', s => num(s.groundClearanceMm) ? `${s.groundClearanceMm} mm` : '', s => s.groundClearanceMm],
  ['Boot space', s => num(s.bootLitres) ? `${s.bootLitres} litres` : '', s => s.bootLitres],
  ['Fuel tank', s => num(s.fuelTankLitres) ? `${s.fuelTankLitres} litres` : ''],
  ['Payload', s => num(s.payloadKg) ? `${s.payloadKg} kg` : '', s => s.payloadKg, s => s.channel === 'Commercial'],
  ['Airbags', s => esc(s.airbags || '')],
  ['Safety highlights', s => list(s.safetyHighlights)],
  ['Crash-test rating', s => ncapText(s.id)],
  ['Key features', s => list(s.keyFeatures)],
  ['Ex-showroom from', s => s.exShowroomFrom ? `${esc(s.exShowroomFrom.asPrinted || money(s.exShowroomFrom.inr))}<br><span class="meta">${esc(s.exShowroomFrom.city || '')} · official site</span>` : 'Ask for an itemised quote'],
  ['Official source', s => sourceLinks(s.sources)]
];
function specTable(ids) {
  const specs = ids.map(id => SPECS[id] || {id, name: modelById(id)?.name || id, channel: modelById(id)?.channel});
  const rows = SPEC_ROWS.filter(([, , , when]) => !when || specs.some(when)).map(([label, cell, score]) => {
    const values = score ? specs.map(s => { try { return score(s); } catch { return NaN; } }) : [];
    const scored = values.filter(num), best = scored.length > 1 && new Set(scored).size > 1 ? Math.max(...scored) : NaN;
    return `<tr><th scope="row">${label}</th>${specs.map((s, i) => { const html = cell(s); return `<td class="${num(best) && values[i] === best ? 'best' : ''}">${html || NP}</td>`; }).join('')}</tr>`;
  }).join('');
  return `<div class="table-wrap spec-table-wrap"><table class="spec-table"><thead><tr><th scope="col">Specification</th>${specs.map(s => `<th scope="col">${SEHGAL.photos[s.id] ? `<img src="${SEHGAL.photos[s.id].src}" alt="" loading="lazy">` : ''}<a href="#/cars/${esc(s.id)}">${esc(s.name)}</a></th>`).join('')}</tr></thead><tbody>${rows}<tr><th scope="row">Next step</th>${specs.map(s => `<td><button class="button small teal" data-book="test-drive" data-model="${esc(s.name)}">Test drive ↗</button></td>`).join('')}</tr></tbody></table></div>`;
}
function compareIds() {
  const fromHash = (location.hash.split('/')[2] || '').split(',').filter(id => modelById(id));
  if (fromHash.length) return fromHash.slice(0, 3);
  if (state.compare.size) return [...state.compare];
  return ['brezza', 'fronx', 'victoris'];
}
function comparePage() {
  const ids = compareIds();
  const picker = i => `<label class="field">Car ${i + 1}<select data-compare-slot="${i}"><option value="">— None —</option>${SEHGAL.models.map(m => `<option value="${m.id}" ${ids[i] === m.id ? 'selected' : ''}>${esc(m.name)} · ${m.channel}</option>`).join('')}</select></label>`;
  const peers = [...new Set(ids.flatMap(id => PEERS[id] || []))].filter(id => !ids.includes(id)).slice(0, 4);
  return page('Compare cars side by side', 'Choose up to three Maruti Suzuki models. Figures are taken from the official Arena and NEXA websites, with the source linked in every column.', 'COMPARE') + `<section class="page-content"><div class="container"><div class="panel compare-pickers"><div class="form-grid three">${[0, 1, 2].map(picker).join('')}</div>${peers.length ? `<p class="meta">Similar models: ${peers.map(id => `<button class="chip small-chip" data-add-peer="${id}">+ ${esc(modelById(id).name)}</button>`).join(' ')}</p>` : ''}</div><div id="compare-output">${ids.length ? specTable(ids) : '<p>Choose a car to begin.</p>'}</div><p class="fine-print">Highlighted cells show the highest figure in that row. Specifications checked on the official websites on ${esc(SPECS_CHECKED)}. Variants differ; your advisor will confirm the exact variant, price and availability. Claimed fuel-efficiency figures are test-cycle values, not on-road guarantees.</p><div class="callout"><h3>Found your shortlist?</h3><p class="muted">Drive them back to back at your nearest Sehgal showroom.</p><button class="button teal" data-book="test-drive">Book a test drive ↗</button> ${link('finance', 'Compare finance', 'outline')}</div></div></section>`;
}
function setCompareIds(ids) { const clean = [...new Set(ids.filter(Boolean))].slice(0, 3); state.compare = new Set(clean); location.hash = '#/compare/' + clean.join(','); }
document.addEventListener('change', e => { if (e.target.matches('[data-compare-slot]')) { const ids = [...document.querySelectorAll('[data-compare-slot]')].map(s => s.value); setCompareIds(ids); } });
document.addEventListener('click', e => { const b = e.target.closest('[data-add-peer]'); if (!b) return; const ids = compareIds(); if (ids.length >= 3) ids.pop(); ids.push(b.dataset.addPeer); setCompareIds(ids); });

/* Key specifications and similar models on each model page. */
function modelSpecSummary(id) {
  const s = SPECS[id];
  const peers = (PEERS[id] || []).filter(modelById);
  const cells = s ? [['Fuel', list(s.fuels)], ['Transmission', list(s.transmissions)], ['Power', perFuel(s.powerPs, 'PS') || perFuel(s.powerKw, 'kW')], ['Seating', num(s.seating) ? s.seating + ' seats' : ''], ['Airbags', esc(s.airbags || '')], ['Crash test', ncapText(id)]] : [];
  return `${cells.length ? `<div class="spec-grid key-specs">${cells.map(([k, v]) => `<div class="spec-cell"><small>${k}</small><b>${v || NP}</b></div>`).join('')}</div><p class="fine-print">From the official website, checked ${esc(SPECS_CHECKED)}. ${sourceLinks(s.sources)}</p>` : ''}${peers.length ? `<h3 class="peer-title">Compare with similar models</h3><div class="actions">${peers.map(p => `<a class="button small outline" href="#/compare/${id},${p}">${esc(modelById(id).name)} vs ${esc(modelById(p).name)} ↗</a>`).join('')}</div>` : ''}`;
}

/* ---------- finance: lender comparison ---------- */
function lenderRows(loan, months) {
  return (FACTS.loans || []).filter(l => num(l.rateFrom)).map(l => ({...l, emi: loanEstimate(loan, l.rateFrom, months)})).sort((a, b) => a.rateFrom - b.rateFrom);
}
function lenderTable() {
  const form = $('#finance-form'); if (!form || !form.checkValidity() || state.financeMode !== 'emi') return '';
  const f = new FormData(form), loan = Number(f.get('amount')) - Number(f.get('down')), months = Number(f.get('months'));
  if (!(loan > 0)) return '';
  const rows = lenderRows(loan, months);
  if (!rows.length) return '<p class="notice">Published lender rates have not been loaded yet.</p>';
  const low = rows[0].emi.emi;
  return `<p class="meta">Loan of ${money(loan)} over ${months} months at each lender’s lowest published rate. Your actual rate depends on your credit score, income, the car and the lender’s policy on the day.</p><div class="table-wrap"><table class="lender-table"><thead><tr><th scope="col">Lender</th><th scope="col">Published rate (p.a.)</th><th scope="col">EMI at lowest rate</th><th scope="col">Total interest</th><th scope="col">Fees & terms (as published)</th><th scope="col">Source</th></tr></thead><tbody>${rows.map(l => `<tr><th scope="row">${esc(l.lender)}</th><td>${esc(l.rateFrom)}%${num(l.rateTo) ? ` – ${esc(l.rateTo)}%` : ' onwards'}${l.basis ? `<br><span class="meta">${esc(l.basis)}</span>` : ''}</td><td class="${l.emi.emi === low ? 'best' : ''}"><b>${money(l.emi.emi)}</b>${l.emi.emi > low ? `<br><span class="meta">+${money(l.emi.emi - low)} / month</span>` : ''}</td><td>${money(l.emi.interest)}</td><td class="meta">${esc([l.maxTenureMonths ? `Up to ${l.maxTenureMonths} months` : '', l.processingFee || ''].filter(Boolean).join(' · ')) || '—'}</td><td>${l.source ? `<a class="text-link" href="${esc(l.source)}" target="_blank" rel="noopener noreferrer">Lender page ↗</a>` : ''}</td></tr>`).join('')}</tbody></table></div>`;
}
function updateLenders() { const t = $('#lender-output'); if (t) t.innerHTML = lenderTable(); }
function financeExtras() {
  const partners = FACTS.smartFinancePartners || {};
  return `<div class="section"><div class="section-heading"><div><p class="eyebrow">COMPARE FINANCIERS</p><h2>Same car. Different lenders.</h2></div><p class="muted">Each lender’s lowest published car-loan rate, applied to the loan and term you entered above. Rates were read from each lender’s own website on ${esc(FACTS.checkedOn || '')}.</p></div><div id="lender-output" aria-live="polite">${state.financeMode === 'emi' ? '' : '<p class="notice">Switch to “Calculate monthly payment” to compare lenders.</p>'}</div></div><div class="tiles section">
<article class="tile"><p class="eyebrow">01 · APPLY ONLINE</p><h3>Maruti Suzuki Smart Finance</h3><p class="muted">Maruti Suzuki’s own loan platform${partners.count ? ` lists ${partners.count} financiers` : ''} — compare offers and apply online${(partners.names || []).length ? `. Partners on the official page include ${esc(partners.names.slice(0, 8).join(', '))} and more` : ''}.</p>${partners.url ? external(esc(partners.url), 'Open Smart Finance') : ''}</article>
<article class="tile"><p class="eyebrow">02 · BE READY</p><h3>Documents lenders usually ask for</h3><ul class="check-list"><li>PAN card and Aadhaar or another address proof</li><li>Salaried: last 3 salary slips and Form 16</li><li>Self-employed: last 2 years’ income-tax returns</li><li>Last 6 months’ bank statement</li><li>Passport-size photographs</li></ul><p class="fine-print">Each lender confirms its own list.</p></article>
<article class="tile"><p class="eyebrow">03 · READ THE QUOTE</p><h3>What an on-road price includes</h3><ul class="check-list"><li>Ex-showroom price</li><li>Registration and road tax (RTO)</li><li>First-year insurance</li><li>Tax collected at source, where it applies</li><li>FASTag, accessories and extended warranty — optional, itemised</li></ul>${request('Ask for an itemised quote', 'Finance', 'small outline')}</article></div>`;
}

/* ---------- insurance ---------- */
function insurancePage() {
  const ins = FACTS.insurance || {};
  const ncab = (ins.ncb || []);
  const idv = (ins.idvDepreciation || []);
  const tp = (ins.thirdPartyPrivateCar || []);
  return page('Car insurance, made clear', 'Renew your cover, understand your No Claim Bonus and choose the add-ons that matter. Our team helps with claims at every Sehgal workshop.', 'INSURANCE') + `<section class="page-content"><div class="container">
<div class="tiles"><article class="tile"><p class="eyebrow">01 · RENEW</p><h3>Renew or buy a policy</h3><p class="muted">Get a renewal quote from our team, or renew online through Maruti Suzuki Insurance.</p><button class="button small teal" data-book="insurance">Get a renewal quote ↗</button> ${ins.msiUrl ? external(esc(ins.msiUrl), 'Maruti Suzuki Insurance') : ''}</article>
<article class="tile"><p class="eyebrow">02 · CLAIM</p><h3>Had an accident?</h3><ol class="check-list numbered"><li>Make sure everyone is safe. Call 112 in an emergency.</li><li>Photograph the vehicle and the scene.</li><li>Inform your insurer and note the claim number.</li><li>For theft or injury, file a police report (FIR).</li><li>Bring the car to a Sehgal workshop — we coordinate the survey and cashless repair where your insurer allows it.</li></ol><button class="button small outline" data-book="service" data-need="Bodyshop or accidental repair">Book an accident repair ↗</button></article>
<article class="tile"><p class="eyebrow">03 · CHOOSE WELL</p><h3>Add-ons worth knowing</h3><dl class="addon-list"><div><dt>Zero depreciation</dt><dd>Pays the full cost of replaced parts, with no deduction for age.</dd></div><div><dt>Engine protection</dt><dd>Covers engine damage from water entry or oil leakage.</dd></div><div><dt>Return to invoice</dt><dd>On total loss or theft, pays up to the invoice value, not only the insured value.</dd></div><div><dt>Consumables</dt><dd>Covers oil, nuts, bolts and similar items used in a repair.</dd></div><div><dt>Roadside assistance</dt><dd>Towing, flat tyre, battery jump-start and fuel delivery.</dd></div></dl><p class="fine-print">What each add-on covers depends on your insurer’s policy wording.</p></article></div>
<div class="duo section"><div class="panel"><p class="eyebrow">NO CLAIM BONUS</p><h2>Your reward for claim-free years.</h2><p class="muted">The discount applies to the own-damage part of the premium and belongs to you, not the car — you can carry it to your next car.</p>${ncab.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Claim-free years</th><th scope="col">Discount on own-damage premium</th></tr></thead><tbody>${ncab.map(r => `<tr><td>${esc(r.years)}</td><td><b>${esc(r.percent)}%</b></td></tr>`).join('')}</tbody></table></div>` : `<p>${NP}</p>`}
<form id="ncb-form" class="form-grid section-tight"><label class="field">Own-damage premium before discount (₹)<input name="od" type="number" min="0" max="10000000" step="1" value="12000" required></label><label class="field">Claim-free years<select name="years">${ncab.map(r => `<option value="${esc(r.percent)}">${esc(r.years)}</option>`).join('')}</select></label><div class="energy-result" id="ncb-result" aria-live="polite"></div></form>${ins.ncbSource ? `<p class="fine-print">Slabs as published at ${external(esc(ins.ncbSource), 'source')}, checked ${esc(FACTS.checkedOn)}.</p>` : ''}</div>
<div class="panel"><p class="eyebrow">INSURED DECLARED VALUE (IDV)</p><h2>What your car is insured for.</h2><p class="muted">IDV is the most your insurer pays if the car is stolen or written off. It is the ex-showroom price less a set depreciation for the car’s age. A higher IDV means a higher premium — and a fairer settlement.</p>${idv.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Age of vehicle</th><th scope="col">Depreciation</th></tr></thead><tbody>${idv.map(r => `<tr><td>${esc(r.age)}</td><td>${esc(r.percent)}${String(r.percent).match(/\d$/) ? '%' : ''}</td></tr>`).join('')}</tbody></table></div>${ins.idvSource ? `<p class="fine-print">Schedule as published at ${external(esc(ins.idvSource), 'source')}. Cars over five years old are valued by agreement with the insurer.</p>` : ''}` : `<p>${NP}</p>`}</div></div>
${tp.length ? `<div class="panel section-tight"><p class="eyebrow">THIRD-PARTY COVER · COMPULSORY BY LAW</p><h3>Annual third-party premium for private cars</h3><div class="table-wrap"><table><thead><tr><th scope="col">Engine size</th><th scope="col">Premium (₹, before GST)</th></tr></thead><tbody>${tp.map(r => `<tr><td>${esc(r.band)}</td><td>${esc(r.premium)}</td></tr>`).join('')}</tbody></table></div><p class="fine-print">${esc(ins.thirdPartyNote || '')} ${ins.thirdPartySource ? external(esc(ins.thirdPartySource), 'Source') : ''}</p></div>` : ''}
<div class="callout"><h3>Policy due soon?</h3><p class="muted">Share your vehicle and current policy details and our insurance desk will compare renewal options for you.</p><button class="button teal" data-book="insurance">Request a renewal quote ↗</button></div></div></section>`;
}
function updateNcb() { const f = $('#ncb-form'); if (!f) return; const out = $('#ncb-result'); if (!f.checkValidity()) { out.textContent = 'Enter a valid premium.'; return; } const d = new FormData(f), od = Number(d.get('od')), pct = Number(d.get('years')); out.innerHTML = `<span class="meta">Estimated saving</span><strong>${money(od * pct / 100)}</strong><span>${pct}% of ${money(od)} · you pay ${money(od * (1 - pct / 100))} for own damage</span>`; }

/* ---------- service schedule, spares, safety ---------- */
function serviceExtras() {
  const s = FACTS.service || {};
  const sched = s.schedule || [];
  return `<div class="section"><div class="duo"><div class="panel"><p class="eyebrow">MARUTI SUZUKI SERVICE SCHEDULE</p><h2>When is my service due?</h2>${sched.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Service</th><th scope="col">Due at</th><th scope="col">Charge</th></tr></thead><tbody>${sched.map(r => `<tr><td>${esc(r.name)}</td><td>${esc(r.due)}</td><td>${esc(r.type || '')}</td></tr>`).join('')}</tbody></table></div><p class="fine-print">Whichever comes first. ${esc(s.scheduleNote || '')} ${s.scheduleSource ? external(esc(s.scheduleSource), 'Official source') : ''}</p>` : `<p>Your owner’s manual lists the schedule for your model. ${link('owners', 'Find your manual', 'small outline')}</p>`}</div>
<div class="panel"><p class="eyebrow">WARRANTY & ROADSIDE HELP</p><h2>Covered for the road ahead.</h2><dl class="addon-list">${s.standardWarranty ? `<div><dt>Standard warranty</dt><dd>${esc(s.standardWarranty)}</dd></div>` : ''}${(s.extendedWarranty || []).map(w => `<div><dt>${esc(w.name)}</dt><dd>${esc(w.detail || '')}</dd></div>`).join('')}${s.roadside ? `<div><dt>Roadside assistance</dt><dd>${esc(s.roadside)}</dd></div>` : ''}</dl>${s.warrantySource ? `<p class="fine-print">${external(esc(s.warrantySource), 'Official warranty terms')}</p>` : ''}<p class="muted">Ask us to add extended warranty when you buy, or before the standard warranty ends.</p></div></div>
<div class="tiles section"><article class="tile"><p class="eyebrow">GENUINE PARTS</p><h3>Spares & accessories</h3><p class="muted">Genuine parts, the official price list and accessories for your car.</p>${link('spares', 'Spares & accessories', 'small outline')}</article><article class="tile"><p class="eyebrow">INSURANCE</p><h3>Accident repair & claims</h3><p class="muted">We coordinate the survey and cashless repair with your insurer where the policy allows.</p>${link('insurance', 'Insurance help', 'small outline')}</article><article class="tile"><p class="eyebrow">BEFORE YOU COME</p><h3>What to bring</h3><ul class="check-list"><li>Registration certificate (RC)</li><li>Service booklet or last invoice</li><li>Insurance policy for any claim</li><li>Spare key if a key issue is reported</li></ul></article></div></div>`;
}
function sparesPage() {
  const s = FACTS.service || {};
  return page('Genuine spares & accessories', 'Parts made for your Maruti Suzuki, fitted by trained technicians. Check a part price, ask for availability or add accessories to your car.', 'SPARES & ACCESSORIES') + `<section class="page-content"><div class="container"><div class="tiles">
<article class="tile"><p class="eyebrow">01 · MARUTI SUZUKI GENUINE PARTS</p><h3>Why genuine parts</h3><p class="muted">Genuine parts match the fit, material and testing of the parts your car was built with. Non-genuine brake, suspension and electrical parts can affect safety and warranty.</p>${(s.genuinePartsTips || []).length ? `<ul class="check-list">${s.genuinePartsTips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}</article>
<article class="tile"><p class="eyebrow">02 · PRICE CHECK</p><h3>Official parts price list</h3><p class="muted">Look up the maximum retail price of common parts on the official Maruti Suzuki website before you visit.</p>${s.partsPriceUrl ? external(esc(s.partsPriceUrl), 'Check part prices') : `<p class="meta">${NP}</p>`}</article>
<article class="tile"><p class="eyebrow">03 · MAKE IT YOURS</p><h3>Genuine accessories</h3><p class="muted">Seat covers, mats, infotainment, protection and styling kits designed for each model.</p>${s.accessoriesUrl ? external(esc(s.accessoriesUrl), 'Browse accessories') : ''}</article></div>
<div class="duo section"><div class="panel"><p class="eyebrow">ASK OUR PARTS COUNTER</p><h2>Need a part?</h2><p class="muted">Tell us the model, year and part. Our parts team confirms price and availability before you travel.</p><button class="button teal" data-book="parts">Enquire about a part ↗</button></div>
<div class="panel"><p class="eyebrow">MORE FROM MARUTI SUZUKI</p><h2>Exchange, rewards and more.</h2><ul class="check-list">${s.trueValueUrl ? `<li>${external(esc(s.trueValueUrl), 'True Value — certified used cars & exchange')}</li>` : ''}${s.rewardsUrl ? `<li>${external(esc(s.rewardsUrl), 'Maruti Suzuki Rewards')}</li>` : ''}<li>${link('owners', 'Owner’s manuals', 'small outline')}</li></ul></div></div>
<p class="fine-print">Links open official Maruti Suzuki websites, checked ${esc(FACTS.checkedOn || '')}. Parts fitted at our workshop are billed at the prices shown on your job card.</p></div></section>`;
}
function safetyPage() {
  const rated = (FACTS.ncap || []).slice().sort((a, b) => (b.adultStars || 0) - (a.adultStars || 0));
  return page('Safety first. Every journey.', 'Independent crash-test results, the safety equipment in each model, and simple habits that keep your family safe.', 'SAFETY') + `<section class="page-content"><div class="container">
<div class="section-heading"><div><p class="eyebrow">INDEPENDENT CRASH TESTS</p><h2>How our cars scored.</h2></div><p class="muted">Results from Global NCAP and Bharat NCAP, the independent and government crash-test programmes. Ratings apply to the tested version; protocols changed over time, so compare ratings of the same programme and year.</p></div>
${rated.length ? `<div class="table-wrap"><table class="ncap-table"><thead><tr><th scope="col">Model</th><th scope="col">Programme</th><th scope="col">Adult occupant</th><th scope="col">Child occupant</th><th scope="col">Tested</th><th scope="col">Source</th></tr></thead><tbody>${rated.map(r => `<tr><th scope="row">${esc(r.model)}</th><td>${esc(r.programme)}${r.protocol ? `<br><span class="meta">${esc(r.protocol)} protocol</span>` : ''}</td><td>${stars(r.adultStars)}</td><td>${stars(r.childStars)}</td><td>${esc(r.testDate || '')}</td><td>${r.source ? `<a class="text-link" href="${esc(r.source)}" target="_blank" rel="noopener noreferrer">Result ↗</a>` : ''}</td></tr>`).join('')}</tbody></table></div><p class="fine-print">${esc(FACTS.ncapNote || '')} ${external('https://www.globalncap.org/indiaresults', 'Global NCAP India results')} ${external('https://www.bncap.in/vehicle-safety-ratings/', 'Bharat NCAP ratings')}</p>` : `<p class="notice">Crash-test results have not been loaded yet.</p>`}
<div class="section"><div class="section-heading"><div><p class="eyebrow">SAFETY EQUIPMENT</p><h2>Airbags and more, model by model.</h2></div></div><div class="table-wrap"><table><thead><tr><th scope="col">Model</th><th scope="col">Airbags</th><th scope="col">Safety highlights</th></tr></thead><tbody>${SEHGAL.models.map(m => { const s = SPECS[m.id] || {}; return `<tr><th scope="row"><a href="#/cars/${m.id}">${esc(m.name)}</a></th><td>${esc(s.airbags || '') || NP}</td><td>${list(s.safetyHighlights) || NP}</td></tr>`; }).join('')}</tbody></table></div><p class="fine-print">From the official model pages, checked ${esc(SPECS_CHECKED)}. Equipment varies by variant.</p></div>
<div class="tiles section"><article class="tile"><p class="eyebrow">EVERY TRIP</p><h3>Belt up, every seat</h3><p class="muted">Airbags are designed to work with seat belts. Rear passengers need belts too.</p></article><article class="tile"><p class="eyebrow">CHILDREN</p><h3>Right seat, right place</h3><p class="muted">Use a child seat suited to your child’s age and weight, fitted to ISOFIX points where your car has them. Never place a rear-facing child seat in front of an active airbag.</p></article><article class="tile"><p class="eyebrow">YOUR CAR</p><h3>Check before long trips</h3><p class="muted">Tyre pressure and tread, brakes, wipers, lights and warning lamps. Our workshop offers a pre-trip check.</p><button class="button small outline" data-book="service">Book a check-up ↗</button></article></div>
<div class="callout"><h3>Learn to drive safely</h3><p class="muted">Maruti Suzuki Driving School trains new and returning drivers in road rules and defensive driving.</p>${link('driving-school', 'Driving school', 'outline')}</div></div></section>`;
}

/* ---------- Corporate Social Responsibility ---------- */
function csrPage() {
  const c = FACTS.csr || {};
  const disclosures = [['CSR Policy', 'The policy approved by the Board, with the areas the company will work in.'], ['CSR Committee', 'Names and roles of the Board members on the CSR Committee.'], ['Projects approved by the Board', 'Each year’s projects and annual action plan, with amounts and the areas they serve.']];
  return page('Corporate Social Responsibility', 'Driving change beyond the showroom — for safer roads, skilled young people and the communities we serve across Pune and Maval.', 'CSR · SEHGAL AUTORIDERS') + `<section class="page-content"><div class="container">
<div class="location-feature">${suppliedFigure('driving-school', 'branch-feature-photo')}<div><p class="eyebrow">OUR COMMITMENT</p><h2>Part of the community<br>for over 25 years.</h2><p>Our customers, colleagues and neighbours live along the roads we serve — from Pune city to Lonavala, Kamshet and Bhor. We want those roads to be safer and those communities stronger.</p><p class="muted">The areas below are proposed for Board approval. Projects, amounts and outcomes will be published here once approved.</p></div></div>
<div class="section"><div class="section-heading"><div><p class="eyebrow">PROPOSED FOCUS AREAS · AWAITING BOARD APPROVAL</p><h2>Where we want to make a difference.</h2></div></div><div class="tiles four">${[['Road safety', 'Driver training, school road-safety sessions and helmet and seat-belt awareness.'], ['Skills & livelihood', 'Automotive technician training and apprenticeships for young people.'], ['Environment', 'Tree plantation, cleaner-fuel awareness and responsible disposal of workshop waste.'], ['Health & community', 'Health camps and support for local community needs.']].map(([h, p], i) => `<article class="tile"><p class="eyebrow">0${i + 1}</p><h3>${h}</h3><p class="muted">${p}</p><span class="status-pill pending">Proposed</span></article>`).join('')}</div></div>
<div class="panel section-tight"><p class="eyebrow">STATUTORY DISCLOSURES</p><h2>CSR disclosures</h2><p class="muted">${esc(c.websiteRule || 'Companies covered by Section 135 of the Companies Act, 2013 must display their CSR Committee, CSR Policy and the projects approved by the Board on their website.')}</p><div class="table-wrap"><table><thead><tr><th scope="col">Document</th><th scope="col">What it contains</th><th scope="col">Status</th></tr></thead><tbody>${disclosures.map(([d, w]) => { const doc = (c.documents || {})[d]; return `<tr><th scope="row">${d}</th><td>${w}</td><td>${doc ? `<a class="text-link" href="${esc(doc)}" target="_blank" rel="noopener">Download ↗</a>` : '<span class="status-pill pending">Awaiting Board-approved document</span>'}</td></tr>`; }).join('')}</tbody></table></div>${c.thresholds ? `<p class="fine-print">When CSR applies: ${esc(c.thresholds)} ${c.source ? external(esc(c.source), 'Source') : ''}</p>` : ''}</div>
<div class="section"><div class="section-heading"><div><p class="eyebrow">FROM OUR COMMUNITY</p><h2>Moments we are proud of.</h2></div>${link('gallery', 'View the gallery', 'outline')}</div><div class="duo">${suppliedFigure('maharashtra-day', 'campaign-feature')}${suppliedFigure('car-tips-campaign', 'campaign-feature')}</div></div>
<div class="callout"><h3>Partner with us</h3><p class="muted">Schools, NGOs and community groups working on road safety, skills or the environment can write to us.</p><button class="button teal" data-book="support">Propose a partnership ↗</button></div></div></section>`;
}

/* ---------- home: owner essentials strip ---------- */
function essentials() {
  return `<section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">EVERYTHING FOR YOUR MARUTI SUZUKI</p><h2>Buy. Finance. Insure.<br>Service. Stay safe.</h2></div></div><div class="essentials-grid">${[['compare', 'Compare cars', 'Official specifications side by side'], ['finance', 'Compare lenders', 'EMI from different financiers'], ['insurance', 'Insurance', 'Renewal, No Claim Bonus, claims'], ['service', 'Service', 'Schedule, warranty, booking'], ['spares', 'Spares', 'Genuine parts and accessories'], ['safety', 'Safety', 'Crash-test ratings and tips'], ['csr', 'Community', 'Our CSR commitment']].map(([r, h, p]) => `<a href="#/${r}"><b>${h}</b><small>${p}</small><span aria-hidden="true">↗</span></a>`).join('')}</div></div></section>`;
}

const EXTRA_ROUTES = {compare: comparePage, insurance: insurancePage, spares: sparesPage, safety: safetyPage, csr: csrPage};
document.addEventListener('input', e => { if (e.target.closest('#finance-form')) updateLenders(); if (e.target.closest('#ncb-form')) updateNcb(); });
document.addEventListener('change', e => { if (e.target.closest('#finance-form')) updateLenders(); if (e.target.closest('#ncb-form')) updateNcb(); });
const AFTER_RENDER = [updateLenders, updateNcb];
