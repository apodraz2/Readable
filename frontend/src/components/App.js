import React, { Component } from 'react';
import PostList from './PostList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND}/posts`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
      	
      	const jsonData = JSON.parse(data);
      	console.log(data);
        this.setState({backend:jsonData});
      });
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h1>Readable</h1>
        </div>
        
        <div>
          <PostList posts={this.state.backend}/>
        </div>
      </div>
    );
  }
}

export default App;
