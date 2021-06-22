import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper.js';
import PaletteList from './PaletteList';

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
        <Route exact path='/' render={()=><PaletteList palettes={seedColors} />} />
        <Route exact path='/palette/:id' render={routeProps=>(
          <Palette 
            palette={generatePalette(this.findPalette(routeProps.match.params.id))}
         />
         )}
        />
      </Switch>
  )
  }
}

export default App;
