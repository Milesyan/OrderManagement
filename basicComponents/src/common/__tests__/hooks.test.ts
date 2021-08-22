import {useDebounce} from "../hooks";
import { renderHook, act } from '@testing-library/react-hooks'



describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  test('should update value after delay', () => {
    const hook2 = renderHook((text: string) => {
      return useDebounce(text, 50)
    }, {
      initialProps: 'test2'
    })
  
    expect(hook2.result.current).toBe('test2');
    hook2.rerender('update')

    act(() => {
      hook2.rerender('update')
      jest.advanceTimersByTime(105);
      expect(hook2.result.current).toBe('update');
    })

  
  })

  test('should be debounced if called twice', () => {
    const hook = renderHook((text: string) => {
      return useDebounce(text, 100)
    }, {
      initialProps: 'test1'
    })
  
    expect(hook.result.current).toBe('test1');
    hook.unmount();
  })
})