import { selectorFamily } from 'recoil';

import { ResourcesService } from 'core/services/Resources';

import type { ResourceTagType } from 'core/entities/Resource';

export const resourcesState = selectorFamily({
  key: 'resourcesState',
  get: (tag: ResourceTagType) => async () => await ResourcesService.getResourcesByTag(tag)
});

export const resourceState = selectorFamily({
  key: 'resourceState',
  get: (id: string) => async () => await ResourcesService.getResourceDetails(id)
});
