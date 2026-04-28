import { create } from 'zustand'

export const useClientStore = create((set) => ({
    isModalOpen: false,
    selectedClient: null,

    openClientModal: (client = null) => set({
        isModalOpen: true,
        selectedClient: client
    }),
    closeClientModal: () => set({
        isModalOpen: false,
        selectedClient: null
    })
}))