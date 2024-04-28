// src/App.js

import React from 'react';
import './App.css';
import Header from './companyname';
import NavigationBar from './navigationbar'; // NavigationBar component'ini import ediyoruz
import './PressStart2P-Regular.ttf'; // Font dosyasını projeye ekleyin
import Services from './services'; // Service
import AboutUs from './aboutus'; 
import Footer from './footer'; // Footer bileşenini import ediyoruz
import ContactUs from './contactus'; 
import References from './ref';







function App() {
    return (
        <div className="app">
            <NavigationBar /> {/* NavigationBar component'ini ekliyoruz */}
            <Header />
            <AboutUs />
            <Services />
            <References />s
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;