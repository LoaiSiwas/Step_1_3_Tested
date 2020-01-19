//@nearfile
import { storage, logging } from "near-runtime-ts";

// --- contract code goes below

// setResponse function // Loai
export function setResponse(apiResponse: string): void {
  storage.setString("response", apiResponse);
  logging.log("Response is now: " + apiResponse);
}

/* getResponse function
The original code causes a crash in the compilation process because there is no default value,
a value of null is set as the default to solve the problem. // Loai */
export function getResponse(): string | null {
  return storage.getString("response");
}

// setResponseByKey function // Loai
export function setResponseByKey(key: string, newResponse: string): void {
  storage.setString(key, newResponse);
}

/* getResponseByKey function
The original code causes a crash in the compilation process because there is no default value,
a value of null is set as the default to solve the problem. // Loai */
export function getResponseByKey(key: string): string | null {
  return storage.getString(key);
}