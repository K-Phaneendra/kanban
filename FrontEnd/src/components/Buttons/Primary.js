import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

const ContainedButtons = props => {
  const { classes, value } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      disabled={props.disabled}
      onBlur={props.onBlur}
      onClick={props.onClick}
    >
      {value}
    </Button>
  );
};

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
