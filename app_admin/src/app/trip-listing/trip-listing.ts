import { Component, OnInit, } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit{
  trips: Array<any> = trips;

  constructor() {}

  ngOnInit(): void {
      
  }

}
