import { useCallback, useEffect, useRef, DependencyList, useState } from "react";

export default function useDebounce<T extends any[]>(
  fn: (...args: T) => void,
  ms = 300,
  deps: DependencyList = []
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const debouncedFn = useCallback(
    (...args: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setIsPending(true);
      timeoutRef.current = setTimeout(() => {
        fn(...args);
        setIsPending(false);
      }, ms);
    },
    [fn, ms]
  );

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setIsPending(false);
    }
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    return () => cancel();
  }, [...deps, cancel]);

  return [debouncedFn, isPending, cancel] as const;
}