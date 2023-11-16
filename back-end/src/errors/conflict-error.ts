import {
  ApplicationError
} from "@/protocols/client.protocol";

export function conflictError(): ApplicationError {
  
  return {
    name: "ConfictError",
    message: "Cpf already exists",
  };
}