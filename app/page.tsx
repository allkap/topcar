'use client';

import { useRouter } from 'next/navigation';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Statistics from './components/Statistics';
import HowWeWork from './components/HowWeWork';
import CostCalculator from './components/CostCalculator';
import OrderTracker from './components/OrderTracker';
import OurTeam from './components/OurTeam';
import PopularCars from './components/PopularCars';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter();

  const handleSubmitRequest = () => {
    router.push('/#калькулятор');
    setTimeout(() => {
      window.dispatchEvent(new Event('showCostCalculatorForm'));
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <section id="about-us">
          <AboutUs />
        </section>
        <Statistics />
        <HowWeWork />
        <CostCalculator />
        <section id="order-tracker">
          <OrderTracker />
        </section>
        <OurTeam />
        <PopularCars />
        <Reviews />
        <section id="contacts">
          <Contacts />
        </section>
      </main>
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={handleSubmitRequest}
          className="submit-request-button pulsating-button"
        >
          Оставить заявку
        </button>
      </div>
      <Footer className="mt-0" />
    </div>
  );
}