import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/models/user.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  private readonly _currentUser = signal<User | undefined>(undefined);
  private readonly CURRENT_USER_KEY = `currentUser`;

  constructor(protected readonly authService: AuthService) {
    const storedUser = localStorage.getItem(this.CURRENT_USER_KEY);
    if (storedUser) {
      this._currentUser.set(JSON.parse(storedUser));
    }
  }
  logout() {
    this.authService.logout().subscribe();
  }

  get currentUser() {
    return this._currentUser.asReadonly();
  }
}
