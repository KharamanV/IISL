/* eslint-disable */
import React, { Component } from 'react';
import axios from '@/services/api';
import { baseUrl } from '@/config';
import SpeechCardDetail from '../../components/SpeechCardDetail';

class SpeechCard extends Component {
  state = {
    card: null,
  };

  componentDidMount() {
    axios(`${baseUrl}/api/speech_cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }));
  }

  render() {
    const { card } = this.state;

    return card && <SpeechCardDetail data={card} />;
  }
}

export default SpeechCard;
