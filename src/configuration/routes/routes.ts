import type { Routes, RouteTags } from './@types/Routes.types';

export const routes: Routes = {
  HOME: '/',
  NOT_FOUND: '*',
  RESOURCE_DETAILS: ':tag/:id',
  RESOURCES_BY_TAG: ':tag'
};

export const routeTags: RouteTags = {
  ambientes: '/ambientes',
  rincones: '/rincones',
  rutinas: '/rutinas',
  talleres: '/talleres'
};
