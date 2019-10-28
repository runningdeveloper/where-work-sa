import React from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"

const MapDisplay = ({ locations, clickedMarker }) => {
  if (locations.length > 1) {
    return (
      <Map center={[-26.2016812, 28.0361373]} zoom={8} height={400}>
        {locations.length > 0 &&
          locations.map(item => (
            <Marker
              key={item.id}
              anchor={[item.lat, item.long]}
              payload={{
                id: item.id,
                name: item.name,
                description: item.description,
                link: item.parent.name,
              }}
              onClick={({ event, anchor, payload }) => {
                clickedMarker(payload)
              }}
            />
          ))}
      </Map>
    )
  } else {
    return (
      <Map
        center={[locations[0].lat, locations[0].long]}
        zoom={14}
        height={400}
      >
        {locations.length > 0 &&
          locations.map(item => (
            <Marker
              key={item.id}
              anchor={[item.lat, item.long]}
              payload={{
                id: item.id,
                name: item.name,
                description: item.description,
              }}
              onClick={({ event, anchor, payload }) => {
                console.log(payload)
              }}
            />
          ))}
      </Map>
    )
  }
}

export default MapDisplay
