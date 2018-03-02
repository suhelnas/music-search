import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ArtistServices{
  constructor(private httpClient:HttpClient){

  }
  getList(): any{
    return this.httpClient.get('/api/get/list')
  }
}
