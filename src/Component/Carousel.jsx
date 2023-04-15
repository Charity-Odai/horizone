import React from 'react'

function Carousel() {
  return (
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  
  <div className="carousel-inner n" role="listbox">
    <div className="item active">
      <img src={require('./Images/hat.avif')} alt="..." className="img-responsive" width="100%" height="320px"/>
      <div className="carousel-caption">
        Shadow Black
      </div>
    </div>
    <div className="item">
      <img src={require('./Images/bird.avif')} alt="..." className="img-responsive" width="100%" height="320px"/>
      <div className="carousel-caption">
        Light white
      </div>
    </div>
    <div className="item">
      <img src={require('./Images/darkgirl.avif')} alt="..." className="img-responsive" width="100%" height="320px"/>
      <div className="carousel-caption">
        Light white
      </div>
    </div>
    
  </div>

  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}

export default Carousel