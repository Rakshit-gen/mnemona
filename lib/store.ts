import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface Mnemonic {
  id: string
  topic: string
  vibe: string
  primaryMnemonic: string
  minimalVersion: string
  recallDrill: string
  emoji: string
  createdAt: string
}

interface MnemonaState {
  mnemonics: Mnemonic[]
  currentMnemonic: Mnemonic | null
  isLoading: boolean
  error: string | null
  hasHydrated: boolean
  setHasHydrated: (state: boolean) => void
  addMnemonic: (mnemonic: Omit<Mnemonic, "id" | "createdAt">) => void
  setCurrentMnemonic: (mnemonic: Mnemonic | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  removeMnemonic: (id: string) => void
  clearAll: () => void
}

export const useMnemonaStore = create<MnemonaState>()(
  persist(
    (set) => ({
      mnemonics: [],
      currentMnemonic: null,
      isLoading: false,
      error: null,
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      addMnemonic: (mnemonic) =>
        set((state) => {
          const newMnemonic: Mnemonic = {
            ...mnemonic,
            id: Math.random().toString(36).substring(2, 9),
            createdAt: new Date().toISOString(),
          }
          return {
            mnemonics: [newMnemonic, ...state.mnemonics],
            currentMnemonic: newMnemonic,
          }
        }),
      setCurrentMnemonic: (mnemonic) => set({ currentMnemonic: mnemonic }),
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
      removeMnemonic: (id) =>
        set((state) => ({
          mnemonics: state.mnemonics.filter((m) => m.id !== id),
          currentMnemonic:
            state.currentMnemonic?.id === id ? null : state.currentMnemonic,
        })),
      clearAll: () => set({ mnemonics: [], currentMnemonic: null }),
    }),
    {
      name: "mnemona-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    }
  )
)