import { Component, Input } from '@angular/core';
import { InvestmentResultsResponse } from '../models/investiment-models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investiment-results',
  imports: [CurrencyPipe],
  templateUrl: './investiment-results.component.html',
  styleUrl: './investiment-results.component.css'
})
export class InvestimentResultsComponent {

  @Input({required:true}) investmentResults!:InvestmentResultsResponse;

}
