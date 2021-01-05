import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'txt123456789876'
    }
  }

  componentDidMount() {
    window.addEventListener('online', this.networkChange)
    window.addEventListener('offline', this.networkChange)
  }

  componentWillUnmount() {
    window.removeEventListener('online',this.networkChange)
    window.removeEventListener('offline',this.networkChange)
  }

  networkChange = () => {
    console.log(navigator.onLine)
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
