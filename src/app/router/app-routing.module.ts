import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenapiMobileClientComponent } from '@pages/openapi-mobile-client/openapi-mobile-client.component';
import { AboutMeComponent } from '@/app/pages/about-me/about-me.component';
import { DragAndScoreComponent } from '@pages/drag-and-score/drag-and-score.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    data: {
      title: "About Me"
    }
  },
  {
    path: 'openapi-mobile-client',
    component: OpenapiMobileClientComponent,
    data: {
      title: "OpenAPI Mobile Client"
    }
  },
  {
    path: 'drag-and-score',
    component: DragAndScoreComponent,
    data: {
      title: "Drag And Score"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
