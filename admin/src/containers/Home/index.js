import React, { Component } from 'react';
import Button from 'components/Button';
import request from 'utils/request';

import styles from './style.scss';

export default class Home extends Component {
  state = {
    loading: false,
    message: ''
  }

  build = () => {
    this.setState({ loading: true });
    request('/strapi-build/build', {
      method: 'GET',
      params: { source: 'strapi-build' },
    }).then(response => response.success ? this.moveBuilt() : this.err(response))
    .catch(this.err);
  }

  // keep moveBuilt action seperate incase build fails.
  moveBuilt = () => {
    request('/strapi-build/moveBuilt', {
      method: 'GET',
      params: { source: 'strapi-build' },
    }).then(response => {
      this.setState({ loading: false, message: response.message });
    }).catch(this.err);
  }

  err = err => { console.error(err); this.setState({ loading: false, message: 'Something failed. Please try again.'}) }

  render() {
    return (
      <div className={`${styles.home}`}>
        <Button
          loader={this.state.loading}
          primary
          onClick={this.build}
          disabled={this.state.message !== ''}
        >{this.state.message === '' ? 'Start' : 'Done'}
        </Button>
        <div className={`${styles.copy}`} style={{ opacity: this.state.loading ? 0 : 1 }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}