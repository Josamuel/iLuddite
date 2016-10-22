const React = require('react');
const Link = require('react-router').Link;

const Author = (props) => {
  return (
   <div className="row">
    <div className="col-xs-4 authorPhotoColumn">
      <img src={props.author.image} className="img-responsive authorPhoto"/>
    </div>

  <div className="col-md-6" className="col-sm-6">
      <h2>{props.author.name}</h2>
      <br/>
      <h4>About the Author</h4>
      <p> {props.author.description}</p>
  </div>
</div>
  );
};

module.exports = Author;