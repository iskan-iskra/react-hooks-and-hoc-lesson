import { useSyncExternalStore } from "react";

export default function useStore(store) {
  return useSyncExternalStore(store.subscribe, store.getState);
}
