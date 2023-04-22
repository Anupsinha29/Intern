import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TERMS1 from "../components/TERMS1";
import PortalPopup from "../components/PortalPopup";
import TERMS from "../components/TERMS";
import styles from "./Carrer.module.css";
const Carrer = () => {
  const navigate = useNavigate();
  const [isTERMSOpen, setTERMSOpen] = useState(false);
  const [isTERMS1Open, setTERMS1Open] = useState(false);

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

  const openTERMS = useCallback(() => {
    setTERMSOpen(true);
  }, []);

  const closeTERMS = useCallback(() => {
    setTERMSOpen(false);
  }, []);

  const openTERMS1 = useCallback(() => {
    setTERMS1Open(true);
  }, []);

  const closeTERMS1 = useCallback(() => {
    setTERMS1Open(false);
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
    <>
      <div className={styles.carrer}>
        <div className={styles.frame}>
          <img
            className={styles.httpslottiefilescom46993Icon}
            alt=""
            src="/httpslottiefilescom46993mobilescreenrecording.svg"
          />
          <b className={styles.qwik}>QWIK</b>
        </div>
        <div className={styles.carrerChild} />
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-270@2x.png"
          />
          <b className={styles.mrspark}>MR.SPARK</b>
          <div className={styles.cardNumber}>CARD NUMBER</div>
          <div className={styles.expiryDate}>Expiry date</div>
          <div className={styles.cvv}>CVV</div>
          <b className={styles.xxxx}>1232 2154 1351 XXXX</b>
          <b className={styles.x2x}>0X/2X</b>
          <b className={styles.b}>000</b>
          <img
            className={styles.contactlesspaymentIcon}
            alt=""
            src="/contactlesspayment.svg"
          />
          <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
          <img
            className={styles.transparent1Icon}
            alt=""
            src="/transparent-11@2x.png"
          />
        </div>
        <div className={styles.component1}>
          <div className={styles.component1Child} />
          <b className={styles.downloadApp}>Download App</b>
        </div>
        <img
          className={styles.transparent1Icon1}
          alt=""
          src="/transparent-1@2x.png"
        />
        <div className={styles.footer}>
          <div className={styles.footerChild} />
          <b className={styles.home}>HOME</b>
          <b
            className={styles.privacyPolicy}
            onClick={onPrivacyPolicyTextClick}
          >
            privacy policy
          </b>
          <b className={styles.safety}>SAFETY</b>
          <b className={styles.driverTerms} onClick={onDriverTermsTextClick}>
            driver terms
          </b>
          <b className={styles.followUs}>follow us</b>
          <b className={styles.aboutUs}>ABOUT US</b>
          <b
            className={styles.customerTerms}
            onClick={onCustomerTermsTextClick}
          >
            customer terms
          </b>
          <b className={styles.postcard}>POSTCARD</b>
          <b className={styles.carrer1} onClick={onCARRERTextClick}>
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
            src="/facebook-logo3.svg"
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
            src="/instagram-logo3.svg"
          />
        </div>
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
        <div className={styles.carrerItem} />
        <b className={styles.b1}>बचत भी.. अरम भी....</b>
        <b className={styles.qwikMoney}>QWIK MONEY</b>
        <div className={styles.walletpostpaid}>WALLET+POSTPAID</div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-270@2x.png"
          />
          <b className={styles.mrspark}>MR.SPARK</b>
          <div className={styles.cardNumber}>CARD NUMBER</div>
          <div className={styles.expiryDate}>Expiry date</div>
          <div className={styles.cvv}>CVV</div>
          <b className={styles.xxxx}>1232 2154 1351 XXXX</b>
          <b className={styles.x2x}>0X/2X</b>
          <b className={styles.b}>000</b>
          <img
            className={styles.contactlesspaymentIcon}
            alt=""
            src="/contactlesspayment.svg"
          />
          <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
          <img
            className={styles.transparent1Icon}
            alt=""
            src="/transparent-11@2x.png"
          />
        </div>
        <b className={styles.registerForQwik}>
          Register for Qwik money and get your virtual card
        </b>
        <div className={styles.carrerInner} />
        <div className={styles.learnMore}>
          <span className={styles.learnMoreTxtContainer}>
            <span>*</span>
            <b>Learn more</b>
          </span>
        </div>
        <div className={styles.lineDiv} />
        <b className={styles.benefits}>BENEFITS</b>
        <div className={styles.rectangleDiv} />
        <div className={styles.carrerChild1} />
        <div className={styles.carrerChild2} />
        <div className={styles.carrerChild3} />
        <div className={styles.carrerChild4} />
        <b className={styles.payLater}>PAY LATER</b>
        <b className={styles.payEverywhere}>PAY EVERYWHERE</b>
        <b className={styles.oneClickCheckout}>ONE CLICK CHECKOUT</b>
        <b className={styles.oneBillConvience}>ONE BILL CONVIENCE</b>
        <b className={styles.noAdditionalCharges}>NO ADDITIONAL CHARGES</b>
        <div className={styles.every15Days}>
          Every 15 days, pay all of your costs at once.
        </div>
        <div className={styles.notOnlyOn}>
          Not only on Rides. Approved over 300 apps and continues to grow
        </div>
        <div className={styles.quickPayment}>Quick payment</div>
        <div className={styles.thereIsOnly}>
          There is only one bill, one payment, and no problems.
        </div>
        <div className={styles.noHiddenCharges}>No hidden charges</div>
        <img className={styles.ellipseIcon} alt="" src="/ellipse-237.svg" />
        <img className={styles.carrerChild5} alt="" src="/ellipse-237.svg" />
        <img className={styles.carrerChild6} alt="" src="/ellipse-237.svg" />
        <img className={styles.carrerChild7} alt="" src="/ellipse-237.svg" />
        <img className={styles.carrerChild8} alt="" src="/ellipse-237.svg" />
        <div className={styles.mobilehowToApply}>
          <div className={styles.mobilehowToApplyChild} />
          <div className={styles.mobilehowToApplyItem} />
          <div className={styles.mobilehowToApplyInner} />
          <div className={styles.mobilehowToApplyChild1} />
          <b className={styles.b3}>1</b>
          <b className={styles.b4}>2</b>
          <b className={styles.b5}>3</b>
          <b className={styles.navigateToProfile}>
            Navigate to Profile menu from top left corner.
          </b>
          <b className={styles.clickOnQwik}>Click on Qwik Money</b>
          <b className={styles.beginRightAway}>Begin right away</b>
          <img className={styles.lineIcon} alt="" src="/line-20.svg" />
          <img
            className={styles.mobilehowToApplyChild2}
            alt=""
            src="/line-21.svg"
          />
          <div className={styles.mobilehowToApplyChild3} />
          <b className={styles.howToApply}>HOW TO APPLY?</b>
          <div className={styles.headOverTo}>
            Head over to your Qwik Customer app and follow the steps:
          </div>
        </div>
        <b className={styles.exclusiveOffer}>EXCLUSIVE OFFER</b>
        <div className={styles.getTheGreatest}>
          Get the greatest deals hand-picked especially for you!
        </div>
        <div className={styles.component15}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-282@2x.png"
            />
            <b className={styles.cashbackUpto200}>Cashback upto ₹200</b>
            <div
              className={styles.tcApply}
              onClick={openTERMS}
            >{`T&C Apply`}</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupInner} />
            <img
              className={styles.image17Icon}
              alt=""
              src="/image-171@2x.png"
            />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-2821@2x.png"
            />
            <b className={styles.cashbackUpto200}>Cashback upto ₹200</b>
            <div className={styles.tcApply1}>{`T&C Apply`}</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupInner} />
            <img
              className={styles.image17Icon2}
              alt=""
              src="/image-172@2x.png"
            />
            <img
              className={styles.groupChild4}
              alt=""
              src="/rectangle-2822@2x.png"
            />
            <b className={styles.cashbackUpto200}>Cashback upto ₹100</b>
            <div className={styles.tcApply1}>{`T&C Apply`}</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupInner} />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-2823@2x.png"
            />
            <b className={styles.cashbackUpto200}>Cashback upto ₹400</b>
            <div
              className={styles.tcApply}
              onClick={openTERMS1}
            >{`T&C Apply`}</div>
            <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupInner} />
            <img
              className={styles.image17Icon3}
              alt=""
              src="/image-173@2x.png"
            />
            <img
              className={styles.groupChild8}
              alt=""
              src="/rectangle-2824@2x.png"
            />
            <b className={styles.cashbackUpto200}>Cashback upto ₹260</b>
            <div className={styles.tcApply1}>{`T&C Apply`}</div>
          </div>
          <img
            className={styles.arrowRightCircleIcon}
            alt=""
            src="/arrowrightcircle.svg"
          />
          <img
            className={styles.arrowLeftCircleIcon}
            alt=""
            src="/arrowleftcircle.svg"
          />
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home1} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.aboutUs1}>About Us</div>
          <div className={styles.safety1} onClick={onSafetyTextClick}>
            Safety
          </div>
          <b className={styles.postpaidcard} onClick={onPostpaidCardTextClick}>
            PostpaidCard
          </b>
          <div className={styles.carrer2}>Carrer</div>
          <div className={styles.blog1}>Blog</div>
          <div className={styles.contact} onClick={onContactTextClick}>
            Contact
          </div>
        </div>
      </div>
      {isTERMSOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTERMS}
        >
          <TERMS1 onClose={closeTERMS} />
        </PortalPopup>
      )}
      {isTERMS1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTERMS1}
        >
          <TERMS onClose={closeTERMS1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Carrer;
