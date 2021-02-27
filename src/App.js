import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Country/Cart/Cart'
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=> res.json())
        .then(data=>{ setCountries(data)
        })
  }, [] )

  const handleAddCountry = (country) =>{
       const newCart = [...cart, country];
       setCart(newCart);
  }
  return (
    <div className="App">
     
       <h1>{countries.length}</h1>
       <h3>Country added: {cart.length}</h3>
       <Cart cart={cart}></Cart>
        { countries.map(country => <Country country = {country} key = {country.alpha3Code} handleAddCountry={handleAddCountry}> </Country>) } 
       
       
    </div>
  );
}

export default App;
