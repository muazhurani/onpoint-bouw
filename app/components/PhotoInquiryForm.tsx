"use client";

import { type FormEvent, useId, useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { useDictionary } from "./DictionaryProvider";

const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 8 * 1024 * 1024;

type SubmitState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

export default function PhotoInquiryForm() {
  const { dict, locale } = useDictionary();
  const copy = dict.cta.photoForm;
  const id = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  function addFiles(incoming: FileList | null) {
    if (!incoming) return;
    setFileError("");

    const accepted = [...files];
    for (const file of Array.from(incoming)) {
      if (!file.type.startsWith("image/")) continue;
      if (file.size > MAX_PHOTO_BYTES || accepted.length >= MAX_PHOTOS) {
        setFileError(copy.photosHint);
        continue;
      }
      accepted.push(file);
    }
    setFiles(accepted);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    formData.delete("photos");
    files.forEach((file) => formData.append("photos", file));
    formData.set("locale", locale);

    setSubmitState({ status: "sending", message: copy.sending });

    try {
      const response = await fetch("/api/inquiries/photos", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || copy.sendError);
      }

      setSubmitState({
        status: "success",
        message: result.message || copy.note,
      });
      form.reset();
      setFiles([]);
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error instanceof Error ? error.message : copy.sendError,
      });
    }
  }

  const inputClass =
    "w-full border border-paper/25 bg-paper/[0.06] px-3 py-2.5 text-paper outline-none transition-colors duration-150 placeholder:text-paper/40 focus:border-accent-yellow";
  const labelClass =
    "font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-paper/60";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid w-full gap-4 border border-paper/20 bg-paper/[0.04] p-6 sm:p-8"
    >
      <div>
        <p className="eyebrow text-paper/50">
          <span aria-hidden="true" className="mr-2 text-accent-yellow">
            +
          </span>
          {copy.eyebrow}
        </p>
        <h3 className="mt-3 font-display text-[1.35rem] font-bold tracking-[-0.01em] text-paper">
          {copy.title}
        </h3>
        <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-[1.7] text-paper/65">
          {copy.intro}
        </p>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label htmlFor={`${id}-name`} className="block">
          <span className={labelClass}>{copy.name}</span>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            minLength={2}
            className={`mt-1.5 ${inputClass}`}
          />
        </label>
        <label htmlFor={`${id}-contact`} className="block">
          <span className={labelClass}>{copy.contact}</span>
          <input
            id={`${id}-contact`}
            name="contact"
            autoComplete="tel"
            required
            minLength={6}
            className={`mt-1.5 ${inputClass}`}
          />
        </label>
      </div>

      <label htmlFor={`${id}-message`} className="block">
        <span className={labelClass}>{copy.message}</span>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={3}
          required
          minLength={10}
          className={`mt-1.5 resize-y ${inputClass}`}
        />
      </label>

      <div>
        <span className={labelClass}>{copy.photos}</span>
        <div className="mt-1.5 flex flex-wrap items-center gap-3">
          <label
            htmlFor={`${id}-photos`}
            className="inline-flex cursor-pointer items-center gap-2 border border-paper/25 px-4 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors duration-150 hover:border-accent-yellow"
          >
            <ImagePlus aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
            {copy.photos}
            <input
              ref={fileInputRef}
              id={`${id}-photos`}
              name="photos"
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
              onChange={(event) => addFiles(event.target.files)}
            />
          </label>
          <span className="font-mono text-[0.75rem] tracking-[0.04em] text-paper/50">
            {files.length}/{MAX_PHOTOS} · {copy.photosHint}
          </span>
        </div>
        {fileError && (
          <p className="mt-2 font-mono text-[0.75rem] tracking-[0.04em] text-signal-orange">
            {fileError}
          </p>
        )}
        {files.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center gap-2 border border-paper/20 px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.04em] text-paper/70"
              >
                <span className="max-w-[16ch] truncate">{file.name}</span>
                <button
                  type="button"
                  aria-label={`${copy.removePhoto}: ${file.name}`}
                  onClick={() =>
                    setFiles(files.filter((_, i) => i !== index))
                  }
                  className="text-paper/50 transition-colors duration-150 hover:text-paper"
                >
                  <X aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitState.status === "sending"}
          className="shrink-0 bg-accent-yellow px-6 py-3 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange disabled:cursor-wait disabled:opacity-70"
        >
          {submitState.status === "sending" ? copy.sending : copy.submit}
        </button>
        <p
          role="status"
          className={`font-mono text-[0.75rem] leading-relaxed tracking-[0.04em] ${
            submitState.status === "error"
              ? "text-signal-orange"
              : submitState.status === "success"
                ? "text-paper"
                : "text-paper/55"
          }`}
        >
          {submitState.message || copy.note}
        </p>
      </div>
    </form>
  );
}
