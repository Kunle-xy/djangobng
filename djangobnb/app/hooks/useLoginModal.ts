import {create} from "zustand"


interface LoginModalStore {
    isOpen: boolean;
    close: () => void;
    open: () => void;
}
const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    close: () => set({isOpen: false}),
    open: () => set({isOpen: true})
}));

export default useLoginModal;
