import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 message = new TemplateMessage();
  ngOnInit() {}
}

class TemplateMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public email?: string,
    public nick?: string
  ) {}
}