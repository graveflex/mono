'use client';

import type { AugmentedSerializedBlockNode } from '@mono/web/components/RichText';
import { type KeyboardEvent, useState } from 'react';

import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import { Download, Play } from 'lucide-react';

interface VideoProps {
  node: AugmentedSerializedBlockNode;
}

export default function Video({ node }: VideoProps) {
  const { fields } = node;
  const { file, preview_image: previewImage, downloadable } = fields;
  const { title, url: video_url } = file;

  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    // Trigger on Enter or Space key
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent page scroll on space
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-10">
      <div className="relative rounded-lg overflow-hidden border border-primary aspect-[16/9]">
        {isPlaying ? (
          <video
            src={video_url}
            className="w-full h-full object-cover"
            controls={true}
            autoPlay={true}
            controlsList={downloadable ? 'default' : 'nodownload'}
          >
            Your browser does not support the video tag.
            <track kind="captions" />
          </video>
        ) : (
          <div
            className="cursor-pointer w-full h-full"
            onClick={handleVideoClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label="Play video"
          >
            {/* <Image image={preview_image} classNames="w-full h-full" /> */}
            <ResponsivePayloadImage
              image={previewImage}
              sizes="(max-width: 1023px) 100vw, 50vw"
              fill={true}
              imgClasses="rounded-xl object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="bg-primary p-4 rounded-full flex items-center justify-center"
              >
                <Play size={32} className="text-background" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mt-3 text-foreground">
        <span className="font-semibold text-lg">{title || 'Video Name'}</span>
        <div className="flex items-center gap-2">
          {downloadable && (
            <a
              href={video_url}
              download={true}
              className="text-primary hover:opacity-90 hover:scale-110 transition-all duration-250 ease-in-out"
            >
              <Download size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
