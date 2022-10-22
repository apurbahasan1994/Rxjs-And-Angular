import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.scss']
})
export class AuthRememberComponent implements OnInit {
  @Output('checked') public checked:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  onChecked(target:any){
    this.checked.emit(target.checked);
  }

}
