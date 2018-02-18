import * as React from 'react';

import { Button } from '@blueprintjs/core';

import { FileDragArea } from './fileDragArea';
import { ResultsArea } from './resultsArea';

export class SeaEagleClassifierArea extends React.Component {
  render() {
    return (
      <div className="se-body-container">
        <div className="se-classifier-area">
          <FileDragArea />
          <Button text="Get Results" rightIconName="arrow-right" className="se-results-button" disabled={true} />
          <ResultsArea />
        </div>
      </div>
    );
  }
}
