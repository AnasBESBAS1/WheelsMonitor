import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WheelRepositoryService } from "../../services/wheel-repository.service";
import { Wheel } from "../../data/wheel";
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})


export class LoaderPage implements OnInit {

  name: string;
  index : number;
  @Input() wheelArray! : Array<Wheel>;

  openMaps = async () => {
    this.name = "anas";
    await AppLauncher.openUrl({url:'com.google.android.apps.maps'});
  };

  constructor(private router: Router, private route: ActivatedRoute,
        private wheelRepositoryService : WheelRepositoryService ) {
   this.route.params.subscribe(params => {
     this.name = router.getCurrentNavigation().extras.state._name;
     this.index = router.getCurrentNavigation().extras.state._index;
   });
 }

   launchMaps(){
    const checkCanOpenUrl = async () => {
      this.name = "anas";
      const { value } = await AppLauncher.canOpenUrl({ url: 'com.google.android.apps.maps' });

      console.log('Can open url: ', value);
    };

    checkCanOpenUrl();
  }
  ngOnInit() {
    this.wheelArray = this.wheelRepositoryService._wheels;
  }

  changeValuePressure($event){
    this.wheelArray[this.index].pressure = $event.target.value;
  }
  changeValueWear($event){
    this.wheelArray[this.index].wear = $event.target.value;
  }
}
