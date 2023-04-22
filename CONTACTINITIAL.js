import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CONTACTINITIAL.module.css";
const CONTACTINITIAL = () => {
  const navigate = useNavigate();

  const onHeadOfficeTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacypolicy");
  }, [navigate]);

  const onDriverTermsTextClick = useCallback(() => {
    navigate("/termsforuser");
  }, [navigate]);

  const onCustomerTermsTextClick = useCallback(() => {
    navigate("/termsforuser1");
  }, [navigate]);

  const onCARRERTextClick = useCallback(() => {
    navigate("/carrer");
  }, [navigate]);

  const onBLOGTextClick = useCallback(() => {
    navigate("/");
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
    <div className={styles.contactinitial}>
      <div className={styles.contactinitialChild} />
      <b className={styles.contactUs}>CONTACT US</b>
      <div className={styles.supertoroid1}>
        <img
          className={styles.supertoroidIridescentIcon}
          alt=""
          src="/supertoroidiridescent@2x.png"
        />
      </div>
      <div className={styles.contactinitialChild} />
      <img className={styles.jIcon} alt="" src="/j.svg" />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <b className={styles.headOffice} onClick={onHeadOfficeTextClick}>
          Head-Office
        </b>
        <b className={styles.branchOffice}>BRANCH OFFICE</b>
      </div>
      <img
        className={styles.dipyramidGlass1}
        alt=""
        src="/dipyramid-glass-1@2x.png"
      />
      <div className={styles.content}>
        <img className={styles.telephone1Icon} alt="" src="/telephone-1.svg" />
        <img className={styles.maps1Icon} alt="" src="/maps-1.svg" />
        <b className={styles.blockL}>
          BLOCK L , EMBASSY TECH VILLAGE, BELLANDUR , BANGLORU KARNATAKA -560103
          , INDIA
        </b>
        <b className={styles.b}>+917428257313</b>
        <img
          className={styles.contentChild}
          alt=""
          src="/rectangle-286@2x.png"
        />
        <div className={styles.contentItem} />
        <b className={styles.getDirection}>Get Direction</b>
        <img className={styles.jIcon1} alt="" src="/j1.svg" />
      </div>
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
        <b className={styles.postcard}>POSTCARD</b>
        <b className={styles.carrer} onClick={onCARRERTextClick}>
          CARRER
        </b>
        <b className={styles.blog} onClick={onBLOGTextClick}>
          BLOG
        </b>
        <b className={styles.customerApp}>CUSTOMER APP</b>
        <b className={styles.driverApp}>DRIVER APP</b>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img
          className={styles.facebookLogoIcon}
          alt=""
          src="/facebook-logo.svg"
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
          src="/twitter-logo.svg"
        />
        <img
          className={styles.instagramLogoIcon}
          alt=""
          src="/instagram-logo.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.homeParent}>
          <div className={styles.home1} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.aboutUs1}>About Us</div>
          <div className={styles.safety1} onClick={onSafetyTextClick}>
            Safety
          </div>
          <div
            className={styles.postpaidcard}
            onClick={onPostpaidCardTextClick}
          >
            PostpaidCard
          </div>
          <div className={styles.carrer1}>Carrer</div>
          <div className={styles.blog1}>Blog</div>
          <div className={styles.contact}>Contact</div>
        </div>
        <div className={styles.component1}>
          <div className={styles.component1Child} />
          <b className={styles.downloadApp}>Download App</b>
        </div>
        <img
          className={styles.transparent1Icon}
          alt=""
          src="/transparent-1@2x.png"
        />
      </div>
    </div>
  );
};

export default CONTACTINITIAL;
