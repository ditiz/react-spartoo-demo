import React, { Component } from 'react';
import { TextEditor } from './TextEditor';
import { FlipTable } from './FlipTable';

export class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>Éditeur de texte pouet</h1>
        <TextEditor/>
        <FlipTable/>
      </div>
    )
  }
}