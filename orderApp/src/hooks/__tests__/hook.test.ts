import useUpdateEffect from '../useUpdateEffect';
import { renderHook } from '@testing-library/react-hooks'

it('should run effect on update', () => {
  const effect = jest.fn();

  const { rerender } = renderHook(() => useUpdateEffect(effect));
  expect(effect).not.toHaveBeenCalled();

  rerender();
  expect(effect).toHaveBeenCalledTimes(1);
});

it('should run cleanup on unmount', () => {
  const cleanup = jest.fn();
  const effect = jest.fn().mockReturnValue(cleanup);
  const hook = renderHook(() => useUpdateEffect(effect));

  hook.rerender();
  hook.unmount();

  expect(cleanup).toHaveBeenCalledTimes(1);
});