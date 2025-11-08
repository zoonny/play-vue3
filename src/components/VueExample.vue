<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from "vue";
import { User } from "../libs/play";
import VueExampleChild from "./VueExampleChild.vue";

// ref primitive를 반응형으로 만들기
const count = ref(0);
// reactive 객체를 반응형으로 만들기
const user: User = reactive({
  name: "홍길동",
  age: 30,
  job: "개발자",
});
const searchText = ref("");

const users: User[] = reactive([
  { name: "홍길동", age: 30, job: "개발자" },
  { name: "김철수", age: 25, job: "디자이너" },
  { name: "이영희", age: 28, job: "기획자" },
]);

function increment() {
  count.value++;
  user.age++;
}

// 계산된 속성 예시 (computed)
const doubleCount = computed(() => count.value * 2);

// 감시자 예시 (watch)
// watch(user, (newUser, oldUser) => {
//   console.log("User changed from", oldUser, "to", newUser);
// });

// ✅ 해결 코드
// user가 변경될 때마다 그 '복사본'을 반환하는 함수를 감시합니다.
watch(
  () => ({ ...user }),
  (newUser, oldUser) => {
    console.log("User changed from", oldUser, "to", newUser);
  }
);
// 특정 값만 감시
watch(
  () => user.age,
  (newAge, oldAge) => {
    console.log("User age changed from", oldAge, "to", newAge);
  }
);

// 생명주기 훅 예시 (onMounted)
onMounted(() => {
  console.log("VueExample component has been mounted.");
});

function handleNewCount(newCount: number) {
  count.value = newCount;
}
</script>

<template>
  <div>
    <h1>Vue Example Component</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="count++">Increment Count</button>
    <button @click="count--">Decrement Count</button>
    <button @click="count = 0">Reset Count</button>

    <div style="margin-top: 20px">
      <h2>User Information</h2>
      <p>Name: {{ user.name }}</p>
      <p>Age: {{ user.age }}</p>
      <p>Job: {{ user.job }}</p>
    </div>
    <button @click="increment()">Increment User Age</button>
    <!-- 속성바인딩 v-bind:value or :value -->
    <VueExampleChild
      :count="count"
      :users="users"
      @handleIncrement="handleNewCount"
      @handleDecrement="(newCount) => (count = newCount)"
      @handleReset="() => (count = 0)"
    />
    <!-- 양방향바인딩 v-model (주로 폼 입력에 사용) -->
    <input v-model="searchText" />
    <p>Search Text: {{ searchText }}</p>
    <!-- 조건부 렌더링 v-if -->
    <div v-if="user.age % 3 === 0" style="margin-top: 20px">
      <p>Age is divisible by 3</p>
    </div>
    <div v-else-if="user.age % 3 === 1" style="margin-top: 20px">
      <p>Age leaves a remainder of 1 when divided by 3</p>
    </div>
    <div v-else style="margin-top: 20px">
      <p>Age leaves a remainder of 2 when divided by 3</p>
    </div>
    <div v-show="user.age % 2 === 0" style="margin-top: 20px">
      <p>Age is even (v-show)</p>
    </div>
  </div>
</template>
<style scoped></style>
