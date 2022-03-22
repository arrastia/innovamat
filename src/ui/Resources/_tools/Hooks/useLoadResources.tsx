import { useRecoilCallback, useRecoilValue } from 'recoil';

import { resourcesState } from 'ui/_tools/Stores/ResourcesStore';

import type { ResourceTagType } from 'core/entities/Resource';

export const useLoadResources = (tag: ResourceTagType) => {
  const response = useRecoilValue(resourcesState(tag));

  const onReloadResources = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const response = await snapshot.getLoadable(resourcesState(tag));
      },
    [tag]
  );

  return { resources: response, loadingStatus: 'success' };
};
