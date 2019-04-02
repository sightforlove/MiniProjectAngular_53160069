import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { filter, flatMap } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CountryService {
  country = null;
  
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get("../assets/country-capitals.json");
  }

  getCountry(name: string) {
    console.log(name);
    return this.http.get("../assets/country-capitals.json").pipe(
      flatMap(response => <any>response),
      filter(res => res["CountryName"] === name)
    );
  }
}
