import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselProps } from 'react-responsive-carousel';

const Carousel = dynamic<Partial<CarouselProps>>(() => import('react-responsive-carousel').then((mod) => mod.Carousel), {
  ssr: false
});

const steps = [
  { 
    title: 'Оставьте заявку', 
    description: 'Заполните простую форму на нашем сайте или позвоните нам. Укажите тип автомобиля, пункт отправления и назначения. Наши специалисты оперативно обработают вашу заявку и свяжутся с вами.'
  },
  { 
    title: 'Обсуждение деталей', 
    description: 'Мы детально обсудим все аспекты перевозки: сроки, маршрут, особенности вашего автомобиля. Ответим на все ваши вопросы и предложим оптимальные решения для безопасной и комфортной доставки.'
  },
  { 
    title: 'Планирование', 
    description: 'На основе полученной информации мы разработаем индивидуальный план перевозки. Подберем подходящий транспорт, составим оптимальный маршрут и рассчитаем точную стоимость услуги.'
  },
  { 
    title: 'Выполнение', 
    description: 'В назначенный день наши профессиональные водители заберут ваш автомобиль. Мы используем современное оборудование для погрузки и крепления, обеспечивая максимальную безопасность во время транспортировки.'
  },
  { 
    title: 'Доставка', 
    description: 'Мы доставим ваш автомобиль точно в срок и в идеальном состоянии. После прибытия проведем финальный осмотр вместе с вами. Если потребуется, внесем корректировки и убедимся в вашей полной удовлетворенности.'
  }
];

const HowWeWork: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="section-container gradient-bg-2 text-white py-16">
      <h2 className="section-title text-white mb-16">Как мы работаем</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        className="carousel-container"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-primary z-10 p-3 rounded-full transition-all duration-300 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-primary z-10 p-3 rounded-full transition-all duration-300 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )
        }
      >
        {steps.map((step, index) => (
          <div key={index} className="carousel-slide bg-white bg-opacity-20 text-white p-8 rounded-lg mx-4 my-2">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-white text-3xl font-bold shadow-lg">
              {index + 1}
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-lg">{step.description}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HowWeWork;