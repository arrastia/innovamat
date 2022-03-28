import { Resource } from 'core/entities/Resource';

import { ResourcesRepository } from 'core/repositories/Resources';

import type { IResource } from 'core/entities/Resource';

export const searchResourcesByKeyword = async (keyword: string | string[]): Promise<IResource[]> => {
  const response = await ResourcesRepository.searchResourcesByKeyword(keyword);

  return response.map(resource => new Resource(resource));
};
