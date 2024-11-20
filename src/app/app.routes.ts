import { Routes } from '@angular/router';
import { WelcomePageComponent } from './initial-page/welcome-page/welcome-page.component';
import { PageIndexComponent } from './core/page-index/page-index.component';
import { PageAboutComponent } from './core/page-about/page-about.component';
import { ArtistsComponent } from './core/page-index/pages/artists/artists.component';
import { AlbumsComponent } from './core/page-index/pages/albums/albums.component';
import { MyAccountComponent } from './core/page-index/pages/my-account/my-account.component';
import { SongsComponent } from './core/page-index/pages/songs/songs.component';

import { InfoComponent } from './core/page-index/pages/info/info.component';
import { SearcherComponent } from './core/page-index/pages/searcher/searcher.component';
import { PlaylistComponent } from './core/page-index/pages/playlist/playlist.component';
import { TopsComponent } from './core/tops/tops.component';
import { UserStatsComponent } from './core/page-index/pages/user-stats/user-stats.component';



export const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'about', component: PageAboutComponent},
  {path: 'main', component: PageIndexComponent,
    children: [
      {path: '', component: InfoComponent},
      {path: 'artists', component: ArtistsComponent},
      {path: 'albums', component: AlbumsComponent},
      {path: 'my-account', component: MyAccountComponent},
      {path: 'songs', component: SongsComponent},
      {path: 'tops', component: TopsComponent},
      {path: 'search', component: SearcherComponent},
      {path: 'info', component: InfoComponent},
      {path: 'user-playlist', component: PlaylistComponent},
      {path: 'user-stats', component: UserStatsComponent},
      {path: '**', component: InfoComponent}
  ]}
];
