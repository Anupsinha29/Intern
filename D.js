import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./D.module.css";
const D = () => {
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

  const onContactTextClick = useCallback(() => {
    navigate("/contactinitial");
  }, [navigate]);

  return (
    <div className={styles.d}>
      <div className={styles.component1}>
        <div className={styles.component1Child} />
        <b className={styles.downloadApp}>Download App</b>
      </div>
      <img
        className={styles.transparent1Icon}
        alt=""
        src="/transparent-1@2x.png"
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
          src="/twitter-logo1.svg"
        />
        <img
          className={styles.instagramLogoIcon}
          alt=""
          src="/instagram-logo1.svg"
        />
      </div>
      <div className={styles.safetyForAll}>Safety for all</div>
      <div className={styles.qwikIsA}>
        Qwik is a community where everyone belongs. We’ll always treat you with
        respect and look out for your safety. We do this by maintaining high
        standards, which start before your very first ride. Our proactive safety
        measures are always on. And anytime night or day, we offer real help
        from real humans.
      </div>
      <div className={styles.dChild} />
      <div className={styles.dItem} />
      <div className={styles.dInner} />
      <div className={styles.component8}>
        <div className={styles.component8Child} />
        <img className={styles.component8Item} alt="" src="/ellipse-225.svg" />
        <img className={styles.component8Inner} alt="" src="/ellipse-226.svg" />
        <div className={styles.lineDiv} />
        <div className={styles.highSafetyStandards}>High safety standards</div>
        <div className={styles.proactiveSafetySupport}>
          Proactive safety support
        </div>
        <div className={styles.helpFromReal}>Help from real humans</div>
        <div className={styles.contentrow1}>
          <b className={styles.howWeShare}>How we share the ride</b>
          <b className={styles.driverBackgroundChecks}>
            Driver background checks
          </b>
          <div className={styles.weAlwaysTreat}>
            We always treat each other with respect, and we don’t tolerate
            discrimination. Anyone who violates our policies may be permanently
            removed from the platform. You can cancel any ride that makes you
            feel unsafe. See our Community Guidelines.
          </div>
          <div className={styles.allDriversMust}>
            All drivers must pass a background check before driving with Qwik.
            After that, they're required to pass an annual background check. We
            also continuously monitor for criminal convictions. And when
            necessary, we deactivate drivers.
          </div>
          <img
            className={styles.contentrow1Child}
            alt=""
            src="/ellipse-230.svg"
          />
          <img
            className={styles.contentrow1Item}
            alt=""
            src="/ellipse-230.svg"
          />
          <img
            className={styles.diamondGlass1}
            alt=""
            src="/diamond-glass-1@2x.png"
          />
        </div>
        <div className={styles.contentrow2}>
          <b className={styles.seeWhoYoure}>See who you’re riding with</b>
          <b className={styles.twoWayRatings}>Two-way ratings</b>
          <b className={styles.customerSupport}>24*7 Customer support</b>
          <b className={styles.yourPrivacyIs}>Your privacy is protected</b>
          <div className={styles.onceYoureMatched}>
            Once you’re matched with your driver, you’ll see their name, profile
            photo, and rating. And when you add a photo to your profile, drivers
            know who to look for.
          </div>
          <div className={styles.ifYouRate}>
            If you rate your driver three stars or fewer, you won’t be matched
            with them again. Your feedback is anonymous and lets us take
            appropriate action to help keep the community safe.
          </div>
          <div
            className={styles.bothOurDrivers}
          >{`Both, our drivers and customers can report any kind of issues to Qwik through the 24*7 support feature on the app post & during the ride.`}</div>
          <div className={styles.weNeverShare}>
            We never share your phone number or personal information with other
            riders or drivers. And once a trip is complete, your pickup and
            drop-off locations are concealed in the driver’s trip history.
          </div>
          <img
            className={styles.contentrow2Child}
            alt=""
            src="/ellipse-230.svg"
          />
          <img
            className={styles.contentrow2Item}
            alt=""
            src="/ellipse-230.svg"
          />
          <img
            className={styles.contentrow2Inner}
            alt=""
            src="/ellipse-230.svg"
          />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-230.svg" />
        </div>
        <img
          className={styles.stellaOctangulaGlass2}
          alt=""
          src="/stella-octangula-glass-2@2x.png"
        />
        <b className={styles.customer}>CUSTOMER</b>
        <div className={styles.captain}>CAPTAIN</div>
      </div>
      <b className={styles.b}>बचत भी.. अरम भी....</b>
      <div className={styles.homeParent}>
        <div className={styles.home1} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.aboutUs1}>About Us</div>
        <b className={styles.safety1} onClick={onSafetyTextClick}>
          Safety
        </b>
        <div className={styles.postpaidcard} onClick={onPostpaidCardTextClick}>
          PostpaidCard
        </div>
        <div className={styles.carrer1}>Carrer</div>
        <div className={styles.blog1}>Blog</div>
        <div className={styles.contact} onClick={onContactTextClick}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default D;
