import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { TestService } from 'test.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
    enteredText: string ='';

    constructor(
      private testService: TestService
    ){}

  ngOnInit(): void {
    // souscrire
    this.testService.dataEmitter.subscribe((data) => {
        this.enteredText = data;
    });
  }
}
