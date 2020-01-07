import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  allowNewPopup = false;
  status =' No Click';
  valueInputed ='Test Server';
  isButtonClicked= 'false';
 
  constructor() { 
    setTimeout(
      ()=>{
      this.allowNewPopup = true;
    },20000)
  }

  ngOnInit() {
  }
  onClickingButton(){
    this.isButtonClicked='true';
    this.status='Successfully Clicked';
  
  }
  onInputText(event : Event){

    this.valueInputed = (<HTMLInputElement>event.target).value;
  }

}
