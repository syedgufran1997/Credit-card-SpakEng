import React from "react";
import cardStyles from "./card.module.css";

function Creditcard({
  handleClickCardNumber,
  onClickCard,
  Expires,
  CardName,
  CardNumber,
}) {
  return (
    <div
      className={`cardBackground ${cardStyles.CardWrapper}`}
      onClick={onClickCard}
    >
      <div className={cardStyles.imgWrapper}>
        <div className={cardStyles.chipWrap}>
          <img src="/chip.png" alt="Chip" />
        </div>
        <div className={cardStyles.cardType}>
          <img src="/visa.png" alt="Chip" />
        </div>
      </div>

      <div className={cardStyles.cardNmuber} onClick={handleClickCardNumber}>
        <h3>{CardNumber}</h3>
      </div>

      <div className={cardStyles.nameexpireWrap}>
        <div className={cardStyles.holderNameWrap}>
          <p>Card Holder</p>
          <h5>{CardName}</h5>
        </div>
        <div className={cardStyles.expireWrap}>
          <p>Expires</p>
          <h5>{Expires}</h5>
        </div>
      </div>
    </div>
  );
}

export default Creditcard;
