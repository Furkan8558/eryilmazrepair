export const testimonials = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    location: "Nilüfer, Bursa",
    rating: 5,
    date: "2024-10-15",
    service: "Buzdolabı Tamiri",
    text: "Mükemmel hizmet! Teknisyen zamanında geldi, sorunu hızlıca teşhis etti ve buzdolabımı bir saat içinde mükemmel çalışır hale getirdi. Çok profesyonel ve uygun fiyatlı.",
    avatar: "/images/avatars/avatar1.jpg"
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    location: "Osmangazi, Bursa",
    rating: 5,
    date: "2024-10-10",
    service: "Bulaşık Makinesi Tamiri",
    text: "Bulaşık makinemin su tahliyesi yoktu. Aynı gün geldiler ve mükemmel bir şekilde tamir ettiler. Teknisyen bilgiliydi ve her şeyi açık bir şekilde anlattı. Kesinlikle tavsiye ederim!",
    avatar: "/images/avatars/avatar2.jpg"
  },
  {
    id: 3,
    name: "Zeynep Demir",
    location: "Yıldırım, Bursa",
    rating: 5,
    date: "2024-10-08",
    service: "Fırın Tamiri",
    text: "Baştan sona mükemmel hizmet. Fırınım düzgün ısınmıyordu ve 24 saat içinde tamir ettiler. Fiyat adildi ve iş garantiliydi. Çok memnunum!",
    avatar: "/images/avatars/avatar3.jpg"
  },
  {
    id: 4,
    name: "Ali Çelik",
    location: "Mudanya, Bursa",
    rating: 5,
    date: "2024-10-05",
    service: "Çamaşır Makinesi Tamiri",
    text: "Çamaşır makinem her yere su akıtıyordu. Hızlıca geldiler, sorunu buldular ve yerinde tamir ettiler. Harika iletişim ve profesyonel hizmet. Kesinlikle tekrar kullanacağım!",
    avatar: "/images/avatars/avatar4.jpg"
  },
  {
    id: 5,
    name: "Fatma Arslan",
    location: "Gemlik, Bursa",
    rating: 5,
    date: "2024-10-03",
    service: "Kurutma Makinesi Tamiri",
    text: "Hizmetlerinden çok etkilendim! Kurutma makinem ısınmıyordu ve bir saatten kısa sürede sorunu teşhis edip tamir ettiler. Teknisyen güler yüzlü ve verimli. Beş yıldız!",
    avatar: "/images/avatars/avatar5.jpg"
  },
  {
    id: 6,
    name: "Hasan Öztürk",
    location: "Kestel, Bursa",
    rating: 5,
    date: "2024-09-28",
    service: "Kombi Bakımı",
    text: "Hızlı, profesyonel ve uygun fiyatlı. Kombim tamamen durmuştu ve aradığım gün tamir ettiler. Mükemmel müşteri hizmeti!",
    avatar: "/images/avatars/avatar6.jpg"
  },
  {
    id: 7,
    name: "Elif Şahin",
    location: "Gürsu, Bursa",
    rating: 5,
    date: "2024-09-25",
    service: "Klima Tamiri",
    text: "Klimam soğutmuyordu, sıcak havada çok sıkıntılıydık. Ertesi gün geldiler ve klimayı yeni gibi çalışır hale getirdiler. Çok teşekkürler!",
    avatar: "/images/avatars/avatar1.jpg"
  },
  {
    id: 8,
    name: "Mustafa Yıldız",
    location: "İnegöl, Bursa",
    rating: 5,
    date: "2024-09-20",
    service: "Çamaşır Makinesi Tamiri",
    text: "İşyerimin çamaşır makinesi bozulmuştu. Hızlı servis ve uygun fiyat. Teknisyen sorunlu parçayı hemen değiştirdi. Çok memnun kaldım.",
    avatar: "/images/avatars/avatar2.jpg"
  },
  {
    id: 9,
    name: "Ayşegül Aydın",
    location: "Karacabey, Bursa",
    rating: 5,
    date: "2024-09-15",
    service: "Buzdolabı Tamiri",
    text: "Buzdolabım gürültü yapıyordu ve soğutmada problem vardı. Teknisyen çok bilgiliydi, sorunu açıkladı ve tamir etti. Artık sessiz ve mükemmel çalışıyor!",
    avatar: "/images/avatars/avatar3.jpg"
  },
  {
    id: 10,
    name: "Ahmet Korkmaz",
    location: "Mustafakemalpaşa, Bursa",
    rating: 5,
    date: "2024-09-10",
    service: "Kombi Tamiri",
    text: "Kış gelmeden kombimi kontrol ettirmek istedim. Ekip çok titizdi, detaylı bakım yaptılar ve küçük bir sorunu da fark edip düzelttiler. Gerçek profesyoneller!",
    avatar: "/images/avatars/avatar4.jpg"
  }
]

export const getAverageRating = () => {
  const total = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0)
  return (total / testimonials.length).toFixed(1)
}

export const getTotalReviews = () => {
  return testimonials.length
}

