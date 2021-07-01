import {useContext, createContext, Dispatch, SetStateAction} from 'react';

type EnableValue = {
    enable: boolean
    setEnable: Dispatch<SetStateAction<boolean>>
  }
  
const EnableContext = createContext<EnableValue>({
    enable: true,
    setEnable(value) { (v: SetStateAction<boolean>) => this.enable },
})

export const useEnableContext = () => {
    return useContext(EnableContext)
}