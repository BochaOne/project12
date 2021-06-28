import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MyNote } from 'shared/note.model';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css']
})
export class CardNoteComponent implements OnInit {

  @Input() note!: MyNote;

  @Input() title = "";
  @Input() text = "";

  modeEdit = false;

  @Output() deleteNote = new EventEmitter<MyNote>();

  @Output() editNote = new EventEmitter<MyNote>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteNote(id: number | any) {
    this.deleteNote.emit(id);
  }

  onEditMode() {
    this.modeEdit = true;
  }

  onEditNote(id: number | any) {
    if (this.note.noteTitle != "") {
      this.editNote.emit(id);
      this.modeEdit = false;
    }
    else alert("Заполните название!");
  }
}

