import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../services/app-state';
import { BirthdayActions } from '../../ngrx/actions/birthday.actions';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

public birthday: any = {};
    public isNew = true;
    public action = 'Add';
    public isoDate = '';

    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams,
        private store: Store<AppState>,
        private birthdayActions: BirthdayActions) {
    }

    ionViewWillEnter() {
        let editBirthday = this.navParams.get('birthday');

        if (editBirthday) {
            this.birthday = editBirthday;
            this.isNew = false;
            this.action = 'Edit';
            this.isoDate = this.birthday.Date.toISOString().slice(0, 10);
        }
    }

    save() {
        this.birthday.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.store.dispatch(this.birthdayActions.addBirthday(this.birthday));
        }
        else {
              this.store.dispatch(this.birthdayActions.updateBirthday(this.birthday));
        }

        this.dismiss();
    }

    delete() {
        this.store.dispatch(this.birthdayActions.deleteBirthday(this.birthday));
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.birthday);
    }

}
