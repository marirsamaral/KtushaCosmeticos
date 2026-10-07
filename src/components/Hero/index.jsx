
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './hero.css';

// Lista de banners de exemplo
const BANNERS = [
  { id: 1, image: '/banner1.jpg', alt: 'Desconto Progressivo' },
  { id: 2, image: '/banner2.jpg', alt: 'Lançamentos' },
  { id: 3, image: '/banner3.jpg', alt: 'Ofertas Especiais' },
  { id: 4, image: '/banner1.jpg', alt: 'Desconto Progressivo' },
  { id: 5, image: '/banner2.jpg', alt: 'Lançamentos' },
  { id: 6, image: '/banner3.jpg', alt: 'Ofertas Especiais' },
];

export default function Hero() {
  return (
    <section className="hero-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1.15} // Exibe o banner central e pedaços dos laterais
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        loopAdditionalSlides={2}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 1.25,
            spaceBetween: 30,
          },
        }}
        className="hero-swiper"
      >
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="banner-card">
              <img src={banner.image} alt={banner.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}