import { useEffect, useState, useRef, RefObject } from 'react'

type Dimensions = {
    width: number
    height: number
}

const useDivDimensions = (): { ref: RefObject<HTMLDivElement>; dimensions?: Dimensions } => {
    const ref = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState<Dimensions | undefined>(undefined)

    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect()
            setDimensions({ width, height })
        }
    }, [])

    return {
        ref,
        dimensions,
    }
}

export default useDivDimensions
