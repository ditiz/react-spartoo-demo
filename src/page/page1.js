import React, { Component } from 'react';
import { TextEditor } from './TextEditor';

export class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>Éditeur de texte</h1>
        <TextEditor/>
      </div>
    )
  }
}