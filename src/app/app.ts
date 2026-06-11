import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoComplete } from "./components/challenges/auto-complete/auto-complete";

@Component({
  selector: 'app-root',
  imports: [AutoComplete],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-challenges');
}
