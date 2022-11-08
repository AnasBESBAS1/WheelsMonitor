import { Injectable } from '@angular/core';
import {  Wheel } from "../data/wheel";
@Injectable({
  providedIn: 'root'
})

export class WheelRepositoryService {

  _wheels : Wheel[] = [
   {pressure : 3, wear : 15000},
   {pressure : 2.5, wear : 25000},
   {pressure : 4, wear : 15000},
   {pressure : 3, wear : 15000}
 ];

 constructor() { }

 public get_wheels() : Array <Wheel>{
   return this._wheels;
 }
}
