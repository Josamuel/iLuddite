const React = require('react');

const AuthorQueue = (props) => {

const AuthorQueue = props.AuthorQueue.slice(1, 7).map((book, idx) => {
    return (
      <div className="col-md-2 col-sm-2 col-xs-2 readingColumn">
        <Link to="#"><img src={book.image} className='img-responsive bookPhoto'/></Link>
      </div>
    );
  });

  return(

  <div class="row" class="bookRow"> <h4 class="authorBooks"> Some titles from Robot DavenPoop: </h4>
   <div className ="wrappingDiv">
      <div className="row readingRow">
        <div className="col-xs-12">
          <div className="row">
            {AuthorQueue}
          </div>
        </div> 
      </div>
    </div>
  </div>
  );

};

module.exports = AuthorQueue;
