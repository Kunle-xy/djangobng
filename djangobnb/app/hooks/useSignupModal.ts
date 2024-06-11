import {create} from "zustand"


interface SignupModalStore {
    isOpen: boolean;
    close: () => void;
    open: () => void;
}
const useSignupModal = create<SignupModalStore>((set) => ({
    isOpen: false,
    close: () => set({isOpen: false}),
    open: () => set({isOpen: true})
}));

export default useSignupModal;
