export interface Testimonial {
  id: string;
  name: string;
  city: string;
  occasion: string;
  blouseDesign: string;
  rating: number;
  quoteMarathi: string;
  quoteEnglish: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priyanka Kulkarni',
    city: 'Pune (Kothrud)',
    occasion: 'Wedding Reception',
    blouseDesign: 'Harshita Bridal Signature Zardozi Blouse',
    rating: 5,
    quoteMarathi:
      'माझ्या लग्नाच्या रिसेप्शनसाठी हर्षिताकडून डिझाइन केलेला ब्लाउज परिधान केला होता. फिटिंग इतकी अप्रतिम होती की सगळ्यांनी डिझाईनची खूप स्तुती केली! जरदोसी वर्क खूप नाजूक आणि भारी आहे.',
    quoteEnglish:
      'The fitting was immaculate and required zero alterations. The zardozi embroidery is so fine and luxurious! Everyone at the reception asked about Harshita Creation.',
    date: 'ऑक्टोबर २०२६',
  },
  {
    id: 't-2',
    name: 'Snehal Deshmukh',
    city: 'Mumbai (Dadar)',
    occasion: 'Paithani Saree Function',
    blouseDesign: 'Meera Royal Paithani Asawali Border Blouse',
    rating: 5,
    quoteMarathi:
      'पैठणी साडीसाठी योग्य टेलर शोधणे कठीण असते. पण हर्षिताने पैठणीचा पदर आणि बॉर्डरचा वापर करून जो सुंदर ब्लाउज शिवून दिला तो खरंच अप्रतिम होता. WhatsApp वरून खूप छान सहकार्य मिळाले!',
    quoteEnglish:
      'Finding the right designer for a Paithani saree is always challenging. Harshita crafted the border and back with such respect for the heirloom silk. Seamless WhatsApp coordination!',
    date: 'सप्टेंबर २०२६',
  },
  {
    id: 't-3',
    name: 'Aditi Joshi',
    city: 'Thane',
    occasion: 'Engagement Ceremony',
    blouseDesign: 'Ishaani Deep V-Cut Tassel Dori Back Blouse',
    rating: 5,
    quoteMarathi:
      'बॅक डिझाईनचे लटकन आणि फिनिशिंग पाहून मन थक्क झाले. ऑनलाईन माप पाठवूनसुद्धा इतके परफेक्ट फिटिंग मिळेल अशी अपेक्षा नव्हती. Price आणि Stitching charges अगदी वाजवी आहेत.',
    quoteEnglish:
      'The back tassel detailing and finishing are showstopping. Even though I sent measurements online, the blouse fit like a second skin. Extremely reasonable stitching charges!',
    date: 'ऑगस्ट २०२६',
  },
  {
    id: 't-4',
    name: 'Dr. Radhika Patil',
    city: 'Kolhapur',
    occasion: 'Bridal Muhurtham',
    blouseDesign: 'Radhika Heavy Maggam Kundan Bridal Blouse',
    rating: 5,
    quoteMarathi:
      'लग्न म्हणजे प्रत्येकाचे स्वप्न असते. मागम वर्क आणि कुंदनचे काम पाहून माझ्या आईला आणि सासूबाईंनाही खूप आनंद झाला. वेळेवर डिलिव्हरी दिल्याबद्दल मनःपूर्वक धन्यवाद हर्षिता!',
    quoteEnglish:
      'The maggam handwork with real kundan and pearls exceeded my wildest bridal expectations. Prompt delivery and supreme professionalism throughout.',
    date: 'ऑक्टोबर २०२६',
  },
  {
    id: 't-5',
    name: 'Tanvi Shinde',
    city: 'Nashik',
    occasion: 'Sangeet Night',
    blouseDesign: 'Zara Metallic Shimmer Sequin Blouse',
    rating: 5,
    quoteMarathi:
      'संगीत नाईटसाठी सिक्विन ब्लाउज हवा होता. डान्स करतानाही कम्फर्टेबल राहिला आणि आतून पॅडिंग खूप व्यवस्थित बसवले होते. आता सगळे ब्लाउज हर्षिताकडूनच शिवणार!',
    quoteEnglish:
      'Comfortable to dance the whole night in! The internal bustier padding and smooth lining kept me confident without any irritation. Harshita Creation is my forever go-to.',
    date: 'जुलै २०२६',
  },
];
