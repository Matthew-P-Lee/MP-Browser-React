import React, { Component } from 'react';

const urlForUsername = UserId =>
  `http://127.0.0.1:5000/user/${UserId}`

class MPAPI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(urlForUsername(this.props.UserId),
    	{ mode: 'cors'}
    )
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          mpData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.mpData) return <p>Loading...</p>
    return (
      <div>
        <h2>{this.state.mpData.name}</h2>
        <h2>{this.state.mpData.location} {this.state.mpData.postal_code}</h2>
        <h2>{this.state.mpData.other_interests}</h2>
      </div>
    )
  }
}

export default MPAPI;
