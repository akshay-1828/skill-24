import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    // Add item to the cart
    setCart((prevCart) => [...prevCart, item]);
  
    // Show the popup message
    showPopup(`${item.name} has been added to the cart!`);
  };
  
  // Popup function
  const showPopup = (message) => {
    // Create a new popup element
    const popup = document.createElement('div');
    
    // Style the popup
    popup.style.position = 'fixed';
    popup.style.top = '20px'; // Place it at the top
    popup.style.right = '20px';
    popup.style.backgroundColor = '#333';
    popup.style.color = '#fff';
    popup.style.padding = '15px 20px';
    popup.style.borderRadius = '5px';
    popup.style.fontSize = '16px';
    popup.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '1000';
    popup.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition effect
    popup.style.opacity = '1'; // Initially visible
    popup.textContent = message; // Set the message
  
    // Append the popup to the document body
    document.body.appendChild(popup);
  
    // Fade out the popup before removing it
    setTimeout(() => {
      popup.style.opacity = '0'; // Fade out effect
      setTimeout(() => {
        popup.remove(); // Remove after the fade-out
      }, 500); // Wait for the fade-out transition to complete
    }, 3000); // Display for 3 seconds before fading
  };
  
  
  // Function to add items to the cart



  // Function to remove items from the cart by index
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;