import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Carrer1.module.css";
const Carrer1 = () => {
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

  const onPOSTPAIDCARDTextClick = useCallback(() => {
    navigate("/carrer1");
  }, [navigate]);

  const onJOINNOWTextClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 3" to the project
  }, []);

  const onRectangle4Click = useCallback(() => {
    // Please sync "MacBook Pro 16" - 1" to the project
  }, []);

  const onRectangle5Click = useCallback(() => {
    // Please sync "MacBook Pro 16" - 2" to the project
  }, []);

  const onApplyNowTextClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 1" to the project
  }, []);

  const onApplyNowText1Click = useCallback(() => {
    // Please sync "MacBook Pro 16" - 2" to the project
  }, []);

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
    <div className={styles.carrer}>
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
        <b className={styles.postpaidcard} onClick={onPOSTPAIDCARDTextClick}>
          POSTPAIDCARD
        </b>
        <b className={styles.carrer1}>CARRER</b>
        <b className={styles.blog}>BLOG</b>
        <b className={styles.customerApp}>CUSTOMER APP</b>
        <b className={styles.driverApp}>DRIVER APP</b>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img
          className={styles.facebookLogoIcon}
          alt=""
          src="/facebook-logo4.svg"
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
          src="/instagram-logo4.svg"
        />
      </div>
      <div className={styles.beAPart}>Be a part of our team.</div>
      <div className={styles.supertoroid1}>
        <img
          className={styles.supertoroidIridescentIcon}
          alt=""
          src="/supertoroidiridescent@2x.png"
        />
      </div>
      <div className={styles.cube2}>
        <img
          className={styles.roundcubeBlueGlossyIcon}
          alt=""
          src="/roundcubeblueglossy@2x.png"
        />
      </div>
      <div className={styles.weEnvisionA}>
        We envision a world where cities feel small again. Where transportation
        and tech bring people together, instead of apart. We see the future as
        community-driven — and it starts with you.
      </div>
      <div className={styles.carrerChild} />
      <b className={styles.joinNow} onClick={onJOINNOWTextClick}>
        JOIN NOW
      </b>
      <img className={styles.arrowUpRightIcon} alt="" src="/arrowupright.svg" />
      <b className={styles.b}>*</b>
      <b className={styles.learnMore}>Learn More</b>
      <b className={styles.joinOurTeam}>Join Our Team</b>
      <b className={styles.weValueTalent}>We value talent in Qwik Ride</b>
      <div className={styles.carrerItem} />
      <div className={styles.carrerInner} />
      <div className={styles.amazingDreamNeed}>
        Amazing dream need amazing people to make it happen for billions. Are
        you the one ?
      </div>
      <div className={styles.rectangleDiv} />
      <b className={styles.sectorsWeMainly}>Sectors we mainly hire</b>
      <div
        className={styles.joinAsA}
      >{`Join as a Driver role & become a hero for us !`}</div>
      <div className={styles.joinUsAsContainer}>
        <span className={styles.joinUsAsContainer1}>
          <p className={styles.joinUsAs}>{`Join us as a office staff `}</p>
          <p className={styles.joinUsAs}>{`& become backbone of us!`}</p>
        </span>
      </div>
      <div className={styles.carrerChild1} onClick={onRectangle4Click} />
      <div className={styles.carrerChild2} onClick={onRectangle5Click} />
      <b className={styles.applyNow} onClick={onApplyNowTextClick}>
        Apply now
      </b>
      <b className={styles.applyNow1} onClick={onApplyNowText1Click}>
        Apply now
      </b>
      <img
        className={styles.arrowUpRightIcon1}
        alt=""
        src="/arrowupright1.svg"
      />
      <img
        className={styles.arrowUpRightIcon2}
        alt=""
        src="/arrowupright1.svg"
      />
      <div className={styles.lineDiv} />
      <b className={styles.b1}>बचत भी.. अरम भी....</b>
      <div className={styles.carrerChild3} />
      <div className={styles.carrerChild4} />
      <div className={styles.carrerChild5} />
      <b className={styles.learnFromLeaders}>Learn from leaders</b>
      <b
        className={styles.meritocracyProfessionalism}
      >{`Meritocracy & Professionalism`}</b>
      <b className={styles.collaborativeWorkEnvironment}>
        Collaborative Work Environment
      </b>
      <div className={styles.homeParent}>
        <div className={styles.home1} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.aboutUs1}>About Us</div>
        <div className={styles.safety1} onClick={onSafetyTextClick}>
          Safety
        </div>
        <div className={styles.postpaidcard1} onClick={onPostpaidCardTextClick}>
          PostpaidCard
        </div>
        <div className={styles.carrer2}>Carrer</div>
        <div className={styles.blog1}>Blog</div>
        <div className={styles.contact} onClick={onContactTextClick}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Carrer1;
