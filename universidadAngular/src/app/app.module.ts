import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import { UserDataComponent } from './components/user-data/user-data.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSortModule} from '@angular/material/sort';
import { AvatarIconComponent } from './components/avatar-icon/avatar-icon.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { StudentsComponent } from './components/students/students.component';
import { NotesComponent } from './components/notes/notes.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ConfirmDeleteStudentComponent } from './components/confirm-delete-student/confirm-delete-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { NotesStudentComponent } from './components/notes-student/notes-student.component';
import { DirectDeleteStudentComponent } from './components/direct-delete-student/direct-delete-student.component';
import { DirectUpdateStudentComponent } from './components/direct-update-student/direct-update-student.component';
import { DirectNotesStudentComponent } from './components/direct-notes-student/direct-notes-student.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { SettingsNotesStudentComponent } from './components/settings-notes-student/settings-notes-student.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ConfirmDeleteNoteComponent } from './components/confirm-delete-note/confirm-delete-note.component';
import { ListAsignaturaSelectionComponent } from './components/list-asignatura-selection/list-asignatura-selection.component';
import { ListAlumnoSelectionComponent } from './components/list-alumno-selection/list-alumno-selection.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CreateSubjectComponent } from './components/create-subject/create-subject.component';
import { CreateCareerComponent } from './components/create-career/create-career.component';
import { CreateCycleComponent } from './components/create-cycle/create-cycle.component';
import { CreateFacultyComponent } from './components/create-faculty/create-faculty.component';
import { SettingsSubjectComponent } from './components/settings-subject/settings-subject.component';
import { SettingsCareerComponent } from './components/settings-career/settings-career.component';
import { SettingsCycleComponent } from './components/settings-cycle/settings-cycle.component';
import { RegisterMeSubjectComponent } from './components/register-me-subject/register-me-subject.component';
import { ListSubjectSelectionComponent } from './components/list-subject-selection/list-subject-selection.component';
import { ListUserSelectionComponent } from './components/list-user-selection/list-user-selection.component';
import { ListCycleChoiceComponent } from './components/list-cycle-choice/list-cycle-choice.component';
import { ListCycleSelectionComponent } from './components/list-cycle-selection/list-cycle-selection.component';
import { ListCareerSelectionComponent } from './components/list-career-selection/list-career-selection.component';
import { SettingsFacultyComponent } from './components/settings-faculty/settings-faculty.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserDataComponent,
    AvatarIconComponent,
    StudentsComponent,
    NotesComponent,
    CreateStudentComponent,
    ConfirmDeleteStudentComponent,
    UpdateStudentComponent,
    NotesStudentComponent,
    DirectDeleteStudentComponent,
    DirectUpdateStudentComponent,
    DirectNotesStudentComponent,
    CreateNoteComponent,
    SettingsNotesStudentComponent,
    ConfirmDeleteNoteComponent,
    ListAsignaturaSelectionComponent,
    ListAlumnoSelectionComponent,
    SubjectsComponent,
    CreateSubjectComponent,
    CreateCareerComponent,
    CreateCycleComponent,
    CreateFacultyComponent,
    SettingsSubjectComponent,
    SettingsCareerComponent,
    SettingsCycleComponent,
    RegisterMeSubjectComponent,
    ListSubjectSelectionComponent,
    ListUserSelectionComponent,
    ListCycleChoiceComponent,
    ListCycleSelectionComponent,
    ListCareerSelectionComponent,
    SettingsFacultyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatSliderModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSortModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
