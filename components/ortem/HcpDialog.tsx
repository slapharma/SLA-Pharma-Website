"use client";

import { useEffect, useRef } from "react";

// Healthcare professional confirmation. The wording is a draft for
// regulatory review. Edit the text here only after sign-off.
export function HcpDialog({
  onConfirm,
  onDecline,
}: {
  onConfirm: () => void;
  onDecline: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby="hcp-title"
      aria-describedby="hcp-desc"
      // Esc must not dismiss the dialog. The visitor has to answer.
      // Some browsers ignore preventDefault on cancel, so reopen on close.
      // Answering unmounts this component, so no close event follows.
      onCancel={(e) => e.preventDefault()}
      onClose={() => {
        const dialog = ref.current;
        if (dialog && !dialog.open) dialog.showModal();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl bg-white p-6 md:p-8 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <h2 id="hcp-title" className="text-2xl font-bold text-primary">
        Healthcare professionals only
      </h2>
      <div id="hcp-desc" className="mt-4 space-y-3 text-gray-700 leading-relaxed">
        <p>
          This page is intended for healthcare professionals only. It is not for
          patients or members of the public.
        </p>
        <p>
          Please confirm that you are a healthcare professional: a registered
          doctor, pharmacist, nurse or other professional who prescribes,
          supplies or administers medicines.
        </p>
        <p className="text-sm text-gray-600">
          If you are a patient, please speak to your doctor or pharmacist.
        </p>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button type="button" onClick={onConfirm} className="btn-primary-pill">
          Yes, I am a healthcare professional
        </button>
        <button type="button" onClick={onDecline} className="btn-outline-pill">
          No, take me to the homepage
        </button>
      </div>
    </dialog>
  );
}
