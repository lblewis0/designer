import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-line',
  templateUrl: './main-line.component.html',
  styleUrl: './main-line.component.scss'
})
export class MainLineComponent implements OnInit{

  mainlineExpanded: boolean = true;
  addLineHover: boolean = false;
  mainlineIndex: number = 0;
  
  inputComponentName: string = '';
  componentName: any = {
    isFocus: false,
    isDefault: true,
    inReduceMode: false,
    value: '',
    defaultValue: 'component-name',
    inputValue: 'component-name',
  }

  inputDivName: string = '';
  divName: any = {
    isFocus: false,
    isDefault: true,
    inReduceMode: false,
    value: '',
    defaultValue: 'div',
    inputValue: 'div',
  }

  constructor() {
  }

  ngOnInit() {
    this.onComponentNameInit();
    this.onDivNameInit();
  }

  onComponentNameInit()
  {
    if(!this.componentName.inReduceMode)
    {
      this.inputComponentName = this.componentName.inputValue;
    }
  }

  onComponentNameFocus()
  {
    this.inputComponentName = this.componentName.inputValue;
    this.componentName.isFocus = true;
    // console.log('focus');
    // console.log(this.componentName);
  }

  onComponentNameBlur()
  {
    
    //Supprimer la valeur de l'input après blur si on est en reduce mode
    if(this.componentName.inReduceMode)
    {
      this.inputComponentName = '';
    }
    else
    {
      if(this.inputComponentName === '')
      {
        this.inputComponentName = this.componentName.inputValue;
      }
    }

    //Set isFocus = false
    this.componentName.isFocus = false;

    // console.log('blur');
    // console.log(this.componentName);

  }

  onComponentNameInput()
  {
    // console.log('input');
    //Valeurs par défaut de l'input
    if(this.inputComponentName === '')
    {
      this.componentName.inputValue = this.componentName.defaultValue;
      this.componentName.isDefault = true;
      // console.log('null');
    }

    if(this.inputComponentName === this.componentName.defaultValue)
    {
      this.componentName.inputValue = this.componentName.defaultValue;
      this.componentName.isDefault = true;
      // console.log('default');
    }

    //Changements de valeurs de l'input
    if(this.inputComponentName !== this.componentName.value 
       && this.inputComponentName !== this.componentName.defaultValue
       && this.inputComponentName !== '')
    {
      this.componentName.value = this.inputComponentName;
      this.componentName.inputValue = this.componentName.value;
      this.componentName.isDefault = false;
      // console.log('value');
    }

    // console.log(this.componentName);
  }

  componentNameClass() : string
  {
    if(this.componentName.isFocus)
    {
      if(this.componentName.isDefault)
      {
        return 'input-name-default'
      }
      else
      {
        return 'input-name-value'
      }
    }
    else
    {
      if(this.componentName.isDefault)
      {
        if(this.componentName.inReduceMode)
        {
          return 'input-name-default-reduce'
        }
        else
        {
          return 'input-name-default'
        }
      }
      else
      {
        if(this.componentName.inReduceMode)
        {
          return 'input-name-value-reduce'
        }
        else
        {
          return 'input-name-value'
        }
      }
    }
  }

  onDivNameInit()
  {
    if(!this.divName.inReduceMode)
    {
      this.inputDivName = this.divName.inputValue;
    }
  }

  onDivNameFocus()
  {
    this.inputDivName = this.divName.inputValue;
    this.divName.isFocus = true;
    // console.log('focus');
    // console.log(this.componentName);
  }

  onDivNameBlur()
  {
    //Supprimer la valeur de l'input après blur si on est en reduce mode
    if(this.divName.inReduceMode)
    {
      this.inputDivName = '';
    }
    else
    {
      if(this.inputDivName === '')
      {
        this.inputDivName = this.divName.inputValue;
      }
    }

    //Set isFocus = false
    this.divName.isFocus = false;

    // console.log('blur');
    // console.log(this.componentName);

  }

  onDivNameInput()
  {
    // console.log('input');
    //Valeurs par défaut de l'input
    if(this.inputDivName === '')
    {
      this.divName.inputValue = this.divName.defaultValue;
      this.divName.isDefault = true;
      // console.log('null');
    }

    if(this.inputDivName === this.divName.defaultValue)
    {
      this.divName.inputValue = this.divName.defaultValue;
      this.divName.isDefault = true;
      // console.log('default');
    }

    //Changements de valeurs de l'input
    if(this.inputDivName !== this.divName.value 
       && this.inputDivName !== this.divName.defaultValue
       && this.inputDivName !== '')
    {
      this.divName.value = this.inputDivName;
      this.divName.inputValue = this.divName.value;
      this.divName.isDefault = false;
      // console.log('value');
    }

    // console.log(this.componentName);
  }

  divNameClass() : string
  {
    if(this.divName.isFocus)
    {
      return 'input-name-value'
    }
    else
    {
      if(this.divName.inReduceMode)
        {
          return 'input-name-value-reduce'
        }
        else
        {
          return 'input-name-value'
        }
    }
  }


  onExpandArrowClick() : void
  {
    if(this.mainlineExpanded)
    {
      this.mainlineExpanded = false;
    }
    else
    {
      this.mainlineExpanded = true;
    }
  }

  onAddArrowMouseEnter() : void
  {
    this.addLineHover = true;
  }

  onAddArrowMouseLeave() : void
  {
    this.addLineHover = false;
  }
}


