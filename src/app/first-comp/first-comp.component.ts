import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { TestService } from "test.service";

@Component({
    selector: 'app-first-comp',
    templateUrl: './first-comp.component.html',
    styleUrls: ['./first-comp.component.css'],
})

export class FirstCompComponent{
    constructor(
        private testService: TestService
    ) {}

    texte = new FormControl('');

    onButtonClick(form: NgForm) {
        // Envoyez une notification aux abonnés
        const inputText = form.value['texte']
        this.testService.sendData(inputText);
        // console.log(form.value['texte']);
        
    }
}