import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Contacts from '@material-ui/icons/Contacts';
import List from '@material-ui/icons/List';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
// import Ballot from '@material-ui/icons/Ballot';
import Typography from '@material-ui/core/Typography';
import CreateContact from '../../screens/contact/createContact';
import AssignTask from '../../screens/task/assignTask';
import HelpDocs from '../../screens/HelpDocs/helpDocs';
// import DustbinApp from '../../screens/DragNDrop/Dustbin/DustbinApp';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonPrevent extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const { users, tasks } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="off"
          >
            <Tab icon={<HelpIcon />} />
            <Tab icon={<Contacts />} />
            <Tab icon={<List />} />
            {/* <Tab icon={<Ballot />} /> */}
            {/* <Tab icon={<PersonPinIcon />} />
            <Tab icon={<HelpIcon />} />
            <Tab icon={<ShoppingBasket />} />
            <Tab icon={<ThumbDown />} />
            <Tab icon={<ThumbUp />} /> */}
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <HelpDocs />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <CreateContact users={users} />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <AssignTask users={users} tasks={tasks} />
          </TabContainer>
        )}
        {/* {value === 3 && (
          <TabContainer>
            <DustbinApp />
          </TabContainer>
        )} */}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonPrevent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonPrevent);
