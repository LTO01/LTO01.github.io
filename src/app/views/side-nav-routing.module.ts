import { ContactsComponent } from './contacts/contacts.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav.component';

const routes: Routes = [{ path: '', component: SideNavComponent,
children: [
  {path: '', component: AboutComponent},
  {path: 'home', component: AboutComponent},
{path: 'games', component: GamesComponent},
{path: 'skills', component: SkillsComponent},
{path: 'portfolio', component: PortfolioComponent},
{path: 'experience', component: ExperienceComponent},
{path: 'contacts', component: ContactsComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavRoutingModule { }
