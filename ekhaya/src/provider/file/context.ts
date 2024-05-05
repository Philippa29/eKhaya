import { createContext } from "react";
import { FileActions } from "./interface";

export interface IFileContext {
    file: FileState; 

}

export interface FileState{
    OwnerId: string;
    documenttype: number; 
    File: FormData | null;
}

export const initialState : IFileContext = {
    file: {
        OwnerId: '',
        documenttype: 0,
        File: null
    }
}

export const FileStateContext = createContext<IFileContext>(initialState);
export const FileActionContext = createContext<FileActions>({
    createFile: () => {}
});
