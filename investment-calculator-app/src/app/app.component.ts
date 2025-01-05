import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestimentService } from './services/InvestimetServices';
import { CalculatorInput, InvestmentResultsResponse } from './models/investiment-models';
import { InvestimentResultsComponent } from "./investiment-results/investiment-results.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestimentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showTable = false;
  constructor(private investmentService: InvestimentService) {}

  investimentResultsRespone!:InvestmentResultsResponse;

  onCalculateInvestimentResults(calculatorInput:CalculatorInput){

    console.log("calculator input data"+calculatorInput)
    console.log(this.investmentService.calculateInvestmentResults(calculatorInput));
    this.investimentResultsRespone={
      annualData: this.investmentService.calculateInvestmentResults(calculatorInput)
    }
    this.showTable=true;
  }
}
