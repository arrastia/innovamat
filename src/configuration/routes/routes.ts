import type { Routes } from './@types/Routes.types';

export const routes: Routes = {
  HOME: '/',
  NOT_FOUND: '*',
  MAIN: '/recursos/talleres',
  RESOURCES: '/recursos',
  RESOURCES_MAIN: 'talleres',
  RESOURCE_DETAILS: ':tag/:resourceId',
  RESOURCES_BY_TAG: ':tag',
  SEARCH: 'search'
};
