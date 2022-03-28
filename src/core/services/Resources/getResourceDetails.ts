import { Resource } from 'core/entities/Resource';

import { ResourcesRepository } from 'core/repositories/Resources';

import { FileUtils } from 'core/_tools/Utils/FileUtils';

import type { IResource } from 'core/entities/Resource';

const { convertToPDF } = FileUtils;

export const getResourceDetails = async (id: string): Promise<IResource> => {
  const resource = await ResourcesRepository.getResourceDetails(id);

  return new Resource({ ...resource, file: await convertToPDF(resource.file) });
};
