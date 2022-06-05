<template>
  <div id="app" class="container">
    <nav class="my-4">
      <router-link to="/">Requerments</router-link> |
      <router-link to="/task" class="text-pink-500">Implementation with methods </router-link> |
      <router-link to="/task-service" class="text-pink-500">Implementation with class service</router-link>

    </nav>
    <router-view/>
  </div>
</template>

