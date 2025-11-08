<script setup lang="ts">
import { buttonEmits } from "element-plus";
import { User } from "../libs/play";

// 부모 컴포넌트로부터 전달받은 속성(props) 정의
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  users: Array<User>,
});

// 자식 컴포넌트에서 발생시키는 이벤트 정의
// const emit = defineEmits({
//   increment: () => {},
//   decrement: () => {},
//   reset: () => {},
// });
const emit = defineEmits(["handleIncrement", "handleDecrement", "handleReset"]);

function incrementByChild() {
  // 부모 컴포넌트로 increment 이벤트 발생시키기
  emit("handleIncrement", props.count + 1);
}
</script>
<template>
  <div class="child-component">
    <div>
      <h2>Count: {{ count }}</h2>
      <p>Users count: {{ users?.length }}</p>
    </div>
    <div>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          {{ user.name }} - {{ user.age }} - {{ user.job }}
        </li>
      </ul>
    </div>
    <div>
      <button @click="incrementByChild">Increment</button>
      <button @click="() => emit('handleDecrement', props.count - 1)">
        Decrement
      </button>
      <button @click="() => emit('handleReset', 0)">Reset</button>
    </div>
  </div>
</template>
<style scoped>
.child-component {
  border: 1px solid #ccc;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
