<template>
  <div class="kanban-page">
    <h1>Tableau Kanban</h1>

    <!-- Boutons pour gérer les colonnes -->
    <div class="kanban-controls">
      <input v-model="newColumnName" placeholder="Nom de la colonne" />
      <button @click="addColumn">Ajouter une colonne</button>
    </div>

    <div class="kanban-board">
      <div class="column" v-for="(column, index) in columns" :key="column.name">
        <div class="column-header">
          <h2>{{ column.name }}</h2>
          <button @click="renameColumn(index)">Renommer</button>
          <button @click="deleteColumn(index)">Supprimer</button>
        </div>

        <div class="task" v-for="task in column.tasks" :key="task.id">
          {{ task.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import '@/assets/kanban.css'

// Colonnes initiales
const columns = reactive([
  {
    name: "À faire",
    tasks: [
      { id: 1, title: "Ajouter, modifier ou supprimer une carte" },
      { id: 2, title: "Déplacer une carte entre colonnes (drag & drop)" },
      { id: 3, title: "Sauvegarder colonnes et cartes dans la base de données" }
    ]
  },
  {
    name: "En cours",
    tasks: [
      { id: 4, title: "Ajouter, renommer ou supprimer une colonne" }
    ]
  },
  {
    name: "Terminé",
    tasks: [
      { id: 5, title: "Afficher un tableau Kanban statique (colonnes fixes)" },
      { id: 6, title: "Mettre en place le Project Board, labels et templates d’issue" }
    ]
  }
])

// Nouveau nom pour ajouter une colonne
const newColumnName = ref('')

// Ajouter une colonne
function addColumn() {
  if (newColumnName.value.trim() === '') return
  columns.push({ name: newColumnName.value, tasks: [] })
  newColumnName.value = ''
}

// Renommer une colonne
function renameColumn(index) {
  const newName = prompt('Nouveau nom de la colonne :', columns[index].name)
  if (newName && newName.trim() !== '') {
    columns[index].name = newName
  }
}

// Supprimer une colonne
function deleteColumn(index) {
  if (confirm(`Supprimer la colonne "${columns[index].name}" ?`)) {
    columns.splice(index, 1)
  }
}
</script>
