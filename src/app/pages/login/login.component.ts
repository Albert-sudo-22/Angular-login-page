import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  handleLogin(): void {
    if (this.username && this.password) {
      alert(`Logging in with Username: ${this.username}`);
      // Add actual authentication logic here
    } else {
      alert('Please enter both username and password.');
    }
  }
}
