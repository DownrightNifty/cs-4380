import { Component } from '@angular/core';
import {AuthService} from '../../auth.service';


@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})
export class RecipesPageComponent {


  constructor(private authService: AuthService){}

  logout(){
    this.authService.logout();
  }
}
