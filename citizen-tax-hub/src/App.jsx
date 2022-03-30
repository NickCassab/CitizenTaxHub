import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import TaxCalculator from './components/TaxCalculator';
import TaxDistributor from './components/TaxDistributor';
import TaxSliders from './components/TaxSliders';
import NonProfitList from './components/NonProfitList';

function App() {
  return (
    <div className="flex flex-col h-screen bg-citizen-blue">
      <Header />
      <TaxCalculator />
    </div>
  );
}

export default App;
