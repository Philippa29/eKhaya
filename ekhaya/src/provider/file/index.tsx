'use client'

import React , {useReducer, useContext} from 'react'
import { FileState, initialState } from './context'
import fileReducer from './reducer'
import axios from 'axios'
import { FileActionContext , FileStateContext} from './context'
import {createdocumentationaction } from './action'
import { init } from 'next/dist/compiled/webpack/webpack'


interface FileProviderProps {
    children: React.ReactNode
}
const FileProvider : React.FC<FileProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(fileReducer, initialState); 

    const createFile = async (file: FormData) => {
      try{
        const response = await axios.post('https://localhost:44311/api/documents', file, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log("File: ",response); 
      }
      catch{

      }
    }

    const getAllFile = async (id: string) => {
        try{
          const response = await axios.get(`https://localhost:44311/api/getalldocuments?id=${id}`);
          console.log("File: ",response); 
        }
        catch{
  
        }
      }

    return (
        <FileStateContext.Provider value={state}>
            <FileActionContext.Provider value={{createFile , getAllFile}}>
                {children}
            </FileActionContext.Provider>
        </FileStateContext.Provider>
    )
}

const useFileState = () => {
    const context = useContext(FileStateContext);
    if (!context) {
        throw new Error('useFileState must be used within a BookProvider');
    }
    return context;
};

const useFileActions = () => {
    const context = useContext(FileActionContext);
    if (!context) {
        throw new Error('useFileActions must be used within a BookProvider');
    }
    return context;
};

export { useFileActions , useFileState,  FileProvider}