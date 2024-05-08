'use client'

import React , {useReducer, useContext} from 'react'
import { ImageState, initialState } from './context'
import fileReducer from './reducer'
import axios from 'axios'
import { ImageActionContext , ImageStateContext} from './context'
import {createimageaction } from './action'
import { init } from 'next/dist/compiled/webpack/webpack'


interface FileProviderProps {
    children: React.ReactNode
}
const ImageProvider : React.FC<FileProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(fileReducer, initialState); 

    const createImage = async (file: FormData) => {
      try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Images/CreateImage`, file, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
  
      }
      catch{

      }
    }

    return (
        <ImageStateContext.Provider value={state}>
            <ImageActionContext.Provider value={{createImage}}>
                {children}
            </ImageActionContext.Provider>
        </ImageStateContext.Provider>
    )
}

const useImageState = () => {
    const context = useContext(ImageStateContext);
    if (!context) {
        throw new Error('useFileState must be used within a BookProvider');
    }
    return context;
};

const useImageActions = () => {
    const context = useContext(ImageActionContext);
    if (!context) {
        throw new Error('useFileActions must be used within a BookProvider');
    }
    return context;
};

export { useImageActions , useImageState,  ImageProvider}