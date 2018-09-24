import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  message = new TemplateMessage();

  ngOnInit() {}
  onSubmit(a) {
    console.log(a);
    console.log(this.message);
  }
  onChangeTextArea(a){
    let b:string = a.value;
    console.log(a);
    console.log(b.length);

    if(b.length>5 || b.length<20)
    {
      
    }
    else
    {
     
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
