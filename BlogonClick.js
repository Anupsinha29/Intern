import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogonClick.module.css";
const BlogonClick = ({ onClose }) => {
  const navigate = useNavigate();

  const onXCircleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.blogonClick}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <b className={styles.aWinWinScenario}>
            A win-win scenario is reported by Business Travel Show for both
            travel managers and staff.
          </b>
          <img
            className={styles.xCircleIcon}
            alt=""
            src="/xcircle.svg"
            onClick={onXCircleClick}
          />
        </div>
        <div className={styles.inAPollContainer}>
          <ul className={styles.inAPollConductedByTheBus}>
            <li className={styles.inAPoll}>
              In a poll conducted by the Business Travel Show, it was discovered
              that 58 percent of respondents agreed that alternative
              transportation services like Qwik are a solid choice for business
              travel, an increase of 32 percent from just two months prior.
            </li>
          </ul>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.inAPollConductedByTheBus}>
            <li className={styles.inAPoll}>
              The survey also revealed that the proportion of travellers who are
              still unsure about the advantages of shared economy suppliers has
              decreased, from almost half to a meagre ten percent.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogonClick;
