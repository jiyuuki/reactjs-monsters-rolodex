import React from 'react'
import './cardList.style.css'
import Card from '../Card/Card'
import SkeletonCard from '../Skeletons/SkeletonCard'

const CartList = (props) => {
  const contentHtml = (
    props.bosses.length === 0 ? (
      [1,2,3,4,5].map(() => (
        <SkeletonCard />
      ))
    ) : (
      props.bosses.map(bosse => (
        <Card bosse={bosse} key={bosse.id} />
      ))
    )
    
  )

  return [
    <div className='App'>
      <div className='card-list'>
        {contentHtml}
      </div>
    </div>
  ]
}

export default CartList
