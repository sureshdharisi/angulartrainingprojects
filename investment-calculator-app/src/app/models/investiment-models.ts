
export interface CalculatorInput{
    initialInvestment: number;
    duration: number;
    annualInvestment: number;
    expectedReturn: number;
  }


export interface InvestmentResultsResponse{
  annualData:InvestomentResult[];
}

export interface InvestomentResult{
  
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested:number,
  
}
