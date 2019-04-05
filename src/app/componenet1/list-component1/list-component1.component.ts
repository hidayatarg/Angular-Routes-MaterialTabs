import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-component1',
  templateUrl: './list-component1.component.html',
  styleUrls: ['./list-component1.component.css']
})
export class ListComponent1Component implements OnInit {

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  addUser(){
    console.log('add user');
    
    this.router.navigate(['add/'], { relativeTo: this.activatedRoute });
  }
  updateUser() {
    console.log('update user');

    this.router.navigate(['update/'], { relativeTo: this.activatedRoute });
  }
}
