import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  message = new TemplateMessage();
  optionSelect = ['Angular', 'React', 'JavaScript', 'C#'];

  @ViewChild('contact')
  contact: NgForm;
  constructor(private el: ElementRef) {
    //  console.log(this.el);
  }
  ngOnInit() {
    // console.log(this.el.nativeElement.firstChild['1'].validity.valid);
  }
  onSubmit(a) {
    console.log(this.message);
    this.contact.reset();
  }
  onChangeTextArea(a) {
    const b: string = a.value;
  }
}

class TemplateMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public email?: string,
    public nick?: string,
    public option?: string,
    public sex?: string
  ) {}
}
