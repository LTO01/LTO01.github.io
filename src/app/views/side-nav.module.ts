import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavRoutingModule } from './side-nav-routing.module';
import { SideNavComponent } from './side-nav.component';
import { SharedMaterialModule } from '../../app/shared/shared-material.module';


@NgModule({
  declarations: [SideNavComponent,
     AboutComponent,
     GamesComponent,
     PortfolioComponent,
     ContactsComponent,
      SkillsComponent,
       ExperienceComponent],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    SharedMaterialModule
  ],
  exports: [SideNavComponent,
     AboutComponent,
      GamesComponent,
       PortfolioComponent,
        ContactsComponent,
         SkillsComponent,
          ExperienceComponent]
})
export class SideNavModule { }
