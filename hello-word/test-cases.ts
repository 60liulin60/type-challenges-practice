import type { Equal, Expect, NotAny } from "@type-challenges/utils";

// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>;
