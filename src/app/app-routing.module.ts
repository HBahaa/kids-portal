import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { GamesComponent } from './pages/games/games.component';
import { SongsComponent } from './pages/songs/songs.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { QuranComponent } from './pages/quran/quran.component';
import { SunnahComponent } from './pages/sunnah/sunnah.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { StoryComponent } from './pages/story/story.component';
import { GameComponent } from './pages/game/game.component';
import { SongComponent } from './pages/song/song.component';

const routes: Routes = [
	{path:'', component: HomeComponent},
	{path:'main', component: MainComponent},
	{path:'games', component: GamesComponent},
	{path:'songs', component: SongsComponent},
	{path:'stories', component: StoriesComponent},
	{path:'story', component: StoryComponent},
	{path:'quran', component: QuranComponent},
	{path:'sunnah', component: SunnahComponent},
	{path:'electronics', component: ElectronicsComponent},
	{path:'game', component: GameComponent},
	{path:'song', component: SongComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
