import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useNavScroll from '../hooks/useNavScroll';
import React from 'react';
function MainLayout() {
  const { topBarHidden, NavbarHidden, topBarVisible } = useNavScroll();

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar hidden={topBarHidden} />
      <Navbar hidden={NavbarHidden} topBarVisible={topBarVisible} />

      <main
        style={{
          paddingTop: topBarVisible ? 100 : 64,
          transition: "padding-top 0.3s ease",
        }}
        className="flex-1"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;