"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./home.module.css";

const PRODUCT_OPTIONS: readonly string[] = [
  "Overhead Conveyor",
  "Belt Conveyor",
  "Roller Conveyor",
  "Chain / Slat Conveyor",
  "Coal Handling Plant",
  "Waste Management Plant",
  "Turnkey Solution",
  "Other / Not sure yet",
];

type EnquiryState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
};

const EMPTY_ENQUIRY: EnquiryState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: PRODUCT_OPTIONS[0],
  message: "",
};

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryState>(EMPTY_ENQUIRY);

  function handleChange(
    field: keyof EnquiryState,
  ): (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
      const value: string = event.target.value;
      setValues((current: EnquiryState) => ({ ...current, [field]: value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const lines: string[] = [
      "Hello Huda Conveyors Solution,",
      "",
      "I would like to request a quotation.",
      "",
      `Name: ${values.name}`,
      `Company: ${values.company || "-"}`,
      `Email: ${values.email || "-"}`,
      `Phone: ${values.phone}`,
      `Product of interest: ${values.product}`,
      `Requirement: ${values.message || "-"}`,
    ];

    const url: string = `https://wa.me/919891137368?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={styles.quoteForm} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="enquiry-name">
            Your name *
          </label>
          <input
            className={styles.formInput}
            id="enquiry-name"
            name="name"
            type="text"
            placeholder="Full name"
            value={values.name}
            onChange={handleChange("name")}
            required
            autoComplete="name"
          />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="enquiry-company">
            Company
          </label>
          <input
            className={styles.formInput}
            id="enquiry-company"
            name="company"
            type="text"
            placeholder="Company name"
            value={values.company}
            onChange={handleChange("company")}
            autoComplete="organization"
          />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="enquiry-email">
            Email
          </label>
          <input
            className={styles.formInput}
            id="enquiry-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handleChange("email")}
            autoComplete="email"
          />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="enquiry-phone">
            Phone *
          </label>
          <input
            className={styles.formInput}
            id="enquiry-phone"
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            value={values.phone}
            onChange={handleChange("phone")}
            required
            autoComplete="tel"
          />
        </div>

        <div className={`${styles.formField} ${styles.formFieldFull}`}>
          <label className={styles.formLabel} htmlFor="enquiry-product">
            Product of interest
          </label>
          <select
            className={styles.formSelect}
            id="enquiry-product"
            name="product"
            value={values.product}
            onChange={handleChange("product")}
          >
            {PRODUCT_OPTIONS.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.formField} ${styles.formFieldFull}`}>
          <label className={styles.formLabel} htmlFor="enquiry-message">
            Your requirement
          </label>
          <textarea
            className={styles.formTextarea}
            id="enquiry-message"
            name="message"
            placeholder="Material to be handled, load, speed, layout length, plant location..."
            value={values.message}
            onChange={handleChange("message")}
          />
        </div>

        <div className={styles.formFieldFull}>
          <button className={styles.formSubmit} type="submit">
            <i className="fab fa-whatsapp" aria-hidden="true" />
            Send Enquiry
          </button>
          <p className={styles.formNote}>
            Your details open in WhatsApp so our team can respond quickly. You can also call us
            directly.
          </p>
        </div>
      </div>
    </form>
  );
}
