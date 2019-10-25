import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class TextFieldComp extends React.Component {
  render() {
    const { classes } = this.props;
    const props = { ...this.props };
    return (
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        className={classes.textField}
        margin="normal"
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        onBlur={props.onBlur}
        key={props.key}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
      />
    );
  }
}

TextFieldComp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFieldComp);
