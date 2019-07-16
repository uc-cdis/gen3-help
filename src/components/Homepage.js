import React, { Component } from 'react';
import Header from '@gen3/ui-component/dist/components/Header';
import showdown from 'showdown';
import { commonsConfig } from '../config';
import gen3Logo from '../images/gen3.png';
import stageText from '../custom/help-page/stage.md';
import './Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: null,
    };
  }

  componentDidMount = () => {
    const path = this.getCommonsText();
    fetch(path).then(res => res.text()).then((text) => {
      this.convertToHTML(text);
    });
  }

  getCommonsText = () => {
    switch (commonsConfig.app) {
      case 'stage':
        return stageText;
      default:
        return '';
    }
  }

  convertToHTML = text => {
    const converter = new showdown.Converter();
    this.setState({ html: converter.makeHtml(text) });
  }

  render() {
    const images = { gen3Logo };
    return (
      <div className='homepage'>
        <Header title='Welcome to Gen3' logoSrc={gen3Logo} />
        <div className='homepage__help-text'>
          <h2>{ commonsConfig.name }</h2>
          <p dangerouslySetInnerHTML={{ __html: this.state.html }} />
        </div>
      </div>
    );
  }
}

export default Homepage;
