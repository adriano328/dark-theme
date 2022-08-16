import { Component, OnInit } from '@angular/core';
import { ETheme } from './enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon = ETheme.ICON_MOON;
  constructor() { }

  ngOnInit(): void {
  }

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');

    if(theme){
     return (this.icon = ETheme.ICON_MOON);
    }

    return (this.icon = ETheme.ICON_SUN)
  }

}
