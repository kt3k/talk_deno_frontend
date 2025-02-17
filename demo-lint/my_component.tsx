import { useState } from 'react'

export function MyComponent({ value }: { value: boolean }) {
  if (value) {
    const [state, _setState] = useState()
    return <span>{state}</span>
  }
  return null
}




