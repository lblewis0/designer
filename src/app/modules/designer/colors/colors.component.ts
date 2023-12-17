import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.documentElement.style.setProperty('$primary-color-2', '#39ace7')
  }
}
