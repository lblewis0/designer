import { Component } from '@angular/core';

@Component({
  selector: 'app-main-line',
  templateUrl: './main-line.component.html',
  styleUrl: './main-line.component.scss'
})
export class MainLineComponent {

  inputComponentNameValue: string = '';
  
  inputs: any[] = [
    {
      name: 'component',
      isFocus: false,
      isHover: false,
      isDefault: true,
      defaultValue: 'component-name',
      myValue: '',
      isExpanding: false,
      isContracting: false
    },
    {
      name: 'type',
      isFocus: false,
      isHover: false,
      isDefault: true,
      defaultValue: 'div',
      myValue: '',
      isExpanding: false,
      isContracting: false
    },
    {
      name: 'id',
      isFocus: false,
      isHover: false,
      isDefault: true,
      defaultValue: 'id-01',
      myValue: '',
      isExpanding: false,
      isContracting: false
    }
  ]

  constructor() {}

  inputComponentFocus(index: number) : void
  {
    for(let i=0; i < this.inputs.length; i++)
    {
      if(index === i)
      {
        this.inputs[i].isFocus = true;
      }
      else
      {
        this.inputs[i].isFocus = false;
      }
    }
    this.inputComponentNameValue = this.inputs[0].myValue;
  }

  inputComponentBlur() : void
  {
    this.inputs[0].isFocus = false;
    this.inputs[0].myValue = this.inputComponentNameValue;
    this.inputComponentNameValue = '';
  }

  getComponentClass() : string
  {
      if(this.inputs[0].myValue !== '')
      {
        if(this.inputs[0].isFocus)
        {
          return 'main-line-component-name-input-value-focus';
        }

        return 'main-line-component-name-input-value'
      }
      else
      {
        if(this.inputs[0].isFocus)
        {
          return 'main-line-component-name-input-default-focus';
        }

        return 'main-line-component-name-input-default'
      }
    
      
  }

  getComponentChange() : void
  {
     this.inputs[0].myValue = this.inputComponentNameValue;
  }
}


