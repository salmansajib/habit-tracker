<script setup>
import HabitForm from "~/components/HabitForm.vue";
import HabitList from "~/components/HabitList.vue";
</script>

<template>
  <div class="mx-auto p-6 max-w-2xl">
    <h1 class="text-4xl font-bold text-center mb-8">Habit Tracker</h1>
    <HabitForm />
    <HabitList />
  </div>
</template>

<style scoped>
body {
  background: #f1f1f1;
}
</style>
