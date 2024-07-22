import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ghibli',
  templateUrl: './ghibli.component.html',
  styleUrls: ['./ghibli.component.css']
})
export class GhibliComponent implements OnInit {
  
  title = 'GHIBLI WORLD';

  constructor() { }

  ngOnInit(): void {
  }

}
