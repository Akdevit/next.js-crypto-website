import HomeHero from "@/app/Commponent/HomeHero";
import Hometable from "@/app/Commponent/Hometable";
import Homepsl from "@/app/Commponent/Homepsl";
import Homebuy from "@/app/Commponent/Homebuy";
import Homewallet from "@/app/Commponent/Homewallet";
import Footer from "@/app/Commponent/Footer";
const Home = () => {
  return (
    <>
      <HomeHero />
      <Hometable />
      <Homepsl />
      <Homebuy />
      <Homewallet />
      <Footer/>
    </>
  );
};

export default Home;
