import React, {Component} from 'react';

class HorImgCard extends Component {

  render() {
    return (
      <div className="align-items-center d-flex bg-white hor-img-card">
        <img alt={this.props.alt ?? "chart"} className="mr-3" src={this.props.img ?? '/images/chart.png'}/>
        <div>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default HorImgCard;
