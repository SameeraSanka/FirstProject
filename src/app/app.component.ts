import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { StudiesComponent } from "./Components/studies/studies.component";
import { HomeComponent } from "./Components/home/home.component";
import { CommonModule } from '@angular/common';
import { ReversPipe } from './custome/revers.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, StudiesComponent, HomeComponent, CommonModule, ReversPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProject';
  t1 = 'Australian Shepherd';
  t2 = 'Sam Le';
  date = new Date();
  salary = 1000;
  _object = {
    "name": "Sameera", 
    "age":"22 years",
  };
}
