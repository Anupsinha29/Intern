import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
const Homepage = () => {
  const navigate = useNavigate();

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacypolicy");
  }, [navigate]);

  const onDriverTermsTextClick = useCallback(() => {
    navigate("/termsforuser");
  }, [navigate]);

  const onCustomerTermsTextClick = useCallback(() => {
    navigate("/termsforuser1");
  }, [navigate]);

  const onPOSTCARDTextClick = useCallback(() => {
    navigate("/carrer1");
  }, [navigate]);

  const onCARRERTextClick = useCallback(() => {
    navigate("/carrer");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onSafetyTextClick = useCallback(() => {
    navigate("/3d");
  }, [navigate]);

  const onPostpaidCardTextClick = useCallback(() => {
    navigate("/carrer1");
  }, [navigate]);

  const onCarrerTextClick = useCallback(() => {
    navigate("/carrer");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contactinitial");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <img className={styles.homepageChild} alt="" src="/ellipse-224.svg" />
      <div className={styles.component1}>
        <div className={styles.component1Child} />
        <b className={styles.downloadApp}>Download App</b>
      </div>
      <div className={styles.introductionsection}>
        <div className={styles.indiasLargestBike}>
          India’s Largest Bike Taxi Service
        </div>
        <div className={styles.qwikIsIndias}>
          Qwik is India’s fastest Bike taxi app. We are now running operations
          in more than 40 cities..
        </div>
        <div className={styles.component2}>
          <div className={styles.component2Child} />
          <b className={styles.downloadApp1}>Download App</b>
        </div>
        <div className={styles.component3}>
          <div className={styles.component3Child} />
          <b className={styles.signUpAsDriver}>Sign-up as Driver</b>
        </div>
      </div>
      <div className={styles.component5}>
        <img
          className={styles.perforatedRingGlass1}
          alt=""
          src="/perforated-ring-glass-1@2x.png"
        />
      </div>
      <div className={styles.quickdemosection}>
        <div className={styles.quickdemosectionChild} />
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
          <b className={styles.lastMilePickUp}>LAST MILE PICK-UP</b>
          <b className={styles.economic}>Economic</b>
          <b className={styles.fasterRide}>Faster Ride</b>
          <div className={styles.weWillPick}>
            We will pick you up from your location and drop you exactly where
            you want.
          </div>
          <div className={styles.ourRidesAre}>
            Our rides are very much affordable compared to the other service
            providers.
          </div>
          <div className={styles.weProvideThe}>
            We provide the fasted mode of commute
          </div>
          <div className={styles.frameChild} />
        </div>
      </div>
      <div className={styles.qwikIsA}>
        Qwik is a community where everyone belongs. We’ll always treat you with
        respect and look out for your safety. We do this by maintaining high
        standards, which start before your very first ride. Our proactive safety
        measures are always on. And anytime night or day, we offer real help
        from real humans.
      </div>
      <div className={styles.sectionsafetyforall}>
        <div className={styles.safetyForAll}>SAFETY FOR ALL</div>
        <div className={styles.sectionsafetyforallChild} />
      </div>
      <img
        className={styles.transparent1Icon}
        alt=""
        src="/transparent-1@2x.png"
      />
      <div className={styles.knowusbeter}>
        <div className={styles.sectionsafetyforall1}>
          <div className={styles.safetyForAll}>Know Us Better</div>
          <div className={styles.sectionsafetyforallChild} />
        </div>
        <div
          className={styles.weHaveCrossed}
        >{`We have crossed 1 lakh happy customers and 1 million rides. Qwik is here to revolutionize the way people travel as we bring you redefined comfort & convenience with our disruptive service model.`}</div>
      </div>
      <div className={styles.impact}>
        <div className={styles.ourPresenceIn}>
          Our presence in the country has changed the way people commute in a
          positive way
        </div>
        <div className={styles.sectionsafetyforall2}>
          <b className={styles.ourImpact}>Our Impact</b>
          <div className={styles.sectionsafetyforallChild} />
        </div>
      </div>
      <div className={styles.impact1}>
        <div className={styles.earnWhenYou}>
          Earn when you want with a flexible schedule, quality support, and
          exclusive earning opportunities.
        </div>
        <div className={styles.sectionsafetyforall2}>
          <b className={styles.ourImpact}>Why drive with Qwik in your city?</b>
          <div className={styles.sectionsafetyforallChild} />
        </div>
      </div>
      <div className={styles.sectionsafetyforall4}>
        <b className={styles.ourImpact}>Straight from the Customer's heart</b>
        <div className={styles.sectionsafetyforallChild} />
      </div>
      <div className={styles.sectionsafetyforall5}>
        <b className={styles.ourImpact}>Qwik Business Solutions</b>
        <div className={styles.sectionsafetyforallChild} />
      </div>
      <img
        className={styles.spiralGlass1}
        alt=""
        src="/spiral-glass-1@2x.png"
      />
      <div className={styles.groundTransportationIsnt}>
        Ground transportation isn’t one-size-fits-all, because your people, and
        their lives, aren’t either. Our teams work with organizations across a
        wide range of industries to deliver transportation solutions made for
        your business.
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <b className={styles.businessTravel}>Business Travel</b>
        <b className={styles.commute}>Commute</b>
        <b className={styles.events}>Events</b>
        <b className={styles.customerLoyalty}>Customer loyalty</b>
        <b className={styles.healthcare}>Healthcare</b>
        <div className={styles.makeBusinessTravel}>
          Make business travel easy and rewarding. Plus, get insights into
          ground transportation habits to improve the experience.
        </div>
        <div className={styles.getEmployeesWhere}>
          Get employees where they need to be, when they need to be there, with
          options for your schedule and budget.
        </div>
        <div className={styles.giveYourGuests}>
          Give your guests a reliable way to get to events (and back home).
        </div>
        <div className={styles.rewardYourTop}>
          Reward your top customers with complimentary rides to and from your
          store.
        </div>
        <div className={styles.providePatientsWith}>
          Provide patients with easy access to reliable rides to and from
          medical appointments.
        </div>
      </div>
      <div className={styles.component7}>
        <img className={styles.component7Child} alt="" src="/ellipse-229.svg" />
        <img className={styles.component7Item} alt="" src="/ellipse-229.svg" />
        <div className={styles.component7Inner} />
        <div className={styles.component7Child1} />
        <b className={styles.customer}>customer</b>
        <div className={styles.driver}>driver</div>
        <div className={styles.component7Child2} />
        <div className={styles.component7Child3} />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-2261@2x.png" />
        <img
          className={styles.component7Child4}
          alt=""
          src="/ellipse-228@2x.png"
        />
        <b className={styles.spijaae}>Spijaae</b>
        <b className={styles.jack}>jack</b>
        <div className={styles.customer1}>CUSTOMER</div>
        <div className={styles.customer2}>CUSTOMER</div>
        <div className={styles.becauseTheyHave}>
          Because they have skilled and excellent riders, this app is terrific
          and highly safe to use. In addition, it is incredibly practical and
          gets us there faster than any other kind of transportation.
        </div>
        <div className={styles.iEnjoyQwik}>
          I enjoy Qwik since it's speedier than other applications and is
          generally accessible whenever I need it. I don't know how to ride a
          bike, but the software makes it fun for me to do so and enjoy the
          beautiful weather in Bangalore.
        </div>
      </div>
      <div className={styles.homeParent}>
        <b className={styles.home}>HOME</b>
        <b className={styles.privacyPolicy} onClick={onPrivacyPolicyTextClick}>
          privacy policy
        </b>
        <b className={styles.safety}>SAFETY</b>
        <b className={styles.driverTerms} onClick={onDriverTermsTextClick}>
          driver terms
        </b>
        <b className={styles.followUs}>follow us</b>
        <b className={styles.aboutUs}>ABOUT US</b>
        <b className={styles.customerTerms} onClick={onCustomerTermsTextClick}>
          customer terms
        </b>
        <b className={styles.postcard} onClick={onPOSTCARDTextClick}>
          POSTCARD
        </b>
        <b className={styles.carrer} onClick={onCARRERTextClick}>
          CARRER
        </b>
        <b className={styles.blog}>BLOG</b>
        <b className={styles.customerApp}>CUSTOMER APP</b>
        <b className={styles.driverApp}>DRIVER APP</b>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img
          className={styles.facebookLogoIcon}
          alt=""
          src="/facebook-logo1.svg"
        />
        <img
          className={styles.linkedinInLogoIcon}
          alt=""
          src="/linkedinin-logo.svg"
        />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img
          className={styles.twitterLogoIcon}
          alt=""
          src="/twitter-logo4.svg"
        />
        <img
          className={styles.instagramLogoIcon}
          alt=""
          src="/instagram-logo6.svg"
        />
      </div>
      <div className={styles.homepageItem} />
      <div className={styles.homepageInner} />
      <b className={styles.knowMore}>Know More</b>
      <b className={styles.knowMore1}>Know More</b>
      <b className={styles.b}>बचत भी.. अरम भी....</b>
      <div className={styles.ourimpact}>
        <div className={styles.ourimpactChild} />
        <div className={styles.ourimpactItem} />
        <div className={styles.ourimpactInner} />
        <div className={styles.ourimpactChild1} />
        <b className={styles.lacs}>1LACS +</b>
        <div className={styles.downloads}>Downloads</div>
        <div className={styles.cities}>Cities</div>
        <div className={styles.drivers}>Drivers</div>
        <div className={styles.happyDrivers}>Happy Drivers</div>
        <b className={styles.b1}>40+</b>
        <b className={styles.k}>10K</b>
        <b className={styles.k1}>30K</b>
        <img
          className={styles.condominium1Icon}
          alt=""
          src="/condominium-1.svg"
        />
        <img
          className={styles.downloadsimpleIcon}
          alt=""
          src="/downloadsimple.svg"
        />
      </div>
      <div className={styles.component14Wrapper}>
        <div className={styles.component14}>
          <div className={styles.st}>
            <img
              className={styles.dalle2023040123212}
              alt=""
              src="/dalle-20230401-2321-2@2x.png"
            />
            <div className={styles.qwikcustomerParent}>
              <div className={styles.qwikcustomer}>
                <div className={styles.qwikcustomerChild} />
                <b className={styles.qwikCustomer}>Qwik Customer</b>
                <img
                  className={styles.qwikcustomerItem}
                  alt=""
                  src="/ellipse-234.svg"
                />
                <img
                  className={styles.chevronLeftIcon}
                  alt=""
                  src="/chevronleft.svg"
                />
              </div>
              <div className={styles.qwikdriver}>
                <div className={styles.qwikdriverChild} />
                <b className={styles.qwikCustomer}>Qwik Driver</b>
                <img
                  className={styles.qwikcustomerItem}
                  alt=""
                  src="/ellipse-235.svg"
                />
                <img
                  className={styles.chevronLeftIcon}
                  alt=""
                  src="/chevronleft1.svg"
                />
              </div>
              <div className={styles.qwikdriver}>
                <div className={styles.qwikdriverChild} />
                <b className={styles.qwikCustomer}>Qwik Postpaid</b>
                <img
                  className={styles.qwikcustomerItem}
                  alt=""
                  src="/ellipse-236.svg"
                />
                <img
                  className={styles.chevronLeftIcon}
                  alt=""
                  src="/chevronleft2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.component13}>
            <div className={styles.component13Child} />
            <div className={styles.component13Item} />
            <div className={styles.component13Inner} />
            <div className={styles.component13Child1} />
            <b className={styles.b2}>1</b>
            <b className={styles.b3}>2</b>
            <b className={styles.b4}>3</b>
            <b className={styles.afterCompletingSignContainer}>
              <span className={styles.afterCompletingSignContainer1}>
                <p className={styles.afterCompletingSign}>
                  After completing Sign in/ Sign up.
                </p>
                <p
                  className={styles.afterCompletingSign}
                >{`Select the Pickup Location & Drop Location`}</p>
              </span>
            </b>
            <b className={styles.selectTheMode}>Select the Mode of Vehicle</b>
            <b className={styles.chooseThePayment}>
              Choose the payment option and you’re all set .HAPPY JOURNEY!
            </b>
            <img className={styles.lineIcon} alt="" src="/line-201.svg" />
            <img
              className={styles.component13Child2}
              alt=""
              src="/line-211.svg"
            />
            <div className={styles.component13Child3} />
            <b className={styles.howToBook}>HOW TO BOOK A RIDE?</b>
            <div className={styles.headOverTo}>
              Head over to your Qwik Customer app and follow the steps:
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeGroup}>
        <b className={styles.home1} onClick={onHomeTextClick}>
          Home
        </b>
        <div className={styles.aboutUs1} onClick={onAboutUsTextClick}>
          About Us
        </div>
        <div className={styles.safety1} onClick={onSafetyTextClick}>
          Safety
        </div>
        <div className={styles.postpaidcard} onClick={onPostpaidCardTextClick}>
          PostpaidCard
        </div>
        <div className={styles.carrer1} onClick={onCarrerTextClick}>
          Carrer
        </div>
        <div className={styles.blog1} onClick={onBlogTextClick}>
          Blog
        </div>
        <div className={styles.contact} onClick={onContactTextClick}>
          Contact
        </div>
      </div>
      <img
        className={styles.img20230418Wa00001Icon}
        alt=""
        src="/img20230418wa0000-1@2x.png"
      />
    </div>
  );
};

export default Homepage;
