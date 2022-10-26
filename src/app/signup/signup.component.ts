import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../data/users.data';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  createAccount(
    inputName: HTMLInputElement,
    inputSurname: HTMLInputElement,
    inputEmail: HTMLInputElement,
    inputPassword: HTMLInputElement,
    inputAddress: HTMLInputElement
    ) {
      const newUser: User = {
        name: inputName.value,
        surname: inputSurname.value,
        email: inputEmail.value,
        password: inputPassword.value,
        address: inputAddress.value,
      }

      this.usersService.createUser(newUser)
      this.router.navigate(["/login"])
  }

}
