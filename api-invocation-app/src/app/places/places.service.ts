import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  loadedUserPlaces = this.userPlaces.asReadonly();
  private errorService=inject(ErrorService);
  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Unexpected error while fetching available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Unexpected error while fetching user places. Please try again later.'
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    if(!prevPlaces.some((p)=>p.id===place.id)){
      this.userPlaces.set([...prevPlaces, place]);
    }
    
    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: place.id,
      })
      .pipe(
        catchError((error) => {

          this.userPlaces.set(prevPlaces);
          this.errorService.showError('Failed to store selected place.')
          return throwError(() => new Error('Failed to store selected place.'));
        })
      );
  }

  removeUserPlace(selectedPlace: Place) {
    const prevPlaces = this.userPlaces();
    this.userPlaces.set(prevPlaces.filter((place)=> place.id!==selectedPlace.id));
    return this.httpClient.delete('http://localhost:3000/user-places/' + selectedPlace.id).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to remove selected place.')
        return throwError(() => new Error('Failed to remove selected place.'));
      })
    );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return (
      this.httpClient
        // .get<{ places: Place[] }>(url, {
        //   observe: 'response', // This will give complete HttpResponse object
        // })
        .get<{ places: Place[] }>(url)
        .pipe(
          map((respData) => respData.places),
          catchError((error) => {
            console.log(error);
            return throwError(() => new Error(errorMessage));
          })
        )
    );
  }
}
