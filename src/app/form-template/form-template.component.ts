import { Component } from '@angular/core';
import { Music } from '../Music';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  genres = ['Jazz', 'Hip-Hop', 'Zouk', 'Rap', 'Raggae'];
  musicModel = new Music ('', '', this.genres[0]);
  submitted = false;

  onSubmit(form: any) {
    console.log(form); 
    this.submitted = true 
  }
}
