import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiRestProvider } from '../../providers/api-rest/api-rest';
import { NewTripPage } from '../new-trip/new-trip'

/**
 * Generated class for the RoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-routes',
  templateUrl: 'routes.html',
})
export class RoutesPage {
  trips: any; 
  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiRestProvider: ApiRestProvider) {
    this.getPublicTrips();
  }

  getPublicTrips(){
    this.apiRestProvider.getPublicTrips()
    .then(data=> {
      this.trips = data;
      console.log(this.trips);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutesPage');
  }

  newTrip(){
    this.navCtrl.push(NewTripPage);
  }

  expandItem(item){
 
    this.items.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });

}

}
