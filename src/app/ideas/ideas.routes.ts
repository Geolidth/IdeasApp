import { Route } from '@angular/router';
import { ListIdeaComponent } from './list-idea/list-idea.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { NewIdeasTempltaeDrivenComponent } from './new-ideas-templtae-driven/new-ideas-templtae-driven.component';
import { ideaResolver } from './idea.resolver';

export const routes: Route[] = [
  { path: '', component: ListIdeaComponent },
  {
    path: 'new',
    resolve: { idea: ideaResolver },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    component: NewIdeaComponent,
  },
  {
    path: 'new-template-driven',
    resolve: { idea: ideaResolver },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    component: NewIdeasTempltaeDrivenComponent,
  },
];
