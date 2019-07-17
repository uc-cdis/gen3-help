import React, { Component } from 'react';
import Header from '@gen3/ui-component/dist/components/Header';
import showdown from 'showdown';
import { commonsConfig } from '../config';
import gen3Logo from '../images/gen3.png';
import stageText from '../custom/help-page/stage.md';
import stageLogo from '../custom/logos/stage.png'
import './Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: null,
    };
  }

  componentDidMount = () => {
    const path = this.getCommonsConfig()[0];
    fetch(path).then(res => res.text()).then((text) => {
      this.convertToHTML(text);
    });
  }

  getCommonsConfig = () => {
    switch (commonsConfig.app) {
      case 'stage':
        return [ stageText, stageLogo ];
      default:
        return [ '', gen3Logo];
    }
  }

  convertToHTML = text => {
    const converter = new showdown.Converter();
    this.setState({ html: converter.makeHtml(text) });
  }

  render() {
    const logo = this.getCommonsConfig()[1];
    const title = `${commonsConfig.name} Help`;
    return (
      <div className='homepage'>
        <Header title={title} logoSrc={logo} />
        <div className='homepage__help-text'>
          <p dangerouslySetInnerHTML={{ __html: this.state.html }} />
        </div>
      </div>
    );
  }
}

export default Homepage;
