import { Component, OnInit } from '@angular/core';


export interface Wheel {
  pressure: number;
  wear : number;
}

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})


export class LoaderPage implements OnInit {

   _wheels : Wheel[] = [
    {pressure : 2,  wear : 19999},
    {pressure : 2,  wear : 19999},
    {pressure : 2,  wear : 19999},
    {pressure : 2,  wear : 19999}
  ]
  pressure = 10
  wear =   0

  contructor() { }

  ngOnInit() {
  }


}
