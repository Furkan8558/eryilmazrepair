import i18n from '../i18n';

const blogPostsData = {
  en: [
    {
      id: "refrigerator-maintenance-tips",
      title: "10 Essential Refrigerator Maintenance Tips",
      excerpt: "Learn how to keep your refrigerator running efficiently and extend its lifespan with these simple maintenance tips.",
      content: `
        <p>Regular maintenance of your refrigerator can save you money on energy bills and prevent costly repairs. Here are 10 essential tips:</p>
        
        <h3>1. Clean the Condenser Coils</h3>
        <p>Dust and dirt on the coils make your refrigerator work harder. Clean them every 6 months to maintain efficiency.</p>
        
        <h3>2. Check Door Seals</h3>
        <p>Loose seals let cold air escape. Test by closing the door on a piece of paper - if it slides easily, replace the seals.</p>
        
        <h3>3. Set the Right Temperature</h3>
        <p>Keep your fridge at 37-40°F (3-4°C) and freezer at 0°F (-18°C) for optimal food preservation.</p>
        
        <h3>4. Don't Overfill</h3>
        <p>Proper air circulation is essential. Leave space between items to allow cold air to flow freely.</p>
        
        <h3>5. Clean Regularly</h3>
        <p>Wipe spills immediately and deep clean monthly to prevent odors and bacteria growth.</p>
        
        <h3>6. Check the Drain Pan</h3>
        <p>Clean it regularly to prevent mold and unpleasant smells from developing.</p>
        
        <h3>7. Keep it Full</h3>
        <p>An empty fridge works harder to maintain temperature. Use water bottles to fill empty space if needed.</p>
        
        <h3>8. Defrost Regularly</h3>
        <p>If you have a manual defrost freezer, defrost when ice buildup reaches 6mm thickness.</p>
        
        <h3>9. Check Water Filters</h3>
        <p>Replace them every 6 months for clean water and ice. This also prevents clogging.</p>
        
        <h3>10. Give it Space</h3>
        <p>Leave 2-3 inches of space around your fridge for proper ventilation and heat dissipation.</p>
        
        <p><strong>Following these tips can extend your refrigerator's life by 15-20 years!</strong></p>
      `,
      image: "/images/refrigerator-repair.jpg",
      author: "Süleyman Eryılmaz",
      category: "maintenance",
      date: "2024-03-15",
      readTime: "5 min read",
      tags: ["refrigerator", "maintenance", "tips"]
    },
    {
      id: "dishwasher-cleaning-guide",
      title: "How to Deep Clean Your Dishwasher",
      excerpt: "A step-by-step guide to thoroughly cleaning your dishwasher for optimal performance and longevity.",
      content: `
        <p>Your dishwasher works hard to keep your dishes clean, but it needs cleaning too! Here's how to deep clean it:</p>
        
        <h3>Step 1: Remove and Clean the Filter</h3>
        <ul>
          <li>Take out the bottom rack</li>
          <li>Unscrew and remove the filter</li>
          <li>Rinse under hot water and scrub with a soft brush</li>
          <li>Reinstall the filter securely</li>
        </ul>
        
        <h3>Step 2: Clean the Spray Arms</h3>
        <ul>
          <li>Remove spray arms by unscrewing them</li>
          <li>Clear any debris from the holes using a toothpick</li>
          <li>Rinse thoroughly under running water</li>
          <li>Reinstall spray arms</li>
        </ul>
        
        <h3>Step 3: Wipe Down the Interior</h3>
        <ul>
          <li>Use a damp cloth to wipe the door edges and gasket</li>
          <li>Clean the detergent dispenser</li>
          <li>Remove any food debris from the bottom</li>
        </ul>
        
        <h3>Step 4: Run a Cleaning Cycle</h3>
        <ul>
          <li>Place a dishwasher-safe bowl with 2 cups of white vinegar on the top rack</li>
          <li>Run a hot water cycle</li>
          <li>Sprinkle 1 cup of baking soda on the bottom</li>
          <li>Run a short hot cycle</li>
        </ul>
        
        <h3>Monthly Maintenance:</h3>
        <ul>
          <li>Clean the filter weekly</li>
          <li>Wipe down door seals monthly</li>
          <li>Run a cleaning cycle monthly</li>
          <li>Check spray arms for clogs</li>
        </ul>
        
        <p><strong>A clean dishwasher cleans better and lasts longer!</strong></p>
      `,
      image: "/images/dishwasher-repair.jpg",
      author: "Ersel Eryılmaz",
      category: "how-to",
      date: "2024-03-10",
      readTime: "6 min read",
      tags: ["dishwasher", "cleaning", "how-to"]
    },
    {
      id: "washing-machine-troubleshooting",
      title: "Common Washing Machine Problems and Solutions",
      excerpt: "Troubleshoot common washing machine issues before calling a repair technician.",
      content: `
        <p>Washing machines are essential appliances, but they can develop problems. Here are common issues and solutions:</p>
        
        <h3>Problem 1: Won't Start</h3>
        <ul>
          <li>Check if it's plugged in and the circuit breaker</li>
          <li>Ensure the door is fully closed</li>
          <li>Check if child lock is activated</li>
        </ul>
        
        <h3>Problem 2: Won't Drain</h3>
        <ul>
          <li>Check for clogged drain hose</li>
          <li>Clean the pump filter</li>
          <li>Ensure the drain hose isn't kinked</li>
        </ul>
        
        <h3>Problem 3: Leaking Water</h3>
        <ul>
          <li>Check door seal for damage</li>
          <li>Tighten hose connections</li>
          <li>Don't overload the machine</li>
        </ul>
        
        <h3>Problem 4: Too Much Vibration</h3>
        <ul>
          <li>Level the machine using adjustable feet</li>
          <li>Ensure load is balanced</li>
          <li>Check if shipping bolts were removed</li>
        </ul>
        
        <h3>Problem 5: Bad Odors</h3>
        <ul>
          <li>Run a cleaning cycle with hot water and vinegar</li>
          <li>Leave door open between washes</li>
          <li>Clean the detergent dispenser</li>
        </ul>
        
        <h3>Problem 6: Clothes Still Wet</h3>
        <ul>
          <li>Check if spin cycle is working</li>
          <li>Reduce load size</li>
          <li>Ensure drain hose isn't clogged</li>
        </ul>
        
        <p><strong>Professional Tip:</strong> Most issues are simple fixes you can do yourself. Regular maintenance extends your washer's life by 3-5 years.</p>
      `,
      image: "/images/washer-repair.jpg",
      author: "Süleyman Eryılmaz",
      category: "troubleshooting",
      date: "2024-03-05",
      readTime: "7 min read",
      tags: ["washing machine", "troubleshooting", "repair"]
    },
    {
      id: "energy-saving-appliances",
      title: "How to Reduce Your Energy Bills with Smart Appliance Use",
      excerpt: "Practical tips to lower your energy consumption and save money on electricity bills through efficient appliance usage.",
      content: `
        <p>Your home appliances account for nearly 30% of your energy bill. Here's how to reduce that cost:</p>
        
        <h3>1. Use Full Loads Only</h3>
        <p>Run dishwashers and washing machines only when full. Half loads waste water and energy.</p>
        
        <h3>2. Choose the Right Temperature</h3>
        <ul>
          <li>Wash clothes in cold water when possible (saves 90% energy)</li>
          <li>Set water heater to 120°F (49°C)</li>
          <li>Use dishwasher's eco mode</li>
        </ul>
        
        <h3>3. Maintain Your Appliances</h3>
        <ul>
          <li>Clean refrigerator coils every 6 months</li>
          <li>Clean dryer lint filter after every use</li>
          <li>Defrost freezer regularly</li>
        </ul>
        
        <h3>4. Upgrade to Energy-Efficient Models</h3>
        <p>Look for Energy Star certified appliances. They use 10-50% less energy than standard models.</p>
        
        <h3>5. Unplug When Not in Use</h3>
        <p>Appliances in standby mode still consume electricity. Unplug small appliances when not in use.</p>
        
        <h3>6. Use Peak Hours Wisely</h3>
        <p>Run major appliances during off-peak hours (typically nights and weekends) to save on electricity rates.</p>
        
        <h3>7. Air Dry When Possible</h3>
        <p>Skip the dryer's heat cycle for dishes. Use clotheslines instead of dryers when weather permits.</p>
        
        <h3>8. Keep Appliances Away from Heat</h3>
        <p>Don't place refrigerators near ovens or in direct sunlight. They'll work harder to stay cool.</p>
        
        <p><strong>These simple changes can reduce your energy bill by 20-30% annually!</strong></p>
      `,
      image: "/images/blog/energy-savings.jpg",
      author: "Ersel Eryılmaz",
      category: "maintenance",
      date: "2024-02-28",
      readTime: "6 min read",
      tags: ["energy saving", "efficiency", "tips"]
    },
    {
      id: "boiler-winter-preparation",
      title: "Preparing Your Boiler for Winter: Essential Checklist",
      excerpt: "Don't get caught in the cold! Follow this comprehensive checklist to ensure your boiler is ready for winter.",
      content: `
        <p>Winter is coming, and your boiler needs to be ready. Here's your essential preparation checklist:</p>
        
        <h3>1. Schedule Professional Service</h3>
        <p>Book a professional inspection 1-2 months before winter. Technicians check:</p>
        <ul>
          <li>Gas pressure and connections</li>
          <li>Heat exchanger condition</li>
          <li>Safety controls</li>
          <li>Flue and ventilation</li>
        </ul>
        
        <h3>2. Bleed Your Radiators</h3>
        <p>Trapped air reduces heating efficiency. To bleed radiators:</p>
        <ul>
          <li>Turn off your heating system</li>
          <li>Use a radiator key to open the valve</li>
          <li>Let air escape until water flows</li>
          <li>Close the valve tightly</li>
        </ul>
        
        <h3>3. Check Boiler Pressure</h3>
        <p>Ideal pressure is between 1-1.5 bar. If low:</p>
        <ul>
          <li>Locate the filling loop</li>
          <li>Slowly open both valves</li>
          <li>Watch the pressure gauge</li>
          <li>Close valves when pressure reaches 1.5 bar</li>
        </ul>
        
        <h3>4. Test Thermostats</h3>
        <ul>
          <li>Check battery levels</li>
          <li>Ensure they're responding correctly</li>
          <li>Update programming for winter schedule</li>
        </ul>
        
        <h3>5. Insulate Pipes</h3>
        <p>Prevent frozen pipes with foam insulation, especially in:</p>
        <ul>
          <li>Attics and basements</li>
          <li>External walls</li>
          <li>Unheated areas</li>
        </ul>
        
        <h3>6. Clear Vents and Flues</h3>
        <p>Ensure outdoor vents are clear of leaves, debris, and snow for proper ventilation.</p>
        
        <h3>7. Stock Essential Supplies</h3>
        <ul>
          <li>Spare fuses</li>
          <li>Radiator key</li>
          <li>Emergency plumber contact</li>
        </ul>
        
        <p><strong>Winter Tip:</strong> Never let your home temperature drop below 15°C to prevent frozen pipes!</p>
      `,
      image: "/images/boiler-repair.png",
      author: "Süleyman Eryılmaz",
      category: "maintenance",
      date: "2024-10-15",
      readTime: "8 min read",
      tags: ["boiler", "winter", "maintenance", "heating"]
    },
    {
      id: "air-conditioner-installation-guide",
      title: "Air Conditioner Installation: What You Need to Know",
      excerpt: "Planning to install a new AC? Learn about the installation process, costs, and important considerations.",
      content: `
        <p>Installing an air conditioner is a significant investment. Here's everything you need to know:</p>
        
        <h3>Types of Air Conditioners</h3>
        
        <h4>1. Split Systems</h4>
        <ul>
          <li><strong>Pros:</strong> Quiet, energy-efficient, no ductwork needed</li>
          <li><strong>Cons:</strong> Higher upfront cost</li>
          <li><strong>Best for:</strong> Individual rooms or apartments</li>
        </ul>
        
        <h4>2. Central Air</h4>
        <ul>
          <li><strong>Pros:</strong> Cools entire home, increases property value</li>
          <li><strong>Cons:</strong> Expensive installation, requires ductwork</li>
          <li><strong>Best for:</strong> Large homes</li>
        </ul>
        
        <h4>3. Window Units</h4>
        <ul>
          <li><strong>Pros:</strong> Affordable, easy to install</li>
          <li><strong>Cons:</strong> Less efficient, blocks window</li>
          <li><strong>Best for:</strong> Small rooms, renters</li>
        </ul>
        
        <h3>Installation Process</h3>
        
        <h4>Step 1: Assessment (1-2 hours)</h4>
        <p>Technician evaluates:</p>
        <ul>
          <li>Room size and layout</li>
          <li>Insulation quality</li>
          <li>Electrical capacity</li>
          <li>Best unit location</li>
        </ul>
        
        <h4>Step 2: Unit Selection</h4>
        <p>Choose capacity based on room size:</p>
        <ul>
          <li>10-15 m²: 9,000 BTU</li>
          <li>15-25 m²: 12,000 BTU</li>
          <li>25-35 m²: 18,000 BTU</li>
          <li>35-50 m²: 24,000 BTU</li>
        </ul>
        
        <h4>Step 3: Installation (3-6 hours)</h4>
        <ul>
          <li>Mount indoor and outdoor units</li>
          <li>Connect refrigerant lines</li>
          <li>Install drainage</li>
          <li>Connect electrical wiring</li>
          <li>Test system operation</li>
        </ul>
        
        <h3>Important Considerations</h3>
        
        <h4>Location Matters</h4>
        <ul>
          <li>Indoor unit: Away from direct sunlight and heat sources</li>
          <li>Outdoor unit: Shaded area with good airflow</li>
          <li>Minimum 15cm clearance around outdoor unit</li>
        </ul>
        
        <h4>Maintenance Requirements</h4>
        <ul>
          <li>Clean filters monthly</li>
          <li>Professional service annually</li>
          <li>Check refrigerant levels yearly</li>
        </ul>
        
        <h3>Cost Breakdown</h3>
        <ul>
          <li>Unit: 5,000-15,000 TL</li>
          <li>Installation: 1,500-3,000 TL</li>
          <li>Materials: 500-1,000 TL</li>
          <li>Total: 7,000-19,000 TL average</li>
        </ul>
        
        <p><strong>Pro Tip:</strong> Install in spring or fall for better prices and faster scheduling!</p>
      `,
      image: "/images/airconditioner-repair.png",
      author: "Ersel Eryılmaz",
      category: "how-to",
      date: "2024-04-10",
      readTime: "10 min read",
      tags: ["air conditioner", "installation", "cooling", "hvac"]
    },
    {
      id: "appliance-brands-comparison",
      title: "Turkish Appliance Brands: Which One is Right for You?",
      excerpt: "Compare popular Turkish appliance brands to make an informed decision for your next purchase.",
      content: `
        <p>Choosing the right appliance brand can be overwhelming. Here's a comprehensive comparison of Turkey's most popular brands:</p>
        
        <h3>Premium Tier Brands</h3>
        
        <h4>Bosch</h4>
        <ul>
          <li><strong>Strengths:</strong> German engineering, durability, quiet operation</li>
          <li><strong>Best for:</strong> Dishwashers, washing machines</li>
          <li><strong>Price range:</strong> High (10,000-25,000 TL)</li>
          <li><strong>Warranty:</strong> 2-5 years</li>
          <li><strong>Service:</strong> Excellent nationwide network</li>
        </ul>
        
        <h4>Siemens</h4>
        <ul>
          <li><strong>Strengths:</strong> Innovation, efficiency, smart features</li>
          <li><strong>Best for:</strong> Built-in appliances, ovens</li>
          <li><strong>Price range:</strong> High (12,000-30,000 TL)</li>
          <li><strong>Warranty:</strong> 2-5 years</li>
        </ul>
        
        <h3>Mid-Range Brands</h3>
        
        <h4>Arçelik</h4>
        <ul>
          <li><strong>Strengths:</strong> Turkish reliability, affordable, wide service network</li>
          <li><strong>Best for:</strong> All appliances</li>
          <li><strong>Price range:</strong> Medium (5,000-15,000 TL)</li>
          <li><strong>Warranty:</strong> 2-3 years</li>
          <li><strong>Service:</strong> Best nationwide coverage</li>
        </ul>
        
        <h4>Beko</h4>
        <ul>
          <li><strong>Strengths:</strong> Value for money, energy-efficient, innovative</li>
          <li><strong>Best for:</strong> Refrigerators, washing machines</li>
          <li><strong>Price range:</strong> Medium (4,000-12,000 TL)</li>
          <li><strong>Warranty:</strong> 2 years</li>
        </ul>
        
        <h4>Vestel</h4>
        <ul>
          <li><strong>Strengths:</strong> Turkish manufacturing, competitive prices</li>
          <li><strong>Best for:</strong> TVs, white goods</li>
          <li><strong>Price range:</strong> Medium (4,000-12,000 TL)</li>
          <li><strong>Warranty:</strong> 2 years</li>
        </ul>
        
        <h3>Budget-Friendly Brands</h3>
        
        <h4>Profilo</h4>
        <ul>
          <li><strong>Strengths:</strong> Affordable, decent quality, Bosch connection</li>
          <li><strong>Best for:</strong> First-time buyers, rental properties</li>
          <li><strong>Price range:</strong> Low-Medium (3,000-8,000 TL)</li>
        </ul>
        
        <h4>Altus</h4>
        <ul>
          <li><strong>Strengths:</strong> Budget-friendly, basic reliability</li>
          <li><strong>Best for:</strong> Small appliances, budget purchases</li>
          <li><strong>Price range:</strong> Low (2,500-7,000 TL)</li>
        </ul>
        
        <h3>International Brands</h3>
        
        <h4>Samsung & LG</h4>
        <ul>
          <li><strong>Strengths:</strong> Advanced technology, smart features</li>
          <li><strong>Considerations:</strong> Higher prices, limited service centers</li>
          <li><strong>Best for:</strong> Tech enthusiasts</li>
        </ul>
        
        <h3>Our Recommendations</h3>
        
        <p><strong>Best Overall Value:</strong> Arçelik - Perfect balance of quality, price, and service</p>
        <p><strong>Best Budget Option:</strong> Profilo - Bosch quality at lower prices</p>
        <p><strong>Best Premium:</strong> Bosch - Unmatched durability and performance</p>
        <p><strong>Best Energy Efficiency:</strong> Beko - Leading in eco-friendly technology</p>
        
        <p><strong>Tip:</strong> Always check energy ratings (A+++ to D) - higher initial cost pays off in energy savings!</p>
      `,
      image: "/images/blog/brands.jpg",
      author: "Süleyman Eryılmaz",
      category: "maintenance",
      date: "2024-02-15",
      readTime: "9 min read",
      tags: ["brands", "comparison", "buying guide", "turkey"]
    }
  ],
  tr: [
    {
      id: "refrigerator-maintenance-tips",
      title: "Buzdolabınızın Ömrünü Uzatan 10 İpucu",
      excerpt: "Buzdolabınızın uzun ömürlü olması için yapmanız gereken 10 basit ipucu. Düzenli bakım ve doğru kullanım ile tasarruf edin.",
      content: `
        <p>Buzdolabınızın düzenli bakımı enerji faturalarınızdan tasarruf etmenizi ve pahalı onarımları önlemenizi sağlar. İşte 10 temel ipucu:</p>
        
        <h3>1. Kondenser Bobinlerini Temizleyin</h3>
        <p>Bobinlerdeki toz ve kir, buzdolabınızın daha fazla çalışmasına neden olur. Her 6 ayda bir temizleyin.</p>
        
        <h3>2. Kapı Contalarını Kontrol Edin</h3>
        <p>Aşınmış contalar soğuk havanın kaçmasına neden olur. Kapıyı bir kağıt para üzerine kapatarak test edin - sıkı olmalı.</p>
        
        <h3>3. Doğru Sıcaklığı Ayarlayın</h3>
        <p>Buzdolabınızı 3-4°C'de ve dondurucuyu -18°C'de tutun.</p>
        
        <h3>4. Aşırı Doldurmayın</h3>
        <p>Uygun hava sirkülasyonu esastır. Ürünler arasında boşluk bırakın.</p>
        
        <h3>5. Düzenli Temizleyin</h3>
        <p>Dökülen şeyleri hemen silin ve koku oluşumunu önlemek için ayda bir derin temizlik yapın.</p>
        
        <h3>6. Damlatma Tepsisini Kontrol Edin</h3>
        <p>Küf oluşumunu önlemek için düzenli olarak boşaltın ve temizleyin.</p>
        
        <h3>7. Dolu Tutun</h3>
        <p>Dolu bir buzdolabı boş olandan daha iyi sıcaklık korur.</p>
        
        <h3>8. Dondurucuyu Buzdan Arındırın</h3>
        <p>Buz 6mm'den fazla birikmiş se buzdan arındırma zamanı gelmiştir.</p>
        
        <h3>9. Su Filtresini Kontrol Edin</h3>
        <p>Temiz su ve buz için her 6 ayda bir değiştirin.</p>
        
        <h3>10. Olağandışı Seslere Kulak Verin</h3>
        <p>Garip sesler sorun işareti olabilir - profesyonel yardım alın.</p>
        
        <p><strong>Bu ipuçlarını izleyerek buzdolabınızın 15-20 yıl dayanmasını sağlayabilirsiniz!</strong></p>
      `,
      image: "/images/refrigerator-repair.jpg",
      author: "Süleyman Eryılmaz",
      category: "maintenance",
      date: "2024-03-15",
      readTime: "5 dakika okuma",
      tags: ["buzdolabı", "bakım", "ipuçları"]
    },
    {
      id: "dishwasher-cleaning-guide",
      title: "Bulaşık Makinenizi Nasıl Derin Temizlersiniz",
      excerpt: "Bulaşık makinenizin optimal performans ve uzun ömür için kapsamlı temizliği için adım adım kılavuz.",
      content: `
        <p>Bulaşık makineniz bulaşıklarınızı temiz tutmak için çok çalışıyor, ancak kendisi de temizlenmeye ihtiyaç duyuyor! İşte nasıl derin temizlenir:</p>
        
        <h3>Adım 1: Filtreyi Çıkarın ve Temizleyin</h3>
        <ul>
          <li>Alt rafı çıkarın</li>
          <li>Filtreyi sökün ve çıkarın</li>
          <li>Sıcak su altında durulayın ve yumuşak bir fırça ile ovun</li>
          <li>Filtreyi tekrar takın</li>
        </ul>
        
        <h3>Adım 2: Püskürtme Kollarını Temizleyin</h3>
        <ul>
          <li>Püskürtme kollarını sökerek çıkarın</li>
          <li>Deliklerdeki tıkanıklıkları bir kürdan ile temizleyin</li>
          <li>İyice durulayın ve tekrar takın</li>
        </ul>
        
        <h3>Adım 3: İç Kısmı Silin</h3>
        <ul>
          <li>Nemli bir bezle kapı kenarlarını ve contayı silin</li>
          <li>Deterjan bölmesini temizleyin</li>
          <li>Alttaki gıda artıklarını temizleyin</li>
        </ul>
        
        <h3>Adım 4: Temizlik Döngüsü Çalıştırın</h3>
        <ul>
          <li>Üst rafa bulaşık makinesine uygun bir kaseye 2 bardak beyaz sirke koyun</li>
          <li>Sıcak su döngüsü çalıştırın</li>
          <li>Alta 1 bardak karbonat serpin</li>
          <li>Kısa sıcak döngü çalıştırın</li>
        </ul>
        
        <h3>Aylık Bakım:</h3>
        <ul>
          <li>Filtreyi haftalık temizleyin</li>
          <li>Kapı contalarını aylık silin</li>
          <li>Aylık temizlik döngüsü çalıştırın</li>
          <li>Püskürtme kollarındaki tıkanıklıkları kontrol edin</li>
        </ul>
        
        <p><strong>Temiz bir bulaşık makinesi daha iyi temizler ve daha uzun ömürlüdür!</strong></p>
      `,
      image: "/images/dishwasher-repair.jpg",
      author: "Ersel Eryılmaz",
      category: "how-to",
      date: "2024-03-10",
      readTime: "6 dakika okuma",
      tags: ["bulaşık makinesi", "temizlik", "nasıl yapılır"]
    },
    {
      id: "washing-machine-troubleshooting",
      title: "Yaygın Çamaşır Makinesi Sorunları ve Çözümleri",
      excerpt: "Tamir teknisyenini aramadan önce yaygın çamaşır makinesi sorunlarını giderin.",
      content: `
        <p>Çamaşır makineleri temel cihazlardır, ancak zaman içinde sorunlar geliştirebilir. İşte yaygın sorunlar ve çözümleri:</p>
        
        <h3>Sorun 1: Çalışmıyor</h3>
        <ul>
          <li>Fişe takılı olup olmadığını ve devre kesiciyi kontrol edin</li>
          <li>Kapının tamamen kapalı olduğundan emin olun</li>
          <li>Çocuk kilidinin aktif olup olmadığını kontrol edin</li>
        </ul>
        
        <h3>Sorun 2: Su Almıyor</h3>
        <ul>
          <li>Tıkanmış tahliye hortumunu kontrol edin</li>
          <li>Pompa filtresini temizleyin</li>
          <li>Tahliye hortumunun bükülmediğinden emin olun</li>
        </ul>
        
        <h3>Sorun 3: Su Sızıntısı</h3>
        <ul>
          <li>Kapı contasında hasar olup olmadığını kontrol edin</li>
          <li>Hortum bağlantılarını sıkın</li>
          <li>Makineyi aşırı yüklemeyin</li>
        </ul>
        
        <h3>Sorun 4: Çok Fazla Titreşim</h3>
        <ul>
          <li>Ayarlanabilir ayakları kullanarak makineyi dengeleyin</li>
          <li>Yükün dengeli olduğundan emin olun</li>
          <li>Nakliye cıvatalarının çıkarılıp çıkarılmadığını kontrol edin</li>
        </ul>
        
        <h3>Sorun 5: Kötü Kokular</h3>
        <ul>
          <li>Sıcak su ve sirke ile temizlik döngüsü çalıştırın</li>
          <li>Yıkamalar arasında kapıyı açık bırakın</li>
          <li>Deterjan bölmesini temizleyin</li>
        </ul>
        
        <h3>Sorun 6: Çamaşırlar Hala Islak</h3>
        <ul>
          <li>Sıkma döngüsünün çalışıp çalışmadığını kontrol edin</li>
          <li>Yük boyutunu azaltın</li>
          <li>Tahliye hortumunun tıkalı olmadığından emin olun</li>
        </ul>
        
        <p><strong>Profesyonel İpucu:</strong> Çoğu sorun kendiniz yapabileceğiniz basit düzeltmelerdir. Düzenli bakım çamaşır makinenizin ömrünü 3-5 yıl uzatır.</p>
      `,
      image: "/images/washer-repair.jpg",
      author: "Süleyman Eryılmaz",
      category: "troubleshooting",
      date: "2024-03-05",
      readTime: "7 dakika okuma",
      tags: ["çamaşır makinesi", "sorun giderme", "tamir"]
    },
    {
      id: "energy-saving-appliances",
      title: "Akıllı Cihaz Kullanımıyla Enerji Faturanızı Düşürün",
      excerpt: "Verimli cihaz kullanımı ile enerji tüketiminizi azaltın ve elektrik faturalarından tasarruf edin. Pratik ipuçları.",
      content: `
        <p>Ev cihazlarınız enerji faturanızın yaklaşık %30'unu oluşturur. İşte bu maliyeti nasıl azaltabileceğiniz:</p>
        
        <h3>1. Sadece Tam Yüklerle Çalıştırın</h3>
        <p>Bulaşık ve çamaşır makinelerini sadece doluyken çalıştırın. Yarım yükler su ve enerji israfıdır.</p>
        
        <h3>2. Doğru Sıcaklığı Seçin</h3>
        <ul>
          <li>Çamaşırları mümkün olduğunca soğuk suda yıkayın (%90 enerji tasarrufu)</li>
          <li>Su ısıtıcısını 49°C'ye ayarlayın</li>
          <li>Bulaşık makinesinin eko modunu kullanın</li>
        </ul>
        
        <h3>3. Cihazlarınızın Bakımını Yapın</h3>
        <ul>
          <li>Buzdolabı bobinlerini her 6 ayda bir temizleyin</li>
          <li>Kurutma makinesi filtrelerini her kullanımdan sonra temizleyin</li>
          <li>Dondurucuyu düzenli olarak buz çözün</li>
        </ul>
        
        <h3>4. Enerji Verimli Modellere Yükseltin</h3>
        <p>A+++ enerji sınıfı sertifikalı cihazları tercih edin. Standart modellerden %10-50 daha az enerji kullanırlar.</p>
        
        <h3>5. Kullanılmadığında Fişten Çekin</h3>
        <p>Bekleme modundaki cihazlar hala elektrik tüketir. Kullanılmadığında küçük cihazları fişten çekin.</p>
        
        <h3>6. Pik Saatleri Akıllıca Kullanın</h3>
        <p>Büyük cihazları pik olmayan saatlerde (genellikle geceler ve hafta sonları) çalıştırarak elektrik tarifelerinden tasarruf edin.</p>
        
        <h3>7. Mümkün Olduğunda Havayla Kurutun</h3>
        <p>Bulaşık makinesinin ısıtma döngüsünü atlayın. Hava uygunsa çamaşırları dışarıda kurutun.</p>
        
        <h3>8. Cihazları Isıdan Uzak Tutun</h3>
        <p>Buzdolaplarını fırınların yakınına veya doğrudan güneş ışığına yerleştirmeyin. Soğuk kalmak için daha fazla çalışırlar.</p>
        
        <p><strong>Bu basit değişiklikler enerji faturanızı yıllık %20-30 azaltabilir!</strong></p>
      `,
      image: "/images/blog/energy-savings.jpg",
      author: "Ersel Eryılmaz",
      category: "maintenance",
      date: "2024-02-28",
      readTime: "6 dakika okuma",
      tags: ["enerji tasarrufu", "verimlilik", "ipuçları"]
    },
    {
      id: "boiler-winter-preparation",
      title: "Kışa Hazırlık: Kombi Bakım Kontrol Listesi",
      excerpt: "Soğukta donmayın! Kombinizin kışa hazır olduğundan emin olmak için bu kapsamlı kontrol listesini izleyin.",
      content: `
        <p>Kış geliyor ve kombinizin hazır olması gerekiyor. İşte temel hazırlık kontrol listeniz:</p>
        
        <h3>1. Profesyonel Servis Planlayın</h3>
        <p>Kıştan 1-2 ay önce profesyonel kontrol rezervasyonu yapın. Teknisyenler şunları kontrol eder:</p>
        <ul>
          <li>Gaz basıncı ve bağlantıları</li>
          <li>Isı eşanjörü durumu</li>
          <li>Güvenlik kontrolleri</li>
          <li>Baca ve havalandırma</li>
        </ul>
        
        <h3>2. Peteklarınızı Havalandırın</h3>
        <p>Hava sıkışması ısıtma verimliliğini azaltır. Petek havalandırma için:</p>
        <ul>
          <li>Isıtma sisteminizi kapatın</li>
          <li>Petek anahtarı ile valfi açın</li>
          <li>Su akana kadar havanın çıkmasına izin verin</li>
          <li>Valfi sıkıca kapatın</li>
        </ul>
        
        <h3>3. Kombi Basıncını Kontrol Edin</h3>
        <p>İdeal basınç 1-1.5 bar arasındadır. Düşükse:</p>
        <ul>
          <li>Dolum çubuğunu bulun</li>
          <li>Her iki valfi yavaşça açın</li>
          <li>Basınç göstergesini izleyin</li>
          <li>Basınç 1.5 bar'a ulaştığında valfleri kapatın</li>
        </ul>
        
        <h3>4. Termostatları Test Edin</h3>
        <ul>
          <li>Pil seviyelerini kontrol edin</li>
          <li>Doğru tepki verdiklerinden emin olun</li>
          <li>Kış programlamasını güncelleyin</li>
        </ul>
        
        <h3>5. Boruları Yalıtın</h3>
        <p>Özellikle şu alanlarda köpük yalıtımla donmuş boruları önleyin:</p>
        <ul>
          <li>Çatı katları ve bodrum katları</li>
          <li>Dış duvarlar</li>
          <li>Isıtılmayan alanlar</li>
        </ul>
        
        <h3>6. Havalandırma ve Bacaları Temizleyin</h3>
        <p>Doğru havalandırma için dış havalandırmaların yaprak, enkaz ve kardan arındırıldığından emin olun.</p>
        
        <h3>7. Temel Malzemeleri Stoklayın</h3>
        <ul>
          <li>Yedek sigortalar</li>
          <li>Petek anahtarı</li>
          <li>Acil tesisatçı iletişim bilgileri</li>
        </ul>
        
        <p><strong>Kış İpucu:</strong> Donmuş boruları önlemek için ev sıcaklığınızı asla 15°C'nin altına düşürmeyin!</p>
      `,
      image: "/images/boiler-repair.png",
      author: "Süleyman Eryılmaz",
      category: "maintenance",
      date: "2024-10-15",
      readTime: "8 dakika okuma",
      tags: ["kombi", "kış", "bakım", "ısıtma"]
    },
    {
      id: "air-conditioner-installation-guide",
      title: "Klima Montajı: Bilmeniz Gerekenler",
      excerpt: "Yeni klima mı kuracaksınız? Montaj süreci, maliyetler ve önemli hususlar hakkında bilgi edinin.",
      content: `
        <p>Klima montajı önemli bir yatırımdır. İşte bilmeniz gereken her şey:</p>
        
        <h3>Klima Türleri</h3>
        
        <h4>1. Split Klimalar</h4>
        <ul>
          <li><strong>Avantajları:</strong> Sessiz, enerji verimli, kanal gerektirmez</li>
          <li><strong>Dezavantajları:</strong> Yüksek ön maliyet</li>
          <li><strong>En uygun:</strong> Tek odalar veya daireler</li>
        </ul>
        
        <h4>2. Merkezi Klima</h4>
        <ul>
          <li><strong>Avantajları:</strong> Tüm evi soğutur, emlak değerini artırır</li>
          <li><strong>Dezavantajları:</strong> Pahalı montaj, kanal sistemi gerektirir</li>
          <li><strong>En uygun:</strong> Büyük evler</li>
        </ul>
        
        <h4>3. Pencere Tipi</h4>
        <ul>
          <li><strong>Avantajları:</strong> Uygun fiyatlı, kolay kurulum</li>
          <li><strong>Dezavantajları:</strong> Daha az verimli, pencereyi kapatır</li>
          <li><strong>En uygun:</strong> Küçük odalar, kiracılar</li>
        </ul>
        
        <h3>Montaj Süreci</h3>
        
        <h4>Adım 1: Değerlendirme (1-2 saat)</h4>
        <p>Teknisyen şunları değerlendirir:</p>
        <ul>
          <li>Oda boyutu ve düzeni</li>
          <li>Yalıtım kalitesi</li>
          <li>Elektrik kapasitesi</li>
          <li>En iyi ünite konumu</li>
        </ul>
        
        <h4>Adım 2: Ünite Seçimi</h4>
        <p>Oda boyutuna göre kapasite seçin:</p>
        <ul>
          <li>10-15 m²: 9,000 BTU</li>
          <li>15-25 m²: 12,000 BTU</li>
          <li>25-35 m²: 18,000 BTU</li>
          <li>35-50 m²: 24,000 BTU</li>
        </ul>
        
        <h4>Adım 3: Montaj (3-6 saat)</h4>
        <ul>
          <li>İç ve dış üniteleri monte edin</li>
          <li>Soğutucu hatları bağlayın</li>
          <li>Drenaj sistemini kurun</li>
          <li>Elektrik kablolarını bağlayın</li>
          <li>Sistem çalışmasını test edin</li>
        </ul>
        
        <h3>Önemli Hususlar</h3>
        
        <h4>Konum Önemlidir</h4>
        <ul>
          <li>İç ünite: Doğrudan güneş ışığından ve ısı kaynaklarından uzak</li>
          <li>Dış ünite: İyi hava akışına sahip gölgeli alan</li>
          <li>Dış ünite etrafında minimum 15cm boşluk</li>
        </ul>
        
        <h4>Bakım Gereksinimleri</h4>
        <ul>
          <li>Filtreleri aylık temizleyin</li>
          <li>Yıllık profesyonel servis</li>
          <li>Soğutucu seviyelerini yılda bir kontrol edin</li>
        </ul>
        
        <h3>Maliyet Dökümü</h3>
        <ul>
          <li>Ünite: 5,000-15,000 TL</li>
          <li>Montaj: 1,500-3,000 TL</li>
          <li>Malzemeler: 500-1,000 TL</li>
          <li>Toplam: Ortalama 7,000-19,000 TL</li>
        </ul>
        
        <p><strong>Profesyonel İpucu:</strong> Daha iyi fiyatlar ve hızlı planlama için ilkbahar veya sonbaharda kurun!</p>
      `,
      image: "/images/airconditioner-repair.png",
      author: "Ersel Eryılmaz",
      category: "how-to",
      date: "2024-04-10",
      readTime: "10 dakika okuma",
      tags: ["klima", "montaj", "soğutma", "iklimlendirme"]
    },
    {
      id: "appliance-brands-comparison",
      title: "Türk Beyaz Eşya Markaları: Hangisi Size Uygun?",
      excerpt: "Bir sonraki alışverişiniz için bilinçli karar vermek üzere popüler Türk beyaz eşya markalarını karşılaştırın.",
      content: `
        <p>Doğru beyaz eşya markasını seçmek bunaltıcı olabilir. İşte Türkiye'nin en popüler markalarının kapsamlı karşılaştırması:</p>
        
        <h3>Premium Markalar</h3>
        
        <h4>Bosch</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Alman mühendisliği, dayanıklılık, sessiz çalışma</li>
          <li><strong>En iyisi:</strong> Bulaşık makineleri, çamaşır makineleri</li>
          <li><strong>Fiyat aralığı:</strong> Yüksek (10,000-25,000 TL)</li>
          <li><strong>Garanti:</strong> 2-5 yıl</li>
          <li><strong>Servis:</strong> Mükemmel ülke çapında ağ</li>
        </ul>
        
        <h4>Siemens</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Yenilik, verimlilik, akıllı özellikler</li>
          <li><strong>En iyisi:</strong> Ankastre cihazlar, fırınlar</li>
          <li><strong>Fiyat aralığı:</strong> Yüksek (12,000-30,000 TL)</li>
          <li><strong>Garanti:</strong> 2-5 yıl</li>
        </ul>
        
        <h3>Orta Segment Markalar</h3>
        
        <h4>Arçelik</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Türk güvenilirliği, uygun fiyat, geniş servis ağı</li>
          <li><strong>En iyisi:</strong> Tüm cihazlar</li>
          <li><strong>Fiyat aralığı:</strong> Orta (5,000-15,000 TL)</li>
          <li><strong>Garanti:</strong> 2-3 yıl</li>
          <li><strong>Servis:</strong> En iyi ülke çapında kapsama</li>
        </ul>
        
        <h4>Beko</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Fiyat/performans dengesi, enerji verimliliği, yenilikçi</li>
          <li><strong>En iyisi:</strong> Buzdolapları, çamaşır makineleri</li>
          <li><strong>Fiyat aralığı:</strong> Orta (4,000-12,000 TL)</li>
          <li><strong>Garanti:</strong> 2 yıl</li>
        </ul>
        
        <h4>Vestel</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Türk üretimi, rekabetçi fiyatlar</li>
          <li><strong>En iyisi:</strong> TV'ler, beyaz eşya</li>
          <li><strong>Fiyat aralığı:</strong> Orta (4,000-12,000 TL)</li>
          <li><strong>Garanti:</strong> 2 yıl</li>
        </ul>
        
        <h3>Bütçe Dostu Markalar</h3>
        
        <h4>Profilo</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Uygun fiyat, iyi kalite, Bosch bağlantısı</li>
          <li><strong>En iyisi:</strong> İlk kez alıcılar, kiralık mülkler</li>
          <li><strong>Fiyat aralığı:</strong> Düşük-Orta (3,000-8,000 TL)</li>
        </ul>
        
        <h4>Altus</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Bütçe dostu, temel güvenilirlik</li>
          <li><strong>En iyisi:</strong> Küçük cihazlar, bütçe alışverişleri</li>
          <li><strong>Fiyat aralığı:</strong> Düşük (2,500-7,000 TL)</li>
        </ul>
        
        <h3>Uluslararası Markalar</h3>
        
        <h4>Samsung & LG</h4>
        <ul>
          <li><strong>Güçlü yönleri:</strong> Gelişmiş teknoloji, akıllı özellikler</li>
          <li><strong>Dikkat edilmesi gerekenler:</strong> Yüksek fiyatlar, sınırlı servis merkezleri</li>
          <li><strong>En iyisi:</strong> Teknoloji meraklıları</li>
        </ul>
        
        <h3>Tavsiyelerimiz</h3>
        
        <p><strong>En İyi Genel Değer:</strong> Arçelik - Kalite, fiyat ve servisin mükemmel dengesi</p>
        <p><strong>En İyi Bütçe Seçeneği:</strong> Profilo - Düşük fiyatlarla Bosch kalitesi</p>
        <p><strong>En İyi Premium:</strong> Bosch - Eşsiz dayanıklılık ve performans</p>
        <p><strong>En İyi Enerji Verimliliği:</strong> Beko - Çevre dostu teknolojide lider</p>
        
        <p><strong>İpucu:</strong> Her zaman enerji derecelendirmelerini kontrol edin (A+++ - D) - yüksek başlangıç maliyeti enerji tasarrufuyla kendini amorti eder!</p>
      `,
      image: "/images/blog/brands.jpg",
      author: "Süleyman Eryılmaz",
      category: "maintenance",
      date: "2024-02-15",
      readTime: "9 dakika okuma",
      tags: ["markalar", "karşılaştırma", "satın alma rehberi", "türkiye"]
    }
  ]
};

export const blogPosts = blogPostsData[i18n.language] || blogPostsData.en;


export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id)
}

export const getPostsByCategory = (category) => {
  if (!category || category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === category)
}

export const getRecentPosts = (limit = 3) => {
  return blogPosts.slice(0, limit)
}

