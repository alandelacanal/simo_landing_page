function WhatsappButton() {
  const phone = '5491112345678'
  const message = encodeURIComponent('Hola, quiero saber más de Simo')
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
    >
      ✉
    </a>
  )
}

export default WhatsappButton
