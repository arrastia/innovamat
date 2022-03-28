import { resourcesWebConfig } from 'configuration/www/Resources';

import { HTTPUtils } from 'core/_tools/Utils/HTTPUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

import type { ISection } from 'core/entities/Section';
import type { IResource, ResourceTagType } from 'core/entities/Resource';

const { get, post } = HTTPUtils;
const { parseURL } = URLUtils;

const getResourceDetails = async (id: string): Promise<IResource> => {
  const { data } = await get({ url: parseURL({ url: resourcesWebConfig.RESOURCE_DETAILS, params: { id } }) });

  return data;
};

const getResourcesByTag = async (tag: ResourceTagType): Promise<ISection[]> => {
  const { data } = await get({ url: parseURL({ url: resourcesWebConfig.RESOURCES_BY_TAG, params: { tag } }) });

  return data;
};

const searchResourcesByKeyword = async (keyword: string | string[]): Promise<IResource[]> => {
  const { data } = await post({ url: parseURL({ url: resourcesWebConfig.SEARCH_BY_KEYWORD }), data: { keyword } });

  return data;
};

export const ResourcesRepository = { getResourceDetails, getResourcesByTag, searchResourcesByKeyword };
