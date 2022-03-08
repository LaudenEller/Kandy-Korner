const api = "http://localhost:8088"


export const getAllCustomers = () => {
    return fetch(`${api}/customers`)
    .then(res => res.json())
}
export const getAllEmployees = () => {
    return fetch(`${api}/employees?_expand=location`)
    .then(res => res.json())
}
export const getAllProducts = () => {
    return fetch(`${api}/products?_expand=productType&_sort=productTypeId`)
    .then(res => res.json())
}
export const getAllProductLocations = () => {
    return fetch(`${api}/productLocations?_expand=location`)
    .then(res => res.json())
}
export const getAllLocations = () => {
    return fetch(`${api}/locations`)
    .then(res => res.json())
}