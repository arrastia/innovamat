import { Section } from 'core/entities/Section';

import { ResourcesRepository } from 'core/repositories/Resources';

import type { ResourceTagType } from 'core/entities/Resource';
import type { ISection } from 'core/entities/Section';

export const getResourcesByTag = async (tag: ResourceTagType): Promise<ISection[]> => {
  const response = await ResourcesRepository.getResourcesByTag(tag);

  return response.map(resource => new Section(resource));
};
