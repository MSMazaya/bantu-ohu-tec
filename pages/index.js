import { useState, useEffect } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PreEvent from "../components/PreEvent";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home({ token }) {
  const router = useRouter();

  return (
    <div className="py-10 px-16 lg:px-20">
      <Head>
        <title>OHU TEC 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="flex flex-col items-center">
        <Navbar token={token} />
        <div className="max-w-7xl md:w-xl lg:w-5xl">
          <span className="motion-safe: animate-fade flex-col translate-x-10">
            <Hero token={token} />
          </span>
          <PreEvent />
          <About />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
