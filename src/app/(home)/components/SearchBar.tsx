import { Input } from '@/components/ui/input'
import React from 'react'

const SearchBar = ({ onClick, onchange }: any) => {
    return (
        <Input className="mb-8 pd-1 focus-visible:ring-transparent" onClick={onClick} onChange={onchange} />
    )
}

export default SearchBar