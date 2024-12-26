import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../users.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[CommonModule, FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  users: any;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe(
      (data) => {
        this.users = data.users;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  navigateToUser(): void {
    this.router.navigate(['/user']);
  }

  handleLogin(): void {
    if (this.username && this.password) {
      // Example authentication logic
      const user = this.users.find(
        (u: any) =>
          u.username === this.username && u.password === this.password
      );

      if (user) {
        this.navigateToUser();
      } else {
        alert('Invalid username or password.');
      }
    } else {
      alert('Please enter both username and password.');
    }
  }
}
