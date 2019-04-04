import React, { Component } from 'react';
import './App.css';
import photo from './n8nny.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* Header*/ }
          < section className = "hero is-primary is-medium" >

            < div className = "nav-icon" >
              < span className = "icon-fb" >
              < a href = "https://fb.com/n8nny" >
                  < i className = "fab fa-facebook-square icon is-medium" > </i>
               </a>
              </span>
              < span className = "icon-gh" >
              < a href = "https://github.com/N8NNY" >
                  < i className = "fab fa-github-square icon is-medium" > </i>
              </a>
              </span>
            </div>

            <div className="hero-body">
              <div className="container">
                < figure class = "image is-128x128" >
                    <img class = "is-rounded" src={photo}/>
                </figure>
                <h1 className="title">Thanat Krasae</h1>
                <h2 className="subtitle">Computer Engineer</h2>
              </div>  
            </div>

          </section>
          

      </div>
    );
  }
}

export default App;
