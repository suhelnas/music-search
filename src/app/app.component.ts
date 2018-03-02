import { Component } from '@angular/core';
import {ArtistServices} from "./artist.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list;
  constructor(private artistService:ArtistServices){

  }
  ngOnInit(){
    let that = this;
    let promise = this.artistService.getList();
    promise.subscribe(function (object) {
      console.log(object);
      that.list = object.result;
      console.log(that.list);
    },function (error) {

    })
  }
}
