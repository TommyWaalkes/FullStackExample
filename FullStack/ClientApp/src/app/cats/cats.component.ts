import { Component, OnInit } from '@angular/core';
import { Cat } from '../Cat';
import { CatServiceService } from '../cat-service.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats: Cat[] = [];
  constructor(private catService: CatServiceService) { }

  ngOnInit(): void {
    this.catService.GetCats().subscribe(response => {
      this.cats = response;
      console.log(this.cats);
    }

    );
  }

}
