import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Termsforuser1.module.css";
const Termsforuser1 = () => {
  const navigate = useNavigate();

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacypolicy");
  }, [navigate]);

  const onDriverTermsTextClick = useCallback(() => {
    navigate("/termsforuser");
  }, [navigate]);

  const onPOSTCARDTextClick = useCallback(() => {
    navigate("/carrer1");
  }, [navigate]);

  const onCARRERTextClick = useCallback(() => {
    navigate("/carrer");
  }, [navigate]);

  const onDRIVERTextClick = useCallback(() => {
    navigate("/termsforuser");
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
    <div className={styles.termsforuser}>
      <div className={styles.termsforuserChild} />
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
        <b className={styles.customerTerms}>customer terms</b>
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
      <div className={styles.termsCondition}>{`TERMS & CONDITION`}</div>
      <div className={styles.sphere}>
        <img
          className={styles.sphereBlueGlossyIcon}
          alt=""
          src="/sphereblueglossy@2x.png"
        />
      </div>
      <div className={styles.thisDocumentIsContainer}>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>
              THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF INFORMATION
              TECHNOLOGY ACT, 2000 AND RULES THEREUNDER AS APPLICABLE AND THE
              PROVISIONS PERTAINING TO ELECTRONIC RECORDS IN VARIOUS STATUTES AS
              AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000.
            </span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>
              Qwik Ryde India Private Limited(“Company”) provides
              technology-based services for booking two-wheelers (“Vehicle”) to
              you (“You” or “Users”) and you agree to obtain certain Services
              (defined hereinafter) offered by third party drivers or vehicle
              operators ("Driver") by means of the Company’s website and the
              mobile application “Qwik Ryde” (“Platform”). All the Services
              provided by the Company to you would be by means of your use of
              the Platform. These Terms of Use shall govern the relationship
              between you (the customer) and the Company in the course of
              provision of the Services. These terms of use (“Terms of Use”)
              mandate the terms on which users using the Services will be
              governed.
            </span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>
              Please read the Terms of Use carefully before using the Platform
              or registering on the Platform or accessing any material or
              information through the Platform.
            </span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>
              Use of and access to the Platform is offered to You upon the
              condition of acceptance of all the terms, conditions and notices
              contained in this Terms of Use and Privacy Policy, along with any
              amendments made by the Company at its sole discretion and posted
              on the Platform from time to time.
            </span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.services}>
          <b>
            <span>1. SERVICES</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              The Platform provides the following services (“Services”) to You:
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. It allows you to pick up and drop off packages from one
              location to the other through the Driver (“Package Services”).
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. It allows you to avail transportation services provided by the
              Driver on our Platform (“Transportation Services”).
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. It allows you to pick up items/products from merchants of a
              store and get the same delivered to you by the Delivery Partners
              ("Delivery Services").
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.services}>
          <span>
            <b>2. GENERAL TERMS OF USE</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. You must be at least 18 years of age, or the age of legal
              majority in your jurisdiction (if different than 18 years), to
              obtain an account.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. The Service is not available for use by persons under the age
              of 18 years. You shall not authorize third parties to use your
              account. You shall not allow persons under the age of 18 years to
              receive transportation or logistics services from the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. If the Company becomes aware or, it acquires credible knowledge
              that You have misled us regarding your age, then the Company
              reserves its rights to deactivate the account and You will not be
              liable to raise any claims including any insurance from the
              Company.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. The Company shall take your booking request and forward it to
              the Driver through an app-based device operating on GPS-GPRS based
              device available with the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              5. The Company may monitor and record calls made to the Driver,
              for the purpose of training and improving customer care services,
              including complaint.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              6. The Driver shall have the sole discretion to accept or reject
              each request for the Service.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              7. If the Driver accepts the booking request made by the Company,
              a notification will be sent you with the information regarding the
              Driver including its name, contact number etc.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              8. The Company shall make reasonable efforts to bring you in
              contact with the Driver in order to obtain the Service subject to
              availability of the Driver in or around your location at the time
              of your booking request made to the Company.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              9. For the avoidance of doubt, it is clarified that the Company
              itself does not provide the Services. It is the Driver who shall
              render the Services to you.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              10. Even after acceptance of booking, the Driver may not reach
              your pick up location or decide not to render his services. In
              which event the Company shall not be held liable.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              11. You warrant that the information you provide to the Company is
              accurate and complete. The Company is entitled at all times to
              verify the information that you have provided. You may only access
              the Services using authorized means.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              12. The Company shall not be liable if you do not download the
              correct Platform or visit the appropriate web portal.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              13. The Company reserves the right to discontinue or introduce any
              of the modes of booking Vehicles and/or for providing Package
              Services.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              14. You will refrain from doing anything which we reasonably
              believe to be disreputable or capable of damaging our reputation
              and will comply with all applicable laws of the Republic of India.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              15. You will treat the Driver with respect and not cause damage to
              their Vehicle or engage in any unlawful, threatening, harassing,
              abusive behavior or activity whilst using their Vehicle;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              16. The Company is not responsible for the behavior, actions or
              inactions of drivers of Vehicles, Driver or quality of Vehicle
              which you may use. Any contract for the provision of Vehicle for
              the Services is exclusively between you and the Driver and the
              Company is not a party to the same.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              17. You agree that You shall not request for Package Services for
              Items which are illegal, hazardous, dangerous, or otherwise
              restricted or constitute Items that are prohibited by any statute
              or law or regulation or the provisions of this Terms of Use.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              18. You also agree that you shall not request for dispatch of
              item(s) which require a special transportation permit or require
              any special license under applicable law.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              19. The Company does not check or verify the packages that are
              being picked up and dropped off on behalf of You or the Items that
              are being delivered to You by the Driver, and therefore the
              Company shall have no liability with respect to the same. However,
              if it comes to the knowledge of the Company that You have packaged
              any illegal or dangerous substance or availed the Package Services
              using the Platform to deliver any illegal or dangerous substance,
              the Company shall have the right to report You to the government
              authorities and take other appropriate legal actions against You.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              20. You agree that before requesting a Package Service, You are
              well aware of the contents of the package sent or requested by You
              through registered Driver, and that such contents are legal and
              within limits of transportation under any applicable laws. Such
              contents shall not be restricted and/or banned and/or dangerous
              and/or prohibited for carriage (such items include, but are not
              limited to, radio-active, incendiary, corrosive or flammable
              substances, hazardous chemicals, explosives, firearms or parts
              thereof and ammunition, firecrackers, cyanides, precipitates, gold
              and silver ore, bullion, precious metals and stones, jewellery,
              semi-precious stones including commercial carbons or industrial
              diamonds, currency (paper or coin) of any nationality, securities
              (including stocks and bonds, share certificates and blank signed
              share transfer forms), coupons, stamps, negotiable instruments in
              bearer form, cashier's cheques, travellers’ cheques, money orders,
              passports, credit/debit/ATM cards, antiques, works of art, lottery
              tickets and gambling devices, livestock, fish, insects, animals,
              plants and plant material, human corpses, organs or body parts,
              blood, urine and other liquid diagnostic specimens, hazardous or
              bio-medical waste, wet ice, pornographic materials, contraband,
              bottled alcoholic beverages or any intoxicant or narcotics and
              psychotropic substances or any other prohibited material or
              material for the transportation of which specific
              authorisation/license is required under applicable laws).
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              21. You also agree that, upon becoming aware of the commission any
              offence by You or Your intention to commit any offence upon
              initiating a Package Service or during a Package Service of any
              Item(s) restricted under applicable law, the Driver may report
              such information to Company or to the law enforcement authorities.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              22. You also agree that any payment for the products/goods ordered
              by you in respect of the Delivery Services shall be at your own
              risk and the payment shall be settled directly between you and the
              Driver. Qwik Ryde does not assume any responsibility or liability
              whatsoever for any damage/deficiency or loss of the
              products/goods. The Delivery Services are provided to You directly
              by the Driver and Qwik Ryde merely acts as a technology platform
              to facilitate delivery initiated on the Platform and Qwik Ryde
              does not assume any responsibility or liability for any form of
              deficiency of services on part of the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              23. You agree that you will be solely responsible for the packages
              handed over to the Driver and shall be prudent not to handover
              expensive items to the Driver. You will be solely responsible for
              any loss or damage to the goods, in case of any theft or any other
              incidents to the packages by the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              24. You can initiate a transaction on the Platform by which You
              may (through the help of a Driver) send packages at a particular
              location. The Package Services are provided to You directly by the
              Driver and Qwik Ryde merely acts as a technology platform to
              facilitate transactions initiated on the Platform and Qwik Ryde
              does not assume any responsibility or liability for any form of
              deficiency of services on part of the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              25. By using the Platform of the Company, you further agree that:
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              1. You will download the Application for your sole, personal use
              and will not resell it to a third party;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>2. You will not authorize others to use your account;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              3. You will not assign or otherwise transfer your account to any
              other person or legal entity;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              4. You will not use the Application for unlawful purposes,
              including but not limited to sending or storing any unlawful
              material or for fraudulent purposes;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              5. You will not use the Application to cause nuisance, annoyance
              or inconvenience;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>6. You will not impair the proper operation of the network;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              7. You will not try to harm the Application in any way whatsoever;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              8. You will not copy, or distribute the Application or other
              Company Content without written permission from the Company;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              9. You will keep secure and confidential your account password or
              any identification which the Company may provide you which allows
              access to the Application;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              10. You will provide the Company with whatever proof of identity
              we may request;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              11. In order for us to facilitate UPI payments, we are required to
              conduct a bank account validation and Virtual Payment Address
              (“VPA”) validation. We conduct these validations through a
              third-party service provider.
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              12. You will only use an access point or atleast a 3G data account
              (AP) which you are authorized to use;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              13. You will not use the Application with an incompatible or
              unauthorized device;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              14. If within 24 hours a user creates more than one account on the
              same device, Qwik Ryde has the right to terminate his/her account;
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              26. The Company reserves the right to immediately terminate your
              use of the Application should you not comply with the any of the
              rules provided in the Terms of Use.
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.services}>
          <b>
            <span>3. PAYMENT FOR SERVICES</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. You shall be required to pay charges for the Services used by
              you either by using the online payment gateway provided in the
              Platform or by paying cash to the Driver. The Company collects the
              charges for the Services on behalf of the Driver after obtaining
              authorisation from the Driver and the payment is remitted to the
              Driver’s bank account registered with the Company.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. In respect of the Delivery Services, you will be required
              settle the payments incurred towards the good/products purchased
              from the merchants directly with the Driver. You agree and
              acknowledge that Qwik Ryde is not in any way be responsible for
              the settlement between you and the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. The rates of the Services shall be notified on the website and
              mobile application of the Company.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. The charges for the Services shall be updated or amended from
              time to time at the sole discretion of the Company and it shall be
              your responsibility to remain informed about the charges for the
              Services.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              5. You agree that you will pay for all Services you purchase from
              the Driver either by way of online payment or by cash. In the
              event the payment cannot be accepted through the online payment or
              any other mode, you shall be required to pay the charges for the
              Services availed by way of cash.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              6. Any payment made is non-refundable. At the end of the trip for
              the Transportation Services, we will facilitate for you to receive
              a copy of the invoice from the Company on your registered e-mail
              account with the Company.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              7. You shall pay the service fees for availing the Package
              Services and/or the Delivery Services at the end of the completion
              of such services, as may be displayed to You on the Platform. You
              cannot initiate another Package Services and/or the Delivery
              Services until You have paid for the previously completed such
              Package Services and/or the Delivery Services.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              8. It is clarified that the term “Trip” includes a trip for
              transportation of a passenger by the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.services}>
          <b>
            <span>4. INSURANCE</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>&nbsp;</p>
        <p className={styles.thisDocumentIsAnElectronic}>
          1. The Company provides an insurance policy for the Users availing the
          Transportation Services and the information on the same is available
          on the Platform once the Services are availed by the Users.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          2. The customer will be required to indicate the accurate address for
          the delivery of the parcel/good and also an accurate return address in
          case the parcel/good cannot be delivered for any reason whatsoever at
          the delivery address.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          3. It is clarified that the transit will commence from the moment the
          parcel/good is securely handed over to the Driver by the customer till
          the moment the Driver arrives at the delivery address or as near to
          the indicated delivery address as may be possible.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          4. In the event the Driver is not able to deliver the parcel/good at
          the indicated address for any reason whatsoever then the Company shall
          not be liable for any damages arising to the parcel/goods while
          delivering the parcel/goods at the return address as provided by the
          customer.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>5. LIABILITY</p>
        <p className={styles.thisDocumentIsAnElectronic}>
          1. The information, recommendations provided to you on or through the
          website, or the Platform is for general information purposes only and
          does not constitute advice.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          2. The Company will reasonably keep the website and the application
          and its contents correct and up to date but does not guarantee that
          the website and/or application are free of errors, defects, malware
          and viruses or that the website and/or application are correct, up to
          date and accurate. The Company shall not be liable for any damage
          arising from the same.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          3. The Company shall further not be liable for damages resulting from
          the use of or the inability to use the website or the application,
          including – but not limited to – damages resulting from failure or
          delay in delivery of electronic communications, interception or
          manipulation of electronic communications by third parties or by
          computer programs used for electronic communications and transmission
          of viruses.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          4. The quality of the Services requested through the use of the
          Platform is entirely the responsibility of the Driver who ultimately
          provides such Services to you and the Company is not liable for the
          same. However, any complaints about the Services provided by the
          Driver should be submitted to the Company by an email as notified from
          time to time.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          5. The Company shall not in any way be responsible for any claims
          raised by You in respect of the products/goods ordered by you in
          respect of the Delivery Services shall be at your own risk and the
          payment shall be settled directly between you and the Driver. Qwik
          Ride does not assume any responsibility or liability whatsoever for
          any damage/deficiency or loss of the products/goods.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>&nbsp;</p>
        <p className={styles.services}>
          <span>
            <b>6. INTELLECTUAL PROPERTY RIGHTS</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. The Company is the sole owner and lawful licensee of all the
              rights to the web site, Platform or any other digital media and
              its contents. The content means its design, layout, text, images,
              graphics, sounds, video, etc. the website, Platform or any other
              digital media content embody trade secrets and intellectual
              property rights protected under worldwide copyright and other
              laws. All titles, ownership and intellectual property rights in
              the website and its content shall remain with the Company, its
              affiliates, agents, authorized representatives or licensor's as
              the case may be.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. All rights not otherwise claimed under this Terms of Use or by
              the Company are hereby reserved. The information contained in this
              Platform and/or website is intended, solely to provide general
              information for the personal use of the reader, who accepts full
              responsibility for its use.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. The Company does not represent or endorse the accuracy or
              reliability of any information or advertisement contained on,
              distributed through, or linked, downloaded or accessed from any of
              the services contained on this website or Platform, or the quality
              of any products, information or other materials displayed, or
              obtained by you as a result of any product, information or other
              materials displayed, or obtained by you as a result of an
              advertisement or any other information or offer in or in
              connection with the service.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. All related icons and logos are registered trademarks or
              service marks or word marks of the Company in various
              jurisdictions and are protected under applicable copyrights,
              trademarks and other proprietary rights laws. The unauthorized
              copying, modification, use or publication of these marks is
              strictly prohibited.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              5. All the contents on this website and/or Platform is copyright
              of the Company except the third party content and link to third
              party website on our website and/or Platform.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              6. Subject to your compliance with these Terms, the Company grants
              you a limited non-exclusive, non-transferable license to download
              and install a copy of the Platform on a single mobile device that
              you own or control and to run such copy of the Platform solely for
              your own personal use.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>7. You shall not do the following:</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. license, sublicense, sell, resell, transfer, assign, distribute
              or otherwise commercially exploit or make available to any third
              party the Platform in any way;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. modify or make derivative works based upon the Platform;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. Create Internet "links" or "frame" or "mirror" any application
              on any other server or wireless or Internet-based device.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>4. Reverse engineer or access the Platform in order to:</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>1. design or build a competitive product or service,</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. design or build a product using similar ideas, features,
              functions or graphics of the Platform, or
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. copy any ideas, features, functions or graphics of the
              Platform, or
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. Launch an automated program or script, including, but not
              limited to, web spiders, web crawlers, web robots, web ants, web
              indexers, bots, viruses or worms, or any program which may make
              multiple server requests per second, or unduly burdens or hinders
              the operation and/or performance of the Platform.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.services}>
          <span>
            <b>7. THIRD-PARTY LINKS</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. During the use of the website or the application, links to
              websites that are owned and controlled by third parties may be
              provided from time to time in order to enter into correspondence
              with, purchase goods or services from, participate in promotions
              of third parties. These links take you off the website, the
              application and are beyond the Company's control.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. During use of the website and the application, you may enter
              into correspondence with, purchase goods and/or services from, or
              participate in promotions of third party Driver, advertisers or
              sponsors showing their goods and/or services through a link on the
              website or through the application or Service. These links take
              you off the website, the application and the Service and are
              beyond the Company's control. You therefore visit or access these
              websites entirely at your own risk.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. Please note that these other websites may send their own
              cookies to users, collect data or solicit personal information,
              and you are therefore advised to check the terms of use or privacy
              policies on those websites prior to using them.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.services}>
          <b>8. TERM AND TERMINATION</b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. The contract between the Company and you is concluded for an
              indefinite period. You are entitled to terminate the Contract at
              all times by permanent deletion of the Platform installed on your
              mobile device, tablet or any electronic device capable of using
              the Platform thus disabling the use by you of the Platform and the
              Service.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. The Company is entitled to terminate the contract at all times
              and with immediate effect (by disabling your use of the
              application and the Service) if you: (a) violate or breach any
              term of these Terms of Use, or (b) in the opinion of the Company,
              misuse of the Platform or the Service.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. The Company is not obliged to give notice of the termination of
              the contract in advance. After termination the Company will give
              notice thereof in accordance with these Terms of Use.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. Neither party hereto shall be responsible for delays or
              failures in performance resulting from acts beyond its reasonable
              control and without its fault or negligence. Such excusable delays
              or failures may be caused by, among other things, strikes,
              lock-out, riots, rebellions, accidental explosions, floods,
              storms, acts of God and similar occurrences.
            </span>
          </span>
        </p>
        <p className={styles.services}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>9. INDEMNITY</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              You will indemnify and hold the Company harmless, from any and all
              claims, losses, liabilities, damages, expenses and costs
              (including attorneys’ fees and court costs) which result from a
              breach or alleged breach of these Terms of Use by you.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.services}>
          <span>
            <b>10. ASSIGNMENT</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              You may not assign your rights under these Terms of Use without
              prior written approval of the Company.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.services}>
          <b>
            <span>11. AMENDMENT</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              These Terms of Use may be amended from time to time and as and
              when required, at the discretion of the Company.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.services}>
          <b>12. SEVERABILITY</b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>&nbsp;</p>
        <p className={styles.thisDocumentIsAnElectronic}>
          If any provision or any part of a provision of these Terms of Use is
          invalid, unenforceable or prohibited by applicable laws of the
          Republic of India , such provision or part of provision shall be
          severed from these Terms of Use and shall be considered divisible as
          to such provision or part thereof and such provision or part thereof
          shall be inoperative and shall not be part of the consideration moving
          between you and the Company hereto and the remainder of these Terms of
          Use shall be valid and binding and of like effect as though such
          provision was not included herein.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>&nbsp;</p>
        <p className={styles.services}>
          <span>
            <b>13. NOTICES</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              The Company may give notice by means of a general notice on the
              Application, or by electronic mail to your email address on record
              in the Company's account information, or by written communication
              sent by regular mail to your address on record in Company's
              account information.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
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
      <div className={styles.termsforuserItem} />
      <b className={styles.customer}>CUSTOMER</b>
      <b className={styles.driver} onClick={onDRIVERTextClick}>
        DRIVER
      </b>
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

export default Termsforuser1;
