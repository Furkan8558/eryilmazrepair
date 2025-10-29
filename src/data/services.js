import i18n from '../i18n';

export const getServices = () => {
  const t = i18n.t.bind(i18n);
  
  return [
    {
      id: "refrigerator-repair",
      name: t('servicesData.refrigerator.name'),
      icon: "FaSnowflake",
      shortDescription: t('servicesData.refrigerator.shortDescription'),
      description: t('servicesData.refrigerator.description'),
      image: "/images/refrigerator-repair.jpg",
      commonIssues: [
        t('servicesData.refrigerator.issue1'),
        t('servicesData.refrigerator.issue2'),
        t('servicesData.refrigerator.issue3'),
        t('servicesData.refrigerator.issue4'),
        t('servicesData.refrigerator.issue5'),
        t('servicesData.refrigerator.issue6'),
      ],
      repairServices: [
        t('servicesData.refrigerator.repair1'),
        t('servicesData.refrigerator.repair2'),
        t('servicesData.refrigerator.repair3'),
        t('servicesData.refrigerator.repair4'),
        t('servicesData.refrigerator.repair5'),
        t('servicesData.refrigerator.repair6'),
        t('servicesData.refrigerator.repair7'),
        t('servicesData.refrigerator.repair8'),
      ],
      brands: ["Samsung", "LG", "Whirlpool", "GE", "Frigidaire", "KitchenAid", "Maytag"],
      price: t('servicesData.refrigerator.price'),
      faqs: [
        {
          question: t('servicesData.refrigerator.faq1Q'),
          answer: t('servicesData.refrigerator.faq1A'),
        },
        {
          question: t('servicesData.refrigerator.faq2Q'),
          answer: t('servicesData.refrigerator.faq2A'),
        },
        {
          question: t('servicesData.refrigerator.faq3Q'),
          answer: t('servicesData.refrigerator.faq3A'),
        },
        {
          question: t('servicesData.refrigerator.faq4Q'),
          answer: t('servicesData.refrigerator.faq4A'),
        },
      ]
    },
    {
      id: "dishwasher-repair",
      name: t('servicesData.dishwasher.name'),
      icon: "FaSink",
      shortDescription: t('servicesData.dishwasher.shortDescription'),
      description: t('servicesData.dishwasher.description'),
      image: "/images/dishwasher-repair.jpg",
      commonIssues: [
        t('servicesData.dishwasher.issue1'),
        t('servicesData.dishwasher.issue2'),
        t('servicesData.dishwasher.issue3'),
        t('servicesData.dishwasher.issue4'),
        t('servicesData.dishwasher.issue5'),
        t('servicesData.dishwasher.issue6'),
      ],
      repairServices: [
        t('servicesData.dishwasher.repair1'),
        t('servicesData.dishwasher.repair2'),
        t('servicesData.dishwasher.repair3'),
        t('servicesData.dishwasher.repair4'),
        t('servicesData.dishwasher.repair5'),
        t('servicesData.dishwasher.repair6'),
        t('servicesData.dishwasher.repair7'),
        t('servicesData.dishwasher.repair8'),
      ],
      brands: ["Bosch", "KitchenAid", "Whirlpool", "GE", "Samsung", "LG", "Frigidaire"],
      price: t('servicesData.dishwasher.price'),
      faqs: [
        {
          question: t('servicesData.dishwasher.faq1Q'),
          answer: t('servicesData.dishwasher.faq1A'),
        },
        {
          question: t('servicesData.dishwasher.faq2Q'),
          answer: t('servicesData.dishwasher.faq2A'),
        },
        {
          question: t('servicesData.dishwasher.faq3Q'),
          answer: t('servicesData.dishwasher.faq3A'),
        },
        {
          question: t('servicesData.dishwasher.faq4Q'),
          answer: t('servicesData.dishwasher.faq4A'),
        },
      ]
    },
    {
      id: "oven-repair",
      name: t('servicesData.oven.name'),
      icon: "FaFire",
      shortDescription: t('servicesData.oven.shortDescription'),
      description: t('servicesData.oven.description'),
      image: "/images/oven-repair.jpg",
      commonIssues: [
        t('servicesData.oven.issue1'),
        t('servicesData.oven.issue2'),
        t('servicesData.oven.issue3'),
        t('servicesData.oven.issue4'),
        t('servicesData.oven.issue5'),
        t('servicesData.oven.issue6'),
      ],
      repairServices: [
        t('servicesData.oven.repair1'),
        t('servicesData.oven.repair2'),
        t('servicesData.oven.repair3'),
        t('servicesData.oven.repair4'),
        t('servicesData.oven.repair5'),
        t('servicesData.oven.repair6'),
        t('servicesData.oven.repair7'),
        t('servicesData.oven.repair8'),
      ],
      brands: ["GE", "Whirlpool", "Frigidaire", "Samsung", "LG", "KitchenAid", "Maytag"],
      price: t('servicesData.oven.price'),
      faqs: [
        {
          question: t('servicesData.oven.faq1Q'),
          answer: t('servicesData.oven.faq1A'),
        },
        {
          question: t('servicesData.oven.faq2Q'),
          answer: t('servicesData.oven.faq2A'),
        },
        {
          question: t('servicesData.oven.faq3Q'),
          answer: t('servicesData.oven.faq3A'),
        },
        {
          question: t('servicesData.oven.faq4Q'),
          answer: t('servicesData.oven.faq4A'),
        },
      ]
    },
    {
      id: "washer-repair",
      name: t('servicesData.washer.name'),
      icon: "FaTshirt",
      shortDescription: t('servicesData.washer.shortDescription'),
      description: t('servicesData.washer.description'),
      image: "/images/washer-repair.jpg",
      commonIssues: [
        t('servicesData.washer.issue1'),
        t('servicesData.washer.issue2'),
        t('servicesData.washer.issue3'),
        t('servicesData.washer.issue4'),
        t('servicesData.washer.issue5'),
        t('servicesData.washer.issue6'),
      ],
      repairServices: [
        t('servicesData.washer.repair1'),
        t('servicesData.washer.repair2'),
        t('servicesData.washer.repair3'),
        t('servicesData.washer.repair4'),
        t('servicesData.washer.repair5'),
        t('servicesData.washer.repair6'),
        t('servicesData.washer.repair7'),
        t('servicesData.washer.repair8'),
      ],
      brands: ["Whirlpool", "Maytag", "LG", "Samsung", "GE", "Frigidaire", "Speed Queen"],
      price: t('servicesData.washer.price'),
      faqs: [
        {
          question: t('servicesData.washer.faq1Q'),
          answer: t('servicesData.washer.faq1A'),
        },
        {
          question: t('servicesData.washer.faq2Q'),
          answer: t('servicesData.washer.faq2A'),
        },
        {
          question: t('servicesData.washer.faq3Q'),
          answer: t('servicesData.washer.faq3A'),
        },
        {
          question: t('servicesData.washer.faq4Q'),
          answer: t('servicesData.washer.faq4A'),
        },
      ]
    },
    {
      id: "dryer-repair",
      name: t('servicesData.dryer.name'),
      icon: "FaWind",
      shortDescription: t('servicesData.dryer.shortDescription'),
      description: t('servicesData.dryer.description'),
      image: "/images/dryer-repair.jpg",
      commonIssues: [
        t('servicesData.dryer.issue1'),
        t('servicesData.dryer.issue2'),
        t('servicesData.dryer.issue3'),
        t('servicesData.dryer.issue4'),
        t('servicesData.dryer.issue5'),
        t('servicesData.dryer.issue6'),
      ],
      repairServices: [
        t('servicesData.dryer.repair1'),
        t('servicesData.dryer.repair2'),
        t('servicesData.dryer.repair3'),
        t('servicesData.dryer.repair4'),
        t('servicesData.dryer.repair5'),
        t('servicesData.dryer.repair6'),
        t('servicesData.dryer.repair7'),
        t('servicesData.dryer.repair8'),
      ],
      brands: ["Whirlpool", "Maytag", "LG", "Samsung", "GE", "Frigidaire", "Kenmore"],
      price: t('servicesData.dryer.price'),
      faqs: [
        {
          question: t('servicesData.dryer.faq1Q'),
          answer: t('servicesData.dryer.faq1A'),
        },
        {
          question: t('servicesData.dryer.faq2Q'),
          answer: t('servicesData.dryer.faq2A'),
        },
        {
          question: t('servicesData.dryer.faq3Q'),
          answer: t('servicesData.dryer.faq3A'),
        },
        {
          question: t('servicesData.dryer.faq4Q'),
          answer: t('servicesData.dryer.faq4A'),
        },
      ]
    },
    {
      id: "microwave-repair",
      name: t('servicesData.microwave.name'),
      icon: "FaMicrochip",
      shortDescription: t('servicesData.microwave.shortDescription'),
      description: t('servicesData.microwave.description'),
      image: "/images/microwave-repair.jpg",
      commonIssues: [
        t('servicesData.microwave.issue1'),
        t('servicesData.microwave.issue2'),
        t('servicesData.microwave.issue3'),
        t('servicesData.microwave.issue4'),
        t('servicesData.microwave.issue5'),
        t('servicesData.microwave.issue6'),
      ],
      repairServices: [
        t('servicesData.microwave.repair1'),
        t('servicesData.microwave.repair2'),
        t('servicesData.microwave.repair3'),
        t('servicesData.microwave.repair4'),
        t('servicesData.microwave.repair5'),
        t('servicesData.microwave.repair6'),
        t('servicesData.microwave.repair7'),
        t('servicesData.microwave.repair8'),
      ],
      brands: ["GE", "Whirlpool", "Samsung", "LG", "Panasonic", "Sharp", "KitchenAid"],
      price: t('servicesData.microwave.price'),
      faqs: [
        {
          question: t('servicesData.microwave.faq1Q'),
          answer: t('servicesData.microwave.faq1A'),
        },
        {
          question: t('servicesData.microwave.faq2Q'),
          answer: t('servicesData.microwave.faq2A'),
        },
        {
          question: t('servicesData.microwave.faq3Q'),
          answer: t('servicesData.microwave.faq3A'),
        },
        {
          question: t('servicesData.microwave.faq4Q'),
          answer: t('servicesData.microwave.faq4A'),
        },
      ]
    },
    {
      id: "ice-maker-repair",
      name: t('servicesData.iceMaker.name'),
      icon: "FaGlassWhiskey",
      shortDescription: t('servicesData.iceMaker.shortDescription'),
      description: t('servicesData.iceMaker.description'),
      image: "/images/ice-maker-repair.jpg",
      commonIssues: [
        t('servicesData.iceMaker.issue1'),
        t('servicesData.iceMaker.issue2'),
        t('servicesData.iceMaker.issue3'),
        t('servicesData.iceMaker.issue4'),
        t('servicesData.iceMaker.issue5'),
        t('servicesData.iceMaker.issue6'),
      ],
      repairServices: [
        t('servicesData.iceMaker.repair1'),
        t('servicesData.iceMaker.repair2'),
        t('servicesData.iceMaker.repair3'),
        t('servicesData.iceMaker.repair4'),
        t('servicesData.iceMaker.repair5'),
        t('servicesData.iceMaker.repair6'),
        t('servicesData.iceMaker.repair7'),
        t('servicesData.iceMaker.repair8'),
      ],
      brands: ["Samsung", "LG", "Whirlpool", "GE", "Frigidaire", "KitchenAid"],
      price: t('servicesData.iceMaker.price'),
      faqs: [
        {
          question: t('servicesData.iceMaker.faq1Q'),
          answer: t('servicesData.iceMaker.faq1A'),
        },
        {
          question: t('servicesData.iceMaker.faq2Q'),
          answer: t('servicesData.iceMaker.faq2A'),
        },
        {
          question: t('servicesData.iceMaker.faq3Q'),
          answer: t('servicesData.iceMaker.faq3A'),
        },
        {
          question: t('servicesData.iceMaker.faq4Q'),
          answer: t('servicesData.iceMaker.faq4A'),
        },
      ]
    },
    {
      id: "garbage-disposal-repair",
      name: t('servicesData.disposal.name'),
      icon: "FaRecycle",
      shortDescription: t('servicesData.disposal.shortDescription'),
      description: t('servicesData.disposal.description'),
      image: "/images/disposal-repair.jpg",
      commonIssues: [
        t('servicesData.disposal.issue1'),
        t('servicesData.disposal.issue2'),
        t('servicesData.disposal.issue3'),
        t('servicesData.disposal.issue4'),
        t('servicesData.disposal.issue5'),
        t('servicesData.disposal.issue6'),
      ],
      repairServices: [
        t('servicesData.disposal.repair1'),
        t('servicesData.disposal.repair2'),
        t('servicesData.disposal.repair3'),
        t('servicesData.disposal.repair4'),
        t('servicesData.disposal.repair5'),
        t('servicesData.disposal.repair6'),
        t('servicesData.disposal.repair7'),
        t('servicesData.disposal.repair8'),
      ],
      brands: ["InSinkErator", "Waste King", "Moen", "KitchenAid", "Kohler"],
      price: t('servicesData.disposal.price'),
      faqs: [
        {
          question: t('servicesData.disposal.faq1Q'),
          answer: t('servicesData.disposal.faq1A'),
        },
        {
          question: t('servicesData.disposal.faq2Q'),
          answer: t('servicesData.disposal.faq2A'),
        },
        {
          question: t('servicesData.disposal.faq3Q'),
          answer: t('servicesData.disposal.faq3A'),
        },
        {
          question: t('servicesData.disposal.faq4Q'),
          answer: t('servicesData.disposal.faq4A'),
        },
      ]
    },
    {
      id: "combi-boiler-repair",
      name: t('servicesData.combiBoiler.name'),
      icon: "FaFire",
      shortDescription: t('servicesData.combiBoiler.shortDescription'),
      description: t('servicesData.combiBoiler.description'),
      image: "/images/combi-boiler-repair.jpg",
      commonIssues: [
        t('servicesData.combiBoiler.issue1'),
        t('servicesData.combiBoiler.issue2'),
        t('servicesData.combiBoiler.issue3'),
        t('servicesData.combiBoiler.issue4'),
        t('servicesData.combiBoiler.issue5'),
        t('servicesData.combiBoiler.issue6'),
        t('servicesData.combiBoiler.issue7'),
        t('servicesData.combiBoiler.issue8'),
      ],
      repairServices: [
        t('servicesData.combiBoiler.repair1'),
        t('servicesData.combiBoiler.repair2'),
        t('servicesData.combiBoiler.repair3'),
        t('servicesData.combiBoiler.repair4'),
        t('servicesData.combiBoiler.repair5'),
        t('servicesData.combiBoiler.repair6'),
        t('servicesData.combiBoiler.repair7'),
        t('servicesData.combiBoiler.repair8'),
        t('servicesData.combiBoiler.repair9'),
        t('servicesData.combiBoiler.repair10'),
      ],
      brands: ["Vaillant", "Baxi", "Worcester Bosch", "Viessmann", "Buderus", "Ariston", "Bosch", "Ferroli"],
      price: t('servicesData.combiBoiler.price'),
      faqs: [
        {
          question: t('servicesData.combiBoiler.faq1Q'),
          answer: t('servicesData.combiBoiler.faq1A'),
        },
        {
          question: t('servicesData.combiBoiler.faq2Q'),
          answer: t('servicesData.combiBoiler.faq2A'),
        },
        {
          question: t('servicesData.combiBoiler.faq3Q'),
          answer: t('servicesData.combiBoiler.faq3A'),
        },
        {
          question: t('servicesData.combiBoiler.faq4Q'),
          answer: t('servicesData.combiBoiler.faq4A'),
        },
      ]
    },
    {
      id: "air-conditioner-repair",
      name: t('servicesData.airConditioner.name'),
      icon: "FaWind",
      shortDescription: t('servicesData.airConditioner.shortDescription'),
      description: t('servicesData.airConditioner.description'),
      image: "/images/air-conditioner-repair.jpg",
      commonIssues: [
        t('servicesData.airConditioner.issue1'),
        t('servicesData.airConditioner.issue2'),
        t('servicesData.airConditioner.issue3'),
        t('servicesData.airConditioner.issue4'),
        t('servicesData.airConditioner.issue5'),
        t('servicesData.airConditioner.issue6'),
        t('servicesData.airConditioner.issue7'),
        t('servicesData.airConditioner.issue8'),
      ],
      repairServices: [
        t('servicesData.airConditioner.repair1'),
        t('servicesData.airConditioner.repair2'),
        t('servicesData.airConditioner.repair3'),
        t('servicesData.airConditioner.repair4'),
        t('servicesData.airConditioner.repair5'),
        t('servicesData.airConditioner.repair6'),
        t('servicesData.airConditioner.repair7'),
        t('servicesData.airConditioner.repair8'),
        t('servicesData.airConditioner.repair9'),
        t('servicesData.airConditioner.repair10'),
        t('servicesData.airConditioner.repair11'),
      ],
      brands: ["Daikin", "Mitsubishi", "LG", "Samsung", "Fujitsu", "Toshiba", "Panasonic", "Arçelik", "Vestel"],
      price: t('servicesData.airConditioner.price'),
      faqs: [
        {
          question: t('servicesData.airConditioner.faq1Q'),
          answer: t('servicesData.airConditioner.faq1A'),
        },
        {
          question: t('servicesData.airConditioner.faq2Q'),
          answer: t('servicesData.airConditioner.faq2A'),
        },
        {
          question: t('servicesData.airConditioner.faq3Q'),
          answer: t('servicesData.airConditioner.faq3A'),
        },
        {
          question: t('servicesData.airConditioner.faq4Q'),
          answer: t('servicesData.airConditioner.faq4A'),
        },
      ]
    },
    {
      id: "radiator-repair",
      name: t('servicesData.radiator.name'),
      icon: "FaThermometerHalf",
      shortDescription: t('servicesData.radiator.shortDescription'),
      description: t('servicesData.radiator.description'),
      image: "/images/radiator-repair.jpg",
      commonIssues: [
        t('servicesData.radiator.issue1'),
        t('servicesData.radiator.issue2'),
        t('servicesData.radiator.issue3'),
        t('servicesData.radiator.issue4'),
        t('servicesData.radiator.issue5'),
        t('servicesData.radiator.issue6'),
        t('servicesData.radiator.issue7'),
        t('servicesData.radiator.issue8'),
      ],
      repairServices: [
        t('servicesData.radiator.repair1'),
        t('servicesData.radiator.repair2'),
        t('servicesData.radiator.repair3'),
        t('servicesData.radiator.repair4'),
        t('servicesData.radiator.repair5'),
        t('servicesData.radiator.repair6'),
        t('servicesData.radiator.repair7'),
        t('servicesData.radiator.repair8'),
        t('servicesData.radiator.repair9'),
        t('servicesData.radiator.repair10'),
        t('servicesData.radiator.repair11'),
      ],
      brands: [t('servicesData.radiator.brandsNote')],
      price: t('servicesData.radiator.price'),
      faqs: [
        {
          question: t('servicesData.radiator.faq1Q'),
          answer: t('servicesData.radiator.faq1A'),
        },
        {
          question: t('servicesData.radiator.faq2Q'),
          answer: t('servicesData.radiator.faq2A'),
        },
        {
          question: t('servicesData.radiator.faq3Q'),
          answer: t('servicesData.radiator.faq3A'),
        },
        {
          question: t('servicesData.radiator.faq4Q'),
          answer: t('servicesData.radiator.faq4A'),
        },
      ]
    },
  ];
};

export const getServiceById = (id) => {
  const services = getServices();
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category) => {
  const services = getServices();
  return services.filter(service => service.category === category);
};

// Export the function as default for dynamic translation updates
export default getServices;

// For backwards compatibility - call the function
export const services = getServices();
