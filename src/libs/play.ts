interface User {
  name: string;
  age: number;
  "user-job": string;
}

export const user: User = {
  name: "홍길동",
  age: 30,
  "user-job": "개발자",
};

// 1) 객체 키 접근 예시
console.log(user.name); // 마침표 표기법
console.log(user["user-job"]); // 대괄호 표기법
const { name, age: userAge, "user-job": job } = user; // 객체 디스트럭처링 (구조 분해 할당)
console.log(name, userAge, job);

// 2) 객체 복사 및 수정 예시 (불변성 유지)
// 속성 추가 및 수정
const updatedUser: any = {
  ...user,
  age: 31,
  "user-job": "수석 개발자",
  email: "hong@example.com",
};

// 속성 삭제 (Rest 문법, age 제외)
const { age, ...rest } = updatedUser;
console.log(rest);

// 3) 배열 데이터 조작
// 항목 추가
const numbers: number[] = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6]; // 배열에 요소 추가
console.log(newNumbers);

// 항목 삭제
const newNumbers2 = numbers.filter((num) => num <= 3);
console.log(newNumbers2);

// 항목 수정
const newNumbers3 = numbers.map((num) => (num > 3 ? num * 10 : num));
console.log(newNumbers3);

const items: { id: number; name: string; price: number }[] = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 200 },
  { id: 3, name: "Item 3", price: 300 },
];
console.log(items);
const updatedItems = items.map((item) =>
  item.id % 2 !== 0 ? { ...item, price: item.price * 2 } : item
);
console.log(updatedItems);

// 항목 순회 및 탐색
updatedItems.forEach((item) => {
  console.log(item.id, item.name, item.price);
});

const findedItem = updatedItems.find((item) => item.price > 200);
console.log(findedItem);

export { name as userName, userAge, job as userJob, updatedUser };
