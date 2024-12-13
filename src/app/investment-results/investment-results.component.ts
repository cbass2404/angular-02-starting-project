import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { InvestmentResults } from '../models/investment-results.model';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.resultData;
  }
}
