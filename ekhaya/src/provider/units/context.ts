import {createContext } from 'react';
import { IUnitsContext, Unit, UnitsActions, initialState, CreateUnit, UpdateUnits } from './interface';


export const UnitsStateContext = createContext<IUnitsContext>(initialState); 

export const UnitsActionsContext = createContext<UnitsActions>({
    createUnits: async (Unit : CreateUnit) => {}, 
    deleteUnit: async (id) => {}, 
    getallUnits: async () => [], 
    updateUnits: async (Unit : UpdateUnits) => {},
    getallUnitsAvailable:  async () => [], 
});