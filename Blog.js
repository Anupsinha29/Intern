import { useState, useCallback } from "react";
import BlogonClick from "../components/BlogonClick";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";
const Blog = () => {
  const [isBlogonClickOpen, setBlogonClickOpen] = useState(false);
  const navigate = useNavigate();

  const openBlogonClick = useCallback(() => {
    setBlogonClickOpen(true);
  }, []);

  const closeBlogonClick = useCallback(() => {
    setBlogonClickOpen(false);
  }, []);

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

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
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

  return (
    <>
      <div className={styles.blog}>
        <b className={styles.blog1}>BLOG</b>
        <div className={styles.supertoroid1}>
          <img
            className={styles.supertoroidIridescentIcon}
            alt=""
            src="/supertoroidiridescent@2x.png"
          />
        </div>
        <img className={styles.jIcon} alt="" src="/j.svg" />
        <img
          className={styles.dipyramidGlass1}
          alt=""
          src="/dipyramid-glass-1@2x.png"
        />
        <div className={styles.blogChild} />
        <img className={styles.blogItem} alt="" src="/rectangle-289@2x.png" />
        <img className={styles.blogInner} alt="" src="/rectangle-291@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-291@2x.png"
        />
        <img className={styles.blogChild1} alt="" src="/rectangle-290@2x.png" />
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <b className={styles.getZeroCommision}>
            Get Zero Commision car Insurance
          </b>
          <div className={styles.contentItem} />
          <b className={styles.getDetails}>Get Details</b>
          <div className={styles.april2023}>6 April 2023</div>
        </div>
        <div className={styles.content1}>
          <div className={styles.contentChild} />
          <b className={styles.getZeroCommision}>
            Get Zero Commision car Insurance
          </b>
          <div className={styles.contentItem} />
          <b className={styles.getDetails}>Get Details</b>
          <div className={styles.april2023}>6 April 2023</div>
        </div>
        <div className={styles.content2}>
          <div className={styles.contentChild1} />
          <b className={styles.aWinWinScenario}>
            A win-win scenario is reported by Business Travel Show for both
            travel managers and staff.
          </b>
          <div className={styles.contentChild2} onClick={openBlogonClick} />
          <b className={styles.getDetails2}>Get Details</b>
          <div className={styles.april2023}>6 April 2023</div>
        </div>
        <div className={styles.content3}>
          <div className={styles.contentChild1} />
          <b className={styles.aWinWinScenario}>
            A win-win scenario is reported by Business Travel Show for both
            travel managers and staff.
          </b>
          <div className={styles.contentChild4} />
          <b className={styles.getDetails2}>Get Details</b>
          <div className={styles.april2023}>6 April 2023</div>
        </div>
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
          <b className={styles.carrer} onClick={onCARRERTextClick}>
            CARRER
          </b>
          <b className={styles.blog2}>BLOG</b>
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
            <div className={styles.carrer1} onClick={onCarrerTextClick}>
              Carrer
            </div>
            <div className={styles.blog3}>Blog</div>
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
      {isBlogonClickOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBlogonClick}
        >
          <BlogonClick onClose={closeBlogonClick} />
        </PortalPopup>
      )}
    </>
  );
};

export default Blog;
