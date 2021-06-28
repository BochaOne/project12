import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyNote } from 'shared/note.model';

@Component({
  selector: 'app-addform-note',
  templateUrl: './addform-note.component.html',
  styleUrls: ['./addform-note.component.css']
})
export class AddformNoteComponent implements OnInit {
  
  title = 'Заметка';
  text = 'О чем';

  @Output() addNote = new EventEmitter<MyNote>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNote () {
    let now = new Date();
    let note: MyNote = {
      noteTitle: this.title,
      noteText: this.text,
      noteDate: now.toLocaleString(),
    };
    this.title = "";
    this.text = "";
    if (note.noteTitle != "") {
      this.addNote.emit(note);
    }
    else alert("Заполните название!");
  }

}
