import React from 'react';
import { useHistory } from "react-router-dom";

function HorImgCard(props) {
  const history = useHistory();

  function handleClick() {
    if (props.url) {
      history.push(props.url);
    }
  }

  return (
    <div className="align-items-center d-flex bg-white hor-img-card"
         onClick={handleClick}>
      <img alt={props.alt ?? "chart"} className="mr-3" src={props.img ?? '/images/chart.png'}/>
      <div>
        {props.text}
      </div>
    </div>
  );
}

export default HorImgCard;
