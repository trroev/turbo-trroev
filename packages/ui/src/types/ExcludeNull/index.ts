export type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> }
