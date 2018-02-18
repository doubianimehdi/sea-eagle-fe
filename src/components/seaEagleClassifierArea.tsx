import * as React from 'react';

import { FileDragArea } from './fileDragArea';
import { ResultsArea } from './resultsArea';

export class SeaEagleClassifierArea extends React.Component {
  render() {
    return (
      <div className="se-body-container">
        <div className="se-classifier-area">
          <FileDragArea />
          <ResultsArea />
        </div>
      </div>
    );
  }
}
