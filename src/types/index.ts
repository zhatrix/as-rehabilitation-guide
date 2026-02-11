export interface NavigationItem {
  label: string
  href: string
}

export interface CardProps {
  title: string
  description: string
  href?: string
  icon?: React.ReactNode
}

export interface DataCardProps {
  value: string
  label: string
  description?: string
}

export interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

export interface ImageViewerProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}
