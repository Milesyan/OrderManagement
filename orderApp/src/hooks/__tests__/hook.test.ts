import useUpdateEffect from '../useUpdateEffect';
import { renderHook } from '@testing-library/react-hooks'
import useTitle from '../useTitle';

test('useUpdateEffect should run effect on update', () => {
  const effect = jest.fn();

  const { rerender } = renderHook(() => useUpdateEffect(effect));
  expect(effect).not.toHaveBeenCalled();

  rerender();
  expect(effect).toHaveBeenCalledTimes(1);
});

test('useUpdateEffect should run cleanup on unmount', () => {
  const cleanup = jest.fn();
  const effect = jest.fn().mockReturnValue(cleanup);
  const hook = renderHook(() => useUpdateEffect(effect));

  hook.rerender();
  hook.unmount();

  expect(cleanup).toHaveBeenCalledTimes(1);
});

test('useTitle should update title', () => {
  document.title = 'prev title'
  const hook = renderHook((title: string) => useTitle(title), {
    initialProps: 'title 1'
  })
  expect(document.title).toBe('title 1');
  hook.rerender('title 2')
  expect(document.title).toBe('title 2');
  hook.unmount();
  expect(document.title).toBe('prev title');

})