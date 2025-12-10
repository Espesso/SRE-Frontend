<script setup>
import { ref, onMounted } from 'vue'
import { getItems, createItem, deleteItem } from './services/itemService'

const items = ref([])
const newName = ref('')

const loadItems = async () => {
  const res = await getItems()
  items.value = res.data
}

const addItem = async () => {
  if (!newName.value) return
  await createItem({ name: newName.value })
  newName.value = ''
  loadItems()
}

const removeItem = async (id) => {
  await deleteItem(id)
  loadItems()
}

onMounted(() => {
  loadItems()
})
</script>

<template>
  <div class="app-container">
    <h1 class="title">📦 Simple Item App</h1>

    <div class="input-section">
      <input v-model="newName" placeholder="เพิ่มสินค้าใหม่…" class="input-box" />
      <button @click="addItem" class="btn-add">เพิ่ม</button>
    </div>

    <ul class="item-list">
      <li v-for="i in items" :key="i.id" class="item-card">
        <span>{{ i.name }}</span>
        <button @click="removeItem(i.id)" class="btn-delete">ลบ</button>
      </li>
    </ul>
  </div>
</template>

<style>
/* Layout */
body {
  background: #f3f4f6;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

.app-container {
  max-width: 600px;
  margin: auto;
  margin-top: 60px;
  padding: 20px;
}

/* Title */
.title {
  text-align: center;
  color: #111827;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
}

/* Input section */
.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.input-box {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 15px;
}

.input-box:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 4px rgba(99, 102, 241, 0.4);
}

/* Buttons */
.btn-add {
  background: #6366f1;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.btn-add:hover {
  background: #4f46e5;
}

.btn-delete {
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.btn-delete:hover {
  background: #dc2626;
}

/* Item list */
.item-list {
  list-style: none;
  padding: 0;
}

.item-card {
  background: white;
  padding: 14px 18px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  color: #374151;
}
</style>
