import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'ImageButton.html',
})
export class ImageButton{
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) 
    {

        var characters ={
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      }

      this.character=characters;
    }
}