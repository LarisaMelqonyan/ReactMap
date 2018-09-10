import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
class GooglMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '30vh', width: '50%',  margin:"0 auto" }}>
            <GoogleMapReact
                className="container karta"
                bootstrapURLKeys={{
                    key:'',
                    language: 'en',
                }}
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
            >
            </GoogleMapReact>
      </div>
    );
  }
}
 
export default GooglMap;