import React from "react";

class SearchBar extends React.Component {
  state = {
    terms: "",
  };

  handleChange = (event) => {
    this.setState({ terms: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.terms);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Video search:</label>
            <input
              type="text"
              value={this.state.terms}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
