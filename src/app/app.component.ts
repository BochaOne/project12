import { Component } from '@angular/core';
import { MyNote } from 'shared/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project12';

  noteList: MyNote[] = [];


  // getNote() {
  //   return this.noteList;
  // }

  onAddNote(note: MyNote) {
    note.noteId = this.noteList.length > 0 
      ? this.noteList[this.noteList.length - 1].noteId + 1 
      : 0;
    console.log(note);
    this.noteList.push(note);
  }

  onDeleteNote(id: number | any) {
    let index = this.noteList.findIndex((note) => note.noteId === id)
    if (index !== -1) {
      this.noteList.splice(index, 1);
    }
  }

  onEditNote(id: number | any) {
    let index = this.noteList.findIndex((note) => note.noteId === id)
    if (index !== -1) {
      let now = new Date();
      this.noteList[index].noteDate = now.toLocaleString();
    }
  }
}