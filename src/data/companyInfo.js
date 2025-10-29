import i18n from '../i18n';

export const getCompanyInfo = () => {
  const t = i18n.t.bind(i18n);
  
  return {
    name: "Eryilmaz Teknik",
    fullName: "Eryilmaz Teknik",
    tagline: t('companyInfo.tagline'),
    phone: "+90 541 632 6796", // Main/corporate number
    emergencyPhone: "+90 541 632 6796",
    email: "info@eryilmazteknik.com.tr",
    // Corporate/Generic info - no specific location
    hours: {
      weekday: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: t('common.closed')
    },
    social: {
      facebook: "https://facebook.com/eryilmazrepair",
      twitter: "https://twitter.com/eryilmazrepair",
      instagram: "https://instagram.com/eryilmazteknik",
      linkedin: "https://linkedin.com/company/eryilmazrepair"
    },
    features: [
      t('companyInfo.feature1'),
      t('companyInfo.feature2'),
      t('companyInfo.feature3'),
      t('companyInfo.feature4'),
      t('companyInfo.feature5'),
      t('companyInfo.feature6')
    ]
  };
};

// Export the function as default for dynamic translation updates
export default getCompanyInfo;


