import React, { Component } from "react"

class FitGuide extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="page-under-construction-hero">
        <div className="page-under-construction">
          <h1>Sorry...this page is under construction</h1>
        </div>
      </div>
    )
  }
}

export default FitGuide