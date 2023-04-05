import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string="Task Reminder";

  constructor(){

  }

  ngOnInit(): void {
    
  }

  toggleaddtask(){
    console.log("clicked in header")
  }

}
