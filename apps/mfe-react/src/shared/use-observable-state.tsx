import React, { useEffect } from 'react';
import { Observable } from 'rxjs';

export function useObservableState<T>(source: Observable<T>) {
  const [state, setState] = React.useState<T>();
  useEffect(() => {
    const subscription = source.subscribe({
      next: (value) => {
        console.log(value);
        setState(value);
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return state;
}
