import { Component, OnInit } from '@angular/core';
import { Cat } from '../Cat';
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

  catForm() {

    let name = (<HTMLInputElement>document.getElementById("fname")).value;

    let isDec: boolean = (<HTMLInputElement>document.getElementById("isDeclawed")).checked;
    console.log(name);
    console.log(isDec);
    let c: Cat = {
      id: 0,
      fname: name,
      isDeclawed: isDec
    }

    this.catService.CreateCat(c).subscribe(
      //common you'll either redirect to the main listing of cats 
      //or put in a message saying the cat made it into the DB 
    );
  }
}
