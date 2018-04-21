import React from "react";
import {
  withStyles
} from "material-ui";
import { Search } from "material-ui-icons";

import { CustomInput, IconButton as SearchButton } from "./../../components";

import headerLinksStyle from "./../../variables/styles/headerLinksStyle";

class HeaderLinks extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CustomInput
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <SearchButton
          color="white"
          aria-label="edit"
          customClass={classes.top + " " + classes.searchButton}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
