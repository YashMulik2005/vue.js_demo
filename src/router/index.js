import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/components/About.vue'
import AddNote from '@/components/AddNote.vue'
import Notes from '@/components/Notes.vue'
import Note from '@/components/Note.vue'
import ApiTest from '@/components/ApiTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "/add",
      name: "addnote",
      component: AddNote
    },
    {
      path: "/notes",
      name: "notes",
      component: Notes
    },
    {
      path: "/notes/:id",
      name: "singleNote",
      component: Note
    },
    {
      path: "/test",
      nmae: "apitest",
      component: ApiTest
    }
  ]
})

export default router
