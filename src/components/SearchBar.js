import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <labe>Video search:</labe>
            <input type="textt" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
