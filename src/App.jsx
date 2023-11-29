import {
  Header,
  Hero,
  About,
  Services,
  Testimonials,
  Projects,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
