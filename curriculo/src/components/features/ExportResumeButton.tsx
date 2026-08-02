import { useRef, useState } from 'react';

type Props = {
  href: string;
  label: string;
  ariaLabel: string;
  preparingLabel: string;
  errorLabel: string;
  className?: string;
};

type ExportState = 'idle' | 'preparing' | 'error';

export function ExportResumeButton({
  href,
  label,
  ariaLabel,
  preparingLabel,
  errorLabel,
  className = '',
}: Props) {
  const [state, setState] = useState<ExportState>('idle');
  const exportLocked = useRef(false);

  const exportResume = () => {
    if (exportLocked.current) return;

    exportLocked.current = true;
    setState('preparing');

    try {
      const resumeWindow = window.open('about:blank', '_blank');
      if (!resumeWindow) throw new Error('Popup blocked');

      resumeWindow.opener = null;
      resumeWindow.location.replace(href);
      window.setTimeout(() => {
        exportLocked.current = false;
        setState('idle');
      }, 1200);
    } catch {
      setState('error');
      window.setTimeout(() => {
        exportLocked.current = false;
        setState('idle');
      }, 3600);
    }
  };

  const visibleLabel = state === 'preparing' ? preparingLabel : label;

  return (
    <span className={`export-resume-control ${className}`.trim()}>
      <button
        className="button button-secondary export-resume-button"
        type="button"
        onClick={exportResume}
        disabled={state === 'preparing'}
        aria-label={ariaLabel}
        aria-busy={state === 'preparing'}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        <span>{visibleLabel}</span>
      </button>
      <span className="export-resume-feedback" role="status" aria-live="polite">
        {state === 'error' ? errorLabel : ''}
      </span>
    </span>
  );
}
