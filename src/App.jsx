import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Booking from "./components/Booking";
import PickupInfo from "./components/Booking/pickUpInfo";
import PickupInfo2 from "./components/Booking/PickupInfo2";

// import { Ro } from 'rea'

const App = () => (
  <div className="bg-gradient-custom w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* <div className={`bg-gray-200 ${styles.flexStart}`}> */}
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="w-full m-auto">
          <PickupInfo2 />
        </div>

        <Hero />
      </div>
    </div>

    {/* <div className={`bg-gray-200 ${styles.paddingX} ${styles.flexCenter}`}> */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <PickupInfo /> */}
        <Booking />

        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
