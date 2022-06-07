import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  form:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder, private service:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  getError(control:string){
    return this.form.controls[control].errors && this.form.controls[control].touched
  }

  login(){
    const {email,password} = this.form.value
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }
    this.service.login(email,password).subscribe(resp=>{
      if(resp.token != ''){
        this.router.navigateByUrl('/heroes')
      }
    },(err)=>{
      if (err) {
        Swal.fire({
          title: 'Error!',
          text: 'Correo invalido, intentelo de nuevo',
          icon:'error'
        })
      }
    })
  }
}
