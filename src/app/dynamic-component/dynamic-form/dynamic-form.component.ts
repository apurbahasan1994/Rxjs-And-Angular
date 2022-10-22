import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Output('submitted') public submitted:EventEmitter<any>=new EventEmitter<any>();
  email:string='';
  pass:string='';
  @Input('title') title:string=""

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted.emit({
     email: this.email,
     pass:this.pass
    })

  }

}
