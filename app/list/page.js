'use client'

import { useState } from "react"

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량, 수량변경] = useState([0, 0, 0])

    return (
        <div>
            <h4 className="title">상품목록</h4>

            <span>{수량[0]}</span>
            <button onClick={()=>{
                let copy = [...수량]
                copy[0]++
                수량변경(copy)
            }}>+</button>
            <span>{수량[1]}</span>
            <button onClick={()=>{
                let copy = [...수량]
                copy[1]++
                수량변경(copy)
            }}>+</button>
            <span>{수량[2]}</span>
            <button onClick={()=>{
                let copy = [...수량]
                copy[2]++
                수량변경(copy)
            }}>+</button>


            {
                상품.map((a, i)=>{
                    return (
                        <div className="food" key={i}>
                            <img src={`./food${i}.png`} className="food-img" />
                            <h4>{a} $40</h4>
                            <button onClick={()=>{
                                let copy = [...수량]
                                copy[i]--
                                수량변경(copy)
                            }}>-</button>
                            <span> {수량[i]} </span>
                            <button onClick={()=>{
                                let copy = [...수량]
                                copy[i]++
                                수량변경(copy)
                            }}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}