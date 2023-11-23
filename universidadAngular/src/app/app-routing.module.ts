import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { NotesComponent } from './components/notes/notes.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  //{path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'students',component:StudentsComponent},
  {path:'subjects',component:SubjectsComponent},
  {path:'notes',component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
