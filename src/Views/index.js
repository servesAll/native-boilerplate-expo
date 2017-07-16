import React from 'react';
import { connect } from 'react-redux';
import Navigator from '/src/Routes';
import { addNavigationHelpers } from 'react-navigation';

const Views = ({ dispatch, nav }) => (
    <Navigator navigation={addNavigationHelpers({
        dispatch,
        state: nav,
    })} />
);

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(Views);
