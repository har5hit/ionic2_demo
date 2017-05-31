import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

 public base64Image:String;
  constructor(public navCtrl: NavController,private camera: Camera) {

  }


takePic(): void
{
this.camera.getPicture({
         quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  saveToPhotoAlbum: true,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 //this.base64Image = 'data:image/jpeg;base64,' + imageData;
  this.base64Image = imageData;

 console.log("data is: "+this.base64Image)
}, (err) => {
 // Handle error
 console.log(err)
});
}
 

}
