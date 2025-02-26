import type { Video as VideoTypes } from '@mono/types/payload-types';
import isNil from 'lodash/isNil';

type VideoComponentTypes = {
  video: VideoTypes | number;
  className?: string;
};

const Video = ({ className, video }: VideoComponentTypes) => {
  if (
    typeof video === 'number' ||
    !video ||
    isNil(video?.url) ||
    isNil(video?.mimeType)
  ) {
    return null;
  }

  return (
    <video
      className={className}
      controls={true}
      aria-label={!isNil(video?.title) ? video?.title : 'Video'}
    >
      <source src={video?.url} type={video?.mimeType} />
      <track
        src="/path/to/captions.vtt"
        kind="captions"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
