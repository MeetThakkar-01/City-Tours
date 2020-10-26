import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false,
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="Tour pic" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i class="fa fa-window-close" aria-hidden="true"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fa fa-caret-square-o-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
