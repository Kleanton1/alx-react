import React, { useContext } from "react";
import { connect } from "react-redux";
import { getFullYear, getFooterCopy } from "../utils/utils";
import PropTypes from "prop-types";

export function Footer({ user }) {
  return (
      <div className="footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.PropTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);