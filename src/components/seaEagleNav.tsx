import * as React from 'react';
import { Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

export class SeaEagleNav extends React.Component {
  render() {
    return (
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Blueprint</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align="right">
          <Button className="pt-minimal" iconName="home">Home</Button>
          <Button className="pt-minimal" iconName="document">Files</Button>
          <NavbarDivider />
          <Button className="pt-minimal" iconName="user"></Button>
          <Button className="pt-minimal" iconName="notifications"></Button>
          <Button className="pt-minimal" iconName="cog"></Button>
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default SeaEagleNav;
