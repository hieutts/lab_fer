import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div>
      <Header />

     <div className='' style={{marginTop: '70px'}}> <Outlet /></div>

      <Footer />
    </div>
  );
}
