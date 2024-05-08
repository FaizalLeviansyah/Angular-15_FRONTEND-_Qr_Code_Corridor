import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; // Import the data service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'App_Pocari_Sweat_Process';

  data: any[] = []; // Property to store the data
  
  constructor(private dataService: DataService) {} // Inject the data service
  
  ngOnInit(): void {
  this.dataService.getData().subscribe((data) => {
  this.data = data; // Assign the received data to the property
  }, (error) => {
  console.error('There was an error retrieving data:', error);
  });
  }
}