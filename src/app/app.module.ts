import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './views/about/about.component';
import { GamesComponent } from './views/games/games.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ContactsComponent } from './views/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GamesComponent,
    ExperienceComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
