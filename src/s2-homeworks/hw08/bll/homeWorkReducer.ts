import { UserType } from "../HW8";

type ActionsType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionsType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name;
      const stateCopy = [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
      return action.payload === "up" ? stateCopy : stateCopy.reverse();
    }
    // need to fix
    case "check": {
      return state.filter((u) => u.age >= action.payload); // need to fix
    }
    default:
      return state;
  }
};
