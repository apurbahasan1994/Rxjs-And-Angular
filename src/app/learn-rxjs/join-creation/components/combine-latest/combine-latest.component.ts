import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  readonly AMOUNTS: ReadonlyArray<number> = [100, 100, 1000, 1000];
  readonly TERMS: ReadonlyArray<number> = [1, 3, 6, 12];
  readonly CURRENCIES: ReadonlyArray<{
    code: string, rate: number
  }> = [
      {
        code: "USD",
        rate: 0.2
      },
      {
        code: "EUR",
        rate: 0.15
      },
      {
        code: "IRY",
        rate: 0.3
      },
    ];
  depositForm: FormGroup = this.fb.group({
    amount: [],
    term: [],
    currency: []

  });
  rates$: Observable<any>;


  constructor(private fb: FormBuilder) {


  }
  ngOnInit(): void {
    this.rates$ = combineLatest([
      this.depositForm.controls['amount'].valueChanges,
      this.depositForm.controls['term'].valueChanges,
      this.depositForm.controls['currency'].valueChanges,
    ]).pipe(map(([amount, term, currencyRate]) => {
      
      const ans=this.getAmountRate(+amount) * this.getTermsRate(+term) * +currencyRate;
      return ans;
    }))
  }
  getAmountRate(amount: number) {
   
    return amount;

  }

  getTermsRate(term: number) {
    return this.TERMS.findIndex((t: number) => t === term) + 1;
  }
  ngAfterViewInit(){
    this.depositForm.controls['amount'].updateValueAndValidity();
    this.depositForm.controls['term'].updateValueAndValidity();
    this.depositForm.controls['currency'].updateValueAndValidity();
  }
}
