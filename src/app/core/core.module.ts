
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PageAboutComponent } from './page-about/page-about.component';
import { InitialPageModule } from '../initial-page/initial-page.module';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './page-index/pages/info/info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ArtistsComponent } from './page-index/pages/artists/artists.component';
import { SongsComponent } from './page-index/pages/songs/songs.component';
import { AlbumsComponent } from './page-index/pages/albums/albums.component';
import { SearcherComponent } from './page-index/pages/searcher/searcher.component';
import { PlaylistComponent } from './page-index/pages/playlist/playlist.component';
import { NoimagePipe } from '../pipes/noimage.pipe';
import { TopsComponent } from './tops/tops.component';
import { UserStatsComponent } from './page-index/pages/user-stats/user-stats.component';
import { Modal } from 'bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MenuComponent,
    PageIndexComponent,
    PageAboutComponent,
    InfoComponent,
    ArtistsComponent,
    SongsComponent,
    AlbumsComponent,
    SearcherComponent,
    PlaylistComponent,
    TopsComponent,
    UserStatsComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    InitialPageModule,
    MatCardModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
    NoimagePipe,
    NgxPaginationModule
  ],
  exports: [
    PageIndexComponent
  ]
})
export class CoreModule { }
