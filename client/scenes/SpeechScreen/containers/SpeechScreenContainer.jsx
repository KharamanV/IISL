import React, { Component } from 'react';
import fetchScreens from '../api';
import SpeechScreenTable from '../components/SpeechScreenTable';

class SpeechScreenContainer extends Component {
  state = { screens: [] };

  componentDidMount() {
    fetchScreens()
      .then(res => this.setState({ screens: res.data }));
  }

  render() {
    const { screens } = this.state;

    return screens && <SpeechScreenTable data={screens} />;
  }
}

export default SpeechScreenContainer;
