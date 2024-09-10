import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  isMenuOpen = false // по умолчанию скрыто

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
