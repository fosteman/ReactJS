import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import parseLinkHeader from 'parse-link-header';
import orderBy from 'lodash/orderBy';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      posts: [],
    };
    this.getPosts = this.getPosts.bind(this);
  }

  static propTypes = {
    children: PropTypes.,
  };

  componentDidMount() {
    this.getPosts();
  }

  componentDidCatch(err, info) {
    console.error(err);
    console.error(info);
    this.setState(() => ({
      error: err,
    }));
  }

  getPosts() {
    // api call
  }

  render() {
    if (this.state.error)
      return (
          <div className="app">
            <ErrorMessage error={this.state.error}/>
          </div>
      );
    else
      return (
          <Fragment>
            <Nav user={this.props.user}/>
            {this.state.loading ?
                (
                    <div className="loading">
                      <Loader/>
                    </div>
                )
                :
                (
                    <div className="home">
                      <Welcome key="welcome"/>
                      <div>
                        {
                          this.state.posts.length &&
                          (
                              <div className="posts">
                                {
                                  this.state.posts.map(({id}) =>
                                      <Post id={id} key={id} user={this.props.user}/>)
                                }
                              </div>
                          )
                        }
                      </div>
                      <!--home-->
                    </div>
                )
            }
          </Fragment>
      ); // return
  } // render
} // class
