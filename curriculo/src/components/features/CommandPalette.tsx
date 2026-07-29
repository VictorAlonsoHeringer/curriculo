import { useEffect, useMemo, useRef, useState } from 'react';

type Command = {
  label: string;
  hint: string;
  href?: string;
  action?: 'theme';
};

type Props = {
  commands: Command[];
  label: string;
  placeholder: string;
  noResults: string;
};

export function CommandPalette({ commands, label, placeholder, noResults }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return normalized
      ? commands.filter((command) => command.label.toLocaleLowerCase().includes(normalized))
      : commands;
  }, [commands, query]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      window.setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const runCommand = (command: Command) => {
    setOpen(false);
    if (command.action === 'theme') {
      window.dispatchEvent(new CustomEvent('portfolio:toggle-theme'));
      return;
    }
    if (command.href) window.location.href = command.href;
  };

  return (
    <>
      <button className="command-trigger" type="button" onClick={() => setOpen(true)}>
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m20 20-4-4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        <span>{label}</span>
        <kbd>⌘ K</kbd>
      </button>

      {open && (
        <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            className="command-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-input-wrap">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="m20 20-4-4" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={placeholder}
                aria-label={placeholder}
              />
              <kbd>esc</kbd>
            </div>
            <div className="command-results">
              {results.length ? (
                results.map((command) => (
                  <button
                    type="button"
                    className="command-result"
                    key={`${command.label}-${command.href ?? command.action}`}
                    onClick={() => runCommand(command)}
                  >
                    <span>{command.label}</span>
                    <small>{command.hint}</small>
                  </button>
                ))
              ) : (
                <p className="command-empty">{noResults}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
