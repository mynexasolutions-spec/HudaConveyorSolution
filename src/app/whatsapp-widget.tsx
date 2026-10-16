const WHATSAPP_CHAT_URL: string = "https://wa.me/919891137368";

export function WhatsAppWidget() {
  return (
    <a
      className="whatsapp-floating-button"
      href={WHATSAPP_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Huda Conveyors Solution on WhatsApp"
    >
      <span className="whatsapp-floating-icon" aria-hidden="true">
        <i className="fab fa-whatsapp" />
      </span>
      <span className="whatsapp-floating-label">Message us</span>
    </a>
  );
}
