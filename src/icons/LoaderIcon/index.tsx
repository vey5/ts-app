import { FC } from 'react'

const LoaderIcon: FC = () => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="margin-right:-2px;display:block;background-color:rgb(243, 241, 241);animation-play-state:paused">
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#915be1"
        stroke-width="3"
        r="8"
        stroke-dasharray="37.69911184307752 14.566370614359172"
        transform="matrix(1,0,0,1,0,0)"
        className="transform:matrix(1, 0, 0, 1, 0, 0);animation-play-state:pause;"></circle>
    </svg>
  )
}

export { LoaderIcon }
