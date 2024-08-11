import { ResolveFn } from '@angular/router';
import { IdeasService } from './ideas.service';
import { inject } from '@angular/core';
import { Idea } from './models/idea.model';

export const ideaResolver: ResolveFn<Idea | undefined> = (route) => {
  const ideasService = inject(IdeasService);
  const id = route.queryParamMap.get('id');
  if (id) {
    return ideasService.getIdeaById(id);
  } else {
    return undefined;
  }
};
