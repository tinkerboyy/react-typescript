import * as React from 'react';

export interface HelloProps { compiler?: string; framework: string; }

export class App extends React.Component<HelloProps, undefined> {
  render() {
    var props = this.props;
    return (
      <h1>Hello React Typescript - {props.framework}</h1>
    );
  }
}