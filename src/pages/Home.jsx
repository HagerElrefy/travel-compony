import AboutUs from "../components/AboutUs";
import HeadSec from "../components/HeadSec";
import PopularDes from "../components/PopularDes";
import Reviews from "../components/Reviews";
import ServicesSec from "../components/ServicesSec";
import TopDestination from "../components/TopDestination";

function Home() {
  return (
    <div className="bg-Background">
      <HeadSec/>
      <ServicesSec/>
      <AboutUs/>
      <PopularDes/>
      <TopDestination/>
      <Reviews/>
    </div>
  )
}
export default Home;
