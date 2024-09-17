import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { EnterComponent } from "../enter/enter.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent, EnterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
