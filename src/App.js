import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper.js';

class App extends Component{
  findPalette(id){
    return seedColors.find((palette)=>{
      return palette.id === id;
    });
  }
  render(){
    //console.log(generatePalette(seedColors[4]));
  return (
    
      <Switch>
        <Route exact path='/' render={()=><h1>Home page with Palette List!</h1>} />
        <Route exact path='/palette/:id' render={routeProps=>(
          <Palette 
            palette={generatePalette(this.findPalette(routeProps.match.params.id))}
         />
         )}
        />
      </Switch>
    // {/* <div className="App">  
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div> */}
  );
  }
}

export default App;
