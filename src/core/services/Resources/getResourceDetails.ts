import { Resource } from 'core/entities/Resource';

import { ResourcesRepository } from 'core/repositories/Resources';

import type { IResource } from 'core/entities/Resource';

export const getResourceDetails = async (id: string): Promise<IResource> => {
  const resource = await ResourcesRepository.getResourceDetails(id);

  return new Resource(resource);
};
