import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UsuariosService } from '../shared/services/usuarios.service';
import swal from 'sweetalert2';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [UsuariosService]
})
export class LoginComponent implements OnInit {
    correo;password;
    constructor(public router: Router,  private usuariosService: UsuariosService) {
        this.correo = '';
        this.password = '';
        /*        this.correo = 'luisfernandocordova.24@gmail.com';
        this.password = 'bocho24*';*/
    }

    ngOnInit() {}

    onLoggedin() {
        let datosLogin =  {Correo: this.correo, Password: this.password };
        console.log('datos',datosLogin);
        this.usuariosService.login(datosLogin).then(sesion =>{
            console.log('datos',sesion);
            if(sesion['Data']){
                localStorage.setItem('Datos', JSON.stringify(sesion['Data'][0]));
                this.router.navigate(['/Inicio/']);
            }
        }).catch(err=>{
            swal('Error','Datos Incorrectos por favor verifique','error');
            console.log('err',err);
        });

    }
}
