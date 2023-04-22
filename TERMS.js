import styles from "./TERMS.module.css";
const TERMS = ({ onClose }) => {
  return (
    <div className={styles.terms}>
      <div className={styles.groupParent}>
        <div className={styles.groupParent}>
          <div className={styles.groupChild} />
          <b className={styles.termsCondition}>{`TERMS & CONDITION`}</b>
          <div className={styles.groupItem} />
          <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
          <b className={styles.cashbackUpto200}>Cashback upto ₹200</b>
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
            >{`If you haven’t activated  Qwik PostCard, please navigate to Profile –> Payments –>  Qwik PostCard to activate the same.`}</li>
          </ul>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ul className={styles.offerIsValidInTheCitiesW}>
            <li className={styles.offerIsValid}>
              Cashback will be credited within 3 working days to your Active
              Qwik PostCard/ Wallet Account.
            </li>
          </ul>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ul className={styles.offerIsValidInTheCitiesW}>
            <li className={styles.offerIsValid}>
              Valid Once per Qwik PostCard user.
            </li>
            <li className={styles.offerIsValid}>&nbsp;</li>
            <li className={styles.offerIsValid}>
              Applicable on first ever transaction on RedBus using Qwik
              PostCard.
            </li>
            <li className={styles.offerIsValid}>&nbsp;</li>
            <li>
              Offer valid from 20 April to 31st July 2023 only for Qwik PostCard
              Active Users.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TERMS;
