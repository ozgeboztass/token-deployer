'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import HtmlHead from '../components/head';
import Navbar from '../components/navbar';
import TokenCreator from '../components/tokenCreator';
import Footer from '../components/footer';

const Home: NextPage = () => {

  return (
<>
  <HtmlHead/>
  <Navbar/>

  <TokenCreator/>
  
  <Footer/>
  <></>

    </>

  );
};

export default Home;
