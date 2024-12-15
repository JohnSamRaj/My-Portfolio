import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  title = 'My Portfolio | Education';
  isHoveredOne = false;
  isHoveredTwo = false;
  isHoveredThree = false;
}
