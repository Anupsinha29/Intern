import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Aboutus.module.css";
const Aboutus = () => {
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

  const onSafetyTextClick = useCallback(() => {
    navigate("/3d");
  }, [navigate]);

  const onPostpaidCardTextClick = useCallback(() => {
    navigate("/carrer1");
  }, [navigate]);

  return (
    <div className={styles.aboutus}>
      <img className={styles.aboutusChild} alt="" src="/ellipse-224.svg" />
      <div className={styles.component1}>
        <div className={styles.component1Child} />
        <b className={styles.downloadApp}>Download App</b>
      </div>
      <img
        className={styles.transparent1Icon}
        alt=""
        src="/transparent-1@2x.png"
      />
      <img
        className={styles.spiralGlass1}
        alt=""
        src="/spiral-glass-1@2x.png"
      />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
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
          src="/twitter-logo3.svg"
        />
        <img
          className={styles.instagramLogoIcon}
          alt=""
          src="/instagram-logo5.svg"
        />
      </div>
      <div className={styles.indiasLovedBike}>
        India’s loved Bike Taxi Service
      </div>
      <div className={styles.weAreTheContainer}>
        <p className={styles.weAreTheFirstChoiceForBi}>
          <b>We are the first choice for bike taxi riders.</b>
        </p>
        <p className={styles.weAreTheFirstChoiceForBi}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.weAreTheFirstChoiceForBi}>
          We are the first choice for bike taxi riders as we provide rides at
          economical price with good service and safety.
        </p>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/ellipse-2251.svg" />
      </div>
      <b className={styles.whatMakeUs}>WHAT MAKE US DIFFERENT?</b>
      <div className={styles.ourBikeTaxis}>
        Our bike taxis are faster compared to other modes of transport! So
        people choose Qwik services.
      </div>
      <b className={styles.championsOfOur}>Champions of our success story</b>
      <div className={styles.qwikHasJust}>
        Qwik has just got started with a vision to transform the way people
        commute today. We will strive to make a difference to people lives and
        make commute faster and stressless.
      </div>
      <div className={styles.aboutusItem} />
      <b className={styles.jobsQwik}>jobs @ qwik</b>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <b className={styles.applyNow}>APPLY NOW</b>
      </div>
      <div className={styles.aboutusInner} />
      <div className={styles.founder1Parent}>
        <div className={styles.founder1}>
          <b className={styles.tejashParekh}>Tejash Parekh</b>
          <div className={styles.founder1Child} />
          <div className={styles.founder}>FOUNDER</div>
        </div>
        <div className={styles.f3}>
          <b className={styles.edwardMilgram}>Edward Milgram</b>
          <div className={styles.f3Child} />
          <div className={styles.founder2}>FOUNDER</div>
        </div>
        <div className={styles.f5}>
          <b className={styles.lovedeepSingh}>Lovedeep Singh</b>
          <div className={styles.f5Child} />
          <div className={styles.founder3}>FOUNDER</div>
        </div>
      </div>
      <div className={styles.founder2Parent}>
        <div className={styles.founder1}>
          <b className={styles.shivamTiwari}>Shivam Tiwari</b>
          <div className={styles.founder1Child} />
          <div className={styles.founder}>FOUNDER</div>
        </div>
        <div className={styles.f4}>
          <b className={styles.dibeshParida}>Dibesh Parida</b>
          <div className={styles.f4Child} />
          <div className={styles.founder5}>FOUNDER</div>
        </div>
        <div className={styles.f5}>
          <b className={styles.michaelNiren}>Michael Niren</b>
          <div className={styles.f5Child} />
          <div className={styles.founder3}>FOUNDER</div>
        </div>
      </div>
      <b className={styles.b}>बचत भी.. अरम भी....</b>
      <div className={styles.homeParent}>
        <div className={styles.home1} onClick={onHomeTextClick}>
          Home
        </div>
        <b className={styles.aboutUs1}>About Us</b>
        <div className={styles.safety1} onClick={onSafetyTextClick}>
          Safety
        </div>
        <div className={styles.postpaidcard} onClick={onPostpaidCardTextClick}>
          PostpaidCard
        </div>
        <div className={styles.carrer1}>Carrer</div>
        <div className={styles.blog1}>Blog</div>
        <div className={styles.contact}>Contact</div>
      </div>
    </div>
  );
};

export default Aboutus;
