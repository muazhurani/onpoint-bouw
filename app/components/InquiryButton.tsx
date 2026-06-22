"use client";

import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

type InquiryKind = "quote" | "report";

type InquiryButtonProps = {
  kind: InquiryKind;
  className?: string;
  children: ReactNode;
};

type SubmitState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

const PROJECT_TYPES = [
  "Layout / stakeout",
  "Floor flatness / levelness",
  "As-built verification",
  "Steel verification",
  "Civil works",
  "Concrete slab survey",
];

function fieldValue(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
        {label}
      </span>
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}

export default function InquiryButton({
  kind,
  className = "",
  children,
}: InquiryButtonProps) {
  const [open, setOpen] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });
  const id = useId();
  const isQuote = kind === "quote";

  const copy = useMemo(
    () =>
      isQuote
        ? {
            title: "Request a quote",
            eyebrow: "Project details",
            submit: "Send quote request",
            note: "Sent directly to OnPoint. No email app needed.",
            success: "Quote request sent. We will come back within one working day.",
          }
        : {
            title: "Send me the sample report",
            eyebrow: "Report request",
            submit: "Request sample report",
            note: "Enter your email and the request is handled on the server.",
            success: "Sample report request sent.",
          },
    [isQuote],
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const endpoint = isQuote
      ? "/api/inquiries/quote"
      : "/api/inquiries/sample-report";
    const payload = isQuote
      ? {
          name: fieldValue(formData, "name"),
          company: fieldValue(formData, "company"),
          email: fieldValue(formData, "email"),
          phone: fieldValue(formData, "phone"),
          projectType: fieldValue(formData, "projectType"),
          siteDate: fieldValue(formData, "siteDate"),
          message: fieldValue(formData, "message"),
          website: fieldValue(formData, "website"),
        }
      : {
          name: fieldValue(formData, "name"),
          company: fieldValue(formData, "company"),
          email: fieldValue(formData, "email"),
          phone: fieldValue(formData, "phone"),
          message: fieldValue(formData, "message"),
          website: fieldValue(formData, "website"),
        };

    setSubmitState({ status: "sending", message: "Sending..." });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Could not send the request.");
      }

      setSubmitState({
        status: "success",
        message: result.message || copy.success,
      });
      form.reset();
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Could not send the request.",
      });
    }
  }

  const modal = (
    <div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/55 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        className="max-h-full w-full max-w-[560px] overflow-y-auto border border-grid-line bg-paper p-6 shadow-[0_24px_70px_rgb(16_20_24/0.22)] sm:p-8"
      >
        <div className="flex items-start justify-between gap-6 border-b border-grid-line pb-5">
          <div>
            <p className="eyebrow text-slate">
              <span aria-hidden="true" className="mr-2 text-survey-yellow">
                +
              </span>
              {copy.eyebrow}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-3 font-display text-[1.6rem] font-bold leading-tight tracking-[-0.02em] text-ink"
            >
              {copy.title}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-grid-line text-ink transition-colors duration-150 hover:border-ink"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id={`${id}-name`} label="Name">
              <input
                id={`${id}-name`}
                name="name"
                autoComplete="name"
                required={isQuote}
                autoFocus
                className="w-full border border-grid-line bg-white px-3 py-2.5 text-ink outline-none transition-colors duration-150 focus:border-ink"
              />
            </Field>
            <Field id={`${id}-company`} label="Company">
              <input
                id={`${id}-company`}
                name="company"
                autoComplete="organization"
                className="w-full border border-grid-line bg-white px-3 py-2.5 text-ink outline-none transition-colors duration-150 focus:border-ink"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id={`${id}-email`} label="Email">
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full border border-grid-line bg-white px-3 py-2.5 text-ink outline-none transition-colors duration-150 focus:border-ink"
              />
            </Field>
            <Field id={`${id}-phone`} label="Phone">
              <input
                id={`${id}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                required={isQuote}
                className="w-full border border-grid-line bg-white px-3 py-2.5 text-ink outline-none transition-colors duration-150 focus:border-ink"
              />
            </Field>
          </div>

          {isQuote && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={`${id}-projectType`} label="Project type">
                <select
                  id={`${id}-projectType`}
                  name="projectType"
                  required
                  defaultValue={PROJECT_TYPES[0]}
                  className="w-full border border-grid-line bg-white px-3 py-2.5 text-ink outline-none transition-colors duration-150 focus:border-ink"
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </Field>
              <Field id={`${id}-siteDate`} label="Site date">
                <input
                  id={`${id}-siteDate`}
                  name="siteDate"
                  type="date"
                  className="w-full border border-grid-line bg-white px-3 py-2.5 text-ink outline-none transition-colors duration-150 focus:border-ink"
                />
              </Field>
            </div>
          )}

          <Field id={`${id}-message`} label={isQuote ? "Message" : "Notes"}>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={5}
              required={isQuote}
              className="w-full resize-y border border-grid-line bg-white px-3 py-2.5 text-ink outline-none transition-colors duration-150 focus:border-ink"
            />
          </Field>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={submitState.status === "sending"}
              className="bg-survey-yellow px-6 py-3 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange disabled:cursor-wait disabled:opacity-70"
            >
              {submitState.status === "sending" ? "Sending..." : copy.submit}
            </button>
            <p
              role="status"
              className={`font-mono text-[0.75rem] leading-relaxed tracking-[0.04em] ${
                submitState.status === "error"
                  ? "text-signal-orange"
                  : submitState.status === "success"
                    ? "text-ink"
                    : "text-slate"
              }`}
            >
              {submitState.message || copy.note}
            </p>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setSubmitState({ status: "idle", message: "" });
          setOpen(true);
        }}
      >
        {children}
      </button>

      {open ? createPortal(modal, document.body) : null}
    </>
  );
}
