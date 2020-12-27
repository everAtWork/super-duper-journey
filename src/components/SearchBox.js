import  { useState } from 'react'
import MOCK_DATA from './MOCK_DATA.json'

export const SearchBox = () => {
return (
    <>
    <div className="inputMaster">
        <label htmlFor="userSearch"></label>
        <input type="text" id="userSearch" onChange={(event) =>
        setSearchTerm(event.target.value)}
        />
    </div>
    </>
)}