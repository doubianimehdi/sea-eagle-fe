import * as React from 'react';
import { Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

export class SeaEagleNav extends React.Component {
  render() {
    return (
      <Navbar className="se-navbar">
        <NavbarGroup>
          <div className="se-nav-logo" />
          <NavbarDivider className="se-heading-divider" />
          <NavbarHeading className="se-app-title">Sea Eagle X-ray Analysis</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align="right">
          <Button className="pt-minimal" iconName="help">Help</Button>
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default SeaEagleNav;
