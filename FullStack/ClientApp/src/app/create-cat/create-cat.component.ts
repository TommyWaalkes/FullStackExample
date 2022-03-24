import { Component, OnInit } from '@angular/core';
import { CatServiceService } from '../cat-service.service';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {

  constructor(private catService: CatServiceService) { }

  ngOnInit(): void {
  }

}
