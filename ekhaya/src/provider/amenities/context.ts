import {createContext } from 'react'; 
import {Amenities, AmenitiesActions, IAmenitiesContext, initialState } from './interface'

export const AmentitiesStateContext = createContext<IAmenitiesContext>(initialState); 
export const AmenitiesActionsContext = createContext<AmenitiesActions>({
    createAmenities: async () => {}, 
    getallAmenities : async () => [] as Amenities[], 
})