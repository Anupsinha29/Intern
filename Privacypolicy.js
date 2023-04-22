import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Privacypolicy.module.css";
const Privacypolicy = () => {
  const navigate = useNavigate();

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
    <div className={styles.privacypolicy}>
      <img
        className={styles.supertoroid2BlueGlossyIcon}
        alt=""
        src="/supertoroid2blueglossy@2x.png"
      />
      <img
        className={styles.supertoroid2BlueGlossyIcon1}
        alt=""
        src="/supertoroid2blueglossy1@2x.png"
      />
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
        <b className={styles.privacyPolicy}>privacy policy</b>
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
          src="/facebook-logo2.svg"
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
          src="/twitter-logo2.svg"
        />
        <img
          className={styles.instagramLogoIcon}
          alt=""
          src="/instagram-logo2.svg"
        />
      </div>
      <div className={styles.privacyPolicy1}>PRIVACY POLICY</div>
      <div className={styles.sphere}>
        <img
          className={styles.sphereBlueGlossyIcon}
          alt=""
          src="/sphereblueglossy@2x.png"
        />
      </div>
      <div className={styles.yourPrivacyMattersContainer}>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>
              Your privacy matters to Tripetan Services Private limited(the
              “Company”, “we”, “Qwik Ryde”, or “us”).
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>
              This Privacy Policy (“Policy”) describes the policies and
              procedures on the collection, use, disclosure and protection of
              your information when you use our website located at
              https://Qwikryde.com, or the Qwik Ryde mobile application
              (collectively, “Qwik Ryde Platform” or “Qwik Ryde App”).
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>
              The terms “you” and “your” refer to the user of the Qwik Ryde
              Platform. The term “Services” refers to any services offered by
              Qwik Ryde/You whether on the Qwik Ryde Platform or otherwise.
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>
              Please read this Policy before using the Qwik Ryde Platform or
              submitting any personal information to Qwik Ryde. This Policy is a
              part of an incorporated within, and is to be read along with, the
              applicable Terms and Conditions based on the user of the Qwik Ryde
              Platform.
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>
              By using the Qwik Ryde Platform and the Services, you agree and
              consent to the collection, transfer, use, storage, disclosure and
              sharing of your information as described and collected by us in
              accordance with this Policy. If you do not agree with the Policy,
              please do not use or access the Qwik Ryde Platform.
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>
              If you have questions about this Privacy Policy, please contact us
              through email address provided on our website and/or Mobile
              Application.
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>1. DEFINITIONS</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              Unless otherwise provided in this Privacy Policy, the terms
              capitalized in the Privacy Policy shall have the meaning as
              provided hereunder:
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              {" "}
              a. “Drivers” means independent third-party vehicle operators or
              riders who wish to offer services on the Qwik Ryde Platform to a
              User.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              b. “Co-branded Services” shall have the meaning assigned to the
              term in paragraph 4(c) hereto.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              c. “Customer” shall mean a person who wishes to receive services
              of the Driver on the Qwik Ryde Platform.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              d. “Device” shall mean computer, mobile or other device used to
              access the Services.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              e. “Device Identifier” shall mean IP address or other unique
              identifier for the Device.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              f. “Mobile Application” shall mean application provided by us on
              the Device to access the Services.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              g. “Mobile Device Information” shall have the meaning assigned to
              the term in paragraph 2(II) (e) (ii) hereto.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              h. “Promotion” shall mean any contest and other promotions offered
              by us.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              i. “Protected Information” shall mean such categories of
              information that could reasonably be used to identify you
              personally, including your name, e-mail address, and mobile
              number.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              j. “Third Party” shall mean a third party service provider.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              k. “Usage Information” shall have the meaning assigned to the term
              in paragraph 2(II) (a) hereto.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>2. WHAT INFORMATION DO WE COLLECT?</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>I. INFORMATION YOU PROVIDE TO US</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              We may ask you to provide us with certain Protected Information.
              We may collect this information through various means and in
              various places through the Services, including account
              registration forms, contact us forms, or when you otherwise
              interact with us. When you sign up to use the Services, you create
              a user profile. We shall ask you to provide only such Protected
              Information which is for lawful purpose connected with our
              Services and necessary to be collected by us for such purpose.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              Information you give us - This includes information submitted when
              you:
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              o Create or update the Qwik Ryde account which may include your
              Email ID, Name, Address, Mobile Number, Gender, Date of birth,
              Login name, Password.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              o Use Our Services, we may collect and store information about you
              to process your requests and automatically complete forms for
              future transactions, including (but not limited to) your phone
              number, address, email, billing information etc.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>o Correspond with Qwik Ryde for customer support.</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>o Report problems for troubleshooting.</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              o If you sign up to use our Services as a vendor or Driver, we may
              collect location details, profile picture, copies of government
              identification documents and other details (KYC), vehicle related
              documents such as insurance, pollution certificate etc and such
              other documents which evidence the health or fitness of the
              vehicle to provide Services on the Qwik Ryde Platform, call and
              SMS details.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              o We collect background check and identity verification
              information of the Driver. This may include information such as
              driver history or criminal record (where permitted by law), and
              right to work. This information may be collected by an authorized
              vendor on the Company’s behalf.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              o In case you sign up as a Driver, enable features that require
              Qwik Ryde’s access to other applications on Your Device aiming to
              prevent frauds towards the Customers.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              o If you sign up to use our Services as an employee or as a
              stakeholder of a third party to whom the Company has an
              arrangement and has offered discount coupons/ or extended certain
              promotional offers, the Company may share any information provided
              by you with such third party to be utilized by them for limited
              internal business purposes only.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>II. INFORMATION WE COLLECT AS YOU ACCESS AND USE OUR SERVICES</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              a. In addition to any Protected Information or other information
              that you choose to submit to us, we and our third party service
              provider may use a variety of technologies that automatically (or
              passively) collect certain information whenever you visit or
              interact with the Services (“Usage Information”). This Usage
              Information may include the browser that you are using, the URL
              that referred you to our Services, all of the areas within our
              Services that you visit, and the time of day, among other
              information. In addition, we collect your Device Identifier for
              your Device. A Device Identifier is a number that is automatically
              assigned to your Device used to access the Services, and our
              computers identify your Device by its Device Identifier.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              b. Usage Information may be collected using a cookie. If you do
              not want information to be collected through the use of cookies,
              your browser allows you to deny or accept the use of cookies.
              Cookies can be disabled or controlled by setting a preference
              within your web browser or on your Device. If you choose to
              disable cookies or flash cookies on your Device, some features of
              the Services may not function properly or may not be able to
              customize the delivery of information to you. The Company cannot
              control the use of cookies (or the resulting information) by third
              parties, and use of third party cookies is not covered by our
              Privacy Policy.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>c. Location data:</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              § Driver: Qwik Ryde collects location data when the Qwik Ryde App
              is running in the foreground (app is open and on-screen) or
              background (app is not in use) of their mobile device. Qwik Ryde
              collects location data only when the Driver has enabled the icon
              “On-Duty” on the Qwik Ryde App.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              § Customers: We collect precise or approximate location data from
              the users’ mobile devices if they enable us to do so. Qwik Ryde
              collects this data from the time a ride or delivery is requested
              until it is finished, and any time the app is running in the
              foreground of their mobile device. We use this data to enhance
              your use of our apps, including improving pick-up locations,
              enabling safety features, and preventing and detecting fraud. Qwik
              Ryde collects the Driver’ location data, and links location data
              collected during a trip with their Customer’s account, even if the
              Customer has not enabled us to collect location data from their
              device. This enables us to offer services to the Customers like
              receipt generation and customer support.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>d. Information Third Parties provide about You:</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              We may, from time to time, supplement the information we collect
              about you through our website or Mobile Application or Services
              with outside records from third parties.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>e. INFORMATION COLLECTED BY MOBILE APPLICATIONS</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              i. Our Services are primarily provided through the Mobile
              Application. We may collect and use technical data and related
              information, including but not limited to, technical information
              about your device, system and application software, and
              peripherals, that is gathered periodically to facilitate the
              provision of software updates, product support and other services
              to you (if any) related to such Mobile Applications.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              ii. When you use any of our Mobile Applications, the Mobile
              Application may automatically collect and store some or all of the
              following information from your mobile device (“Mobile Device
              Information”), in addition to the Device Information, including
              without limitation:
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              § Your preferred language and country site (if applicable)
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>§ The manufacturer and model of your mobile device</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>§ Your mobile operating system</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>§ The type of mobile internet browsers you are using</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>§ Your geolocation</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              iii. Information about how you interact with the Mobile
              Application and any of our web sites to which the Mobile
              Application links, such as how many times you use a specific part
              of the Mobile Application over a given time period, the amount of
              time you spend using the Mobile Application, how often you use the
              Mobile Application, actions you take in the Mobile Application and
              how you engage with the Mobile Application
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              iv. Information to allow us to personalize the services and
              content available through the Mobile Application
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              v. Data from SMS/ text messages upon receiving Device permissions
              for the purposes of (i) issuing and receiving one-time passwords
              and other device verification, and (ii) automatically filling
              verification details during financial transactions, either through
              us or a third-party service provider, in accordance with
              applicable law. We do not share or transfer SMS/ text message data
              to any third party other than as provided under this Privacy
              Policy.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              vi. If you are a vendor or a Driver, we will, additionally, record
              your calls with us made from the device used to provide Services,
              related call details, SMS details location and address details.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>3. USE OF INFORMATION COLLECTED</b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              i. Our primary goal in collecting your information is to provide
              you with an enhanced experience when using the Services. We use
              your information to closely monitor which features of the Services
              are used most, to allow you to view your trip history, rate trips,
              and to determine which features we need to focus on improving,
              including usage patterns and geographic locations to determine
              where we should offer or focus services, features and/or
              resources.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              ii. Based upon the Protected Information you provide us when
              registering for an account, we will send you a welcoming email to
              verify your username and password.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              iii. We use the information collected from our Mobile Application
              so that we are able to serve you the correct app version depending
              on your device type, for troubleshooting and in some cases,
              marketing purposes.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              iv. We use your Internet Protocol (IP) address to help diagnose
              problems with our computer server, and to administer our web
              site(s). Your IP address is used to help identify you, but
              contains no personal information about you.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              v. We will send you strictly service-related announcements on rare
              occasions when it is necessary to do so. For instance, if our
              Services are temporarily suspended for maintenance, we might send
              you an email. If you do not wish to receive them, you have the
              option to deactivate your account.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              vi. We may use the information obtained from you to prevent,
              discover and investigate violations of this Privacy Policy or any
              applicable terms of service or terms of use for the Mobile
              Application, and to investigate fraud, chargeback or other
              matters.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              vii. We provide some of your Protected Information (such as your
              name, pick up address, contact number) to the Driver who accepts
              your request for transportation so that the Driver may contact and
              find you.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              viii. In case of the Customers, we use the geo-location
              information for various purposes, including for such Customers to
              be able to view the Driver in your area that are close to your
              location to provide services to You, to automatically fetch your
              location when you open the Qwik Ryde App, for the Driver to
              identify the pickup location and to allow you (if you choose
              through any features we may provide) to share this information
              with other people for your safety.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              ix. In case of the Driver, we use the geo-location information for
              (only when the Driver activates the icon “On-Duty” on the Qwik
              Ryde App) the Driver to receive orders close to his location even
              when the Qwik Ryde App is not in use or closed, to enable the
              Customers track the distance of the Driver from their location for
              pick up, to share the exact location for the safety of the
              Customers.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              x. In addition, we may use your Protected Information or Usage
              Information that we collect about you: (a) to provide you with
              information or services or process transactions that you have
              requested or agreed to receive including to send you electronic
              newsletters, or to provide you with special offers or promotional
              materials on behalf of us or third parties; (b) to enable you to
              participate in a variety of the Services’ features such as online
              or mobile entry sweepstakes, contests or other promotions; (c) to
              contact you with regard to your use of the Services and, in our
              discretion, changes to the Services and/or the Services’ policies;
              (d) for internal business purposes; (e) for inclusion in our data
              analytics; and (f) for purposes disclosed at the time you provide
              your information or as otherwise set forth in this Privacy Policy.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              xi. We do not use the information collected from you for targeted
              advertising.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>
              4. HOW AND WHEN DO WE DISCLOSE INFORMATION TO THIRD PARTIES
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              We do not sell, share, rent or trade the information we have
              collected about you, other than as disclosed within this Privacy
              Policy or at the time you provide your information. Following are
              the situations when information may be shared:
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>a. WHEN YOU AGREE TO RECEIVE INFORMATION FROM THIRD PARTIES.</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              You may be presented with an opportunity to receive information
              and/or marketing offers directly from third parties. If you do
              agree to have your Protected Information shared, your Protected
              Information will be disclosed to such third parties and all
              information you disclose will be subject to the privacy policy and
              practices of such third parties. We are not responsible for the
              privacy policies and practices of such third parties and,
              therefore, you should review the privacy policies and practices of
              such third parties prior to agreeing to receive such information
              from them. If you later decide that you no longer want to receive
              communication from a third party, you will need to contact that
              third party directly.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>b. THIRD PARTIES PROVIDING SERVICES ON OUR BEHALF</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              As You access and use our services, we collect certain information
              from You, including but not limited to, phone number, email
              address, device make-details, and IP address. By accessing and
              using the Services, You expressly consent to the sharing and
              disclosure of your information so collected, with our third-party
              service providers, business partners, and agents. For example,
              your information may be shared with third-party services like Get
              Simpl to ensure fraud prevention and Pay Later check out
              experience. Please refer to the third-party privacy policy for
              more details before using their services on the Qwik Ryde
              Platform.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              We use third party companies and individuals to facilitate our
              Services, provide or perform certain aspects of the Services on
              our behalf – such as host the Services, design and/or operate the
              Services’ features, track the Services’ analytics, process
              payments, engage in anti-fraud and security measures, provide
              customer support, provide geo-location information to our drivers,
              enable us to send you special offers, host our job application
              form, perform technical services (e.g., without limitation,
              maintenance services, database management, web analytics and
              improvement of the Services‘ features), or perform other
              administrative services. These third parties will have access to
              user information, including Protected Information to only carry
              out the services they are performing for you or for us. Each of
              these third parties including are required to ensure the same
              level of data protection as us and are obligated not to disclose
              or use Protected Information for any other purpose.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              Analytics Third Party may set and access their own cookies, web
              beacons and embedded scripts on your Device and they may otherwise
              collect or have access to information about you, including
              non-personally identifiable information
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              We use a third-party hosting provider who hosts our support
              section of our website. Information collected within this section
              of our website by such third party is governed by our Privacy
              Policy.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>c. CO-BRANDED SERVICES.</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              Certain aspects of the Services may be provided to you in
              association with third parties (“Co-Branded Services”) such as
              credit houses, loan providers, sponsors and charities, and may
              require you to disclose Protected Information to them. Such
              Co-Branded Services will identify the third party. If you elect to
              register for products and/or services through the Co-Branded
              Services, you shall have deemed to consent to providing your
              information to both us and the third party. Further, if you
              sign-in to a Co-Branded Service with a username and password
              obtained through our Services, your Protected Information may be
              disclosed to the identified third parties for that Co-Branded
              Service and will be subject to their posted privacy policies.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>d. CONTESTS AND PROMOTIONS</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              We may offer Promotions through the Services that may require
              registration. By participating in a Promotion, you are agreeing to
              official rules that govern that Promotion, which may contain
              specific requirements of you, including, allowing the sponsor of
              the Promotion to use your name, voice and/or likeness in
              advertising or marketing associated with the Promotion. If you
              choose to enter a Promotion, you agree that your Protected
              Information may be disclosed to third parties or the public in
              connection with the administration of such Promotion, including,
              in connection with winner selection, prize fulfillment, and as
              required by law or permitted by the Promotion’s official rules,
              such as on a winners list.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>e. ADMINISTRATIVE AND LEGAL REASONS</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              We cooperate with Government and law enforcement officials and
              private parties to enforce and comply with the law. Thus, we may
              access, use, preserve, transfer and disclose your information
              (including Protected Information, IP address, Device Information
              or geo-location data), to Government or law enforcement officials
              or private parties as we reasonably determine is necessary and
              appropriate: (i) to satisfy any applicable law, regulation,
              subpoenas, Governmental requests or legal process; (ii) to protect
              and/or defend the Terms and Conditions for online and mobile
              Services or other policies applicable to any online and mobile
              Services, including investigation of potential violations thereof;
              (iii) to protect the safety, rights, property or security of the
              Company, our Services or any third party; (iv) to protect the
              safety of the public for any reason; (v) to detect, prevent or
              otherwise address fraud, security or technical issues; and /or
              (vi) to prevent or stop activity we may consider to be, or to pose
              a risk of being, an illegal, unethical, or legally actionable
              activity.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>f. WHEN YOU SHARE INFORMATION</b>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              Protected Information may be collected and shared with
              third-parties if there is content from the Mobile Application that
              you specifically and knowingly upload to, share with or transmit
              to an email recipient, online community, website, or to the
              public, e.g. uploaded photos, posted reviews or comments, or
              information about you or your ride that you choose to share with
              others through features which may be provided on our Services.
              This uploaded, shared or transmitted content will also be subject
              to the privacy policy of the email, online community website,
              social media or other platform to which you upload, share or
              transmit the content.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>
              5. THIRD PARTY CONTENT AND LINKS TO THIRD PARTY SERVICES
            </span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              The Services may contain content that is supplied by a third
              party, and those third parties may collect website usage
              information and your Device Identifier when web pages from any
              online or mobile Services are served to your browser. In addition,
              when you are using the Services, you may be directed to other
              sites or applications that are operated and controlled by third
              parties that we do not control. We are not responsible for the
              privacy practices employed by any of these third parties. For
              example, if you click on a banner advertisement, the click may
              take you away from one of our websites onto a different web site.
              These other web sites may send their own cookies to you,
              independently collect data or solicit Protected Information and
              may or may not have their own published privacy policies. We
              encourage you to note when you leave our Services and to read the
              privacy statements of all third party web sites or applications
              before submitting any Protected Information to third parties.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>6. SOCIAL MEDIA FEATURES AND WIDGETS</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              Our online and mobile Services may include social media features,
              such as the Facebook Like button, and widgets such as a “Share
              This” button, or interactive mini-programs that run on our online
              and mobile Services. These features may collect your IP address,
              photograph, which page you are visiting on our online or mobile
              Services, and may set a cookie to enable the feature to function
              properly. Social media features and widgets are either hosted by a
              third party or hosted directly on our online Services. Your
              interactions with these features and widgets are governed by the
              privacy policy of the company providing them.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>7. INFORMATION COLLECTED BY DRIVER</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              This Privacy Policy shall not cover the usage of any information
              about you which is obtained by the Driver while providing you a
              ride on a bike booked using the Services, or otherwise.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              If you are a Driver, we may share your name, vehicle number,
              driving license number, phone number and/or profile picture (if
              applicable), tracking details with our customers to provide them
              the Services.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>8. CHANGE OF INFORMATION AND CANCELLATION OF ACCOUNT</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          a. You are responsible for maintaining the accuracy of the information
          you submit to us, such as your contact information provided as part of
          account registration. If your Protected Information changes, or if you
          no longer desire our Services, you may correct, delete inaccuracies,
          or amend information by making the change on our member information
          page or by contacting us through email address mentioned on our
          website or Mobile Application. We will make good faith efforts to make
          requested changes in our then active databases as soon as reasonably
          practicable.
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          b. You may also cancel or modify your communications that you have
          elected to receive from the Services by following the instructions
          contained within an e-mail or by logging into your user account and
          changing your communication preferences.
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          c. If upon modifying or changing the information earlier provided to
          Us, we find it difficult to permit access to our Services to you due
          to insufficiency/ inaccuracy of the information, we may, in our sole
          discretion terminate your access to the Services by providing you a
          written notice to this effect on your registered email id.
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          d. If you wish to cancel your account or request that we no longer use
          your information to provide you services, contact us through email
          address mentioned on the trip bill received. We will retain your
          Protected Information and Usage Information (including geo-location)
          for as long as your account with the Services is active and as needed
          to provide you services. Even after your account is terminated, we
          will retain your Protected Information and Usage Information
          (including geo-location, trip history, and transaction history) for
          such statutory time-period as needed to comply with our legal and
          regulatory obligations in accordance with the applicable laws of the
          country, to resolve disputes, conclude any activities related to
          cancellation of an account, investigate, or prevent fraud and other
          inappropriate activity related to your account. After completion of
          such statutory period, your data may either be deleted from our
          database or be anonymize and aggregated, and then may be held by us as
          long as necessary for us to provide our Services effectively, but our
          use of the anonymize data will be solely for internal analytic
          purposes.
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>&nbsp;</p>
        <p className={styles.definitions}>
          <b>9. SECURITY</b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              The Protected Information and Usage Information we collect is
              securely stored within our databases, and we use standard,
              industry-wide, commercially reasonable security practices such as
              encryption, firewalls and SSL (Secure Socket Layers) for
              protecting your information. However, as effective as encryption
              technology is, no security system is impenetrable. We cannot
              guarantee the security of our databases, nor can we guarantee that
              information you supply won't be intercepted while being
              transmitted to us over the Internet or wireless communication, and
              any information you transmit to the Company you do at your own
              risk. We recommend that you not disclose your password to anyone.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>10. GRIEVANCE OFFICER</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <span>
              Qwik Ryde Manager would be appointed the grievance officer for the
              purposes of the rules drafted under the Information Technology
              Act, 2000, who may be contacted at grievances@Qwikryde.com. You
              may address any grievances you may have in respect of this privacy
              policy or usage of your Protected Information or other data to
              him.
            </span>
          </span>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.definitions}>
          <b>
            <span>11. CHANGES TO THE PRIVACY POLICY</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.yourPrivacyMattersToTripet}>
          From time to time, we may update this Privacy Policy to reflect
          changes to our information practices. Any changes will be effective
          immediately upon the posting of the revised Privacy Policy. If we make
          any material changes, we will notify you by email (sent to the e-mail
          address specified in your account) or by means of a notice on the
          Services prior to the change becoming effective. We encourage you to
          periodically review this page for the latest information on our
          privacy practices.
        </p>
      </div>
      <div className={styles.supertoroid1}>
        <img
          className={styles.supertoroidIridescentIcon}
          alt=""
          src="/supertoroidiridescent@2x.png"
        />
      </div>
      <img
        className={styles.dipyramidGlass1}
        alt=""
        src="/dipyramid-glass-1@2x.png"
      />
      <img
        className={styles.flyingCubesGlass1}
        alt=""
        src="/flying-cubes-glass-1@2x.png"
      />
      <b className={styles.b}>बचत भी.. अरम भी....</b>
      <div className={styles.homeParent}>
        <div className={styles.home1} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.aboutUs1}>About Us</div>
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

export default Privacypolicy;
