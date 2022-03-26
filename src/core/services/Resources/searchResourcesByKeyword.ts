import { IResource, Resource } from 'core/entities/Resource';
import { ResourcesRepository } from 'core/repositories/Resources';

export const searchResourcesByKeyword = async (keyword: string): Promise<IResource[]> => {
  const response = await ResourcesRepository.searchResourcesByKeyword(keyword);

  return response.map(resource => new Resource(resource));
};
