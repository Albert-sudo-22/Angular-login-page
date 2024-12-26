import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from './users.services';
import { User } from './user.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user!: User;
  Id?: number;
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute,) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Id = params['id'];
    });

    this.userService.fetchUsers().subscribe(
      (data) => {
        this.user = data.users.find((u: User) => u.id == this.Id);
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }


  logOut(): void {
    this.router.navigate(['/login']);
  }


}
