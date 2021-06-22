import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaletteCard from './PaletteCard';

export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props;
        return (
            <div className="palette-list">
                {palettes.map(palette=>(
                    <PaletteCard {...palette} />
                ))}
            </div>
        );
    }
}
