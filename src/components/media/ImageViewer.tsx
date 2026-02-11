'use client'

import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { cn } from '@/lib/utils'

interface ImageViewerProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  caption?: string
}

export function ImageViewer({
  src,
  alt,
  width,
  height,
  className,
  caption,
}: ImageViewerProps) {
  return (
    <figure className={cn('my-md', className)}>
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="border border-neutral-300 hover:border-primary-500 cursor-zoom-in transition-colors duration-base w-full h-auto"
          priority={false}
        />
      </Zoom>
      {caption && (
        <figcaption className="text-small text-neutral-500 mt-xs text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
