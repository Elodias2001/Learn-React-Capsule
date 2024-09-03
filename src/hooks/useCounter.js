import { useState } from "react"
/**
 * 
 * @param {boolean} item 
 */

export function useCounter({base=0, max= Infinity, min= -Infinity}) {
  const [state, setState] = useState(base)
  return {
    count : state, 
    increment : () => setState(v=> v < max ? v + 1 : v), 
    decrement : () => setState(v=> v > min ? v - 1 : v)
  }
}

// export function useCounter(item = 0) {
//   const [state, setState] = useState(item)
//   return {
//     count : state, 
//     increment : () => setState(v=> v + 1), 
//     decrement : () => setState(v=> v - 1)
//   }
// }

// export function useCounter(item = 0) {
//   const [count, setCount] = useState(item)
//   return [count, () => setCount(v=> v + 1), () => setCount(v=> v - 1)]
// }

// export function useCounter(item = 0) {
//   const [count, setCount] = useState(item)
//   const increment = () => setCount(v=> v + 1)
//   const decrement = () => setCount(v=> v - 1)
//   return [count, increment, decrement]
// }