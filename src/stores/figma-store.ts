import { create } from 'zustand'

import { FigmaStore } from '@/types/store'

const initialState = {
  projects: [
    {
      title: 'Personal Project - pixiv',
      url: 'https://www.figma.com/file/OWbX6LxGrSZiFOyhonNCXE/Personal-Project---pixiv?type=design&node-id=0%3A1&mode=design&t=PnYWmNodRbI8oU6D-1',
    },
    {
      title: 'Liver',
      url: 'https://www.figma.com/file/ILCx9JI6lib8Sw6O4d7rrR/Liver?type=design&node-id=0%3A1&mode=design&t=NIoiotMRQNsI309p-1',
    },
  ],
  currentProject: 0,
}

const useFigmaStore = create<FigmaStore>()((set) => ({
  ...initialState,
  setCurrentProject: (currentProject) => set(() => ({ currentProject })),
  addProject: () =>
    set((state) => ({
      projects: [
        ...state.projects,
        {
          title: 'Project',
          url: null,
        },
      ],
      currentProject: state.projects.length,
    })),
  closeProject: (projectIndex) => {
    set((state) => {
      const projects = [...state.projects]
      projects.splice(projectIndex, 1)
      let currentProject
      if (projectIndex === 0) {
        currentProject = null
      } else {
        currentProject = projects.length - 1
      }
      return { projects, currentProject }
    })
  },
}))

export default useFigmaStore
