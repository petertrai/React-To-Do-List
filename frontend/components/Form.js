import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  }
  handleChange = e => {
    this.setState({
     inputText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.inputText);
    this.setState({ inputText: '' })
  }

  render() {
    const { inputText } = this.state;

    return (
      <form>
        <label>
          <input value={this.state.inputText} onChange={this.handleChange} ></input>
          <button onClick={this.handleSubmit}>Add</button><br />
        </label>
      </form>
    )
  }
}
