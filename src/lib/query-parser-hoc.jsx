import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {connect} from 'react-redux';

//import {detectTutorialId} from './tutorial-from-url';

//import {activateDeck} from '../reducers/cards';
//import {openTipsLibrary} from '../reducers/modals';

/* Higher Order Component to get parameters from the URL query string and initialize redux state
 * @param {React.Component} WrappedComponent: component to render
 * @returns {React.Component} component with query parsing behavior
 */
const QueryParserHOC = function (WrappedComponent) {
    class QueryParserComponent extends React.Component {
        constructor (props) {
            super(props);
            queryString.parse(location.search);
        }
        setActiveCards () {
        }
        openTutorials () {
        }
        render () {
            const {
                ...componentProps
            } = this.props;
            return (
                <WrappedComponent
                    {...componentProps}
                />
            );
        }
    }
    return connect(
        null
    )(QueryParserComponent);
};

export {
    QueryParserHOC as default
};
