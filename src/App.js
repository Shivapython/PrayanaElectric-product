
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BikeCard from './components/BikeCard';
import Header from './components/Header';
import Footer from './components/Footer';
import EbikeDetails from './components/EbikeDetails';
import ErrorPage from './ErrorPage';
import './GlobalStyles.css';

const bikes = [
  {
    title: 'PRX1',
    image: require('./image/bike-1.png'),
    specs: {
      topSpeed: '120 KMPH',
      power: '385 PS',
      maxTorque: '450 NM',
      batteryLife: '200 KM',
      zeroToHundred: 'in 24 S',
    },
  },
  {
    title: 'PRX PRO',
    image: require('./image/bike-2.png'),
    specs: {
      topSpeed: '150 KMPH',
      power: '410 PS',
      maxTorque: '470 NM',
      batteryLife: '250 KM',
      zeroToHundred: 'in 21 S',
    },
  },
  {
    title: 'PRX LITE',
    image: require('./image/bike-3.png'),
    specs: {
      topSpeed: '90 KMPH',
      power: '255 PS',
      maxTorque: '370 NM',
      batteryLife: '120 KM',
      zeroToHundred: 'in 35 S',
    },
  },
  {
    title: 'PRX 2',
    image: require('./image/bike-4.png'),
    specs: {
      topSpeed: '160 KMPH',
      power: '430 PS',
      maxTorque: '480 NM',
      batteryLife: '300 KM',
      zeroToHundred: 'in 18 S',
    },
  }
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="bike-list">
          <Routes>
            <Route path="/" element={<Home bikes={bikes} />} />
            <Route path="/ebikedetails" element={<EbikeDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Home = ({ bikes }) => (
  <>
    {bikes.map((bike, index) => (
      <BikeCard key={index} bike={bike} />
    ))}
    <Footer />
  </>
);

export default App;
