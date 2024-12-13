import { Injectable } from '@angular/core';
import { InvestmentInput } from '../models/investment-input.model';
import { InvestmentResults } from '../models/investment-results.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData?: Array<InvestmentResults>;
  calculateInvestmentResults(data: InvestmentInput) {
    const { annualInvestment, duration, expectedReturn, initialInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData = annualData;
  }
}
