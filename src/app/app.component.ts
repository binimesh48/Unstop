import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  seats: Array<boolean> = Array(80).fill(false);

  constructor() { }

  ngOnInit() {
    this.seats[0] = true;
    this.seats[1] = true;
    this.seats[2] = true;
    this.seats[3] = true;
    this.seats[4] = true;
    this.seats[5] = true;
    this.seats[6] = true;
    this.seats[7] = true;
  }

  bookSeats(numberOfSeats: number) {
    // Check if the number of seats is valid
    if (numberOfSeats < 1 || numberOfSeats > 7) {
      return;
    }

// Find the first available seats
let availableSeats = this.findAvailableSeats(numberOfSeats);

    // Check if there are enough seats available in each row
    for (let i = 0; i < this.seats.length; i += 7) {
      if (availableSeats.length + i < numberOfSeats) {
        alert('Not enough seats available');
        return;
      }
    }

    

    // Book the seats
    for (let i = 0; i < numberOfSeats; i++) {
      this.seats[availableSeats[i]] = true;
    }

    // Display the seats that have been booked
    this.displaySeats();
  }

  findAvailableSeats(numberOfSeats: number) {
    // Create an array to store the available seats
    let availableSeats = [];

    // Loop through all the seats
    for (let i = 0; i < this.seats.length; i += 7) {
      // Check if there are enough seats available in the current row
      if (availableSeats.length + i < numberOfSeats) {
        alert('Not enough seats available');
        return;
      }

      // Add the available seats in the current row to the available seats array
      for (let j = 0; j < numberOfSeats - availableSeats.length; j++) {
        availableSeats.push(i + j);
      }
    }

    // Return the available seats array
    return availableSeats;
  }

  displaySeats() {
    // Create a string to display the seats
    let seatString = '';

    // Loop through all the seats
    for (let i = 0; i < this.seats.length; i++) {
      // If the seat is booked, add a "B" to the string
      if (this.seats[i]) {
        seatString += 'B';
      } else {
        seatString += 'A';
      }
    }

    // Display the string
    document.getElementById('seats').innerHTML = seatString.replace(/A/g, ' ');

  }
}
