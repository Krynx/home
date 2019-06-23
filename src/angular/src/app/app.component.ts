import { Component } from '@angular/core';

@Component({
  selector: 'krynx-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  showMenu = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
