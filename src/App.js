    // src/App.js

    import React, { Component } from 'react';
    import Msgs from './components/msgs';
    import axios from 'axios';

    class App extends Component {
      state = {
        msgs: String
      }
      render() {
        return (
          <Msgs msgs={this.state.msgs} />
        );
      }
      componentDidMount() {
        axios.get('http://localhost:4200/api/sayhello/Hello-from-react')
        .then(response => {
          console.log(response.data);
          this.setState({ msgs: response.data.Msg })
        })
        .catch(error => {
          console.log(error);
        });
      }
    }

    export default App;