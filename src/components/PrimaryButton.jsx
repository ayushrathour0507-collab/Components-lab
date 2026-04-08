export default function PrimaryButton({
  variant = 'primary',
  label,
  onClick = () => {},
  isLoading = false,
  disabled = false,
}) {
  const isDisabled = Boolean(disabled || isLoading);

  const variantClasses = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
  };

  const variantClass = variantClasses[variant] ?? variantClasses.primary;

  const handleClick = (event) => {
    if (isDisabled) return;
    onClick(event);
  };

  return (
    <button
      type="button"
      aria-label={label}
      aria-busy={isLoading ? 'true' : undefined}
      onClick={handleClick}
      disabled={isDisabled}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'transition-colors',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClass,
      ].join(' ')}
    >
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin text-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
}