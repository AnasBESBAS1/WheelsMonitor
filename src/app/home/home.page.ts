import { Component, Input } from "@angular/core";

export interface Wheel {
  pressure: number;
  wear: number;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @Input() _wheels: Wheel[] = [
    { pressure: 2.6, wear: 5000 },
    { pressure: 4, wear: 10000 },
    { pressure: 2.7, wear: 24000 },
    { pressure: 2.8, wear: 10000 },
  ];
  rearLeft = "Rear Left";
  rearRight = "Rear right";
  frontLeft = "Front Left";
  frontRight = "Front right";
  status = "s";
  coloring = "red";

  constructor() {}

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
      this.coloring = "red";
      return "Warning:presseure";
    } else if (_wear > 20000) {
      this.coloring = "red";
      return "Warning:wear";
    }
    this.coloring = "black";
    return "status : ok";
  }
}
