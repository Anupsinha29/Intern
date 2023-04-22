import styles from "./TERMS1.module.css";
const TERMS1 = ({ onClose }) => {
  return (
    <div className={styles.terms}>
      <div className={styles.groupParent}>
        <div className={styles.groupParent}>
          <div className={styles.groupChild} />
          <b className={styles.termsCondition}>{`TERMS & CONDITION`}</b>
          <div className={styles.groupItem} />
          <img className={styles.image19Icon} alt="" src="/image-191@2x.png" />
          <b className={styles.getUpto20}>
            Get upto 20% off and get cashback upto ₹200
          </b>
          <img className={styles.xCircleIcon} alt="" src="/xcircle.svg" />
        </div>
        <div className={styles.offerIsValidContainer}>
          <ul className={styles.offerIsValidInTheCitiesW}>
            <li className={styles.offerIsValid}>
              Offer is valid in the cities where the brand is operational
            </li>
            <li className={styles.offerIsValid}>&nbsp;</li>
            <li className={styles.offerIsValid}>
              Offer not applicable for users who have not cleared dues beyond
              their due dates.
            </li>
          </ul>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ul className={styles.offerIsValidInTheCitiesW}>
            <li className={styles.offerIsValid}>
              Offer is exclusive to you and intended for your use only.
            </li>
          </ul>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ul className={styles.offerIsValidInTheCitiesW}>
            <li
              className={styles.offerIsValid}
            >{`If you haven’t activated Qwik Postpaid, please navigate to Profile –> Payments –> Qwik Money Postpaid to activate the same.`}</li>
          </ul>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ul className={styles.offerIsValidInTheCitiesW}>
            <li className={styles.offerIsValid}>
              Cashback will be credited within 3 working days to your Active
              Qwik Money Postpaid/ Wallet Account.
            </li>
          </ul>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ul className={styles.offerIsValidInTheCitiesW}>
            <li className={styles.offerIsValid}>
              Valid Once per Qwik Money Postpaid user.
            </li>
            <li className={styles.offerIsValid}>&nbsp;</li>
            <li className={styles.offerIsValid}>
              Applicable on first ever transaction on BookMyshow using OlaMoney
              Postpaid.
            </li>
            <li className={styles.offerIsValid}>&nbsp;</li>
            <li>
              Offer valid from 09th April to 09th May 2023 only for Qwik Money
              Postpaid Active Users.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TERMS1;
