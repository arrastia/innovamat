import type { ResourceTagType } from 'core/entities/Resource';

export type Routes = {
  HOME: string;
  NOT_FOUND: string;
  RESOURCE_DETAILS: string;
  RESOURCES_BY_TAG: string;
};

export type RouteTags = {
  [tag in ResourceTagType]: `/${tag}`;
};
