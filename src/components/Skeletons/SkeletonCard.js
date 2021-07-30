import React from 'react'
import './skeleton.css'
import Skeleton from '@material-ui/lab/Skeleton'

const SkeletonCard = () => {
  // const classes = `skeleton ${type}` 
  // <div className={classes}></div>
  return (
    <div>
      <Skeleton variant="text" width={185} style={{ marginBottom: 18 }} />
      <Skeleton variant="rect" width={185} height={185} />
    </div>
  )
}

export default SkeletonCard
