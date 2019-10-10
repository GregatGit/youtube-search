import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' }

  handleChange = e => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className=" search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}
