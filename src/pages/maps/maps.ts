import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition,
   MarkerOptions, Marker
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MapsDemo component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class Maps {

  text: string;

  map: GoogleMap;

  constructor(private googleMaps: GoogleMaps,private geolocation: Geolocation) {
    console.log('Hello MapsDemo Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit() {
 this.loadMap();
}


positionMap()
{

  var data :LatLng;
this.geolocation.getCurrentPosition().then((resp) => {
  data = new LatLng(resp.coords.latitude,resp.coords.longitude);
  let position: CameraPosition = {
   target: data,
   zoom: 18,
   tilt: 30
 };

return this.map.moveCamera(position);
 // move the map's camera to position
}
).then(()=>{

let markerOptions: MarkerOptions = {
   position: data,
   title: 'Me'
 };

this.map.addMarker(markerOptions).then((marker:Marker)=>{
  marker.showInfoWindow();
})


},(error)=>{
    console.log('Error getting location', error); 
})
// },catch((error)=>{
//     console.log('Error getting location', error);
// })).then((marker:Marker)=>{

// marker.showInfoWindow();

// }).catch((error) => {
//   console.log('Error getting location', error);
// });

}


loadMap()
{
   let element: HTMLElement = document.getElementById('map');
this.map = this.googleMaps.create(element);

 this.map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
   }
 ); 

}

// positionMap(){
// this.locationAccuracy.canRequest().then((canRequest: boolean) => {

//   if(canRequest) {
//     // the accuracy option will be ignored by iOS
//     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
//       () => console.log('Request successful'),
//       error => console.log('Error requesting location permissions', error)
//     );
//   }

// });
// }
}




// const marker: Marker = map.addMarker(markerOptions)
//    .then((marker: Marker) => {
//       marker.showInfoWindow();
//     });
//  }
