import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Termsforuser.module.css";
const Termsforuser = () => {
  const navigate = useNavigate();

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacypolicy");
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

  const onCUSTOMERTextClick = useCallback(() => {
    navigate("/termsforuser1");
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
    <div className={styles.termsforuser}>
      <div className={styles.termsforuserChild} />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <b className={styles.home}>HOME</b>
        <b className={styles.privacyPolicy} onClick={onPrivacyPolicyTextClick}>
          privacy policy
        </b>
        <b className={styles.safety}>SAFETY</b>
        <b className={styles.driverTerms}>driver terms</b>
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
              The Company provides technology-based services for (i)
              facilitating on-demand transportation services, (ii) users to pick
              up and drop off packages from one location to the other through
              the Driver (defined hereinafter) and (iii) Connect the users with
              merchants/stores and buy items from such stores and get them
              delivered to them by the Driver (collectively "Services") between
              Driver and commuters by means of the Company's website and the
              mobile application "Qwik Ryde" (" Portal"). The Services are
              provided by means of two-wheelers ("Vehicle") offered by third
              party vehicle operators or riders ("Driver") who wish to offer
              such Services through the Vehicles.
            </span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>{`On the basis of the representations and warranties provided by the Driver, the Company has agreed to list the Vehicle(s) on the Portal to enable the Driver to provide the Services through the Portal in accordance with the terms and conditions as hereinafter provided ("T&Cs").`}</span>
          </b>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>1. GENERAL COVENANTS</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. The Driver must be at least 18 years of age, or the age of
              legal majority in your jurisdiction (if different than 18 years),
              to provide Services.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. The Company shall take the booking request and forward it to
              the Driver through an app-based device operating on GPS-GPRS based
              device installed in the Vehicle and the Driver is prohibited from
              accepting a ride through street hailing while using the Portal.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. The Company reserves the right to discontinue or introduce any
              of the modes of booking Vehicles and/or for providing services for
              the transmission of parcels. At no time whatsoever shall the
              Driver tamper, damage, open or do anything to the parcels that
              he/she is not specifically permitted to do during the course of
              providing the Services.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. The Company may monitor and record calls made to the Users, for
              the purpose of training and improving customer care services,
              including complaint handling.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              5. The Driver shall not reject request of services from a
              Customer, except when deemed absolutely necessary and/or under
              exceptional circumstances.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              6. The Driver warrants that the information it provides to the
              Company is accurate and complete. The Company is entitled at all
              times to verify the information that has been provided.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              7. The Driver will refrain from doing anything which the Company
              reasonably believes to be disreputable or capable of damaging the
              Company's reputation and will comply with all applicable laws of
              the Republic of India.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>8. In relation to the Portal, the Driver agrees to:</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. not authorize others to use his account on the Portal;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. not assign or otherwise transfer his account to any other
              person or legal entity;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. not use the Portal for unlawful purposes, including but not
              limited to sending or storing any unlawful material or for
              fraudulent purposes;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. not use the Portal to cause nuisance, annoyance or
              inconvenience;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>5. not impair the proper operation of the network;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>6. not try to harm the Portal in any way whatsoever;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              7. not copy, or distribute any content on the Portal without
              written permission from the Company;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              8. keep secure and confidential the account password or any
              identification which the Company may provide to the Driver which
              allows access to the Portal;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              9. Provide the Company with whatever proof of identity the Company
              may request.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. The Company reserves the right to immediately terminate the use
              of the Portal by the Driver if he does not comply with any of the
              above rules in Clause 1.6.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              9. The Driver shall ensure to not logged in for more than twelve
              (12) hours on a calendar day.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>2. PAYMENT TERMS</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          1. The Company has the discretion to charge any such fees from the
          Driver as updated on the Portal from time to time.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          2. The Company charges a convenience fee from the commuters for
          providing the Services through the Driver. Further, the Driver
          authorizes the Company to collect the service/travel fee ("Fare") from
          the users on behalf of the Driver.
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          3. If the Fare is collected in cash by the Driver it will get adjusted
          against the convenience fee.
        </p>
        <p className={styles.blankLine}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>3. REPRESENTATIONS AND WARRANTIES</b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>The Driver and the Company represent that:</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. they have all requisite power and authority to, deliver and
              perform the obligations imposed herein;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. the execution and performance of the obligations do not and
              will not violate any provision of any existing agreement, law,
              rule, regulation, any order or judicial pronouncement which is
              applicable to each party;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. They have not been convicted by any court in India or any other
              country of any crimes including but not limited to involving moral
              turpitude.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>The Driver hereby represents that:</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. he has the requisite authority or assignment to drive the
              Vehicle and there are no restrictions with respect to the use of
              the Vehicle that will hinder the Driver from the performance of
              the Services using the Portal;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`2. he has all rights, licenses, and permits as may be required under applicable laws to perform the Service in accordance with these T&Cs;`}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. he is in compliance with the Motor Vehicles Act, 1988, Food
              Safety and Standards Act 2006 and other applicable laws as
              required to be complied with by any person driving Vehicles;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. He shall hold and keep updated/renewed licenses, insurance and
              permits necessary for the use of Vehicle.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              5. he shall not drive rashly, shall follow traffic regulations and
              all applicable laws during the performance of the Services, not
              consume liquor/cigarette/bidi, or any other kind of intoxicant
              while performing the Services and shall have and hold a valid
              driving license and registration/insurance papers for the Vehicle
              at all times. The Driver shall not take any personal calls except
              in the event of an emergency, without prejudicing the safety of
              the Vehicle and the customer. The Driver shall take all calls from
              the customer and the Company only after stopping the Vehicle at an
              appropriate location to take the call, without being a hindrance
              to the traffic around him or without violating any traffic rules.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              6. He shall provide the services in a courteous and professional
              manner as reasonably expected by a service provider providing the
              Services.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              7. He shall at all times during which he is undertaking the
              Services, maintain dress, appearance, and hygiene codes.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              8. he shall perform its obligations with promptness and use
              reasonable care and skill and in accordance with standards of
              diligence, care, skill, quality and integrity to be reasonably
              expected of an experienced and reputable provider of Services;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              9. he shall provide Services in accordance with all the
              specifications that may be prescribed and formulated by the
              Company from time to time;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              10. he shall follow all the SOPs that may be prescribed and
              formulated by the Company from time to time;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              11. he shall not carry any weapons, firearms, ammunition,
              explosive devices and dangerous substances during performance of
              the Services;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              12. he shall not seek any extra monetary compensation from the
              User for the completion of Services by way of tips;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              13. he shall not allow more than 1 (one) pillion rider on the
              Vehicle;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              14. he shall ensure that the Vehicle has a valid fitness
              certificate issued, insurance certificate, pollution under control
              certificate and shall be operating under permit granted under
              relevant provision of MV Act.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              15. he shall perform each pick-up and delivery in the most
              efficient manner possible and shall make best efforts to adhere to
              the timelines prescribed.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              16. he shall also ensure the safety of packages is not compromised
              at the time of delivery.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              17. he shall not consume any alcoholic beverages or any other
              intoxicating/banned substances prior to or during the performance
              of the Services.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>4. RELATIONSHIP BETWEEN THE PARTIES</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`1. Independent Contractor: The Driver shall operate as and have the status of an independent contractor. The relationship between the Company and the Driver is on a principal-to-principal basis. The Company and the Driver are independent legal entities, and nothing in these T&Cs will be construed to create a partnership, joint venture, an association of persons, agency (disclosed or undisclosed), franchise, sales representative, or employment relationship between the Company and the Driver. It is clarified that the Driver will not have any right to conclude any contract for and / or on the behalf of the Company.`}</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>5. DRIVER INFORMATION</b>
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
              1. Qwik Ryde may collect Driver Information at the time of
              onboarding of the Driver, to establish the identity of the Driver.
              Qwik Ryde reserves the right to store, process, access and use the
              Driver Information for business purposes and needs, background
              check, verification, marketing, service, development, analytics,
              research, and any other purpose as Qwik Ryde may deem fit and in
              accordance with Applicable Law. The Driver hereby expressly
              consents to such collection and use of Driver Information.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. Subject to applicable laws, Qwik Ryde may provide to a third
              party, governmental agency, judicial body, any Driver Information
              or information relating to the Driver, if there is a complaint,
              dispute or conflict, including any accident involving a Driver on
              one hand and end-consumer, or a third party on the other hand;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. "Driver Information" shall mean and include any personal data
              collected from the Driver including know your customer documents
              with Driver's bank, copies of valid government-issued vehicle
              registration certificate, mobile number, bank account details,
              vehicle insurance copy, driving license, identity proof, residence
              proof, location data, proof of ownership of Driver' Vehicle and
              any other information that Qwik Ryde may deem fit;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>6. CONFIDENTIALITY</span>
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
              1. The Driver shall keep confidential all data including customer
              details, market information, all work products and documents
              related thereto, the contents of the Portal and shall not sell or
              otherwise make that information available to any third parties.
              Except as otherwise agreed, the data of customers will be the
              exclusive property of the Company, and the Driver will not use the
              same for any purpose or distribute such data in any form or means
              except for the purpose of providing the Services and other than as
              permitted by the Company and shall keep it confidential at all
              times.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <b>7. INDEMNITY</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`1. The Driver agrees to indemnify, defend and hold the Company harmless from and against any claim, liability, obligation, loss, damage, deficiency, assessment, judgment, cost or expense (including, without limitation to costs and expenses incurred in preparing and defending against or prosecuting any litigation, claim, action, suit proceeding or demand) of any kind or character, arising out of or in any manner incidental, relating, or attributable to any inaccuracy, breach, or failure by the Driver to perform its obligations under these T&Cs or the applicable laws in relation to performance of the Services.`}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>8 LIMITATION OF LIABILITY</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              1. The Company is not liable to the Driver, for any condition,
              suitability, quality, merchantability and fitness for any purposes
              in respect of the Portal or the services provided through the
              Portal and is not liable for any civil, criminal, tortious, or any
              other liability, that may accrue as a consequence of the use and
              access of the Portal.
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>{`2. To the extent permissible under applicable laws, the Company is not liable for any civil, criminal, tortious, or any other liability, that may accrue as a consequence of the breach by the Service Provider `}</b>
            <span>{`(a) of the applicable laws in respect of the use of the Portal or providing the Services; (b) of the terms of the applicable licenses and permits that are issued by the transport authorities; `}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`(c) of the terms of these T&Cs; or `}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              (d) of the duty of care the Driver owes to the users of the
              Portals.
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
              3. The Company is not responsible for the behavior, actions or
              inactions of the Driver, quality of the Vehicle. Any contract for
              the provision of Vehicle is exclusively between the customer and
              the Driver and the Company is not a party to the same.
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>{`4. All rights not otherwise claimed under these T&Cs or by the Company are hereby reserved. The information contained in this Portal is intended, solely to provide general information for the personal use of the reader, who accepts full responsibility for its use.`}</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>
              5. The Company does not represent or endorse the accuracy or
              reliability of any information or advertisement contained on,
              distributed through, or linked, downloaded or accessed from any of
              the services contained on the Portal, or the quality of any
              products, information or other materials displayed, or obtained by
              you as a result of any product, information or other materials
              displayed, or obtained by you as a result of an advertisement or
              any other information or offer in or in connection with the
              service.
            </b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>6. The Driver shall not do the following:</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. license, sublicense, sell, resell, transfer, assign, distribute
              or otherwise commercially exploit or make available to any third
              party the Portal in any way;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. modify or make derivative works based upon the Portal;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. create internet "links" or "frame" or "mirror" any application
              on any other server or wireless or internet-based device;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>4. reverse engineer or access the Portal in order to:</span>
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
              functions or graphics of the Portal, or
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. copy any ideas, features, functions or graphics of the Portal,
              or
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. launch an automated program or script, including, but not
              limited to, web spiders, web crawlers, web robots, web ants, web
              indexers, bots, viruses or worms, or any program which may make
              multiple server requests per second, or unduly burdens or hinders
              the operation and/or performance of the Portal.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>9. TERM AND TERMINATION</span>
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
              Company is entitled to terminate the contract at all times and
              with immediate effect (by disabling the Driver's registration on
              the Portal and use of the Portal) for:
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`1. Any violation or breach of any term of these T&Cs; or`}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. If the Driver, in the opinion of the Company, misuses the
              Portal.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. failure to verify or authenticate Driver Information;
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              4. any action or omission by the Driver which can cause legal or
              contractual liability for Qwik Ryde including but not limited to
              fraudulent conduct, customer complaints, continuous unsatisfactory
              reviews by the Restaurant Partners or the Users, misconduct,
              negligence, and all other actions specifically prohibited under
              Applicable Law.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              5. Qwik Ryde is also at liberty to terminate the contract at their
              discretion, where, in their opinion, continuance of the services
              of Driver is detrimental to the business interest of Qwik Ryde due
              to the acts of the Driver, such as the following:
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              1. Misbehavior, rude behavior with the staff of Qwik Ryde,
              customers or any other persons associated with the Qwik Ryde.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. Any acts involving criminal offence punishable under law,
              including physical assault, threatening any of the staff of Qwik
              Ryde, person associated with Qwik Ryde and any other persons.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              3. iii) Concealment of fact/material information while entering
              into a contract with Qwik Ryde.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`4. Poor & irregular for work, meetings and failure to abide by the rules/terms of the contract.`}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>5. Drunk while on duty and drunken behavior.</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              6. Commission of fraud/ misappropriation/embezzlement for undue
              monetary gain, which is against the interest of the Qwik Ryde.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              7. vii)Negligence in performing the duty, causing damage of
              moveable and immoveable assets of Qwik Ryde, its employees,
              customers.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              8. viii)Indulging in spreading content through digital media,
              social networking sites, or any other form, which could be
              detrimental to Qwik Ryde's brand and its image.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              9. Indulging in acts such as creating ruckus/ strike/ or any
              activity against Qwik Ryde, which could be detrimental to the Qwik
              Ryde's brand and its image.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              10. Indulging in unauthorized disclosure of confidential
              information of Qwik Ryde to external agency, person, Qwik Ryde or
              organization.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              11. Misuse of assets provided by Qwik Ryde and welcome kits, which
              could be detrimental to the interest of Qwik Ryde's brand and its
              image.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              12. xii)Absconding for more than 4 hours with any asset, delivery
              item, money or any other valuable item belonging to Qwik Ryde, its
              employees, customers or other staff member(s).
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              13. xiii)Failure to abide by any of the rules and guidelines given
              by Qwik Ryde as part of service quality standards and principles.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>14. xiv)Doing any act unbecoming of a Driver.</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`15. xv) In case the background check, whether wholly or partially, is found negative at any point of time during the term of these T&Cs.`}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              The Company is not obliged to give notice of the termination of
              the contract in advance.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>10. ASSIGNMENT</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>{`The Driver may not assign its rights or obligations under these T&Cs without prior written approval of the Company.`}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
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
            <span>{`These T&Cs may be amended from time to time and as and when required, at the discretion of the Company.`}</span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>12. SEVERABILITY</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p
          className={styles.thisDocumentIsAnElectronic}
        >{`If any provision or any part of a provision of these T&Cs is invalid, unenforceable or prohibited by applicable laws of the Republic of India , such provision or part of provision shall be severed from these T&Cs and shall be considered divisible as to such provision or part thereof and such provision or part thereof shall be inoperative and shall not be part of the consideration moving between you and the Company hereto and the remainder of these T&Cs shall be valid and binding and of like effect as though such provision was not included herein.`}</p>
        <p className={styles.blankLine}>
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <b>
            <span>13. INSURANCE</span>
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
              The Company at its sole discretion may insure the Driver against
              any accident suffered by the Driver during provision of Services
              by the Driver using the Portal. The Company reserves the right to
              recover any amount paid by the Company in lieu of the insurance
              from the Driver.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <b>
            <span>14. NOTICES</span>
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
              1. The Company may give notice by means of a general notice on the
              Portal, or by electronic mail to your email address on record in
              the Company's account information, or by written communication
              sent by regular mail to the Driver's address on record in the
              Company's account information.
            </span>
          </span>
        </p>
        <p className={styles.thisDocumentIsAnElectronic}>
          <span>
            <span>
              2. Driver needs to send any notice on at email id:
              drivercare@Qwikryde.com.
            </span>
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
      <b className={styles.customer} onClick={onCUSTOMERTextClick}>
        CUSTOMER
      </b>
      <b className={styles.driver}>DRIVER</b>
      <b className={styles.b}>बचत भी.. अरम भी....</b>
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
          <div className={styles.contact} onClick={onContactTextClick}>
            Contact
          </div>
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

export default Termsforuser;
