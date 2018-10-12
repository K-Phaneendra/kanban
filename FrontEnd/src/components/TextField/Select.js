import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class TextFields extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="standard-select-currency"
        select
        label={this.props.label}
        className={classes.textField}
        value={this.props.value}
        onChange={e => this.props.selectedDD(e)}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        // helperText="Please select your currency"
        margin="normal"
        name={this.props.name}
      >
        {this.props.ddData.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
