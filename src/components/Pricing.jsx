function Pricing() {
  return (
    <section className="pricing">
      <h2>Planes</h2>
      <p>Elige el plan que mejor se adapte a tu mascota.</p>
      <div className="pricing-cards">
        <div className="plan">
          <h3>Free</h3>
          <p className="price">$0</p>
          <ul>
            <li>Registro básico de mascota</li>
            <li>Generación de QR</li>
            <li>Soporte por email</li>
          </ul>
        </div>
        <div className="plan plan-premium">
          <h3>Premium</h3>
          <p className="price">$10 / mes</p>
          <ul>
            <li>Todo lo del plan Free</li>
            <li>Historial veterinario ilimitado</li>
            <li>Soporte prioritario</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pricing
