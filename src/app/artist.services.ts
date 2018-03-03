import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ArtistServices{
  constructor(private httpClient:HttpClient){

  }
  getList(data): any{
    return this.httpClient.post('/api/get/list',data)
  }
}
