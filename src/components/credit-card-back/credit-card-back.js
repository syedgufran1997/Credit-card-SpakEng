import React from "react";
import cardBackStyles from "./cardback.module.css";

function CreditcardBack({ onClickBack, cvv }) {
  return (
    <div
      className={`cardBackgroundBack ${cardBackStyles.CardWrapper}`}
      onClick={onClickBack}
    >
      <div className={cardBackStyles.imgWrapper}></div>

      <div className={cardBackStyles.cvvWrap}>
        <p>CVV</p>
        <div className={cardBackStyles.cardNmuber}>
          <h4>{cvv}</h4>
        </div>

        <div className={cardBackStyles.visaimgWrap}>
          <img src="/visa.png" alt="visa" />
        </div>
      </div>
    </div>
  );
}

export default CreditcardBack;
