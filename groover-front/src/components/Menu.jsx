import React, { Component } from 'react';
import Logo from './Logo';
import home from '../images/home_white.png';
import search from '../images/search_white.png';

export default class Menu extends Component {
  render() {
    return (
      <div id='Menu-bar'>
        <Logo/>
        <div className='Nav-bar'>
          <div id='home' className='Menu-button' onClick={this.props.clickInicial}>
            <img src={home} alt='Home'></img>
            <p>Início</p>
          </div>
          <div id='search' className='Menu-button' onClick={this.props.setOpenSearch}>
            <img src={search} alt='Search'></img>
            <p>Buscar</p>
          </div>
        </div>
      </div>
    )
  }
}
