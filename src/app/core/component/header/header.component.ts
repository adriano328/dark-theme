import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ETheme } from './enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public textTheme: string = ETheme.TEXT_MOON;

  public icon = ETheme.ICON_MOON;
  constructor() { }

  ngOnInit(): void {
  }

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');

    if(theme){
      this.textTheme = ETheme.TEXT_SUN;
     return (this.icon = ETheme.ICON_MOON);
    }
    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_SUN)
  }

}
