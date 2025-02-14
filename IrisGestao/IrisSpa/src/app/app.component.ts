import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './shared/models';
import { LoginService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IrisSpa';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
