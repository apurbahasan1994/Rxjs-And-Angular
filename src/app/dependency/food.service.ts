import { Inject, Injectable } from '@angular/core';
import { API_TOKEN, USER_TOKEN } from './token';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor(@Inject(API_TOKEN)private api:string,@Inject(USER_TOKEN)private user:any) {
    console.log(api);
    console.log(user);
  }
}
