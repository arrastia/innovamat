import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { resourceState } from 'ui/_tools/Stores/ResourcesStore';

type Props = {};

export const ResourceDetails = (props: Props) => {
  const { resourceId } = useParams();

  const value = useRecoilValue(resourceState(resourceId as string));

  return <div dangerouslySetInnerHTML={{ __html: value.description }} />;
};
