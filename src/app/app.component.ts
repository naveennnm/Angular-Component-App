import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) { }
  
  selectedMonth: string = '';
  title = 'Welcome';
  dataBindingVal = "Data Binding";
  eventBindingVal="Event Binding";
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"]
  isavailable = true;   //variable is set to true
  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }
  changemonthsListner(selectedMonth) {
    this.selectedMonth = "Selected Months Is :" + selectedMonth;
    this.http.get
      

    console.log("Changed month from the Dropdown");
    console.log(event);
  }

  
}
