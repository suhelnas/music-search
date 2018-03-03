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
  showTable = false;
  trackName = null;
  data ={
    Query:null
  }
  constructor(private artistService:ArtistServices){

  }
  ngOnInit(){
    let that = this;

  }
  search(){
    let that = this;
    this.data.Query =this.trackName;
    let promise = this.artistService.getList(this.data);
    promise.subscribe(function (object) {
      console.log(object);
      that.showTable = true;
      that.list = object.result;
      console.log(that.list);
    },function (error) {

    })
  }
  descendingSort(value){
    let sortedlist = this.list;
    for(let i=0;i<sortedlist.length;i++) {
      let change = 0;
      for(let j=0;j<sortedlist.length-1;j++){
        if(value == 1){
          if(sortedlist[j].name<sortedlist[j+1].name){
            let temp = sortedlist[j];
            sortedlist[j]=sortedlist[j+1];
            sortedlist[j+1]=temp
            change = 1;
          }
        }
        if(value ==2){
          if(sortedlist[j].artistName<sortedlist[j+1].artistName){
            let temp = sortedlist[j];
            sortedlist[j]=sortedlist[j+1];
            sortedlist[j+1]=temp
            change = 1;
          }
        }
        if(value==3){
          if(sortedlist[j].listeners<sortedlist[j+1].listeners){
            let temp = sortedlist[j];
            sortedlist[j]=sortedlist[j+1];
            sortedlist[j+1]=temp
            change = 1;
          }
        }
      }
      if(change == 0)
        break;
    }
    this.list = sortedlist;

  }
  ascendingSort(value){
    let that =this
    let sortedlist = this.list;
    for(let i=0;i<sortedlist.length;i++) {
      let change =0;
      for(let j=0;j<sortedlist.length-1;j++){
        if(value == 1){
          if(sortedlist[j].name>sortedlist[j+1].name){
            let temp = sortedlist[j];
            sortedlist[j]=sortedlist[j+1];
            sortedlist[j+1]=temp
            change = 1;
          }
        }
        if(value ==2){
          if(sortedlist[j].artistName>sortedlist[j+1].artistName){
            let temp = sortedlist[j];
            sortedlist[j]=sortedlist[j+1];
            sortedlist[j+1]=temp
            change = 1;
          }
        }
        if(value==3){
          if(sortedlist[j].listeners>sortedlist[j+1].listeners){
            let temp = sortedlist[j];
            sortedlist[j]=sortedlist[j+1];
            sortedlist[j+1]=temp
            change = 1;
          }
        }
      }
      if(change==0)
        break;
    }
    this.list = sortedlist;
  }
}
