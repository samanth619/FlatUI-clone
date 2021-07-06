import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import PaletteCard from './PaletteCard';

const styles={
   root:{
       backgroundColor:"#4682b4",
       height:"100vh",
       display:"flex",
       alignItems:"flex-start",
       justifyContent:"center"    
   },
   container:{
       width:"60%",
       display:"flex",
       alignItems:"flex-start",
       flexDirection:"column",
       flexWrap:"wrap"
   },
   nav:{
       display:"flex",
       width:"100%",
       justifyContent:"space-between",
       color:"white"
   },
   palettes:{
       display:"grid",
       boxSizing:"border-box",
       width:"100%",
       gridTemplateColumns:"repeat(3,30%)",
       gridGap:"5%"
   }
}

class PaletteList extends Component {
    openPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const {palettes,classes} = this.props;
        return (
            <div className={classes.root}>
               <div className={classes.container}>
                   <nav className={classes.nav}>
                       <h1>React Colors</h1>
                   </nav>
                   <div className={classes.palettes}>
                       {palettes.map(palette=>(
                          <PaletteCard key={palette.id} {...palette} handleClick={()=> this.openPalette(palette.id)} />
                       ))}
                   </div>
               </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);