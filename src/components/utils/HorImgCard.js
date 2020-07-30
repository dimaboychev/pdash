import React, {Component} from 'react';

class HorImgCard extends Component {

  render() {
    return (
      <div className="align-items-center d-flex bg-white hor-img-card">
        <img className="mr-3" src={this.props.img ?? '/images/chart.png'}/>
        <div>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default HorImgCard;
