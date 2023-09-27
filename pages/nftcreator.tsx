'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import HtmlHead from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import NftCreator from '../components/nftCreator';
const Home: NextPage = () => {

  return (
<>
  <HtmlHead/>
  <Navbar/>

  <NftCreator/>
  
  <Footer/>
  <></>

    </>

  );
};

export default Home;
