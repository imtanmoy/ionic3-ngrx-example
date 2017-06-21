import { Component, ChangeDetectionStrategy } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/rx";
import { Birthday } from "../../models/birthday";
import { AppState } from '../../services/app-state';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  public birthdays: Observable<Birthday[]>;

  constructor(
    private nav: NavController,
    private store: Store<AppState>,
    private modalCtrl: ModalController
  ) {
    this.birthdays = this.store.select(state => state.birthdays);
  }

  showDetail(birthday) {
    let modal = this.modalCtrl.create('DetailsPage', { birthday: birthday });
    modal.present();
  }
}
