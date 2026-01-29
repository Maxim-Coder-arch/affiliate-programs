import Loader from "./components/def/loader";
import Menu from "./components/def/menu";
import TopTop from "./components/def/top";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero-section/heroSection";
import BankProducts from "./components/main/bankProducts/bankProducts";
import IntroDuction from "./components/main/introduction/introduction";
import Questions from "./components/main/questions/questions";
import SimpleCircuit from "./components/main/simpleCircuit/simpleCircuit";
import Trust from "./components/main/trust/trust";
import ValueStructure from "./components/main/valueStruct/valueStructure";

export default function Home() {
  return (
    <>
      <TopTop />
      <Loader />
      <Menu />
      <HeroSection />
      <IntroDuction />
      <div className="bg-attachment">
        <ValueStructure />
        <Trust />
      </div>
      <SimpleCircuit />
      <BankProducts />
      <Questions />
      <Footer />
    </>
  );
}
