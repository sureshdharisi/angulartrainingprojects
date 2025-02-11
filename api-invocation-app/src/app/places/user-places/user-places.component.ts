import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  //places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  // use http client to handle http requests
  private placesService = inject(PlacesService);

  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
      //  next: (place) => console.log(place)
      //next: (places) => {
      // console.log(response.body?.places);
      //  this.places.set(places);
      // },
      complete: () => this.isFetching.set(false),
      error: (error) => {
        this.error.set(error);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placesService
      .removeUserPlace(selectedPlace)
      .subscribe({
        next: (respData) => console.log(respData)
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}

