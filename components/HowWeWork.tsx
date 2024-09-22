import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const steps = [
  'Оставьте заявку на нашем сайте',
  'Мы свяжемся с вами для уточнения деталей',
  'Составим индивидуальный план работы',
  'Выполним работу в согласованные сроки',
  'Предоставим результат и внесем правки при необходимости'
];

const HowWeWork: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="how-we-work">
      <h2>Как мы работаем</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        className="carousel-container"
      >
        {steps.map((step, index) => (
          <div key={index} className="carousel-slide">
            <h3>Шаг {index + 1}</h3>
            <p>{step}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HowWeWork;