import ThemeSelector from '@/components/ThemeSelector/page'
import { useAppSession } from '@/hooks/useAppSession'
import { useStudent } from '@/hooks/useStudent'
import React from 'react'

const research = () => {
    const {data: session} = useAppSession()
    const {data, isError} = useStudent(session?.user.id as number)
    if (!data?.supervisor && !data?.themes) {
        return (
            <>
                <ThemeSelector></ThemeSelector>
            </>
        )
    } else if (!data.supervisor) {
        return (
            <>
                {/* professors list */}
            </>
        )
    } 
    return (
        <>
        {/* research page */}
        </>
    )
  
}

export default research