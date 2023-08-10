import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../ResultPage/index.css";

class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: JSON.parse(sessionStorage.getItem("formData")) || {}, // Get form data from sessionStorage
    };
  }

  render() {
    const { input1, input4, input5 } = this.state.formData;

    return (
      <div className="result-container">
        <p className="result-text">Input 1: {input1 || "N/A"}</p>
        <div className="outputs">
          <div className="card">
            <h1 className="heading">Policy Name</h1>
            <p className="para">{input1}</p>
          </div>
          <div className="card">
            <h1 className="heading">Description</h1>
            <p className="para">{input4}</p>
          </div>
          <div className="card">
            <h1 className="heading">Remediation</h1>
            <p className="para">{input5}</p>
          </div>
        </div>
        <div className="code"></div>
        <Link to="/" className="back-button">
          Go Back
        </Link>
      </div>
    );
  }
}

export default ResultPage;
