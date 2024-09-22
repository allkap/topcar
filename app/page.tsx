'use client';

import { useRouter } from 'next/navigation';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Statistics from './components/Statistics';
import CostCalculator from './components/CostCalculator';
import OrderTracker from './components/OrderTracker';
import OurTeam from './components/OurTeam';
import PopularCars from './components/PopularCars';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import '../styles/globals.css';

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
      <main className="flex-grow">
        <AboutUs />
        <Statistics />
        <CostCalculator />
        <OrderTracker />
        <OurTeam />
        <PopularCars />
        <Reviews />
        <Contacts />
        <div className="fixed bottom-6 right-6 z-50"> {/* Изменили с bottom-8 right-8 на bottom-6 right-6 */}
          <button 
            onClick={handleSubmitRequest}
            className="submit-request-button pulsating-button"
          >
            <span>Оставить</span>
            <span>заявку</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}