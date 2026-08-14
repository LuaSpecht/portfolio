const WHATSAPP_NUMBER = '5541999081382'

export const getWhatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
