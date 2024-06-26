import { FileState } from "./context";

export interface FileActions {
    createFile: (file: FormData) => void;
    GetAllFiles : (id : string) => void; 
}