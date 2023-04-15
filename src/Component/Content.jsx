import React from 'react'

function Content() {
  return (
    <div className="container m">
  <div className="row">
    <h3 className="text-center">INDIFFERENT</h3>

    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Images/stray.avif')}  alt="colour"/>
          <div className="caption">
            <h4>COLOUR</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p><a href="h" className="btn btn-primary" role="button">READ MORE</a></p>           
          </div>
      </div>
    </div>
    
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Images/chin.avif')}  alt="chin"/>
          <div className="caption">
            <h4>ASIAN</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          
          </div>
          <p><a href="https:" className="btn btn-primary" role="button">READ MORE</a></p>
      </div>
    </div>
   
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Images/darkboy.avif')}  alt="boy"/>
          <div className="caption">
            <h4>BOY</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>   
          </div>
          <p><a href="https:" className="btn btn-primary" role="button">READ MORE</a></p>
      </div>
    </div>
    
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Images/dark.avif')}  alt="girl"/>
          <div className="caption">
            <h4>DARK</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          
          </div>
          <p><a href="https://psychcentral.com/blog/5-ways-to-deal-with-an-intimacy-phobic-person#next-steps" className="btn btn-primary" role="button">READ MORE</a></p>
      </div>
    </div>

  </div>
  </div>
  

  )
}

export default Content