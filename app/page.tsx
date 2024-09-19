import Link from 'next/link';
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

export default function Home() {
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
        <div className="fixed bottom-4 right-4">
          <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Админ панель
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}