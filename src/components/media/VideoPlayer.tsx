'use client'

import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  caption?: string
}

export function VideoPlayer({
  src,
  poster,
  className,
  caption,
}: VideoPlayerProps) {
  return (
    <figure className={cn('my-md', className)}>
      <div className="border border-neutral-300 rounded-sm overflow-hidden bg-neutral-900">
        <video
          controls
          preload="metadata"
          poster={poster}
          className="w-full h-auto"
          controlsList="nodownload"
        >
          <source src={src} type="video/mp4" />
          <p className="text-neutral-0 p-md">
            您的浏览器不支持视频播放。请升级到现代浏览器。
          </p>
        </video>
      </div>
      {caption && (
        <figcaption className="text-small text-neutral-500 mt-xs text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
