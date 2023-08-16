import React, { useEffect } from 'react';
import { Observable } from 'rxjs';

export function useObservableState<T>(source: Observable<T>, defaultValue: T) {
  const [state, setState] = React.useState<T>(defaultValue);
  useEffect(() => {
    const subscription = source.subscribe({
      next: (value) => {
        setState(value);
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return state;
}
