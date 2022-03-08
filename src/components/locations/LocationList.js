import { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"

export const LocationList = () => {
    const [locations, setLocation] = useState([])

    useEffect(
        () => {
            getAllLocations()
                .then((data) => {
                    setLocation(data)
                })
        },
        []
    )
    return (
        <>
            {
                locations.map((location) => {
                    return <p key={`location--${location.id}`}>{location.address}</p>
                }
                )
            }
        </>
    )
}