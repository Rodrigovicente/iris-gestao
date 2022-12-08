import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { LoginService } from 'src/app/shared/services';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit{
  
  accessToken: string | null = '';

  constructor(
    private pLocation: PlatformLocation,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.accessToken = new URLSearchParams(this.pLocation.hash).get('#id_token');
    this.loginService.token = this.accessToken ?? '';
    if(this.accessToken) {
      this.validaAutenticacao();
    }
  }

  validaAutenticacao() : void {
    this.loginService.token = this.accessToken ?? '';
    this.loginService.getAuthUser()
      .pipe(first())
      .subscribe((result: ApiResponse) => {
        if(!result.success) {
          this.router.navigate(['/login'], {queryParams: {error: `Proibido o acesso este recurso.`}});
        }
        this.loginService.usuarioLogado = result.data;
        this.router.navigate(['/home']);
    }, (error: any) => {
      console.error(error);
    });
  }

}