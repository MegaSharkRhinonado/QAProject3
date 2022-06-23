import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const position = [51.505, -0.09]

export class GTComp01 extends Component {
    render(){
        return(
            <>
            
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </>
    );
    }
}


