let score: number | string = 33;

score = "ali";
type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};
let ali: User | Admin = { name: "ali", id: 32 };

ali = { username: "ali", id: 523 };

function getDbid(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

const singledataallowed: number[] | string[] = ["a", "b"];
const bothdataallowed: (string | number)[] = [1, "s"];

// usefull ts

let seatallotment: "middle" | "window";
seatallotment = "window"; // if i try to enter any other thing it will not allow me to do that
