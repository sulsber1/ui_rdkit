import React, { Component } from 'react';
import Molecules from './Molecules'



// console.dir(testData)

function ResultArea ({data}) {

    return(

    <div className="flex"> 
    {data.map((p) => (
        <Molecules key={p.id} smile = {p.smile} score={p.score} />
    ))}
  </div>
)};

export default ResultArea