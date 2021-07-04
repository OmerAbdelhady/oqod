import React, { Component } from "react";
import {
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import styles from "./style.module.css";
import { Menu, ExitToApp } from "@material-ui/icons";
import { CardMedia } from '@material-ui/core';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState((prevState) => ({ mobileOpen: !prevState.mobileOpen }));
  };


  drawerContent = (
    <List>
      <ListItem>
        <ListItemIcon>
          {/* <CardMedia image='logo.png' /> */}
          <img class="sealImage" src="https://oqod.co/static/media/logo-primary.59f3b0bc.png" alt="Girl" width={150} height={100}/>
          {/* <ExitToApp /> */}
        </ListItemIcon>
        {/* <ListItemText primary={"TokenInfo"} /> */}
      </ListItem>
      <ListItem button onClick={() => this.props.history.push("/")}>
        <ListItemIcon>
          {/* <ExitToApp /> */}
        </ListItemIcon>
        <ListItemText primary={"All Token"} />
      </ListItem>
      <ListItem button  onClick={() => this.props.history.push("/Token")}>
        <ListItemIcon>
          {/* <ExitToApp /> */}
        </ListItemIcon>
        <ListItemText primary={"Create Token"} />
      </ListItem>
      <ListItem button onClick={() => this.props.history.push("/Transfer")}>
        <ListItemIcon>
          {/* <ExitToApp /> */}
        </ListItemIcon>
        <ListItemText primary={"transfer"} />
      </ListItem>
      <ListItem button onClick={() => this.props.history.push("/TokenInfo")}>
        <ListItemIcon>
          {/* <ExitToApp /> */}
        </ListItemIcon>
        <ListItemText primary={"TokenInfo"} />
      </ListItem>
      
    </List>
  );

  render() {
    const { mobileOpen } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.appBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
            className={styles.menuButton}
          >
            <Menu style={{ color: "white" }} />
          </IconButton>
        </div>

        <nav className={styles.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: styles.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {this.drawerContent}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: styles.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {this.drawerContent}
            </Drawer>
          </Hidden>
        </nav>
        <main className={styles.content}>{this.props.children}</main>
      </div>
    );
  }
}

export default withRouter(Layout);
