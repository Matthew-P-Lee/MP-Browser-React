import React, { Component } from 'react';

const urlForUsername = UserId =>
  `http://127.0.0.1:5000/user/ticks/${UserId}`

class MPTicks extends Component {
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
      	<h2>Ticks</h2>
		{this.state.mpData.map(function(tick) {
		 return (
		   <div>
		   	   <ul>
			   		<li key={tick.RouteId.toString()}><a href={'http://www.mountainproject.com/route/' + tick.RouteId}>{tick.name}</a> - {tick.rating} - {tick.area} - {tick.date}</li>
		   	   </ul>
		   </div>
		 );
		})}

      </div>
    )
  }
}

export default MPTicks;
