import { Component, OnInit } from '@angular/core';
import { AuthService } from './../home/login/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    mostrarMenu = false;
    constructor(
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.authService.mostrarMenu.subscribe(
            mostrar => this.mostrarMenu = mostrar
        );
    }

}
