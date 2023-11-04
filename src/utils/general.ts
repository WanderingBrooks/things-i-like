const cx = (...classNames: (string | boolean | undefined)[]): string => classNames.filter(Boolean).join(' ');

export {
  cx,
}