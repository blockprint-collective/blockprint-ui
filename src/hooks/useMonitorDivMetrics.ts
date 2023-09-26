import { useEffect, useState, useRef, RefObject } from 'react'

type Dimensions = {
    width: number
    height: number
    x: number
    y: number
}

const useMonitorDivMetrics = (): { ref: RefObject<HTMLDivElement>; dimensions?: Dimensions } => {
    const ref = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState<Dimensions | undefined>(undefined)

    useEffect(() => {
        const handleUpdate = () => {
            if (ref.current) {
                const { width, height, top: y, left: x } = ref.current.getBoundingClientRect()
                setDimensions({ width, height, x, y })
            }
        }

        handleUpdate()

        window.addEventListener('resize', handleUpdate)
        window.addEventListener('scroll', handleUpdate)

        return () => {
            window.removeEventListener('resize', handleUpdate)
            window.removeEventListener('scroll', handleUpdate)
        }
    }, [])

    return {
        ref,
        dimensions,
    }
}

export default useMonitorDivMetrics
