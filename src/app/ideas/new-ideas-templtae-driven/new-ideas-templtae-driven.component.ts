import { Component, DestroyRef, signal } from '@angular/core';
import { NewIdea } from '../models/newIdea';
import { IdeasService } from '../ideas.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-ideas-templtae-driven',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './new-ideas-templtae-driven.component.html',
  styleUrl: './new-ideas-templtae-driven.component.scss',
})
export class NewIdeasTempltaeDrivenComponent {
  newIdea: NewIdea = {
    name: '',
    description: '',
  };

  isLoading = signal(false);

  constructor(
    private readonly ideasService: IdeasService,
    private readonly destroyeRef: DestroyRef,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}

  save() {
    this.isLoading.set(true);
    this.ideasService
      .createIdea(this.newIdea)
      .pipe(
        tap(() => this.router.navigate(['/ideas'])),
        catchError((error) => {
          this.snackBar.open('Hiba történt a mentés közben ☹️', 'OK', {
            duration: 5000,
          });
          throw error;
        }),
        finalize(() => this.isLoading.set(false)),
        takeUntilDestroyed(this.destroyeRef)
      )
      .subscribe();
  }
}
