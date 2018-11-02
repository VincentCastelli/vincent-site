import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      menuBtn: null,
      menu: null,
      menuNav: null,
      menuBranding: null,
      navItems: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      menuBtn: document.querySelector('.menu-btn'),
      menu: document.querySelector('.menu'),
      menuNav: document.querySelector('.menu-nav'),
      menuBranding: document.querySelector('.menu-branding'),
      navItems: document.querySelectorAll('.nav-item'),
    });
  }

  handleClick() {
    const {
      showMenu, menuBtn, menu, menuNav, menuBranding, navItems,
    } = this.state;

    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach((item) => { item.classList.add('show'); });
      this.setState({
        showMenu: true,
      });
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach((item) => { item.classList.remove('show'); });
      this.setState({
        showMenu: false,
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <Header onClick={this.handleClick} />
        </header>
        <main>
          <Main />
        </main>
        <footer className="main-footer">
          <p>
            &copy; 2018 Vincent Castelli
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
