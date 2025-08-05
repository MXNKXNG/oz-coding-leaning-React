const dayjs = require("dayjs")

const now = dayjs();
console.log(now.toString());

console.log(now.format())
console.log(now.format("YYYY-MM-DD"))
console.log(now.format("YYYY년 MM월 DD일"))