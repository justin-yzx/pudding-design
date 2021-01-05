import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.less';

class Test extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {txt = ''} = this.props;
    return (
      <div className="test-box">
        <div>test1</div>
        <div>{txt}</div>
      </div>
    );
  }
}

Test.PropTypes = {
  /**
   * This is a description for this prop.
   * Button type.
   */
  txt: PropTypes.string
}

Test.defaultProps = {
  txt: ''
}

export default Test;
