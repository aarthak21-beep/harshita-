import React, { useState } from 'react';
import { X, Ruler, MessageCircle, Check, Info, Sparkles } from 'lucide-react';
import { MEASUREMENT_FIELDS, STITCHING_FEATURES } from '../data/measurementGuide';
import { getWhatsAppMeasurementUrl } from '../utils/whatsapp';

interface MeasurementGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeasurementGuideModal: React.FC<MeasurementGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [measurements, setMeasurements] = useState<Record<string, string>>({
    bust: '',
    underbust: '',
    length: '',
    shoulder: '',
    armhole: '',
    sleeveLength: '',
    sleeveRound: '',
    frontNeck: '',
    backNeck: '',
  });

  const [paddingPreference, setPaddingPreference] = useState('with_padding');
  const [openingPreference, setOpeningPreference] = useState('back_open');

  const handleInputChange = (field: string, val: string) => {
    setMeasurements((prev) => ({ ...prev, [field]: val }));
  };

  const handleSendToWhatsApp = () => {
    const formatted: Record<string, string> = {};
    MEASUREMENT_FIELDS.forEach((f) => {
      if (measurements[f.id]) {
        formatted[f.labelMarathi] = measurements[f.id];
      }
    });

    formatted['पॅडिंग (Bust Padding)'] =
      paddingPreference === 'with_padding' ? 'हवे आहे (With Soft Cups)' : 'नको (Without Padding)';
    formatted['हुक ओपनिंग (Opening Type)'] =
      openingPreference === 'back_open'
        ? 'मागील हुक (Back Open)'
        : openingPreference === 'front_open'
        ? 'पुढील हुक (Front Open)'
        : 'साइड झिप (Side Zipper)';

    const url = getWhatsAppMeasurementUrl(formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#EADBFA] overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0E6FC] bg-[#FAF8FC]">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#5B3E8C]" />
            <div>
              <h3 className="text-base font-serif font-bold text-[#3B1F56]">
                Blouse Measurement Guide & Form
              </h3>
              <p className="text-xs text-[#7C5DA6]">
                योग्य मापे घ्या आणि WhatsApp वर पाठवून परफेक्ट फिटिंग मिळवा
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F3ECFB] text-[#4F3B66] border border-[#E4D5F7] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Quick instructions strip */}
          <div className="bg-[#FAF7FE] border border-[#EADBFA] rounded-xl p-4 flex items-start gap-3 text-xs text-[#523E68]">
            <Info className="w-5 h-5 text-[#7C5DA6] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-[#3B1F56]">
                मापे कशी घ्यावी? (How to measure):
              </p>
              <p className="leading-relaxed">
                टेप खूप सैल किंवा खूप घट्ट ओढू नका. जर तुमच्याकडे आधीचा परफेक्ट बसणारा ब्लाउज असेल, तर त्याचे माप घेऊनसुद्धा खालील रकान्यात भरू शकता. हवे असल्यास जुन्या ब्लाउजचा फोटो थेट WhatsApp वर पाठवू शकता.
              </p>
            </div>
          </div>

          {/* Form fields grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B3E8C]">
              ब्लाउजचे मापे (Inches मध्ये भरा)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {MEASUREMENT_FIELDS.map((field) => (
                <div
                  key={field.id}
                  className="p-3 rounded-lg border border-[#EADDF8] bg-white space-y-1.5"
                >
                  <label className="text-xs font-semibold text-[#3B1F56] block">
                    {field.labelMarathi}
                  </label>
                  <input
                    type="text"
                    value={measurements[field.id]}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-2.5 py-1.5 text-xs border border-[#D9C9EB] rounded focus:outline-none focus:ring-1 focus:ring-[#5B3E8C] bg-[#FAF8FD]"
                  />
                  <p className="text-[10px] text-[#7C5DA6] leading-tight">
                    {field.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0E6FC]">
            {/* Cup Padding */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#3B1F56] block">
                Bust Padding (पॅडिंग सुविधा)
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPaddingPreference('with_padding')}
                  className={`flex-1 py-2 px-3 text-xs rounded border transition cursor-pointer ${
                    paddingPreference === 'with_padding'
                      ? 'bg-[#5B3E8C] text-white border-[#5B3E8C] font-semibold'
                      : 'bg-white text-[#55406C] border-[#D9C9EB]'
                  }`}
                >
                  With Soft Cups
                </button>
                <button
                  type="button"
                  onClick={() => setPaddingPreference('no_padding')}
                  className={`flex-1 py-2 px-3 text-xs rounded border transition cursor-pointer ${
                    paddingPreference === 'no_padding'
                      ? 'bg-[#5B3E8C] text-white border-[#5B3E8C] font-semibold'
                      : 'bg-white text-[#55406C] border-[#D9C9EB]'
                  }`}
                >
                  Without Padding
                </button>
              </div>
            </div>

            {/* Hook Opening */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#3B1F56] block">
                Hook / Zipper (उघडण्याची जागा)
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setOpeningPreference('back_open')}
                  className={`flex-1 py-2 px-2 text-xs rounded border transition cursor-pointer ${
                    openingPreference === 'back_open'
                      ? 'bg-[#5B3E8C] text-white border-[#5B3E8C] font-semibold'
                      : 'bg-white text-[#55406C] border-[#D9C9EB]'
                  }`}
                >
                  Back Open
                </button>
                <button
                  type="button"
                  onClick={() => setOpeningPreference('front_open')}
                  className={`flex-1 py-2 px-2 text-xs rounded border transition cursor-pointer ${
                    openingPreference === 'front_open'
                      ? 'bg-[#5B3E8C] text-white border-[#5B3E8C] font-semibold'
                      : 'bg-white text-[#55406C] border-[#D9C9EB]'
                  }`}
                >
                  Front Open
                </button>
                <button
                  type="button"
                  onClick={() => setOpeningPreference('side_zip')}
                  className={`flex-1 py-2 px-2 text-xs rounded border transition cursor-pointer ${
                    openingPreference === 'side_zip'
                      ? 'bg-[#5B3E8C] text-white border-[#5B3E8C] font-semibold'
                      : 'bg-white text-[#55406C] border-[#D9C9EB]'
                  }`}
                >
                  Side Zipper
                </button>
              </div>
            </div>
          </div>

          {/* Tailoring highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#F0E6FC]">
            {STITCHING_FEATURES.map((feat, i) => (
              <div key={i} className="p-2 rounded bg-[#FAF7FD] text-left">
                <span className="text-[11px] font-bold text-[#3B1F56] block leading-tight">
                  {feat.titleMarathi}
                </span>
                <span className="text-[10px] text-[#705988] block mt-0.5">
                  {feat.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Submit */}
        <div className="p-4 sm:p-5 border-t border-[#F0E6FC] bg-[#FAF8FC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6C5586] text-center sm:text-left">
            मापे भरून खालील बटण दाबा. थेट WhatsApp वर मेसेज तयार होईल.
          </p>

          <button
            onClick={handleSendToWhatsApp}
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp वर मापे पाठवा (9082867663)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
