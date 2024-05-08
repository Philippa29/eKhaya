import { createContext } from "react";
import { FileActions } from "./interface";

export interface IFileContext {
    file: FileState; 
    files: GetFileState[]; 
}

export interface FileState{
    OwnerId: string;
    documenttype: number; 
    File: FormData | null;
}

export interface GetFileState{

            id: string ; 
            fileName: string ; 
            fileType: string ; 
            base64: string; 
}

export const initialState : IFileContext = {
    file: {
        OwnerId: '',
        documenttype: 0,
        File: null
    }, 
    files : []

}

export const FileStateContext = createContext<IFileContext>(initialState);
export const FileActionContext = createContext<FileActions>({
    createFile: () => {},
    GetAllFiles : (id : string) => {}
});
