import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-component2',
  templateUrl: './list-component2.component.html',
  styleUrls: ['./list-component2.component.css']
})
export class ListComponent2Component implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  addGroup() {
    console.log('add user');

    this.router.navigate(['add/'], { relativeTo: this.activatedRoute });
  }
  updateGroup() {
    console.log('update user');

    this.router.navigate(['update/'], { relativeTo: this.activatedRoute });
  }
}
