import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustometemperaturPipe } from './pipes/custometemperatur.pipe';
import { CustomsortPipe } from './pipes/customsort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, CustometemperaturPipe, CustomsortPipe],
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    // this.historicTemperatures[index] = 18;

    // To acheieve sorting it is better to create new object
    // const newTemp = [...this.historicTemperatures];
    // newTemp[index] = 18;
    // this.historicTemperatures = newTemp;

    // alternate waty to replace internal value
    this.historicTemperatures[index] = 18;
  }
}
