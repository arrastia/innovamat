import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { resourceState } from 'ui/_tools/Stores/ResourcesStore';
import { Styles } from './ResourceDetails.styles';

export const ResourceDetails = () => {
  const { resourceId } = useParams();

  const resource = useRecoilValue(resourceState(resourceId as string));

  return (
    <Styles.View>
      <Styles.Title>{resource.title}</Styles.Title>
      <p dangerouslySetInnerHTML={{ __html: resource.description }} />

      {resource.file && <embed height="100%" src={resource.file} type="application/pdf" width="100%" />}
    </Styles.View>
  );
};
