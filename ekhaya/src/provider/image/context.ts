import { createContext } from "react";
import { ImageActions } from "./interface";

export interface IImageContext {
    image: ImageState; 

}

export interface ImageState{
    OwnerId: string;
    Imagetype: number; 
    File: FormData | null;
}

export const initialState : IImageContext = {
    image: {
        OwnerId: '',
        Imagetype: 0,
        File: null
    }
}

export const ImageStateContext = createContext<IImageContext>(initialState);
export const ImageActionContext = createContext<ImageActions>({
    createImage: () => {}
});
