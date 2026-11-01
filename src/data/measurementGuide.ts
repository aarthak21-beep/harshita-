export interface MeasurementField {
  id: string;
  labelMarathi: string;
  labelEnglish: string;
  placeholder: string;
  tip: string;
  standardRange: string;
}

export const MEASUREMENT_FIELDS: MeasurementField[] = [
  {
    id: 'bust',
    labelMarathi: 'छातीचे माप (Bust Size)',
    labelEnglish: 'Full Bust Circumference',
    placeholder: 'उदा. 34, 36, 38',
    tip: 'Measure around the fullest part of the bust wearing a well-fitted bra.',
    standardRange: '28 - 48 inches',
  },
  {
    id: 'underbust',
    labelMarathi: 'कंबरेचे माप (Underbust / Waist)',
    labelEnglish: 'Underbust / Waist',
    placeholder: 'उदा. 28, 30, 32',
    tip: 'Measure right below the bust where the bottom band of the blouse will sit.',
    standardRange: '24 - 44 inches',
  },
  {
    id: 'length',
    labelMarathi: 'ब्लाउजची पूर्ण उंची (Blouse Length)',
    labelEnglish: 'Total Blouse Length',
    placeholder: 'उदा. 13.5, 14, 15',
    tip: 'Measure from high shoulder point straight down to desired blouse hemline.',
    standardRange: '12 - 17 inches',
  },
  {
    id: 'shoulder',
    labelMarathi: 'खांद्याचे माप (Shoulder Width)',
    labelEnglish: 'Shoulder to Shoulder',
    placeholder: 'उदा. 13, 14, 14.5',
    tip: 'Measure from one shoulder bone tip across the back to the other.',
    standardRange: '12 - 16.5 inches',
  },
  {
    id: 'armhole',
    labelMarathi: 'मुंढ्याचे माप (Armhole Round)',
    labelEnglish: 'Armhole Circumference',
    placeholder: 'उदा. 15, 16, 17',
    tip: 'Wrap the tape smoothly around the arm joint without pulling tight.',
    standardRange: '13 - 21 inches',
  },
  {
    id: 'sleeveLength',
    labelMarathi: 'बाहीची लांबी (Sleeve Length)',
    labelEnglish: 'Sleeve Length',
    placeholder: 'उदा. 6 (Short), 10 (Elbow), 20 (Full)',
    tip: 'Measure from shoulder bone down to desired sleeve end (short, elbow, 3/4 or full).',
    standardRange: '4 - 23 inches',
  },
  {
    id: 'sleeveRound',
    labelMarathi: 'बाहीचा घेर (Sleeve Bottom Round)',
    labelEnglish: 'Sleeve Bottom Round',
    placeholder: 'उदा. 11, 12, 13',
    tip: 'Measure circumference of your arm exactly where the sleeve ends.',
    standardRange: '9 - 16 inches',
  },
  {
    id: 'frontNeck',
    labelMarathi: 'पुढील गळ्याची खोली (Front Neck Depth)',
    labelEnglish: 'Front Neck Depth',
    placeholder: 'उदा. 6.5, 7, 7.5',
    tip: 'Measure diagonally from shoulder-neck point to desired center depth.',
    standardRange: '5.5 - 9 inches',
  },
  {
    id: 'backNeck',
    labelMarathi: 'मागील गळ्याची खोली (Back Neck Depth)',
    labelEnglish: 'Back Neck Depth',
    placeholder: 'उदा. 8, 9.5, 11 (Deep)',
    tip: 'Measure diagonally or straight from top shoulder to bottom of back cutout.',
    standardRange: '4 - 13 inches',
  },
];

export const STITCHING_FEATURES = [
  {
    title: 'Precision Princess & Katori Cuts',
    titleMarathi: 'प्रिन्सेस कट आणि कटोरी शिलाई',
    desc: 'Crafted according to individual posture, body shape, and comfort preferences.',
  },
  {
    title: 'Premium Double Cotton Lining',
    titleMarathi: '१००% शुद्ध कॉटन अस्तर',
    desc: 'Pre-shrunk, soft pure cotton lining prevents sweat marks and skin chafing.',
  },
  {
    title: 'Built-in Breast Cup Padding',
    titleMarathi: 'सॉफ्ट पॅडिंग सुविधा',
    desc: 'High-density breathable cups for smooth contouring without bra strap visibility.',
  },
  {
    title: 'Margin & Alteration Safety',
    titleMarathi: '२ इंचांचे एक्स्ट्रा मार्जिन',
    desc: 'Includes 2 inches of concealed seam allowance on both sides for effortless future adjustments.',
  },
];
