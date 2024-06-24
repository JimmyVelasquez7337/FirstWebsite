import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'projects', component: ProjectsComponent, title: "Projects" },
  { path: 'about-me', component: AboutMeComponent, title: "About Me" },
  { path: 'contact-me', component: ContactMeComponent, title: "Contact Me" },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
