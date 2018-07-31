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
  user: Observable<firebase.User>;
  constructor(private afauth: AngularFireAuth) {
    this.user = afauth.authState;
  }

  logout() {
    this.afauth.auth.signOut();
  }
}
