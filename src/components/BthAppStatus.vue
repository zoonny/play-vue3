<script setup lang="js">
import { ref } from "vue";
const initialLoading = ref(false);
const health = ref({ loading: false, error: 'error', data: "UP"});
</script>
<template>
  <div class="dashboard-container">
    <el-skeleton :rows="5" animated v-if="initialLoading" />
    <el-row :gutter="20" v-else>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" v-loading="health.loading">
          <template #header>
            <div class="card-header">
              <span>🚀 배치 애플리케이션 상태</span>
            </div>
            <div class="metric-value">
              <el-tag :type="healthStatusType" size="large" effect="dark">
                {{ health.data }}
              </el-tag>
            </div>
            <div class="metric-error" v-if="health.error">
              {{ health.error }}
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" v-loading="health.loading">
          <template #header>
            <div class="card-header">
              <span>💻 프로세스 CPU</span>
            </div>
            <div class="metric-value">
              <el-tag :type="healthStatusType" size="large" effect="dark">
                {{ health.data }}
              </el-tag>
            </div>
            <div class="metric-error" v-if="health.error">
              {{ health.error }}
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" v-loading="health.loading">
          <template #header>
            <div class="card-header">
              <span>💾 메모리 사용량</span>
            </div>
            <div class="metric-value">
              <el-tag :type="healthStatusType" size="large" effect="dark">
                {{ health.data }}
              </el-tag>
            </div>
            <div class="metric-error" v-if="health.error">
              {{ health.error }}
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.dashboard-container {
  padding: 20px;
  background-color: #f4f7f6;
  min-width: 90vw;
  min-height: 200px;
}
.card-header {
  font-weight: bold;
  font-size: 16px;
}
.metric-value {
  text-align: center;
  padding: 20px 0;
}
.cpu-value-text {
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
  color: #303133;
}
.metric-error {
  margin-top: 10px;
  font-size: 12px;
  color: #f56c6c;
  text-align: center;
}
.box-card-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 188px;
  cursor: pointer;
}
.placeholder-text {
  color: #909399;
  font-size: 14px;
}
</style>
