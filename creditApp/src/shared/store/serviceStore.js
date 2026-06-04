import { create } from "zustand"

export const serviceStore = create((set) => ({
    isOpen: false,
    selectedService: null,

    openServiceModal: (service = null) => set({
        isOpen: true,
        selectedService: service
    }),

    closeServiceModal: () => set({
        isOpen: false,
        selectedService: null
    })
}))