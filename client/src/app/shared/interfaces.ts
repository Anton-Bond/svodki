export interface User {
  email: string,
  password: string,
  name?: string,
  role?: string,
  id?: number
}

export interface Message {
  type: string,
  text: string,
}
