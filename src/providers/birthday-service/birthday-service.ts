import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/rx";
import { Birthday } from "../../models/birthday";

import * as PouchDB from 'pouchdb';

@Injectable()
export class BirthdayServiceProvider {
  constructor() {}
}
