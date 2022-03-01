import { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
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
                    return <p key={`location--${location.id}`}>{location.id}</p>
                }
                )
            }
        </>
    )
}