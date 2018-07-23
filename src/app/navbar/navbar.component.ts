import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from "../../../node_modules/rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  user: firebase.User;
  constructor(private afauth: AngularFireAuth) {
    afauth.authState.subscribe(x => (this.user = x));
  }

  logout() {
    this.afauth.auth.signOut();
  }
}
