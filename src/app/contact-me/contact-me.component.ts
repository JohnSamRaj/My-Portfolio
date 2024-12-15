import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  title = 'My Portfolio | Contact Me';
  paragraphText = 'Find My Contact In This Page<br>By Hovering Mouse And<br>Contact Me If You Can, LoL...!<br>😂';

  instaText() {
    this.paragraphText = 'Ohh...! You Got My Insta...!';
  }

  gitText() {
    this.paragraphText = 'Ohh...! You Findout My GitHub...!';
  }

  mailText() {
    this.paragraphText = 'Ohh...! You Findout My Mail...!';
  }

  linkText() {
    this.paragraphText = 'Ohh...! You Findout My LinkedIn...!';
  }

  resetText() {
    this.paragraphText = 'Now Find My Other Contact In This Page<br>And<br>Contact Me If You Can, LoL...!<br>😁';
  }
}