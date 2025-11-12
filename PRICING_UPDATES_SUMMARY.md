# Essence of Beauty Pricing and Content Updates Summary

This document summarizes all pricing and content changes made to the website based on the new pricing structure.

## Files Modified

### 1. `src/data/pages/facialTreatments.js`
**Changes:**
- **Deep Pore Rebalancing Facial**
  - Updated content description to new text:
    - "Bring your skin back to balance with this deeply cleansing and restorative treatment. — a purifying and corrective treatment that restores clarity, smoothness, and radiance."
    - "This customized facial includes a detailed skin analysis, deep cleansing, gentle exfoliation, steam, and thorough medical-grade extractions to remove buildup and impurities."
    - "For enhanced results and advanced options, the LED Light Therapy or Ultrasound Therapy are added to accelerate and promote deeper healing, calm inflammation, and balance acne-prone or congested skin."
    - "Perfect for anyone struggling with blackheads, whiteheads, breakouts, or acne-prone skin, as well as those seeking to balance dullness or uneven texture. This high-performance treatment is designed to deliver visible, lasting results, leaving your skin decongested."
  - Updated pricing from single "$175" to two options:
    - "$148" - Per Treatment (without advanced therapy)
    - "$175" - Per Treatment (includes LED or Ultrasound Therapy)

- **Ultrasonic Facial**
  - Changed price from "$175" to "$168" (80 Minute Session)

- **Customize Treatment for Sensitive / Rosacea Skin**
  - Changed price from "$179" to "$168" (80 Minute Session)

- **Vitamin A Infusion Peel with Retinaldehyde**
  - Changed price from "$210" to "$235" (Per Treatment)

- **Hubislab Healing & Repairing Facial with Ultrasound**
  - Changed price from "$175" to "$168" (85 Minute Session)

- **Microneedling**
  - Changed price from "$360" to "$350" (75 Minute Session)

- **Nourishing Facial**
  - Changed price from "$169" to "$159" (70 Minute Session)

### 2. `src/pages/microneedling-ottawa.js`
**Changes:**
- Updated individual treatment price from "$360" to "$350"
- Updated package price from "$1005" to "$975" for 3 treatments (when pre-booked & pre-paid)

### 3. `src/pages/afterglow-chemical-peel-ottawa.js`
**Changes:**
- Updated Level 1 Peel price from "$255" to "$235"
- Fixed typo: "intesive" → "intensive" in Level 2 Peel description
- Added new pricing options:
  - Advanced Treatment: "$330"
  - 3 Treatments (package price when pre-booked / pre-paid): "$710"
  - Extraction and AfterGlow Peeling: "$310"

### 4. `src/pages/herbal-green-peel.js`
**Changes:**
- Updated Green Peel Classic package price from "$1055" to "$1110" for 3 treatments (when pre-booked & pre-paid)
- Note: Green Peel Energy ($320) and Green Peel Fresh Up ($310) package prices were already correct

### 5. `src/pages/bio-microneedling.js`
**Changes:**
- Updated package price from "$685" to "$645" for 3 treatments (when pre-booked & pre-paid)
- Note: Single treatment price "$235" was already correct

### 6. `src/pages/rosacea-treatment-sensitive-skin.js`
**Changes:**
- Updated Ultrasonic Facial price from "$175" to "$168" (80 minute session)
- Updated Microneedling price from "$360" to "$350"

## Pricing Summary by Treatment

### Acne Treatment
- Initial Consultation: $50 ✓ (no change)
- First 90 minutes treatment: $175 ✓ (no change)
- Follow-up Acne Treatment:
  - 90 min: $175 ✓ (no change)
  - 2 hours: $220 ✓ (no change)

### Facials
- **Deep Pore Cleansing Facial**
  - Without advanced therapy: $148 (NEW)
  - Includes LED or Ultrasound Therapy: $175 (UPDATED)
- **Radiance Hydro Infusion Facial**: $189 ✓ (no change)
- **Ultrasonic Facial**: $168 (UPDATED from $175)
- **Customize Treatment for Sensitive / Rosacea Skin**: $168 (UPDATED from $179)
- **Brightening Treatment**: $189 ✓ (no change)
- **Vitamin A Infusion Peel with Retinaldehyde**: $235 (UPDATED from $210)
- **DMK Enzyme Treatment**: $199 ✓ (no change)
- **Hubislab Healing & Repairing Facial with Ultrasound**: $168 (UPDATED from $175)
- **Microneedling**: $350 (UPDATED from $360)
- **Nourishing Facial**: $159 (UPDATED from $169)

### AfterGlow Chemical Peel
- Level 1 Peel: $235 (UPDATED from $255)
- Level 2 Peel: $350 ✓ (no change)
- Advanced Treatment: $330 (NEW)
- 3 Treatments package: $710 (NEW)
- Extraction and AfterGlow Peeling: $310 (NEW)

### Herbal Green Peel
- Green Peel Classic: $420 + products ✓ (no change)
  - Package of 3: $1110 (UPDATED from $1055)
- Green Peel Energy: $320 ✓ (no change)
  - Package of 3: $870 ✓ (no change)
- Green Peel Fresh Up: $310 ✓ (no change)
  - Package of 3: $840 ✓ (no change)

### Microneedling
- Individual treatment: $350 (UPDATED from $360)
- Package of 3: $975 (UPDATED from $1005)

### Bio-Microneedling
- Single Treatment: $235 ✓ (no change)
- Package of 3: $645 (UPDATED from $685)

### DMK Enzyme Therapy
- Level 1: $199 ✓ (no change)
- Level 2: $210 ✓ (no change)
- Level 3: $230 ✓ (no change)
- Muscle Banding: $200 ✓ (no change)

## Content Updates

### Deep Pore Rebalancing Facial
- Complete content rewrite to match new description
- New content emphasizes:
  - Deeply cleansing and restorative treatment
  - Purifying and corrective treatment
  - Detailed skin analysis, deep cleansing, gentle exfoliation, steam, medical-grade extractions
  - LED Light Therapy or Ultrasound Therapy as advanced options
  - Benefits for blackheads, whiteheads, breakouts, acne-prone skin, dullness, uneven texture

## Notes

- All package prices are "when pre-booked & pre-paid" unless otherwise specified
- Duration information (e.g., "80 minutes", "70 minutes") has been preserved where applicable
- Pricing formatting has been maintained consistently across all pages
- No linting errors were introduced by these changes

## Verification Checklist

- [x] All pricing updated in facial treatments data file
- [x] All individual treatment pages updated
- [x] Package pricing updated where applicable
- [x] Deep Pore content updated
- [x] No linting errors
- [x] All changes match the new pricing structure from PDF

