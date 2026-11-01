import { BlouseDesign, EnquiryTopic } from '../types';

export const WHATSAPP_PHONE = '9082867663';
export const WHATSAPP_INTL_NUMBER = '919082867663';
export const BASE_WHATSAPP_URL = `https://wa.me/${WHATSAPP_INTL_NUMBER}`;

export const DEFAULT_PREFILLED_MESSAGE =
  'Hello Harshita Creation! मला तुमचा हा blouse design आवडला आहे. मला याबद्दल अधिक माहिती हवी आहे.';

/**
 * Generates a direct WhatsApp enquiry URL for a specific blouse design,
 * optionally with a specific enquiry topic (availability, stitching charges, measurements, delivery, customization).
 */
export function getWhatsAppDesignEnquiryUrl(
  design?: BlouseDesign,
  topic: EnquiryTopic = 'general',
  customNote?: string
): string {
  if (!design) {
    const text = customNote
      ? `Hello Harshita Creation! ${customNote}`
      : 'Hello Harshita Creation! मला तुमच्या designer blouse stitching आणि designs बद्दल चौकशी करायची आहे.';
    return `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
  }

  let topicDetail = '';
  switch (topic) {
    case 'availability':
      topicDetail = 'हे डिझाईन किंवा फॅब्रिक उपलब्ध आहे का? (Design Availability)';
      break;
    case 'stitching_charges':
      topicDetail = 'या डिझाईनचे शिलाई शुल्क (Stitching Charges) किती आहे?';
      break;
    case 'measurements':
      topicDetail = 'माझे माप कसे पाठवावे? (Measurements Guide & Consultation)';
      break;
    case 'delivery':
      topicDetail = 'डिलिव्हरी किती दिवसांत मिळेल? (Delivery Details)';
      break;
    case 'customization':
      topicDetail = 'मला या डिझाईनमध्ये काही बदल (Customization) करायचे आहेत.';
      break;
    default:
      topicDetail = 'मला याबद्दल अधिक माहिती हवी आहे.';
      break;
  }

  const messageLines = [
    DEFAULT_PREFILLED_MESSAGE,
    '',
    `📌 डिझाईनचे नाव (Design): ${design.name}`,
    `🏷️ वर्गवारी (Category): ${design.category}`,
    `🧵 फॅब्रिक (Fabric): ${design.fabric}`,
    `✨ वर्क (Work): ${design.work}`,
    `💬 चौकशी विषय: ${topicDetail}`,
  ];

  if (customNote && customNote.trim()) {
    messageLines.push(`📝 टीप: ${customNote.trim()}`);
  }

  const fullMessage = messageLines.join('\n');
  return `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(fullMessage)}`;
}

/**
 * Generate WhatsApp URL for multiple shortlisted designs
 */
export function getWhatsAppWishlistEnquiryUrl(designs: BlouseDesign[]): string {
  if (designs.length === 0) {
    return `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(
      'Hello Harshita Creation! मला तुमच्या designer blouses बद्दल माहिती हवी आहे.'
    )}`;
  }

  const designList = designs
    .map((d, index) => `${index + 1}. ${d.name} (${d.category})`)
    .join('\n');

  const message = [
    'Hello Harshita Creation! मला खालील blouse designs खूप आवडले आहेत:',
    '',
    designList,
    '',
    'कृपया या डिझाईन्सचे stitching charges आणि delivery details सांगा. धन्यवाद!',
  ].join('\n');

  return `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate WhatsApp URL for custom measurement submission
 */
export function getWhatsAppMeasurementUrl(measurements: Record<string, string>): string {
  const lines = [
    'Hello Harshita Creation! येथे माझे ब्लाउजचे मापे (Blouse Measurements) देत आहे:',
    '',
    ...Object.entries(measurements)
      .filter(([_, v]) => Boolean(v))
      .map(([k, v]) => `• ${k}: ${v} inches`),
    '',
    'कृपया तपासून stitching बद्दल मार्गदर्शन करा. धन्यवाद!',
  ];

  return `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`;
}
