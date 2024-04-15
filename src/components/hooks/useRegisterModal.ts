import {create} from 'zustand';
interface RegistrModalStore {
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
}

const useRegisterModal = create<RegistrModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useRegisterModal;