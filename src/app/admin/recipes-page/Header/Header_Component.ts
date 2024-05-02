import {Component} from '@angular/core';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header_Component.html',
  styleUrls: ['./Header_Component.css']
})

export class HeaderComponent{
  constructor(private authService: AuthService){}

  logout(){
    this.authService.logout();
  }
}
