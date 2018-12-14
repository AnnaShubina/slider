import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
          <SayFull name="Anna" surname="Chernova" link="vk.com" />
          <SayFull name="An" surname="Cher" link="vk.com" />
          <SayFull name="Ann" surname="Chernov" link="vk.com" />
      </div>
    );
  }
}

function SayFull(props) {
  return (
      <div>
          <h1>Имя - {props.name}, Фамилия - {props.surname}</h1>
          <a href={props.link}>Ссылка на мой профиль в вк</a>
      </div>
  )
}

export default App;
