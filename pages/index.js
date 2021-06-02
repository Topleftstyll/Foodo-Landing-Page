import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Service from "../components/Service";
import Download from "../components/Download";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <Header />
        <Service />
        <About />
        <Download />
        <Contact />
      </main>

      <footer className="footer">
        <h5>Foodo &copy; Joshua Brackett</h5>
        <script 
          src="https://unpkg.com/react/umd/react.production.min.js" 
          crossorigin
        ></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      </footer>
    </div>
  );
};
