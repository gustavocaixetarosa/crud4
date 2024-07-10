import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoFormComponent } from './forms/produto-form/produto-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud3';
}
