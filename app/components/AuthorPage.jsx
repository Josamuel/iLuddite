const React = require('react');
const Link = require('react-router').Link;
const AuthorBox = require('./AuthorBox');
const AuthorQueue = require('./AuthorQueue');

class AuthorPage extends React.Component {
  render(){
    return (
      <div className="container">
          <AuthorBox author={this.props.author}/>
          <AuthorQueue AuthorQueue={this.props.authorQueue}/>
      </div>
    );
  }
}

module.exports = AuthorPage;