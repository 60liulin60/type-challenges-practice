//* 联合类型 union
//* 约束 extends
//* keyof https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
//* T[P] https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
