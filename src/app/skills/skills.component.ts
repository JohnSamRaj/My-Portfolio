import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  title = 'My Portfolio | Skills';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    setTimeout(() => {
      // Select all heading containers
      const allHeadingContainers = this.el.nativeElement.querySelectorAll('.container .heading');
      allHeadingContainers.forEach((heading: HTMLElement) => {
        this.renderer.addClass(heading, 'visible');
      });
    }, 3000);
  }
}


