import React, { Component } from 'react'
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format:"hex",open:false};
        this.handleSelect = this.handleSelect.bind(this);
        this.closeSnackbar= this.closeSnackbar.bind(this);
    }
    handleSelect(e){
        this.setState({format:e.target.value,open:true},()=>{
            this.props.handleChange(this.state.format);
        });
    }
    closeSnackbar(e){
        this.setState({open:false});
    }
    render() {
        const {level,changeLevel} = this.props;
        return (
            <header className="Navbar">
               <div className="logo">
               <a href="#">Color Picker</a>
               </div>
               <div className="slider-container">
                 <div className="slider">
                 <Slider 
                    defaultValue={level} 
                    min={100} 
                    max={900} 
                    step={100}
                    onAfterChange={changeLevel}    
                 />
                 </div>
               </div>
               <div className="select-container">
                     <Select value={this.state.format} onChange={this.handleSelect}>
                         <MenuItem value="hex">HEX- #fffff</MenuItem>
                         <MenuItem value="rgb">RGB- #255,255,255</MenuItem>
                         <MenuItem value="rgba">RGBA- #255,255,255,1</MenuItem>
                     </Select>
                 </div> 
                 <Snackbar 
                    anchorOrigin={{vertical:"bottom",horizontal:"left"}}
                    open={this.state.open}  
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed!</span>}  
                    constentProps={{"aria-describedby":"message-id"}}
                    onClose={this.closeSnackbar}   
                    action={[
                        <IconButton 
                           onClick={this.closeSnackbar} 
                           color='inherit' 
                           key='close'
                           aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]} 
                 />          
            </header>
        )
    }
}
