import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import { companyInfo } from '../data/companyInfo';

const ApplianceLifeGuide = () => {
  const { t } = useTranslation();
  
  const applianceLifeData = [
    { appliance: t('applianceLife.trashCompactor'), low: 7, high: 12, average: 11, serviceLink: '/services/garbage-disposal-repair' },
    { appliance: t('applianceLife.electricDryer'), low: 11, high: 18, average: 14, serviceLink: '/services/dryer-repair' },
    { appliance: t('applianceLife.gasDryer'), low: 11, high: 16, average: 13, serviceLink: '/services/dryer-repair' },
    { appliance: t('applianceLife.dishwasher'), low: 9, high: 16, average: 12, serviceLink: '/services/dishwasher-repair' },
    { appliance: t('applianceLife.garbageDisposal'), low: 10, high: 15, average: 13, serviceLink: '/services/garbage-disposal-repair' },
    { appliance: t('applianceLife.freezer'), low: 12, high: 20, average: 16, serviceLink: '/services/refrigerator-repair' },
    { appliance: t('applianceLife.microwaveOven'), low: 5, high: 10, average: 8, serviceLink: '/services/microwave-repair' },
    { appliance: t('applianceLife.electricRange'), low: 13, high: 20, average: 16, serviceLink: '/services/oven-repair' },
    { appliance: t('applianceLife.gasRange'), low: 15, high: 23, average: 19, serviceLink: '/services/oven-repair' },
    { appliance: t('applianceLife.ventHood'), low: 9, high: 19, average: 14, serviceLink: '/services' },
    { appliance: t('applianceLife.compactRefrigerator'), low: 4, high: 12, average: 8, serviceLink: '/services/refrigerator-repair' },
    { appliance: t('applianceLife.refrigerator'), low: 10, high: 18, average: 14, serviceLink: '/services/refrigerator-repair' },
    { appliance: t('applianceLife.washingMachine'), low: 8, high: 16, average: 12, serviceLink: '/services/washer-repair' },
    { appliance: t('applianceLife.combiBoiler'), low: 10, high: 15, average: 12, serviceLink: '/services/combi-boiler-repair' },
    { appliance: t('applianceLife.airConditioner'), low: 10, high: 15, average: 12, serviceLink: '/services/air-conditioner-repair' },
    { appliance: t('applianceLife.radiator'), low: 15, high: 25, average: 20, serviceLink: '/services/radiator-repair' },
  ];

  const tips = [
    {
      icon: '🔍',
      title: t('applianceLife.findSerial'),
      description: t('applianceLife.findSerialDesc'),
    },
    {
      icon: '📅',
      title: t('applianceLife.checkDate'),
      description: t('applianceLife.checkDateDesc'),
    },
    {
      icon: '🔢',
      title: t('applianceLife.decodeSerial'),
      description: t('applianceLife.decodeSerialDesc'),
    },
    {
      icon: '🔎',
      title: t('applianceLife.searchOnline'),
      description: t('applianceLife.searchOnlineDesc'),
    },
  ];

  const maintenanceTips = [
    {
      icon: '🛠️',
      title: t('applianceLife.regularMaintenance'),
      description: t('applianceLife.regularMaintenanceDesc'),
    },
    {
      icon: '👨‍🔧',
      title: t('applianceLife.professionalInspections'),
      description: t('applianceLife.professionalInspectionsDesc'),
    },
    {
      icon: '💰',
      title: t('applianceLife.repairVsReplace'),
      description: t('applianceLife.repairVsReplaceDesc'),
    },
    {
      icon: '📞',
      title: t('applianceLife.expertAdvice'),
      description: t('applianceLife.expertAdviceDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('applianceLife.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              {t('applianceLife.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/franchise-finder"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                {t('applianceLife.scheduleService')}
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="btn-primary bg-primary-500 text-white hover:bg-primary-400 border-2 border-white"
              >
                {t('applianceLife.call')} {companyInfo.phone}
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
                {t('applianceLife.whyKnowTitle')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  {t('applianceLife.whyKnowPara1')}
                </p>
                <p className="mb-4">
                  {t('applianceLife.whyKnowPara2')}
                </p>
                <p className="text-primary-600 font-semibold">
                  {t('applianceLife.whyKnowPara3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Expectancy Table */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t('applianceLife.chartTitle')}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {t('applianceLife.chartSubtitle')}
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">{t('applianceLife.applianceType')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">{t('applianceLife.lowYears')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">{t('applianceLife.highYears')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">{t('applianceLife.averageYears')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">{t('applianceLife.service')}</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applianceLifeData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">{item.appliance}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{item.low}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{item.high}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center bg-primary-100 text-primary-700 font-bold rounded-full px-3 py-1">
                          {item.average}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Link
                          to={item.serviceLink}
                          className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
                        >
                          {t('applianceLife.viewService')} →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {applianceLifeData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.appliance}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">{t('applianceLife.low')}</div>
                      <div className="text-xl font-bold text-gray-900">{item.low}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">{t('applianceLife.average')}</div>
                      <div className="text-xl font-bold text-primary-600">{item.average}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">{t('applianceLife.high')}</div>
                      <div className="text-xl font-bold text-gray-900">{item.high}</div>
                    </div>
                  </div>
                  <Link
                    to={item.serviceLink}
                    className="block text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {t('applianceLife.viewService')} →
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">
              {t('applianceLife.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* How Old Is My Appliance Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('applianceLife.howOldTitle')}
            </h2>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-gray-600 mb-6 text-lg">
                {t('applianceLife.howOldIntro')}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-4xl">{tip.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-50 border-l-4 border-primary-600 rounded">
                <p className="text-gray-700">
                  <strong>{t('applianceLife.proTip')}</strong> {t('applianceLife.proTipDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t('applianceLife.extendLifeTitle')}
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              {t('applianceLife.extendLifeSubtitle')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {maintenanceTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{tip.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t('applianceLife.repairOrReplaceTitle')}
              </h3>
              <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto">
                {t('applianceLife.repairOrReplaceDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/franchise-finder"
                  className="btn-primary bg-primary-600 text-white hover:bg-primary-700"
                >
                  {t('applianceLife.getExpertAdvice')}
                </Link>
                <Link
                  to="/services"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100 border-2 border-primary-600"
                >
                  {t('applianceLife.viewServices')}
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
              {t('applianceLife.relatedResources')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/appliance-care"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {t('applianceLife.careTipsTitle')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('applianceLife.careTipsDesc')}
                </p>
              </Link>

              <Link
                to="/faq"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">❓</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {t('applianceLife.faqTitle')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('applianceLife.faqDesc')}
                </p>
              </Link>

              <Link
                to="/services"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {t('applianceLife.ourServices')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('applianceLife.ourServicesDesc')}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction
        title={t('applianceLife.ctaTitle')}
        description={t('applianceLife.ctaDescription')}
      />
    </div>
  );
};

export default ApplianceLifeGuide;
