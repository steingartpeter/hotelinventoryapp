import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  hotelName:string = 'Hilton Hotel';
  numberOfRooms:number = 10;

  ngOnInit(): void {
    
  }
}
