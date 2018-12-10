import React from 'react';
import axios from 'axios';
import moment from 'moment';

class App extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/today').then(res => {
      if (res.status === 200) {
        this.setState({ data: res.data });
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map(weather => (
          <div key={weather.time}>
            [{ moment(weather.time).format('MM/DD/YYYY hh:mm') }]: {parseFloat(weather.temp - 273.15).toFixed(2)}&#8451;
          </div>
        ))}
      </div>
    );
  }
}

export default App;
