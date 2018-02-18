import * as React from 'react';
import { Card } from '@blueprintjs/core';

export class FileDragArea extends React.Component {
  render() {
    return (
      <Card className="se-file-drag-area pt-elevation-5" >
        <div className="se-drop-file-instructions" >
          <span className="se-plus-icon pt-icon-add" />
          <div className="se-drop-file-text">
            Drop an x-ray file here
          </div>
        </div>
      </Card>
    );
  }
}
