import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    policyName: "",
    policyRequirement: "",
    exampleInput: "",
    description: "",
    remediation: "",
  };

  onChangePolicyName = (event) => {
    this.setState({ policyName: event.target.value });
  };

  onChangePolicyRequirement = (event) => {
    this.setState({ policyRequirement: event.target.value });
  };

  onChangeExampleInput = (event) => {
    this.setState({ exampleInput: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  onChangeRemediation = (event) => {
    this.setState({ remediation: event.target.value });
    console.log(event.target.value);
  };

  onGenerate = (event) => {
    event.preventDefault();

    this.setState({
      policyName: "",
      policyRequirement: "",
      exampleInput: "",
      description: "",
      remediation: "",
    });
  };

  render() {
    const {
      policyName,
      policyRequirement,
      exampleInput,
      description,
      remediation,
    } = this.state;
    return (
      <div className="App">
        <h1 className="head"> Policy Generator </h1>
        <form className="form" onSubmit={this.onGenerate}>
          <div className="inputism">
            <label htmlFor="policyName" className="policyName">
              Policy Name
            </label>
            <input
              type="text"
              id="policyNam"
              className="input1 textarea"
              value={policyName}
              onChange={this.onChangePolicyName}
              placeholder="Enter Policy Name"
            />
          </div>
          <div className="card">
            <div className="inputism">
              <label htmlFor="policyReq" className="label">
                Policy requirement
              </label>
              <textarea
                id="policyReq"
                rows="4"
                cols="50"
                value={policyRequirement}
                onChange={this.onChangePolicyRequirement}
                placeholder="Enter Policy Requirement"
                className="textarea"
              ></textarea>
            </div>
            <div className="inputism">
              <label htmlFor="exampleInput" className="label">
                Example input
              </label>
              <textarea
                id="exampleInput"
                rows="4"
                cols="50"
                value={exampleInput}
                onChange={this.onChangeExampleInput}
                placeholder="Enter Example Input"
                className="textarea"
              ></textarea>
            </div>
          </div>
          <div className="card">
            <div className="inputism">
              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                cols="50"
                value={description}
                onChange={this.onChangeDescription}
                placeholder="Enter Description"
                className="textarea"
              ></textarea>
            </div>
            <div className="inputism">
              <label htmlFor="remediation" className="label">
                Remediation
              </label>
              <textarea
                id="remediation"
                rows="4"
                cols="50"
                value={remediation}
                onChange={this.onChangeRemediation}
                placeholder="Enter Remediation"
                className="textarea"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="generateButton">
            <div className="buttonEle">
              <p>Generate Policy</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png"
                className="chatgpt"
                alt="chatgpt logo"
              />
            </div>
          </button>
        </form>
      </div>
    );
  }
}

export default App;
