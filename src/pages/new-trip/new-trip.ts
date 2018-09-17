import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiRestProvider } from '../../providers/api-rest/api-rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * Generated class for the NewTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-trip',
  templateUrl: 'new-trip.html',
})
export class NewTripPage {

  formTrip: FormGroup;
  trip: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiRestProvider: ApiRestProvider, private fb: FormBuilder  ) {
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTripPage');
  }

  addTrip(){
    this.trip={};
    console.log(this.trip);
    this.trip.name=this.formTrip.get('tripName').value;
    this.trip.description=this.formTrip.get('tripDescription').value;
    this.trip.level=this.formTrip.get('tripLevel').value;
    this.trip.start ={};
    this.trip.start.name=this.formTrip.get('startPoint').value;
    this.trip.end ={};
    this.trip.end.name=this.formTrip.get('finalPoint').value;
    this.trip.tripPublic=true;
    console.log(this.trip);

    this.apiRestProvider.addTrip(this.trip).then((res: any) =>{
      
    }, error =>{
      console.log(error);
    });
    
  }

  createForm(){
    this.formTrip = this.fb.group({
      tripName: [undefined, Validators.required],
      tripDescription: [undefined, Validators.required],
      tripLevel: [undefined, Validators.required],
      startPoint: [undefined, Validators.required],
      finalPoint: [undefined, Validators.required],
    })
  }

}
