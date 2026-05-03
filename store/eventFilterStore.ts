import { create } from 'zustand';
import { EventCategory } from '../types';

interface EventFilterState {
  activeCategory: EventCategory | 'all';
  setCategory: (category: EventCategory | 'all') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredCount: number;
  setFilteredCount: (n: number) => void;
}

export const useEventFilterStore = create<EventFilterState>((set) => ({
  activeCategory: 'all',
  setCategory: (category) => set({ activeCategory: category }),
  searchQuery: '',
  setSearchQuery: (q) => set({ searchQuery: q }),
  filteredCount: 0,
  setFilteredCount: (n) => set({ filteredCount: n }),
}));
