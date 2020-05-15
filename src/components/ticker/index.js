import React from "react";
import "./style.css";

class Ticker extends React.Component {
  render() {
    return <div className={this.props.background} id="1">
       <div className="tickerContent">{this.props.content}</div>
    </div>
  }
}

export default Ticker;