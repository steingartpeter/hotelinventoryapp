import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import hu from '@angular/common/locales/hu';
import { registerLocaleData } from '@angular/common';

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
      photos:
        'https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg',
      checkinTime: new Date('2022-12-01'),
      checkoutTime: new Date('2023-01-11'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room Upper',
      amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://media.architecturaldigest.com/photos/56c64d885ef3a2f746a41ffb/16:9/w_2580,c_limit/meyer-davis-guest-room-tips-01.jpg',
      checkinTime: new Date('2022-12-31'),
      checkoutTime: new Date('2023-01-10'),
      rating: 3.4,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suit',
      amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom, Kitchen',
      price: 1500,
      photos:
        'https://info.ehl.edu/hubfs/Imported_Blog_Media/Hospitality_Insights_Hotel_Design_Trends.jpg',
      checkinTime: new Date('2022-12-31'),
      checkoutTime: new Date('2023-01-10'),
      rating: 2.6,
    },
  ];

  ngOnInit(): void {
    registerLocaleData(hu);
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
