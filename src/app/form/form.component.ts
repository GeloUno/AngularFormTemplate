import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  message = new TemplateMessage();
  constructor(private el: ElementRef) {
  //  console.log(this.el);
  }
  ngOnInit() {
    console.log(this.el.nativeElement.firstChild['1'].validity.valid);
  }
  onSubmit(a) {
    // console.log(a);
    // console.log(this.message);
  }
  onChangeTextArea(a) {
    const b: string = a.value;
    console.log(this.el.nativeElement.firstChild);
    // console.log(b.length);

    if (b.length > 5 || b.length < 20) {
    //  this.el.nativeElement.firstChild['1'].validity.valid = false;
    } else {
    //  this.el.nativeElement.firstChild['1'].validity.valid = true;
    }
  }
}

class TemplateMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public email?: string,
    public nick?: string
  ) {}
}
