import { useState } from 'react'

export function MyComponent({ value }: { value: boolean }) {
  if (value) {
    const [state, _setState] = useState()
    return state
  }
  return null
}




