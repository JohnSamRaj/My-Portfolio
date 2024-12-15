import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'My Portfolio | Home';
  mainImage = 'assets/All Images/main.png';
  paragraphText = 'Hi Everyone ...!';
  textWidth = '495px';
  textLeft = '35%';
  letterSpacing = '10px';
  animationClass = '';
  isContentVisible = false;

  @ViewChild('mainImageElement') mainImageElement!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  changeImage(newImage: string) {
    this.mainImage = newImage;
    this.renderer.addClass(this.mainImageElement.nativeElement, 'drop-shadow');
  }

  resetImage() {
    this.mainImage = 'assets/All Images/main.png';
    this.renderer.removeClass(this.mainImageElement.nativeElement, 'drop-shadow');
  }

  redirectToEducation() {
    this.router.navigate(['/education']);
  }

  changeText() {
    this.paragraphText = 'Do You Want To Know About Myself ?';
    this.textWidth = "auto";
    this.textLeft = "17%";
    this.letterSpacing = "5px"
    this.animationClass = 'no-animation';
  }

  resetText() {
    this.paragraphText = 'Hi Everyone ...!';
    this.textWidth = "495px";
    this.textLeft = "35%";
    this.letterSpacing = "10px"
    this.animationClass = '';
  }

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }
}
