import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Topbar from '../components/Topbar';
import Hightlights from '../components/Hightlights';
import Events from '../components/Events';
function Home() {
  return (
    <div>
      <Topbar />
      <Navbar/>
      <Header/>
      <Hightlights />
      <Events />
    </div>
  )
  }

export default Home
