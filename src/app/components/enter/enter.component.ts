import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-enter',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.scss'
})
export class EnterComponent {
  constructor(public dialog: MatDialog) {}
  
  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }
}
