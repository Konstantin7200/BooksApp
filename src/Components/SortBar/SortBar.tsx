
import React, { useEffect, useState } from 'react'
import type { sortByOptions, sortOrderOptions, SortSettings } from '../../types'
import { useDispatch } from 'react-redux'
import { setSort } from '../../state/bookSlice'

export function SortBar() {
  const sortOptions:('publishingYear'|'name')[]=['publishingYear','name']
  const [sortOrder,setSortOrder]=useState('')
  const [sortBy,setSortBy]=useState('')
  const dispatch=useDispatch()
  const sortOrders:('ascending'|'descending')[]=['ascending','descending']
  useEffect(()=>{
    const sort:SortSettings={
      sortBy:sortBy===''?'name':sortBy as sortByOptions,
      sortOrder:sortOrder===''?'ascending':sortOrder as sortOrderOptions
    }
    dispatch(setSort(sort))
  },[sortOrder,sortBy])
  return (
    <div>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value=''>Sort by</option>
          {sortOptions.map((item)=><option value={item} key={item}>{item}</option>)}
        </select>
        <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
          <option value=''>Sorting order</option>
          {sortOrders.map((item)=><option value={item} key={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default SortBar