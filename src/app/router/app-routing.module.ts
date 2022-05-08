import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenapiMobileClientComponent } from '@pages/openapi-mobile-client/openapi-mobile-client.component';
import { AboutMeComponent } from '@/app/pages/about-me/about-me.component';
import { DragAndScoreComponent } from '@pages/drag-and-score/drag-and-score.component';
import { DrawOnTimeComponent } from '../pages/draw-on-time/draw-on-time.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    data: {
      titleI18nKey: 'about-me'
    }
  },
  {
    path: 'openapi-mobile-client',
    component: OpenapiMobileClientComponent,
    data: {
      titleI18nKey: 'openapi-mobile-client'
    }
  },
  {
    path: 'drag-and-score',
    component: DragAndScoreComponent,
    data: {
      titleI18nKey: 'drag-and-score'
    }
  },
  {
    path: 'draw-on-time',
    component: DrawOnTimeComponent,
    data: {
      titleI18nKey: 'draw-on-time'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
