/* eslint-disable */
import React, { Component } from 'react';
import axios from '@/services/api';
import { baseUrl } from '@/config';
import ResultAnalysisDetail from '../../components/ResultAnalysisDetail';

class ResultAnalysisContainer extends Component {
  state = {
    analysis: null,
  };

  componentDidMount() {
    axios(`${baseUrl}/api/result_analysis/${this.props.match.params.id}`)
      .then(res => this.setState({ analysis: res.data }));
  }

  render() {
    const { analysis } = this.state;

    return analysis && <ResultAnalysisDetail data={analysis} />;
  }
}

export default ResultAnalysisContainer;
