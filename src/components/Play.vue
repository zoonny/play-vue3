<script setup lang="ts">
import { userName, userAge, userJob, updatedUser } from "../libs/play";
</script>

<template>
  <div>
    <div>
      <h1>User Information</h1>
      <p>Name: {{ userName }}</p>
      <p>Age: {{ userAge }}</p>
      <p>Job: {{ userJob }}</p>
    </div>
    <div>
      <h1>UpdatedUser Information</h1>
      <p>Name: {{ updatedUser.name }}</p>
      <p>Age: {{ updatedUser.age }}</p>
      <p>Job: {{ updatedUser["user-job"] }}</p>
    </div>
    <el-row class="mb-4" style="display: flex; justify-content: center">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<style scoped></style>
