import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'txt123'
    }
  }

  render() {
    const {txt} = this.state;
    return (
      <div className="txt">
        {txt}
      </div>
    );
  }
}

export default App;
