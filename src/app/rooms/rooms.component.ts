import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hilton Hotel';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplach.com/phozo-1518761841217-8f162f1e1131',
      checkinTime: new Date('2022-12-01'),
      checkoutTime: new Date('2023-01-11'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room Upper',
      amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.unsplach.com/phozo-1518761841217-8f162f1e1131',
      checkinTime: new Date('2022-12-31'),
      checkoutTime: new Date('2023-01-10'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suit',
      amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://images.unsplach.com/phozo-1518761841217-8f162f1e1131',
      checkinTime: new Date('2022-12-31'),
      checkoutTime: new Date('2023-01-10'),
    },
  ];

  ngOnInit(): void {}
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
