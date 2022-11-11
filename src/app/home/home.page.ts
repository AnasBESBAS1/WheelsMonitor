import { Component, Input, OnInit } from "@angular/core";
import { Router, NavigationExtras } from '@angular/router';
import { WheelRepositoryService } from "../services/wheel-repository.service";

export interface Wheel {
  pressure: number;
  wear: number;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})


export class HomePage implements OnInit {


  rearLeft = "Rear Left";
  rearRight = "Rear right";
  frontLeft = "Front Left";
  frontRight = "Front right";
  coloring = "";
  toolbarcolor = "";

  @Input() wheelArray! : Array<Wheel>;

  constructor(private router: Router, private wheelRepositoryService : WheelRepositoryService ) {
  }

  ngOnInit() {
    this.wheelArray = this.wheelRepositoryService._wheels;
  }

  setColorBarGlob(){
    for (var i = 0 ; i< 4 ; ++i){
      if(this.wheelArray[i].pressure > 3 || this.wheelArray[i].pressure < 2.5 || this.wheelArray[i].wear > 20000){
        this.toolbarcolor = "danger";
        return;
      }
    }
    this.toolbarcolor = "medium";
    return;
  }
  setColor(_presseure, _wear){
    if (_presseure > 3 || _presseure < 2.5) {
      this.coloring = "red";
      return;
    } else if (_wear > 20000) {
      this.coloring = "red";
      return;
    }
    this.coloring = "black";
  }

  checkStatus(_presseure, _wear): string {
    if (_presseure > 3 || _presseure < 2.5) {
      return "Warning:presseure";
    } else if (_wear > 20000) {
      return "Warning:wear";
    }
    return "status : ok";
  }

  openDetailsWithState(nameofwheel,index) {
    this.router.navigate(['loader'], { state: { _name: nameofwheel,
    _index : index,
  }});
    }  //https://ionicacademy.com/pass-data-angular-router-ionic-4/
}
