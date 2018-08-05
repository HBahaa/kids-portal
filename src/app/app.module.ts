import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { GamesComponent } from './pages/games/games.component';
import { SongsComponent } from './pages/songs/songs.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { QuranComponent } from './pages/quran/quran.component';
import { SunnahComponent } from './pages/sunnah/sunnah.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { SongComponent } from './pages/song/song.component';
import { StoryComponent } from './pages/story/story.component';
import { GameComponent } from './pages/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    GamesComponent,
    SongsComponent,
    StoriesComponent,
    QuranComponent,
    SunnahComponent,
    ElectronicsComponent,
    SongComponent,
    StoryComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
