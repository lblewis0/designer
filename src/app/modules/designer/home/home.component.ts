import { Component, ElementRef } from '@angular/core';
import { Contact } from '../../../shared/models/contacts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  contacts: Contact[] = [
    {
      firstname: "Louis",
      lastname: "Boeckmans",
      phoneNumber: 495724810,
      mail: "louis.boeckmans@outlook.com",
      street: "Quai de Gaulle",
      streetNumber: 17,
      postalCode: 4020,
      locality: "Liège"
    },
    {
      firstname: "Carole",
      lastname: "Maziers",
      phoneNumber: 498735522,
      mail: "carole.maziers@outlook.com",
      street: "Bassinne",
      streetNumber: 6,
      postalCode: 5372,
      locality: "Méan"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    }

  ]

  projects: any[] = [
    {
      id: 0,
      name: 'Designer',
      creationDate: '18-12-2023',
      lastUpdate: '18-12-2023'
    },
    {
      id: 0,
      name: 'Test',
      creationDate: '18-12-2023',
      lastUpdate: '18-12-2023'
    }
  ]

  colElement: string[] = ['#scroll1','#scroll2','#scroll8','#scroll9'];

  hoverIndex: number | null = null;

  activeIndex: number | null = null;

  constructor(private el: ElementRef) {}

  scrollEvent(event: Event, elementScroll: string) : void
  {
    console.log(event);
    console.log(elementScroll);

    let scrollColumn = this.el.nativeElement.querySelector(elementScroll);

    for(let i=0; i < this.colElement.length; i++)
    {
      let appliedColumn = this.el.nativeElement.querySelector(this.colElement[i]);

      if(appliedColumn !== scrollColumn)
      {
        appliedColumn.scrollTop = scrollColumn.scrollTop;
      }
    }

  }

  onMouseEnter(index: number) : void
  {
    this.hoverIndex = index;
  }

  onMouseLeave(index: number) : void
  {
    this.hoverIndex = null;
  }

  onMouseDown(index: number) : void
  {
    this.activeIndex = index;
  }

  onMouseUp(index: number) : void
  {
    this.activeIndex = null;
  }
}
