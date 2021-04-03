import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenapiMobileClientComponent } from '@pages/openapi-mobile-client/openapi-mobile-client.component';
import { HomeComponent } from '@pages/home/home.component';
import { DragAndScoreComponent } from '@pages/drag-and-score/drag-and-score.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: "Home"
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
