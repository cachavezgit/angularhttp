import { Component, OnInit } from '@angular/core';
import { TestServiceService} from '../services/test-service.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private testService:TestServiceService) { }

  notes:Note[];

  getNotes():void {
    this.testService.getNotes()
      .subscribe(notes => (this.notes = notes));
  }

  ngOnInit(): void {
    this.getNotes();
  }

}
