export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
  marks: number[];
  grade: "A" | "B" | "C" | "D" | "F"; // enum
  dob: Date;
  pass?: boolean;
}
