import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    inputs: {
      input1: { value: "", showErrorMessage: false },
      input2: { value: "", showErrorMessage: false },
      input3: { value: "", showErrorMessage: false },
    },
    exampleInput: "",
    remediation: "",
    showErrorMessage: false,
  };

  onChangePolicyName = (inputkey, event) => {
    const { inputs } = this.state;
    const newInputs = {
      ...inputs,
      [inputkey]: { ...inputkey, value: event.target.value },
    };
    this.setState({ inputs: newInputs });
  };

  onChangeExampleInput = (event) => {
    this.setState({ exampleInput: event.target.value });
  };

  onChangeRemediation = (event) => {
    this.setState({ remediation: event.target.value });
    console.log(event.target.value);
  };

  handleBlur = (inputKey) => {
    const { inputs } = this.state;
    const inputValue = inputs[inputKey].value;
    if (inputValue.trim() === "") {
      this.setState({
        inputs: {
          ...inputs,
          [inputKey]: { ...inputs[inputKey], showErrorMessage: true },
        },
      });
    } else {
      this.setState({
        inputs: {
          ...inputs,
          [inputKey]: { ...inputs[inputKey], showErrorMessage: false },
        },
      });
    }
  };

  onGenerate = (event) => {
    event.preventDefault();
  };

  render() {
    const { inputs, exampleInput, remediation } = this.state;
    return (
      <div className="App">
        <h1>Policy Generator</h1>
        <form className="form" onSubmit={this.onGenerate}>
          <div className="inputism">
            <label htmlFor="policyName" className="policyName">
              Policy Name
            </label>
            <input
              type="text"
              id="policyNam"
              className="input1 textarea"
              value={inputs.input1.policyName}
              onChange={(event) => this.onChangePolicyName("input1", event)}
              placeholder="Enter Policy Name"
              onBlur={() => this.handleBlur("input1")}
            />
            {inputs.input1.showErrorMessage && (
              <p style={{ color: "red" }}>Policy Name required!</p>
            )}
          </div>
          <div className="card">
            <div className="inputism">
              <label htmlFor="policyReq" className="label">
                Policy Requirement
              </label>
              <textarea
                id="policyReq"
                rows="4"
                cols="50"
                value={inputs.input2.value}
                onChange={(event) => this.onChangePolicyName("input2", event)}
                placeholder="Enter Policy Requirement"
                className="textarea"
                onBlur={() => this.handleBlur("input2")}
              ></textarea>
              {inputs.input2.showErrorMessage && (
                <p style={{ color: "red" }}>Policy Requirement required!</p>
              )}
            </div>
            <div className="inputism">
              <label htmlFor="exampleInput" className="label">
                Example Input
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
                value={inputs.input3.value}
                onChange={(event) => this.onChangePolicyName("input3", event)}
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