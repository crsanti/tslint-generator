import Button from '@material-ui/core/Button';
import * as React from 'react';
import * as styles from './severity.styles';

export const Severity: React.StatelessComponent = () => (
  <div className={styles.severity}>
      <span className={styles.textSpan}>Severity</span>
      <div>
        <Button variant="outlined">
          default
        </Button>
        <Button variant="outlined">
          error
        </Button>
        <Button variant="outlined">
          warning
        </Button>
        <Button variant="outlined">
          none
        </Button>
      </div>
    </div>
)