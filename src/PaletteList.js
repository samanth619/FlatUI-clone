import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props;
        return (
            <div className="palette-list">
                {palettes.map(palette=>(
                    <p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>
                ))}
            </div>
        )
    }
}
