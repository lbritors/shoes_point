import { ApplicationError } from './../protocols/client.protocol';


export function notFoundError(): ApplicationError {
    return {
        name: "NotFoundError",
        message: "Not found!",
    };
}