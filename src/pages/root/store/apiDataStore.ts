import create from 'zustand'
import {Result} from "../../../apis/models/user.model";

export interface UserState {
    userData: Result | null | undefined
    setUserData: (by: Result | null | undefined) => void
}

export const useUserDataStore = create<UserState>((set) => ({
    userData: undefined,
    setUserData: (data: Result | null | undefined) => set(() => ({ userData: data })),
}))
