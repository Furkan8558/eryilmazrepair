import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLightbulb, FaSnowflake, FaTint, FaFire, FaPlug, FaThermometerHalf, FaClock, FaLeaf } from 'react-icons/fa';
import CallToAction from '../components/CallToAction';
import { companyInfo } from '../data/companyInfo';

const EnergySavingTips = () => {
  const { t } = useTranslation();
  
  const energyTips = [
    {
      appliance: t('energySaving.refrigeratorFreezer'),
      icon: 'FaSnowflake',
      serviceLink: '/services/refrigerator-repair',
      tips: [
        {
          title: t('energySaving.refTip1Title'),
          description: t('energySaving.refTip1Desc'),
        },
        {
          title: t('energySaving.refTip2Title'),
          description: t('energySaving.refTip2Desc'),
        },
        {
          title: t('energySaving.refTip3Title'),
          description: t('energySaving.refTip3Desc'),
        },
        {
          title: t('energySaving.refTip4Title'),
          description: t('energySaving.refTip4Desc'),
        },
        {
          title: t('energySaving.refTip5Title'),
          description: t('energySaving.refTip5Desc'),
        },
      ],
    },
    {
      appliance: t('energySaving.dishwasher'),
      icon: 'FaTint',
      serviceLink: '/services/dishwasher-repair',
      tips: [
        {
          title: t('energySaving.dishTip1Title'),
          description: t('energySaving.dishTip1Desc'),
        },
        {
          title: t('energySaving.dishTip2Title'),
          description: t('energySaving.dishTip2Desc'),
        },
        {
          title: t('energySaving.dishTip3Title'),
          description: t('energySaving.dishTip3Desc'),
        },
        {
          title: t('energySaving.dishTip4Title'),
          description: t('energySaving.dishTip4Desc'),
        },
        {
          title: t('energySaving.dishTip5Title'),
          description: t('energySaving.dishTip5Desc'),
        },
      ],
    },
    {
      appliance: t('energySaving.washingMachine'),
      icon: 'FaTint',
      serviceLink: '/services/washer-repair',
      tips: [
        {
          title: t('energySaving.washerTip1Title'),
          description: t('energySaving.washerTip1Desc'),
        },
        {
          title: t('energySaving.washerTip2Title'),
          description: t('energySaving.washerTip2Desc'),
        },
        {
          title: t('energySaving.washerTip3Title'),
          description: t('energySaving.washerTip3Desc'),
        },
        {
          title: t('energySaving.washerTip4Title'),
          description: t('energySaving.washerTip4Desc'),
        },
        {
          title: t('energySaving.washerTip5Title'),
          description: t('energySaving.washerTip5Desc'),
        },
      ],
    },
    {
      appliance: t('energySaving.dryer'),
      icon: 'FaFire',
      serviceLink: '/services/dryer-repair',
      tips: [
        {
          title: t('energySaving.dryerTip1Title'),
          description: t('energySaving.dryerTip1Desc'),
        },
        {
          title: t('energySaving.dryerTip2Title'),
          description: t('energySaving.dryerTip2Desc'),
        },
        {
          title: t('energySaving.dryerTip3Title'),
          description: t('energySaving.dryerTip3Desc'),
        },
        {
          title: t('energySaving.dryerTip4Title'),
          description: t('energySaving.dryerTip4Desc'),
        },
        {
          title: t('energySaving.dryerTip5Title'),
          description: t('energySaving.dryerTip5Desc'),
        },
      ],
    },
    {
      appliance: t('energySaving.ovenStove'),
      icon: 'FaFire',
      serviceLink: '/services/oven-repair',
      tips: [
        {
          title: t('energySaving.ovenTip1Title'),
          description: t('energySaving.ovenTip1Desc'),
        },
        {
          title: t('energySaving.ovenTip2Title'),
          description: t('energySaving.ovenTip2Desc'),
        },
        {
          title: t('energySaving.ovenTip3Title'),
          description: t('energySaving.ovenTip3Desc'),
        },
        {
          title: t('energySaving.ovenTip4Title'),
          description: t('energySaving.ovenTip4Desc'),
        },
        {
          title: t('energySaving.ovenTip5Title'),
          description: t('energySaving.ovenTip5Desc'),
        },
      ],
    },
    {
      appliance: t('energySaving.microwave'),
      icon: 'FaPlug',
      serviceLink: '/services/microwave-repair',
      tips: [
        {
          title: t('energySaving.microwaveTip1Title'),
          description: t('energySaving.microwaveTip1Desc'),
        },
        {
          title: t('energySaving.microwaveTip2Title'),
          description: t('energySaving.microwaveTip2Desc'),
        },
        {
          title: t('energySaving.microwaveTip3Title'),
          description: t('energySaving.microwaveTip3Desc'),
        },
        {
          title: t('energySaving.microwaveTip4Title'),
          description: t('energySaving.microwaveTip4Desc'),
        },
      ],
    },
    {
      appliance: t('energySaving.combiBoiler'),
      icon: 'FaThermometerHalf',
      serviceLink: '/services/combi-boiler-repair',
      tips: [
        {
          title: t('energySaving.boilerTip1Title'),
          description: t('energySaving.boilerTip1Desc'),
        },
        {
          title: t('energySaving.boilerTip2Title'),
          description: t('energySaving.boilerTip2Desc'),
        },
        {
          title: t('energySaving.boilerTip3Title'),
          description: t('energySaving.boilerTip3Desc'),
        },
        {
          title: t('energySaving.boilerTip4Title'),
          description: t('energySaving.boilerTip4Desc'),
        },
        {
          title: t('energySaving.boilerTip5Title'),
          description: t('energySaving.boilerTip5Desc'),
        },
      ],
    },
    {
      appliance: t('energySaving.airConditioner'),
      icon: 'FaSnowflake',
      serviceLink: '/services/air-conditioner-repair',
      tips: [
        {
          title: t('energySaving.acTip1Title'),
          description: t('energySaving.acTip1Desc'),
        },
        {
          title: t('energySaving.acTip2Title'),
          description: t('energySaving.acTip2Desc'),
        },
        {
          title: t('energySaving.acTip3Title'),
          description: t('energySaving.acTip3Desc'),
        },
        {
          title: t('energySaving.acTip4Title'),
          description: t('energySaving.acTip4Desc'),
        },
        {
          title: t('energySaving.acTip5Title'),
          description: t('energySaving.acTip5Desc'),
        },
      ],
    },
  ];

  const generalTips = [
    {
      icon: <FaClock className="text-4xl text-primary-600" />,
      title: t('energySaving.offPeakTitle'),
      description: t('energySaving.offPeakDesc'),
    },
    {
      icon: <FaPlug className="text-4xl text-primary-600" />,
      title: t('energySaving.unplugTitle'),
      description: t('energySaving.unplugDesc'),
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-600" />,
      title: t('energySaving.upgradeTitle'),
      description: t('energySaving.upgradeDesc'),
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary-600" />,
      title: t('energySaving.maintenanceTitle'),
      description: t('energySaving.maintenanceDesc'),
    },
  ];

  const savingsCalculator = [
    { action: t('energySaving.saving1Action'), annualSavings: t('energySaving.saving1Amount'), co2Reduction: t('energySaving.saving1Co2') },
    { action: t('energySaving.saving2Action'), annualSavings: t('energySaving.saving2Amount'), co2Reduction: t('energySaving.saving2Co2') },
    { action: t('energySaving.saving3Action'), annualSavings: t('energySaving.saving3Amount'), co2Reduction: t('energySaving.saving3Co2') },
    { action: t('energySaving.saving4Action'), annualSavings: t('energySaving.saving4Amount'), co2Reduction: t('energySaving.saving4Co2') },
    { action: t('energySaving.saving5Action'), annualSavings: t('energySaving.saving5Amount'), co2Reduction: t('energySaving.saving5Co2') },
    { action: t('energySaving.saving6Action'), annualSavings: t('energySaving.saving6Amount'), co2Reduction: t('energySaving.saving6Co2') },
  ];

  const iconComponents = {
    FaSnowflake,
    FaTint,
    FaFire,
    FaPlug,
    FaThermometerHalf,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaLeaf className="text-6xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('energySaving.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              {t('energySaving.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/franchise-finder"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                {t('energySaving.scheduleAudit')}
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="btn-primary bg-green-500 text-white hover:bg-green-400 border-2 border-white"
              >
                {t('energySaving.call')} {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('energySaving.whyMattersTitle')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  {t('energySaving.whyMattersPara1')}
                </p>
                <p className="mb-4">
                  {t('energySaving.whyMattersPara2')}
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mt-6">
                  <p className="text-green-900 font-semibold mb-2">{t('energySaving.didYouKnow')}</p>
                  <p className="text-green-800">
                    {t('energySaving.didYouKnowDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliance-Specific Tips */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t('energySaving.tipsByAppliance')}
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              {t('energySaving.tipsByApplianceSubtitle')}
            </p>

            <div className="space-y-8">
              {energyTips.map((category, index) => {
                const IconComponent = iconComponents[category.icon];
                return (
                  <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {IconComponent && <IconComponent className="text-4xl" />}
                          <h3 className="text-2xl font-bold">{category.appliance}</h3>
                        </div>
                        <Link
                          to={category.serviceLink}
                          className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-sm"
                        >
                          {t('energySaving.viewService')} →
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="bg-white rounded-lg p-5 border-l-4 border-primary-600 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">{tip.title}</h4>
                            <p className="text-gray-600">{tip.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* General Energy Saving Tips */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('energySaving.generalStrategies')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">{tip.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t('energySaving.potentialSavingsTitle')}
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              {t('energySaving.potentialSavingsSubtitle')}
            </p>

            <div className="bg-gradient-to-br from-green-50 to-primary-50 rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">{t('energySaving.savingAction')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">{t('energySaving.annualSavings')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">{t('energySaving.co2Reduction')}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {savingsCalculator.map((item, index) => (
                      <tr key={index} className="hover:bg-green-50 transition-colors">
                        <td className="px-6 py-4 text-gray-900">{item.action}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center justify-center bg-green-100 text-green-700 font-bold rounded-full px-4 py-1">
                            {item.annualSavings}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600 font-medium">
                          {item.co2Reduction}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-primary-100">
                    <tr className="font-bold">
                      <td className="px-6 py-4 text-gray-900">{t('energySaving.totalSavings')}</td>
                      <td className="px-6 py-4 text-center text-primary-700 text-lg">{t('energySaving.totalAmount')}</td>
                      <td className="px-6 py-4 text-center text-primary-700 text-lg">{t('energySaving.totalCo2')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-primary-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t('energySaving.maintenanceMaxTitle')}</h3>
              <p className="text-lg mb-6 text-primary-50">
                {t('energySaving.maintenanceMaxDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/franchise-finder"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  {t('energySaving.scheduleMaintenance')}
                </Link>
                <Link
                  to="/services"
                  className="btn-primary bg-primary-500 text-white hover:bg-primary-400 border-2 border-white"
                >
                  {t('energySaving.viewAllServices')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {t('energySaving.relatedResources')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/appliance-care"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {t('energySaving.careGuideTitle')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('energySaving.careGuideDesc')}
                </p>
              </Link>

              <Link
                to="/appliance-life-guide"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {t('energySaving.lifeGuideTitle')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('energySaving.lifeGuideDesc')}
                </p>
              </Link>

              <Link
                to="/faq"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">❓</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {t('energySaving.faqTitle')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('energySaving.faqDesc')}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction
        title={t('energySaving.ctaTitle')}
        description={t('energySaving.ctaDescription')}
      />
    </div>
  );
};

export default EnergySavingTips;
