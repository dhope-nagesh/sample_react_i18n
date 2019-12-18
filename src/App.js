import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.t('Welcome to React')}</h1>
        <select onChange={(e) => { this.props.i18n.changeLanguage(e.target.value) }}>
          <option value="en">English</option>
          <option value="cn">Chinese</option>
        </select>
      </div>
    )
  }
}

// using HOC component withTranslation
export default withTranslation()(App)