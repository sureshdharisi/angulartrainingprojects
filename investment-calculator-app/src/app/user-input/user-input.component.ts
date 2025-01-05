import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorInput } from '../models/investiment-models';
import { InvestimentService } from '../services/InvestimetServices';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestiment = '0';
  annualInvestiment = '0';
  expectedReturn = '5';
  duration = '10';

  @Output() calculate = new EventEmitter<CalculatorInput>();

  onSubmit() {
    console.log('Submitted');
    console.log(this.initialInvestiment);
    console.log(this.duration);

    this.calculate.emit({
      initialInvestment: Number(this.initialInvestiment),
      duration: Number(this.duration),
      annualInvestment: Number(this.annualInvestiment),
      expectedReturn: Number(this.expectedReturn),
    });
  }
}
