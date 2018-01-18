import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber, FormattedRelative, FormattedDate, FormattedTime, injectIntl, intlShape } from 'react-intl';
import jsxToString from 'jsx-to-string';
import './App.css';
import messages from './messages';

import {
  setLocale,
  setExampleVisibility,
  setFieldValue,
} from './actions/';

class App extends Component {

  onFieldChange(fieldName, value) {
    this.setState(fieldName, value);
  }

  render() {
    const { state, dispatch, intl } = this.props;
    /**
     * This function to simulate API calls and dispatch success actions
     */
    const handleLanguageChange = (language) => () => {
      dispatch(setLocale(language));
    };

    const examples = [{
      name: intl.formatMessage(messages.formatNumber),
      field: 'field1',
      jsx: <FormattedNumber value={state.ui.field1} />
    }, {
      name: intl.formatMessage(messages.formatMessage),
      field: 'field2',
      jsx: <FormattedMessage id="app.message" defaultMessage="Hello {name}!" values={{ name: state.ui.field2 }} />
    }, {
      name: intl.formatMessage(messages.formatPluralMessage),
      field: 'field3',
      jsx: <FormattedMessage
        id="app.plural"
        defaultMessage="Hello {name}!. You selected {value, plural, one {# option} other {# options}}"
        values={{name: state.ui.field2, value: state.ui.field3}}
      />
    }, {
      name: intl.formatMessage(messages.formatDate),
      jsx: <FormattedDate value={state.ui.field4} />
    }, {
      name: intl.formatMessage(messages.formatTime),
      jsx: <FormattedTime value={state.ui.field5} />
    }, {
      name: intl.formatMessage(messages.formatRelative),
      jsx: <FormattedRelative value={state.ui.field6} />
    }];

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              <FormattedMessage id="app.react-intl" defaultMessage="react-intl"/>
            </h1>
            <div className="button-group">
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                  <FormattedMessage id="app.selectLanguage" defaultMessage="Select Language"/>
                <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li onClick={handleLanguageChange('en-US')} role="button"><a href="#">English</a></li>
                  <li onClick={handleLanguageChange('de')} role="button"><a href="#">German</a></li>
                  <li onClick={handleLanguageChange('es-ES')} role="button"><a href="#">Spanish</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {examples.map(example => (
          <div className="row">
            <div className="col-xs-12">
              <h5>
                {example.name}
              </h5>
              {example.field && <input type="text" name={example.field} onChange={(e) => dispatch(setFieldValue(example.field, e.target.value))} />}
              <pre>
                {jsxToString(example.jsx)}
              </pre>
              Output:
              <pre>{example.jsx}</pre>
            </div>
          </div>
        ))}

        <div className="row">
          <div className="col-xs-12">
            <h5> <FormattedMessage id="app.resource" defaultMessage="Some Resources:"/></h5>
            <ul>
              <li>
                <a href="https://github.com/yahoo/react-intl/wiki" target="_new">
                  <FormattedMessage id="app.docs" defaultMessage="React Intl Docs" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(injectIntl(App));
