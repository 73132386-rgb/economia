/* Yanapay Finanzas — traducción ES/QU y navegación compartida.
   NOTA PARA QUIEN EDITE ESTO: el proyecto nació como piloto en Junín y
   ahora se plantea a nivel nacional, usando la red de agencias de Caja
   Huancayo en costa, sierra y selva como aliado. Las traducciones al
   quechua son un primer borrador (quechua sureño general). Términos
   financieros modernos (billetera digital, crédito) casi no tienen
   equivalente estandarizado, así que se mantienen como préstamo del
   español dentro de la frase. El quechua tiene variantes regionales
   (wanka en Junín, chanka en Ayacucho/Huancavelica, collao en Cusco/Puno,
   entre otras): antes de usar este texto con una comunidad real, pide
   que alguien que hable la variante de esa zona lo revise. */

const I18N = {
  es: {
    "nav.inicio": "Inicio",
    "nav.juego": "Aprende jugando",
    "nav.autoeval": "Mide tu avance",
    "nav.talleres": "Talleres cerca de ti",
    "nav.estrategias": "Estrategias",

    "idx.eyebrow": "Costa, sierra y selva · Aprende de una vez",
    "idx.hero.title": "Aprende a cuidar tu dinero, hoy",
    "idx.hero.lead": "Nada de teoría larga: cuatro reglas que puedes aplicar esta misma semana, un juego para practicar ahorro, y los talleres presenciales más cercanos a ti.",
    "idx.hero.cta1": "Jugar y aprender a ahorrar",
    "idx.hero.cta2": "Ver talleres cerca de ti",
    "idx.hero.caption": "Funciona con poca señal, desde cualquier celular.",

    "idx.lessons.eyebrow": "Cuatro reglas, no cuatro clases",
    "idx.lessons.title": "Aplícalo hoy mismo",
    "idx.lessons.lead": "Una idea concreta por tema. Sin relleno.",

    "idx.lesson.ahorro.title": "Ahorro",
    "idx.lesson.ahorro.tip": "Aparta una parte de lo que ganes apenas lo recibas, no al final del mes: lo que sobra casi nunca sobra.",
    "idx.lesson.presupuesto.title": "Presupuesto",
    "idx.lesson.presupuesto.tip": "Anota en un cuaderno lo que entra y lo que sale cada semana. Si no lo anotas, no lo controlas.",
    "idx.lesson.billeteras.title": "Billeteras digitales",
    "idx.lesson.billeteras.tip": "Antes de usar una billetera digital, guarda tú mismo el número de soporte y revisa que la app sea la oficial.",
    "idx.lesson.credito.title": "Crédito responsable",
    "idx.lesson.credito.tip": "Si nadie te puede explicar con claridad cuánto pagarás en total, no firmes todavía.",

    "idx.game-banner.eyebrow": "Practica sin arriesgar nada real",
    "idx.game-banner.title": "Aprende a ahorrar, jugando",
    "idx.game-banner.lead": "Ponte en los zapatos de una vendedora de feria con ingresos que suben y bajan cada semana. Decide cuánto ahorrar y mira si llegas a la meta.",
    "idx.game-banner.cta": "Empezar el juego",

    "idx.talleres-banner.eyebrow": "Aprendizaje presencial",
    "idx.talleres-banner.title": "Talleres presenciales en todo el Perú",
    "idx.talleres-banner.lead": "Nacimos como piloto en Junín y ahora usamos la red nacional de Caja Huancayo, puntos Multired y talleres comunitarios para llegar a costa, sierra y selva.",
    "idx.talleres-banner.cta": "Ver todos los talleres",

    "idx.estrategias-banner.eyebrow": "Más allá de esta web",
    "idx.estrategias-banner.title": "Hay más formas de aprender, cerca de ti",
    "idx.estrategias-banner.lead": "Talleres itinerantes, redes de vecinos, ferias de ahorro y estudiantes que enseñan gratis: descubre a quién acercarte esta semana.",
    "idx.estrategias-banner.cta": "Ver más formas de aprender",
    "idx.estrategias-banner.stat": "📍 Camiones-taller, talleres en mercados, ferias de ahorro y grupos de WhatsApp",

    "idx.footer.tag": "Yanapay Finanzas — \"yanapay\" significa ayudar, en quechua.",
    "idx.footer.meta": "Reto ABR · Economía 2",

    /* ---- Hub de juegos (ahorro-jugando.html) ---- */
    "juego.hub.eyebrow": "Practica sin arriesgar nada real",
    "juego.hub.title": "Elige un juego para aprender",
    "juego.hub.lead": "Cuatro juegos cortos para practicar ahorro, presupuesto, billeteras digitales y crédito. Juega, equivócate y aprende: cada pregunta te muestra la respuesta correcta.",
    "juego.cta.play": "Jugar",
    "juego.back": "Volver a los juegos",
    "juego.hub.eval-hint": "¿Primera vez aquí? Antes de jugar puedes responder una autoevaluación corta para medir cuánto sabes hoy.",
    "juego.hub.eval-link": "Ir a la autoevaluación",

    "juego.card1.title": "Ahorra como jugando",
    "juego.card1.desc": "Decide cuánto ahorrar cada semana con ingresos que suben y bajan.",
    "juego.card2.title": "¿Necesitas o quieres?",
    "juego.card2.desc": "Aprende a diferenciar gastos necesarios de gastos que pueden esperar.",
    "juego.card3.title": "Billetera segura",
    "juego.card3.desc": "Reconoce señales de estafa al usar una billetera digital.",
    "juego.card4.title": "Crédito sin sustos",
    "juego.card4.desc": "Practica decisiones para pedir prestado sin caer en deudas.",

    "game.title": "Ahorra como jugando",
    "game.lead": "Eres Rosa, vendes papa y choclo en la feria de tu comunidad. Cada semana ganas algo distinto. Decide cuánto guardar sin quedarte sin nada para gastos del hogar.",
    "game.week": "Semana",
    "game.income": "Ganaste",
    "game.meter.label": "Total ahorrado",
    "game.choice.q": "¿Cuánto apartas esta semana?",
    "game.play-again": "Jugar de nuevo",
    "game.result.title": "¡Terminaste las 6 semanas!",
    "game.result.total": "Ahorraste en total",
    "game.badge.bronze": "Ahorrista bronce",
    "game.badge.silver": "Ahorrista plata",
    "game.badge.gold": "Ahorrista oro",
    "game.badge.bronze.tip": "Empezaste a apartar algo, y eso ya es más de lo que hace la mayoría. La próxima semana, un poco más.",
    "game.badge.silver.tip": "Buen ritmo. Ya tienes el hábito; ahora prueba subir el monto en las semanas buenas.",
    "game.badge.gold.tip": "Ahorraste incluso en semanas flojas. Así se construye un fondo para emergencias.",
    "game.feedback.low": "Cada sol cuenta. Pero si puedes, en las semanas buenas conviene apartar un poco más.",
    "game.feedback.mid": "Buena decisión: guardas sin dejar de cubrir tus gastos.",
    "game.feedback.high": "Ahorraste bastante esta semana. Recuerda dejar algo para imprevistos.",
    "game.feedback.expense": "Tuviste un gasto inesperado. Por eso ayuda tener algo ya ahorrado.",

    /* ---- Motor de quizzes (juegos 2, 3 y 4) ---- */
    "quiz.question": "Pregunta",
    "quiz.correct": "¡Correcto!",
    "quiz.incorrect": "No es la mejor opción",
    "quiz.next": "Siguiente",
    "quiz.finish.title": "¡Terminaste el juego!",
    "quiz.score": "Respuestas correctas",
    "quiz.playagain": "Jugar de nuevo",
    "quiz.badge.low": "Sigue practicando",
    "quiz.badge.low.tip": "Repasa las respuestas y vuelve a intentarlo. Cada error te ayuda a aprender.",
    "quiz.badge.mid": "¡Buen trabajo!",
    "quiz.badge.mid.tip": "Ya conoces bastante del tema. Sigue repasando lo que fallaste.",
    "quiz.badge.high": "¡Excelente!",
    "quiz.badge.high.tip": "Dominas el tema. Comparte lo que aprendiste con tu familia.",

    /* Juego 2 — Presupuesto: Necesidad o gusto */
    "quiz.budget.q1.prompt": "Te pagan S/ 300 por tu trabajo del mes. ¿Cuál es el mejor primer paso?",
    "quiz.budget.q1.optA": "Gastar en ropa nueva porque te lo mereces",
    "quiz.budget.q1.optB": "Anotar cuánto necesitas para comida, pasajes y cuentas antes de gastar en otras cosas",
    "quiz.budget.q1.optC": "Guardar todo el dinero y no gastar nada, ni en lo necesario",
    "quiz.budget.q1.explanation": "Anotar tus gastos fijos primero te muestra cuánto te queda realmente libre para lo demás.",

    "quiz.budget.q2.prompt": "Vas al mercado sin lista ni presupuesto. ¿Qué suele pasar?",
    "quiz.budget.q2.optA": "Compras solo lo que necesitas",
    "quiz.budget.q2.optB": "Gastas más de lo planeado, porque compras cosas que no estaban en tus planes",
    "quiz.budget.q2.optC": "Ahorras más dinero",
    "quiz.budget.q2.explanation": "Sin lista es fácil comprar de más. Una lista corta ayuda a no gastar de más.",

    "quiz.budget.q3.prompt": "Tu vecina dice que \"lo que sobra, se ahorra\". ¿Por qué esta idea casi nunca funciona?",
    "quiz.budget.q3.optA": "Porque casi nunca sobra nada si gastas primero y ahorras después",
    "quiz.budget.q3.optB": "Porque ahorrar es ilegal",
    "quiz.budget.q3.optC": "Porque siempre sobra mucho dinero",
    "quiz.budget.q3.explanation": "Si esperas a que \"sobre\", casi siempre gastas todo antes. Mejor aparta el ahorro primero.",

    "quiz.budget.q4.prompt": "Tienes un gasto fijo de luz y agua cada mes (S/ 40) y ganas S/ 200 por semana, de forma variable. ¿Qué conviene hacer?",
    "quiz.budget.q4.optA": "Olvidarte del gasto fijo hasta que llegue el recibo",
    "quiz.budget.q4.optB": "Apartar cada semana una parte para cubrir ese gasto fijo cuando llegue",
    "quiz.budget.q4.optC": "Pedir prestado cada vez que llega el recibo",
    "quiz.budget.q4.explanation": "Apartar poco a poco evita el susto cuando llega la cuenta.",

    "quiz.budget.q5.prompt": "¿Qué herramienta simple te ayuda más a controlar tu presupuesto?",
    "quiz.budget.q5.optA": "Un cuaderno donde anotas lo que entra y lo que sale",
    "quiz.budget.q5.optB": "Adivinar de memoria cuánto gastaste",
    "quiz.budget.q5.optC": "No revisar nunca cuánto gastas",
    "quiz.budget.q5.explanation": "Anotar en un cuaderno, aunque sea simple, te muestra patrones y evita sorpresas.",

    /* Juego 3 — Billetera segura */
    "quiz.wallet.q1.prompt": "Te llega un mensaje diciendo que ganaste un premio y que debes dar el código de tu billetera digital para cobrarlo. ¿Qué haces?",
    "quiz.wallet.q1.optA": "Doy el código enseguida para no perder el premio",
    "quiz.wallet.q1.optB": "No doy ningún código; los premios reales no piden tu código de seguridad",
    "quiz.wallet.q1.optC": "Comparto el código solo con un familiar",
    "quiz.wallet.q1.explanation": "Nunca compartas tu código o clave, ni con supuestos premios ni con nadie. Es la puerta a tu dinero.",

    "quiz.wallet.q2.prompt": "Quieres descargar una app de billetera digital por primera vez. ¿Qué revisas antes de instalarla?",
    "quiz.wallet.q2.optA": "Que sea la app oficial de una entidad o banco conocido",
    "quiz.wallet.q2.optB": "Cualquier app con un ícono parecido",
    "quiz.wallet.q2.optC": "La primera app que aparece, sin fijarme en quién la publicó",
    "quiz.wallet.q2.explanation": "Instalar apps falsas es una forma común de robo. Verifica siempre que sea la app oficial de una entidad conocida.",

    "quiz.wallet.q3.prompt": "Alguien te llama diciendo ser del banco y pide tu clave para \"verificar tu cuenta\". ¿Qué haces?",
    "quiz.wallet.q3.optA": "Doy la clave porque dice ser del banco",
    "quiz.wallet.q3.optB": "Cuelgo y llamo al número oficial del banco para verificar",
    "quiz.wallet.q3.optC": "Doy solo la mitad de la clave",
    "quiz.wallet.q3.explanation": "Los bancos reales nunca piden tu clave completa por teléfono. Ante la duda, cuelga y llama tú al número oficial.",

    "quiz.wallet.q4.prompt": "Guardaste el número de soporte de tu billetera digital. ¿Para qué te sirve esto?",
    "quiz.wallet.q4.optA": "Para nada, es innecesario",
    "quiz.wallet.q4.optB": "Para reportar rápido si algo raro pasa con tu cuenta",
    "quiz.wallet.q4.optC": "Para dárselo a cualquier persona que lo pida",
    "quiz.wallet.q4.explanation": "Tener el número de soporte guardado te permite actuar rápido si detectas un movimiento sospechoso.",

    "quiz.wallet.q5.prompt": "Recibes un enlace por WhatsApp que dice ser de tu billetera digital para \"actualizar tus datos\". ¿Qué haces?",
    "quiz.wallet.q5.optA": "Hago clic y lleno mis datos rápido",
    "quiz.wallet.q5.optB": "No hago clic en enlaces de mensajes; abro la app oficial directamente para revisar",
    "quiz.wallet.q5.optC": "Reenvío el enlace a mis contactos",
    "quiz.wallet.q5.explanation": "Los enlaces por mensaje son una forma común de estafa (phishing). Es más seguro abrir la app oficial directamente.",

    /* Juego 4 — Crédito sin sustos */
    "quiz.credit.q1.prompt": "Te ofrecen un préstamo pero nadie te explica con claridad cuánto pagarás en total. ¿Qué haces?",
    "quiz.credit.q1.optA": "Firmo igual, ya que necesito el dinero",
    "quiz.credit.q1.optB": "Pido que me expliquen claramente el monto total y el interés antes de firmar",
    "quiz.credit.q1.optC": "Firmo y pregunto después",
    "quiz.credit.q1.explanation": "Si no te explican con claridad cuánto pagarás en total, no firmes todavía.",

    "quiz.credit.q2.prompt": "¿Qué es el interés de un préstamo?",
    "quiz.credit.q2.optA": "Un regalo del banco",
    "quiz.credit.q2.optB": "El costo extra que pagas por usar dinero prestado",
    "quiz.credit.q2.optC": "El dinero que el banco te da gratis",
    "quiz.credit.q2.explanation": "El interés es lo que pagas de más por recibir el dinero antes de tenerlo tú mismo.",

    "quiz.credit.q3.prompt": "Tienes dos deudas pequeñas y solo puedes pagar una completa este mes. ¿Qué conviene priorizar, en general?",
    "quiz.credit.q3.optA": "La que tiene el interés más alto, para que no crezca más",
    "quiz.credit.q3.optB": "La que te da más pena",
    "quiz.credit.q3.optC": "Ninguna, dejar las dos para después",
    "quiz.credit.q3.explanation": "Pagar primero la deuda con mayor interés evita que esa deuda crezca más rápido.",

    "quiz.credit.q4.prompt": "Un crédito \"fácil y sin preguntas\" te ofrece dinero rápido. ¿Qué deberías revisar primero?",
    "quiz.credit.q4.optA": "Nada, entre más rápido, mejor",
    "quiz.credit.q4.optB": "El interés total, el número de cuotas y si la entidad es conocida y formal",
    "quiz.credit.q4.optC": "Solo el color del anuncio",
    "quiz.credit.q4.explanation": "Un crédito rápido puede tener intereses muy altos. Revisa siempre las condiciones completas antes de aceptar.",

    "quiz.credit.q5.prompt": "¿Qué pasa si dejas de pagar una deuda por varios meses?",
    "quiz.credit.q5.optA": "No pasa nada",
    "quiz.credit.q5.optB": "Puede crecer con más intereses y afectar tus próximos préstamos",
    "quiz.credit.q5.optC": "El banco olvida la deuda",
    "quiz.credit.q5.explanation": "No pagar a tiempo hace crecer la deuda con más intereses y puede dificultar futuros préstamos.",

    /* ---- Autoevaluación (evaluacion.html) ---- */
    "eval.eyebrow": "Mide tu avance",
    "eval.title": "Autoevaluación",
    "eval.lead.before": "Antes de empezar a jugar, responde estas 10 preguntas cortas para ver cuánto sabes hoy. No hay que estudiar nada, solo responde lo que ya sabes.",
    "eval.lead.after": "Ya tienes un punto de partida guardado. Responde otra vez las mismas preguntas para ver cuánto avanzaste.",
    "eval.lead.done": "Ya completaste tu autoevaluación de antes y de después. Así te fue:",
    "eval.start": "Comenzar",
    "eval.before.done.title": "¡Guardado como tu punto de partida!",
    "eval.before.done.text": "Ahora ve a jugar los 4 juegos y, cuando termines, vuelve a esta página para ver cuánto avanzaste.",
    "eval.cta.playgames": "Ir a jugar",
    "eval.compare.title": "Tu avance",
    "eval.compare.before": "Antes",
    "eval.compare.after": "Después",
    "eval.compare.improved": "¡Avanzaste! Sabes más que antes de jugar.",
    "eval.compare.same": "Mantuviste el mismo puntaje. Puedes repasar los juegos que te cuesten más.",
    "eval.compare.lower": "Esta vez respondiste menos correctas. No pasa nada, puedes repasar los juegos y volver a intentarlo.",
    "eval.retry": "Repetir la autoevaluación desde cero",
    "eval.retry.confirm": "Esto borrará tu resultado de antes y de después guardados. ¿Deseas continuar?",

    "eval.q1.prompt": "¿Cuál es el mejor momento para apartar tu ahorro?",
    "eval.q1.optA": "Al final del mes, si sobra algo",
    "eval.q1.optB": "Apenas recibes tu ingreso",
    "eval.q1.optC": "Solo cuando el ingreso es grande, no cuando es pequeño",
    "eval.q1.explanation": "Apartar apenas recibes tu ingreso evita que \"no te sobre nada\" al final del mes, sea el ingreso grande o pequeño.",

    "eval.q2.prompt": "¿Para qué sirve anotar tus gastos en un cuaderno?",
    "eval.q2.optA": "Para nada, es pérdida de tiempo",
    "eval.q2.optB": "Solo sirve para los ricos",
    "eval.q2.optC": "Para ver patrones y controlar en qué se va tu dinero",
    "eval.q2.explanation": "Anotar tus gastos te muestra patrones y te ayuda a controlar en qué se va tu dinero, sin importar cuánto ganes.",

    "eval.q3.prompt": "Si te piden tu clave de billetera digital por teléfono o mensaje, ¿qué haces?",
    "eval.q3.optA": "Nunca la doy; ignoro el mensaje y verifico por mi cuenta",
    "eval.q3.optB": "La doy si suena confiable",
    "eval.q3.optC": "La doy solo si insisten mucho",
    "eval.q3.explanation": "Los bancos y billeteras reales nunca piden tu clave completa por teléfono o mensaje, aunque quien llame suene confiable o insista.",

    "eval.q4.prompt": "Antes de aceptar un préstamo, ¿qué es lo más importante de saber?",
    "eval.q4.optA": "El color del anuncio",
    "eval.q4.optB": "Cuánto pagarás en total y el interés",
    "eval.q4.optC": "Si el vendedor es simpático",
    "eval.q4.explanation": "Si no te explican con claridad cuánto pagarás en total, no conviene firmar todavía, por más simpático que sea el vendedor.",

    "eval.q5.prompt": "¿Qué pasa si gastas todo tu ingreso sin apartar nada?",
    "eval.q5.optA": "Nada, siempre habrá más dinero",
    "eval.q5.optB": "Ahorrarás automáticamente",
    "eval.q5.optC": "No tendrás nada guardado para imprevistos o metas",
    "eval.q5.explanation": "Sin apartar nada, no tienes un respaldo para imprevistos ni para tus metas; el ahorro no aparece solo, hay que separarlo a propósito.",

    "eval.q6.prompt": "Tienes S/ 50 ahorrados y se malogra el celular que usas para vender. ¿Qué es lo más recomendable?",
    "eval.q6.optA": "Pedir prestado a un prestamista informal, sin pensarlo, aunque cobre mucho interés",
    "eval.q6.optB": "Dejar de vender hasta ahorrar todo de nuevo desde cero",
    "eval.q6.optC": "Usar el ahorro de emergencia si hace falta, y reponerlo poco a poco después",
    "eval.q6.explanation": "El ahorro de emergencia existe justo para estos casos: se usa si hace falta y se repone poco a poco, sin caer en préstamos informales caros.",

    "eval.q7.prompt": "Un conocido te ofrece prestarte dinero \"sin papeles ni preguntas\", pero cobra mucho más si te atrasas un solo día. ¿Qué tipo de préstamo es, probablemente?",
    "eval.q7.optA": "Un préstamo informal de un agiotista, con riesgo alto para ti",
    "eval.q7.optB": "Un préstamo formal de una caja o banco",
    "eval.q7.optC": "Un regalo, sin ninguna condición",
    "eval.q7.explanation": "Sin papeles y con cobros altos por cualquier atraso son señales de un préstamo informal (agiotista), mucho más riesgoso que uno formal.",

    "eval.q8.prompt": "Te llega un mensaje diciendo que ganaste un premio, pero para cobrarlo debes depositar antes una \"cuota\". ¿Qué haces?",
    "eval.q8.optA": "Deposito rápido, antes de que se acabe la oferta",
    "eval.q8.optB": "No deposito nada: los premios reales nunca piden pago para cobrarlos",
    "eval.q8.optC": "Pido a un familiar que deposite por mí",
    "eval.q8.explanation": "Ningún premio real te pide pagar primero para cobrarlo. Pedir un depósito antes es una señal clara de estafa.",

    "eval.q9.prompt": "Quieres juntar S/ 300 en 6 meses para comprar mercadería. ¿Cuánto debes apartar cada mes, como mínimo?",
    "eval.q9.optA": "S/ 50",
    "eval.q9.optB": "S/ 30",
    "eval.q9.optC": "S/ 100",
    "eval.q9.explanation": "S/ 300 entre 6 meses es S/ 50 por mes. Apartar menos de eso no te alcanzará para llegar a la meta a tiempo.",

    "eval.q10.prompt": "Un préstamo dice \"sin intereses\", pero te cobran una comisión fija cada semana. ¿Qué deberías hacer?",
    "eval.q10.optA": "Confiar, porque dice \"sin intereses\"",
    "eval.q10.optB": "Firmar rápido, sin preguntar nada",
    "eval.q10.optC": "Preguntar cuánto suma esa comisión en total y compararla con otras opciones: igual es un costo",
    "eval.q10.explanation": "Una comisión fija repetida es un costo real, aunque no se llame \"interés\". Lo importante es cuánto pagarás en total, no el nombre que le pongan.",

    "talleres.eyebrow": "Presencial y cerca de ti, en cualquier región",
    "talleres.title": "Talleres y puntos de aprendizaje en el Perú",
    "talleres.lead": "El piloto nació en Junín. Estos son esos puntos, más nuevas alianzas con agencias de Caja Huancayo en la costa, la sierra y la selva del país.",
    "talleres.cta": "Cómo llegar",

    "talleres.group.junin": "Piloto: Junín",
    "talleres.group.nacional": "Expansión nacional, con Caja Huancayo como aliado",

    "taller.pampamichi.tag": "Comunidad · Piloto",
    "taller.pampamichi.name": "Pampamichi",
    "taller.pampamichi.desc": "Comunidad donde Caja Huancayo ya dictó talleres reconocidos por la SBS. Punto de partida del piloto.",

    "taller.huancayo.tag": "Oficina Caja Huancayo",
    "taller.huancayo.name": "Huancayo",
    "taller.huancayo.desc": "Sede principal de Caja Huancayo, aliado central de la propuesta.",

    "taller.concepcion.tag": "Punto Multired",
    "taller.concepcion.name": "Concepción",
    "taller.concepcion.desc": "Distrito propuesto para la fase de expansión, usando agentes Multired como aula los días de pago de Juntos.",

    "taller.jauja.tag": "Comunidad",
    "taller.jauja.name": "Jauja",
    "taller.jauja.desc": "Zona donde Caja Huancayo también dictó talleres de educación financiera reconocidos por la SBS.",

    "taller.lima.tag": "Costa · Agencia Caja Huancayo",
    "taller.lima.name": "Lima (San Martín de Porres)",
    "taller.lima.desc": "Caja Huancayo tiene agencias en Lima Metropolitana (San Martín de Porres, San Juan de Lurigancho, Callao), la puerta de entrada del piloto a la costa.",

    "taller.ayacucho.tag": "Sierra · Agencia Caja Huancayo",
    "taller.ayacucho.name": "Ayacucho (Huanta)",
    "taller.ayacucho.desc": "Agencias de Caja Huancayo en Ayacucho y Huanta, para llevar los talleres a la sierra sur del país.",

    "taller.satipo.tag": "Selva · Agencia Caja Huancayo",
    "taller.satipo.name": "Satipo",
    "taller.satipo.desc": "En la Selva Central de Junín, Caja Huancayo también tiene agencia en Satipo: el modelo funciona igual de bien lejos de la sierra.",

    /* ---- Más formas de aprender (estrategias.html) ---- */
    "estr.eyebrow": "Además de esta web",
    "estr.title": "Otras formas de seguir aprendiendo, cerca de ti",
    "estr.lead": "Esta web es un punto de partida. La cultura financiera se aprende mejor cara a cara, en tu comunidad. Aquí tienes talleres, redes y personas a las que puedes acercarte hoy mismo.",

    "estr.opts.title": "Aprovecha esto donde vives",
    "estr.opts.lead": "No tienes que esperar a que alguien te enseñe: pregunta por esto, pídelo o ayuda a que llegue a tu comunidad.",

    "estr.o1.title": "El camión-taller que llega a tu comunidad",
    "estr.o1.desc": "Caja Huancayo recorre zonas como Pampamichi con su unidad móvil AYNI: ahí mismo te asesoran, evalúan un crédito o te abren una cuenta de ahorro. Pregunta en tu municipio o comunidad cuándo pasa por tu zona.",
    "estr.o2.title": "Talleres para tu olla común, feria o mercado",
    "estr.o2.desc": "Si organizas o participas en una olla común, un mercado o una feria, puedes pedir un taller como \"De la Caja a la Olla\": sesiones de ahorro y emprendimiento hechas para negocios pequeños, no para expertos.",
    "estr.o3.title": "Participa en el reto de octubre",
    "estr.o3.desc": "Cada Semana Mundial del Ahorro, las cajas y bancos hacen concursos y ferias en sus agencias. Anímate a participar, y si te toca organizar uno, pide que el premio sea algo real: una mejor tasa para quien complete el taller.",
    "estr.o4.title": "Vuélvete promotor en tu comunidad",
    "estr.o4.desc": "No hace falta ser experto: capacítate una vez, en un taller como \"Finanzas en el Cole\" pero para adultos, y ayuda a que más vecinos entiendan lo mismo que tú, en quechua o en español.",
    "estr.o5.title": "Aprovecha la fila del agente",
    "estr.o5.desc": "La próxima vez que cobres en un agente Multired un día de pago de Juntos, Pensión 65 o tu CTS, pregunta si hay un microtaller de diez minutos mientras esperas. Si no lo hay todavía, pídelo.",
    "estr.o6.title": "Talleres gratuitos con estudiantes",
    "estr.o6.desc": "Universidades como la UPAO ya llevan estudiantes de Economía y Contabilidad a dictar talleres a microempresarios. Si tienes un negocio pequeño, pregunta en la universidad más cercana si hay uno disponible.",
    "estr.o7.title": "Sigue aprendiendo por WhatsApp",
    "estr.o7.desc": "Después de un taller presencial, pide que te agreguen a una lista de difusión con audios cortos, en español o quechua. Funcionan aunque tengas poca señal, y te recuerdan lo aprendido semana a semana.",

    "estr.res.title": "Recursos gratuitos para seguir ahora mismo",
    "estr.res.lead": "Mientras se organiza un taller cerca de ti, esto ya está disponible hoy, sin costo.",
    "estr.res1.title": "Finanzas para Ti (SBS)",
    "estr.res1.desc": "Tips, webinars y cursos cortos para adultos sobre ahorro, crédito y seguros.",
    "estr.res2.title": "Finanzas en el Cole (SBS)",
    "estr.res2.desc": "Material gratuito para docentes de primaria y secundaria, alineado al currículo nacional.",
    "estr.res3.title": "Nuestro juego de ahorro",
    "estr.res3.desc": "Practica las mismas decisiones del día a día, sin arriesgar dinero real.",
    "estr.res4.title": "Talleres cerca de ti",
    "estr.res4.desc": "El mapa con los puntos donde ya puedes acercarte en el Perú.",
    "estr.res.cta": "Visitar"
  },

  qu: {
    "nav.inicio": "Qallariy",
    "nav.juego": "Pukllaspa Yachay",
    "nav.autoeval": "Avanceykita Rikuy",
    "nav.talleres": "Yachachiykuna Kayllapi",
    "nav.estrategias": "Aswan Yachanapaq",

    "idx.eyebrow": "Costa, sierra, selva · Kunanmantaraq yachay",
    "idx.hero.title": "Qullqiykita waqaychayta yachay, kunan",
    "idx.hero.lead": "Mana largo yachaywanchu: tawa kamachikuna kay semanapi ruwanaykipaq, huk pukllay waqaychayta yachanaykipaq, hinaspa yachachiykuna aswan kayllapi kaqkuna.",
    "idx.hero.cta1": "Pukllaspa waqaychayta yachay",
    "idx.hero.cta2": "Yachachiykuna kayllapi qhaway",
    "idx.hero.caption": "Pisilla señalwanpas allinta purin, ima celularpipas.",

    "idx.lessons.eyebrow": "Tawa kamachikuna, mana tawa clasekunachu",
    "idx.lessons.title": "Kunanmanta ruwariy",
    "idx.lessons.lead": "Sapa temapaq huk yuyay, mana yapasqa rimaywan.",

    "idx.lesson.ahorro.title": "Waqaychay",
    "idx.lesson.ahorro.tip": "Chaskisqaykimanta huk parte waqaychay, mana killa tukuypiñachu: puchuqqa manam kaqllañachu puchun.",
    "idx.lesson.presupuesto.title": "Qullqi Tantay",
    "idx.lesson.presupuesto.tip": "Sapa semana yaykuqta hinaspa lluqsiqta huk cuadernopi qillqay. Mana qillqasqaqa, manam yachankichu maypi kachkanki.",
    "idx.lesson.billeteras.title": "Billetera Digital",
    "idx.lesson.billeteras.tip": "Billetera digitalta servichiy ñawpaqta, soporte numerota qhipanchay, hinaspa qhaway app oficial kasqanta.",
    "idx.lesson.credito.title": "Manukuy, allin yuyaywan",
    "idx.lesson.credito.tip": "Pipas mana sut'inta willasunki mashka tukuypi pagananayki kasqanta chayqa, amaraq firmaychu.",

    "idx.game-banner.eyebrow": "Mana imapas riesgowan yachay",
    "idx.game-banner.title": "Waqaychayta yachay, pukllaspa",
    "idx.game-banner.lead": "Feriapi rantikuq warmi tukuy, sapa semana huk laya qullqita chaskikuspa. Akllay hayk'ata waqaychayta munanki, chaymanta qhaway metaman chayankichu.",
    "idx.game-banner.cta": "Pukllayta qallariy",

    "idx.talleres-banner.eyebrow": "Ñawi ñawillanpi yachay",
    "idx.talleres-banner.title": "Ñawi ñawillanpi yachachiykuna, tukuy Perú-pi",
    "idx.talleres-banner.lead": "Junín suyupi qallarirqanchik, kunanqa Caja Huancayo-pa tukuy suyukunapi oficinankunawan, Multired puntokunawan, hinaspa comunidad yachachiykunawan costa, sierra, selva-man chayanchik.",
    "idx.talleres-banner.cta": "Llapan yachachiykunata qhaway",

    "idx.estrategias-banner.eyebrow": "Kay web-manta hawapi",
    "idx.estrategias-banner.title": "Aswan formakuna kachkan, kayllapi yachanaykipaq",
    "idx.estrategias-banner.lead": "Camión-taller puriqkuna, vecinokunapa redenkuna, waqaychay feriakuna, hinaspa qullqinwan mana yachachiq estudiantekuna: rikuriy pimanraq kay semana qhichpiykuwaq.",
    "idx.estrategias-banner.cta": "Aswan formakunata qhaway",
    "idx.estrategias-banner.stat": "📍 Camión-taller, mercadopi yachachiykuna, waqaychay feriakuna, WhatsApp huñukuna",

    "idx.footer.tag": "Yanapay Finanzas — \"yanapay\" nin yanapay, runasimipi.",
    "idx.footer.meta": "Reto ABR · Economía 2",

    /* ---- Hub de juegos ---- */
    "juego.hub.eyebrow": "Mana imapas riesgowan yachay",
    "juego.hub.title": "Huk pukllayta akllay yachanaykipaq",
    "juego.hub.lead": "Tawa pukllay pisilla: waqaychayta, qullqi tantayta, billetera digitalta, hinaspa manukuyta yachanaykipaq. Pukllay, pantay, hinaspa yachay: sapa tapuyqa chiqaq kutichiyta rikuchisunki.",
    "juego.cta.play": "Pukllay",
    "juego.back": "Pukllaykunaman kutiy",
    "juego.hub.eval-hint": "¿Ñawpaq kutichu kaypi kanki? Pukllanaykimanta ñawpaqta, huk pisilla autoevaluación-ta kutichiyta atinki, kunan hayk'ata yachasqaykita rikunaykipaq.",
    "juego.hub.eval-link": "Autoevaluación-man riy",

    "juego.card1.title": "Waqaychay, pukllaspa",
    "juego.card1.desc": "Sapa semana hayk'ata waqaychayta akllay, qullqiyki wichaykuspa uraykuspa kaptin.",
    "juego.card2.title": "¿Necesitankichu, icha munallankichu?",
    "juego.card2.desc": "Yachay imayna necesitasqa gastokunata, suyay atiq gastokunamanta rakinaykipaq.",
    "juego.card3.title": "Billetera Seguro",
    "juego.card3.desc": "Billetera digitalta servichispa, engañay señalkunata reqsiy.",
    "juego.card4.title": "Manukuy, mana mancharikuspa",
    "juego.card4.desc": "Ruway decisionkunata manukunaykipaq, deudapi mana urmanaykipaq.",

    "game.title": "Waqaychay, pukllaspa",
    "game.lead": "Qanmi kanki Rosa, feriapi papata sarata rantikuq. Sapa semana huk laya qullqita chaskinki. Akllay hayk'ata waqaychayta munanki, wasipaq gastosniykita mana tukuchispa.",
    "game.week": "Semana",
    "game.income": "Chaskirqanki",
    "game.meter.label": "Tukuy waqaychasqa",
    "game.choice.q": "¿Hayk'atataq kay semanapi waqaychanki?",
    "game.play-again": "Yapamanta pukllay",
    "game.result.title": "¡Soqta semanata tukuchirqanki!",
    "game.result.total": "Tukuypi waqaycharqanki",
    "game.badge.bronze": "Bronce Waqaychaq",
    "game.badge.silver": "Qullqi Waqaychaq",
    "game.badge.gold": "Qori Waqaychaq",
    "game.badge.bronze.tip": "Waqaychayta qallarirqanki, chaymi askhata ruwan runakunamanta. Hamuq semanapi aswan askhata.",
    "game.badge.silver.tip": "Allin ritmo. Costumbrentam charinki; kunanqa allin semanakunapi aswan yapariy.",
    "game.badge.gold.tip": "Sasa semanakunapipas waqaychankichu. Chaynatam huk fondo emergenciapaq ruwakun.",
    "game.feedback.low": "Sapa sol valen. Ichaqa allin semanakunapi aswan waqaychayta atinki.",
    "game.feedback.mid": "Allin decisión: waqaychanki, gastosniykitapas mana saqispa.",
    "game.feedback.high": "Askhatam kay semanapi waqaycharqanki. Yuyariy imapas mana yuyasqa gastopaq saqinaykita.",
    "game.feedback.expense": "Mana yuyasqa gastoyki karqan. Chayraykum ñawpaqmanta waqaychasqa kanaykipaq allin.",

    /* ---- Motor de quizzes ---- */
    "quiz.question": "Tapuy",
    "quiz.correct": "¡Chiqaqmi!",
    "quiz.incorrect": "Manam aswan allin akllaychu",
    "quiz.next": "Qatiqnin",
    "quiz.finish.title": "¡Pukllayta tukuchirqanki!",
    "quiz.score": "Chiqaq kutichiykuna",
    "quiz.playagain": "Yapamanta pukllay",
    "quiz.badge.low": "Yachaytaraq atiy",
    "quiz.badge.low.tip": "Kutichiykunata kutin qhaway, hinaspa yapamanta ruway. Sapa pantay yachayta yanapan.",
    "quiz.badge.mid": "¡Allin llank'ay!",
    "quiz.badge.mid.tip": "Askhatam yachankiña. Pantasqayki temakunata kutin qhaway.",
    "quiz.badge.high": "¡Anchatapuni allin!",
    "quiz.badge.high.tip": "Temataqa atipankim. Yachasqaykita familiaykiwan rikuchiy.",

    /* Juego 2 — Necesitankichu, icha munallankichu */
    "quiz.budget.q1.prompt": "S/ 300 llank'asqaykimanta pagasunki kay killapi. ¿Imataq aswan allin ñawpaq ruwana?",
    "quiz.budget.q1.optA": "Musuq p'achata rantiy, valeq kaptiyki",
    "quiz.budget.q1.optB": "Mikhunapaq, pasajespaq, cuentaspaq hayk'ata necesitasqaykita qillqay, ñawpaqta wak gastokunapi gastanaykimanta",
    "quiz.budget.q1.optC": "Tukuy qullqita waqaychay, mana imapipas gastaspa, necesitasqapipas",
    "quiz.budget.q1.explanation": "Necesarioykita ñawpaqta qillqaspaqa, allintam rikunki hayk'a qullqiyki wakinpaq puchun.",

    "quiz.budget.q2.prompt": "Qatuman rinki mana listawan, mana presupuestowan. ¿Imataq casi siempre pasan?",
    "quiz.budget.q2.optA": "Necesitasqaykillata rantinki",
    "quiz.budget.q2.optB": "Aswan askhata gastanki yuyasqaykimanta, mana yuyasqayki imakunata rantispa",
    "quiz.budget.q2.optC": "Aswan askhata waqaychanki",
    "quiz.budget.q2.explanation": "Mana listawanqa, fácilmi aswan askhata rantinki. Huk listalla yanapasunki mana yapa gastanaykipaq.",

    "quiz.budget.q3.prompt": "Vecinayki nin: \"imataq puchun, chaytam waqaychakun\". ¿Imaraykutaq kay yuyay casi mana funcionanchu?",
    "quiz.budget.q3.optA": "Porque casi mana imapas puchunchu, ñawpaqta gastaspa hinaspa qhipata waqaychaspa",
    "quiz.budget.q3.optB": "Porque waqaychayqa mana leyniyuqchu",
    "quiz.budget.q3.optC": "Porque siempre askha qullqi puchun",
    "quiz.budget.q3.explanation": "\"Puchunanta\" suyaspaqa, casi siempre tukuyta ñawpaqta gastanki. Aswan allinqa, ñawpaqta waqaychayta apartay.",

    "quiz.budget.q4.prompt": "Sapa killa luz-agua gastoyki S/ 40 kachkan, hinaspa sapa semana S/ 200 chaskinki, mana kaqllataqchu. ¿Imatataq ruwana?",
    "quiz.budget.q4.optA": "Gastota qunqay, recibo chayamunankama",
    "quiz.budget.q4.optB": "Sapa semana huk parte waqaychay, chay gasto chayamuptin pagananaykipaq",
    "quiz.budget.q4.optC": "Sapa recibo chayamuqtin manukuy",
    "quiz.budget.q4.explanation": "Pisipa pisipa waqaychaspaqa, mana mancharikunkichu cuenta chayamuqtin.",

    "quiz.budget.q5.prompt": "¿Ima herramienta pisilla presupuestoykita controlanaykipaq aswan yanapan?",
    "quiz.budget.q5.optA": "Huk cuaderno, maypi yaykuqta lluqsiqta qillqanki",
    "quiz.budget.q5.optB": "Memoriallamanta hayk'ata gastasqaykita yuyariy",
    "quiz.budget.q5.optC": "Mana hayk'a gastasqaykita nunca qhawariychu",
    "quiz.budget.q5.explanation": "Huk cuadernopi qillqaspaqa, pisilla kaptinpas, patronkunata rikuchisunki hinaspa mana sorpresakunata charinkichu.",

    /* Juego 3 — Billetera Seguro */
    "quiz.wallet.q1.prompt": "Huk mensaje chayasunki, nispa premiota ganarqanki, hinaspa billetera digitalniykipa código-ninta qunaykita mañan cobranaykipaq. ¿Imatataq ruwanki?",
    "quiz.wallet.q1.optA": "Código-ta enseguida quni, premio-ta mana chinkananpaq",
    "quiz.wallet.q1.optB": "Mana ima códigotapas quni; chiqaq premiokunaqa mana código seguridad-niykita mañankuchu",
    "quiz.wallet.q1.optC": "Código-ta huk familiar-llawan comparteni",
    "quiz.wallet.q1.explanation": "Nunca código-ykita, claveykita mana pihmanpas quy, ni premio ninkuqmanpas. Chaymi qullqiykiman puertan.",

    "quiz.wallet.q2.prompt": "Ñawpaq kutipaq billetera digital app-ta descargayta munanki. ¿Imatataq instalanaykipaq ñawpaqta qhawanki?",
    "quiz.wallet.q2.optA": "App oficial kasqanta, reqsisqa banco otaq entidad-pa kasqanta",
    "quiz.wallet.q2.optB": "Ima app-tapas kaqllan ícono-yuqta",
    "quiz.wallet.q2.optC": "Ñawpaq app-lla lloqsimuq, pi publicasqanta mana qhawaspa",
    "quiz.wallet.q2.explanation": "Llulla app-kunata instalaspaqa, suwakunapa usasqan formanmi. Siempre qhaway app oficial reqsisqa entidad-pa kasqanta.",

    "quiz.wallet.q3.prompt": "Pipas waqyasunki, banco-manta kani nispa, hinaspa clave-ykita mañan \"cuentayki verificananpaq\". ¿Imatataq ruwanki?",
    "quiz.wallet.q3.optA": "Clave-ta quni, banco-manta kani nisqanrayku",
    "quiz.wallet.q3.optB": "Colgani, hinaspa banco-pa número oficial-ninman qayani verificananpaq",
    "quiz.wallet.q3.optC": "Clave-manta chawpillanta quni",
    "quiz.wallet.q3.explanation": "Chiqaq bancokunaqa nunca clave completa-ykita teléfonopi mañankuchu. Dudapi kaspaqa, colgay hinaspa qanmanta número oficial-man qayay.",

    "quiz.wallet.q4.prompt": "Billetera digitalniykipa soporte número-nta waqaychankiña. ¿Imapaqtaq kayqa yanapasunki?",
    "quiz.wallet.q4.optA": "Mana imapaqpas, innecesariom",
    "quiz.wallet.q4.optB": "Cuentaykipi ima raro pasaptin, utqhaylla reportanaykipaq",
    "quiz.wallet.q4.optC": "Pipas mañaqman qunaykipaq",
    "quiz.wallet.q4.explanation": "Soporte número waqaychasqaykiwanqa, utqhaylla actuayta atinki ima sospechoso rikuptiyki.",

    "quiz.wallet.q5.prompt": "WhatsApp-pi huk enlace chayasunki, billetera digitalniykimanta kasqanta niq, \"datosniykita actualizananpaq\". ¿Imatataq ruwanki?",
    "quiz.wallet.q5.optA": "Clic-ta ruwani hinaspa utqhaylla datosniyta hunt'ani",
    "quiz.wallet.q5.optB": "Mana mensaje enlace-kunapi clic-ta ruwanichu; app oficial-ta kikillanmanta kichani qhawananpaq",
    "quiz.wallet.q5.optC": "Enlace-ta contactosniyman reenviani",
    "quiz.wallet.q5.explanation": "Mensajepi enlace-kunaqa suwakunapa usasqan formanmi (phishing). Aswan seguromi app oficial-ta kikillanmanta kichay.",

    /* Juego 4 — Manukuy, mana mancharikuspa */
    "quiz.credit.q1.prompt": "Huk préstamota ofrecesunki, ichaqa pipas mana sut'inta willasunkichu hayk'a tukuypi pagananaykita. ¿Imatataq ruwanki?",
    "quiz.credit.q1.optA": "Kaqllata firmani, qullqita necesitasqayrayku",
    "quiz.credit.q1.optB": "Mañani sut'inta willawananta monto tukuyta hinaspa interés-ta, ñawpaqta firmanaymanta",
    "quiz.credit.q1.optC": "Firmani hinaspa qhipata tapukuni",
    "quiz.credit.q1.explanation": "Pipas mana sut'inta willasunki hayk'a tukuypi pagananayki kasqanta chayqa, amaraq firmaychu.",

    "quiz.credit.q2.prompt": "¿Imataq préstamo-pa interés-nin?",
    "quiz.credit.q2.optA": "Banco-pa huk regalon",
    "quiz.credit.q2.optB": "Manukusqa qullqita servichisqaykirayku pagana yapasqa costo",
    "quiz.credit.q2.optC": "Banco-pa qusqan qullqi gratis",
    "quiz.credit.q2.explanation": "Interés-qa qullqita ñawpaqta chaskisqaykirayku yapasqa pagasqaykim.",

    "quiz.credit.q3.prompt": "Iskay pisi deudayki kachkan, hinaspa kay killapi hukllatam completo pagayta atinki. ¿Imataq generalmente priorizana?",
    "quiz.credit.q3.optA": "Aswan hatun interés-niyuqta, mana aswan wiñananpaq",
    "quiz.credit.q3.optB": "Aswan penata qusunkita",
    "quiz.credit.q3.optC": "Mana hukllatapas, iskayninta qhipapaq saqiy",
    "quiz.credit.q3.explanation": "Aswan hatun interés-niyuq deudata ñawpaqta pagaspaqa, mana chay deuda utqhayllata wiñanchu.",

    "quiz.credit.q4.prompt": "Huk crédito \"fácil, mana tapukuywan\" utqhaylla qullqita ofrecesunki. ¿Imatataq ñawpaqta qhawana kanki?",
    "quiz.credit.q4.optA": "Mana imatapas, aswan utqhayqa, aswan allin",
    "quiz.credit.q4.optB": "Interés tukuyta, hayk'a cuota kasqanta, hinaspa entidad reqsisqa formal kasqanta",
    "quiz.credit.q4.optC": "Anuncio-pa color-ninllata",
    "quiz.credit.q4.explanation": "Utqhaylla crédito-qa ancha hatun interés-niyuq kanman. Siempre qhaway tukuy condiciones-kunata aceptananaykimanta ñawpaqta.",

    "quiz.credit.q5.prompt": "¿Imataq pasan, huk deudata achka killa mana pagaspaqa?",
    "quiz.credit.q5.optA": "Mana imapas pasanchu",
    "quiz.credit.q5.optB": "Aswan interés-niyuq wiñayta atin, hinaspa hamuq préstamo-ykikunata sasachayta atin",
    "quiz.credit.q5.optC": "Banco deuda-ta qunqan",
    "quiz.credit.q5.explanation": "Mana tiempopi pagaspaqa, deuda aswan interés-niyuq wiñan, hinaspa hamuq préstamokunata sasachayta atin.",

    /* ---- Autoevaluación ---- */
    "eval.eyebrow": "Avanceykita rikuy",
    "eval.title": "Autoevaluación",
    "eval.lead.before": "Pukllayta qallarinaykimanta ñawpaqta, kay chunka tapuykunata kutichiy, kunan hayk'ata yachasqaykita rikunaykipaq. Mana imatapas estudianaykichu, kikin yachasqaykillata kutichiy.",
    "eval.lead.after": "Ñawpaq puntoykita waqaychasqaña kanki. Kaqllataq tapuykunata kutin kutichiy, hayk'ata avanzasqaykita rikunaykipaq.",
    "eval.lead.done": "Ñawpaqmanta hinaspa qhipamanta autoevaluación-niykita tukuchirqankiña. Kaynatam rikukun:",
    "eval.start": "Qallariy",
    "eval.before.done.title": "¡Ñawpaq puntoyki waqaychasqa!",
    "eval.before.done.text": "Kunanqa tawa pukllaykunata pukllay, hinaspa tukuchispa, kay páginaman kutimuy hayk'ata avanzasqaykita rikunaykipaq.",
    "eval.cta.playgames": "Pukllaqman riy",
    "eval.compare.title": "Avanceyki",
    "eval.compare.before": "Ñawpaqta",
    "eval.compare.after": "Qhipata",
    "eval.compare.improved": "¡Avanzarqankim! Ñawpaqmanta aswan askhata yachankiña.",
    "eval.compare.same": "Kaqllataq puntuación-niykiwan kachkanki. Aswan sasa pukllaykunata kutin qhaway.",
    "eval.compare.lower": "Kay kutipi aswan pisita chiqaqta kutichirqanki. Mana imapas, pukllaykunata kutin qhawaspa yapamanta ruwanki.",
    "eval.retry": "Autoevaluación-ta kikillanmanta yapamanta qallariy",
    "eval.retry.confirm": "Kayqa ñawpaq hinaspa qhipa resultadoykita chinkachinqa. ¿Sigueyta munankichu?",

    "eval.q1.prompt": "¿Ima kutitaq aswan allin waqaychaykita apartanaykipaq?",
    "eval.q1.optA": "Killa tukuypi, imapas puchuptin",
    "eval.q1.optB": "Ingreso-ykita chaskisqaykitawan kaqlla",
    "eval.q1.optC": "Ingreso hatun kaqtinllam, mana pisi kaqtinqa",
    "eval.q1.explanation": "Ingreso-ykita chaskisqaykitawan kaqlla apartaspaqa, mana \"mana imapas puchunchu\" nispa killa tukuypi tarikunkichu, ingreso hatun otaq pisi kachun.",

    "eval.q2.prompt": "¿Imapaqtaq gastosniykita cuadernopi qillqay allin?",
    "eval.q2.optA": "Mana imapaqpas, tiempo perderllanmi",
    "eval.q2.optB": "Qhapaqkunallapaqmi",
    "eval.q2.optC": "Patronkunata rikunaykipaq hinaspa qullqiyki maypi tukukusqanta controlanaykipaq",
    "eval.q2.explanation": "Gastosniykita qillqaspaqa, patronkunata rikunki hinaspa qullqiyki maypi rinta yachanki, hayk'a ganaspapas.",

    "eval.q3.prompt": "Billetera digitalniykipa clave-nta teléfonopi otaq mensajepi mañaptinku, ¿imatataq ruwanki?",
    "eval.q3.optA": "Nunca quniñachu; mensajeta mana qhawarinichu, kikillanmantam verificani",
    "eval.q3.optB": "Confiable rikukuptin quni",
    "eval.q3.optC": "Ancha mañaptinkullam quni",
    "eval.q3.explanation": "Chiqaq bancokunaqa hinaspa billeterakunaqa nunca clave-ykita teléfonopi otaq mensajepi mañankuchu, confiable rikukuptinpas otaq ancha mañaptinkupas.",

    "eval.q4.prompt": "Huk préstamota aceptanaykimanta ñawpaqta, ¿imataq aswan importante yachanaykipaq?",
    "eval.q4.optA": "Anuncio-pa color-nin",
    "eval.q4.optB": "Hayk'a tukuypi pagananayki hinaspa interés-nin",
    "eval.q4.optC": "Vendedor simpático kasqan",
    "eval.q4.explanation": "Pipas mana sut'inta willasunki hayk'a tukuypi pagananayki kasqanta chayqa, amaraq firmaychu, vendedor simpático kaptinpas.",

    "eval.q5.prompt": "¿Imataq pasan, tukuy ingreso-ykita mana imata apartaspa gastaptiyki?",
    "eval.q5.optA": "Mana imapas pasanchu, siempre aswan qullqi kanqa",
    "eval.q5.optB": "Automáticamente waqaychankim",
    "eval.q5.optC": "Mana imatapas waqaychasqaykichu imprevisto otaq metakunapaq",
    "eval.q5.explanation": "Mana imata apartaspaqa, mana imayuqchu kanki imprevistokunapaq nitaq metaykikunapaq; waqaychayqa mana kikillanmanta lloqsinchu, apartanayki tiyan.",

    "eval.q6.prompt": "S/ 50 waqaychasqaykiyuqmi kanki, hinaspa vendenaykipaq usasqayki celular-niyki malograkun. ¿Imataq aswan allin?",
    "eval.q6.optA": "Prestamista informal-manta mañakuy, mana yuyaspalla, ancha interés cobraptinpas",
    "eval.q6.optB": "Vendenayta saqiy, kikillanmanta yapamanta waqaychaspa qallarinaykama",
    "eval.q6.optC": "Emergencia-paq waqaychasqaykita usay, chaymantataq allillamanta yapamanta apartay",
    "eval.q6.explanation": "Emergencia-paq waqaychayqa kay hina casokunapaqmi kachkan: necesitaptinmi usanki, chaymantataq allillamanta yapamanta apartanki, mana chaninchakuq préstamo informal-manta mañakuspalla.",

    "eval.q7.prompt": "Huk reqsisqayki \"mana papeleswan, mana tapuykunawan\" qullqita mañaykuyta ofrecesunki, ichaqa huk p'unchawllapas atrasaptiyki aswan ashkata cobrasunki. ¿Ima préstamo-taq kanman, probablemente?",
    "eval.q7.optA": "Agiotista-pa préstamo informal-nin, ashkata riesgoyuq",
    "eval.q7.optB": "Huk caja otaq banco-pa préstamo formal-nin",
    "eval.q7.optC": "Huk regalo, mana ima condición-niyuq",
    "eval.q7.explanation": "Mana papeleswan hinaspa mayqin atrasaqpipas ashkata cobrayqa, préstamo informal-pa (agiotista-pa) señal-ninmi, préstamo formal-manta aswan riesgoyuq.",

    "eval.q8.prompt": "Huk mensaje chayamusunki premio-ta ganasqaykita nispa, ichaqa cobranaykipaqqa ñawpaqta huk \"cuota\" depositanayki tiyan. ¿Imatataq ruwanki?",
    "eval.q8.optA": "Usqhayta deposito, oferta tukukunanmanta ñawpaqta",
    "eval.q8.optB": "Mana imatapas depositanichu: chiqaq premiokunaqa nunca cobranapaq pagayta mañankuchu",
    "eval.q8.optC": "Huk familiar-niyta depositananta mañakuni",
    "eval.q8.explanation": "Ni huk chiqaq premiopas ñawpaqta pagayta mañasunkichu cobranaykipaq. Ñawpaqta depósito mañakuyqa, estafa-pa señal sut'inmi.",

    "eval.q9.prompt": "S/ 300-ta 6 killapi huñunayki munanki mercadería rantinaykipaq. ¿Hayk'atataq sapa killa apartanayki tiyan, mínimopaq?",
    "eval.q9.optA": "S/ 50",
    "eval.q9.optB": "S/ 30",
    "eval.q9.optC": "S/ 100",
    "eval.q9.explanation": "S/ 300, 6 killawan divideptinqa S/ 50 sapa killamanmi lloqsin. Chaymanta pisita apartaspaqa, mana meta-ykiman a tiempo chayankichu.",

    "eval.q10.prompt": "Huk préstamo \"mana interésniyuq\" nispa nin, ichaqa sapa semana huk comisión fija-ta cobrasunki. ¿Imatataq ruwanayki tiyan?",
    "eval.q10.optA": "Confianay, \"mana interésniyuq\" nisqanraykullan",
    "eval.q10.optB": "Usqhayta firmay, mana imata tapuspa",
    "eval.q10.optC": "Chay comisión hayk'a tukuypi kasqanta tapuy, hinaspa hukkunawan comparay: kikillantaqmi huk costo",
    "eval.q10.explanation": "Kutin kutin cobrasqa comisión fija-qa, chiqaq costom, \"interés\" mana nisqapas. Aswan importanteqa hayk'a tukuypi pagananayki, mana sutinqa.",

    "talleres.eyebrow": "Ñawi ñawillanpi, maykama suyupipas",
    "talleres.title": "Yachachiykuna, tukuy Perú-pi",
    "talleres.lead": "Pilotoqa Junín suyupi qallarirqan. Kaykunam chay puntokuna, hinaspa mosoq alianzakuna Caja Huancayo-wan costa, sierra, selva suyukunapi.",
    "talleres.cta": "Imaynata chayay",

    "talleres.group.junin": "Piloto: Junín",
    "talleres.group.nacional": "Tukuy suyuman mast'ariy, Caja Huancayo-wan aliado hina",

    "taller.pampamichi.tag": "Comunidad · Piloto",
    "taller.pampamichi.name": "Pampamichi",
    "taller.pampamichi.desc": "Comunidad, maypi Caja Huancayo SBS-wan reqsisqa talleresta ruwarqaña. Pilotopa qallariynin.",

    "taller.huancayo.tag": "Caja Huancayo Oficina",
    "taller.huancayo.name": "Huancayo",
    "taller.huancayo.desc": "Caja Huancayo-pa hatun oficinan, propuestapa aliadonkuna.",

    "taller.concepcion.tag": "Multired Punto",
    "taller.concepcion.name": "Concepción",
    "taller.concepcion.desc": "Distrito, expansión fasepaq akllasqa, Multired agentekunata aulanpi servichispa Juntos pagay p'unchaykunapi.",

    "taller.jauja.tag": "Comunidad",
    "taller.jauja.name": "Jauja",
    "taller.jauja.desc": "Suyu, maypi Caja Huancayo-pas SBS reqsisqa talleresta ruwarqan.",

    "taller.lima.tag": "Costa · Caja Huancayo Oficina",
    "taller.lima.name": "Lima (San Martín de Porres)",
    "taller.lima.desc": "Caja Huancayo-qa Lima suyupipas oficinankunayuqmi (San Martín de Porres, San Juan de Lurigancho, Callao), costa-man pilotopa punkun.",

    "taller.ayacucho.tag": "Sierra · Caja Huancayo Oficina",
    "taller.ayacucho.name": "Ayacucho (Huanta)",
    "taller.ayacucho.desc": "Caja Huancayo-pa oficinankuna Ayacucho hinaspa Huanta-pi, yachachiykunata sierra qhuchun suyuman apananpaq.",

    "taller.satipo.tag": "Selva · Caja Huancayo Oficina",
    "taller.satipo.name": "Satipo",
    "taller.satipo.desc": "Junín-pa Selva Central-nimpi, Caja Huancayo-qa Satipo-pipas oficinayuqmi: kikillantaqmi allin kanman sierramanta karupipas.",

    /* ---- Aswan Yachanapaq (estrategias.html) — borrador, ñawpaqta español-manta ---- */
    "estr.eyebrow": "Kay web-manta hawapi",
    "estr.title": "Aswan formakuna, kayllapi yachayta qatinaykipaq",
    "estr.lead": "Kay web-qa qallariyllam. Qullqi yachayqa aswan allin yachakun ñawi ñawillanpi, comunidadniykipi. Kaypi kachkan yachachiykuna, runakuna, hinaspa pikunaman kunanmantaraq qhichpiykunki.",

    "estr.opts.title": "Kayta servichiy, maypi tiyanki chaypi",
    "estr.opts.lead": "Manam suyanaykichu pipas yachachisunanta: tapuriy, mañariy, utaq yanapay comunidadniykiman chayananpaq.",

    "estr.o1.title": "Camión-taller, comunidadniykiman chayaq",
    "estr.o1.desc": "Caja Huancayo-qa Pampamichi hina suyukunata puriq unidad AYNI-wan riqsin: chaypiñataq asesorasunki, crédito qhawarisunki, utaq cuenta waqaychayta kichasunki. Tapuriy municipiopi utaq comunidadniykipi hayk'aq suyuykiman chayamunanta.",
    "estr.o2.title": "Yachachiykuna olla comúnniykipaq, feriaykipaq utaq mercadoykipaq",
    "estr.o2.desc": "Olla comúnpi, mercadopi utaq feriapi kachkanki utaq organizanki chayqa, \"De la Caja a la Olla\" hina huk tallerta mañariy atinki: waqaychay hinaspa emprendimiento yachachiykuna, negocio pisillakunapaq, mana expertokunapaqchu.",
    "estr.o3.title": "Octubrepa retonpi kuska ruway",
    "estr.o3.desc": "Sapa Semana Mundial del Ahorro-pi, cajakuna hinaspa bancokuna concursokunata, feriakunata agencianninkupi ruwanku. Kuska ruwariy, hinaspa qampas huknin organizanki chayqa, chiqaq premiota mañariy: tasa aswan allinta, tallerta tukuchiqpaq.",
    "estr.o4.title": "Comunidadniykipi promotor tukuy",
    "estr.o4.desc": "Manam experto kanaykichu tiyan: huk kutilla capacitakuy, \"Finanzas en el Cole\" hina huk tallerpi ichaqa runa hatunkunapaq, hinaspa yanapay aswan vecinokuna qampa yachasqaykita yachananpaq, runasimipi utaq castellanopi.",
    "estr.o5.title": "Agentepa colanta servichiy",
    "estr.o5.desc": "Qhipa kutin Multired agentepi Juntos, Pensión 65 utaq CTS pagay p'unchaypi chaskikuptiyki, tapuriy huk chunka minutolla yachachiy kaqta suyachkaptiyki. Manaraq kaptin, mañariy.",
    "estr.o6.title": "Yachachiykuna qullqinwan mana, estudiantekunawan",
    "estr.o6.desc": "UPAO hina universidadkunaqa Economía utaq Contabilidad yachaqkunata apanñam microempresariokunaman yachachinankupaq. Negocio pisillayki kaptin, tapuriy aswan cercano universidadpi huk kaqchu.",
    "estr.o7.title": "WhatsApp-pi yachasqaykita qatiy",
    "estr.o7.desc": "Huk taller ñawi ñawillanpi tukusqan qhipa, mañariy huk lista de difusión-man yaykuyta, audio pisillakunawan, castellanopi utaq runasimipi. Pisilla señalwanpas purinku, hinaspa sapa semana yachasqaykita yuyarichisunki.",

    "estr.res.title": "Kunanmanta kaq recursos, qullqinwan mana",
    "estr.res.lead": "Kayllapi huk taller organizasqa kachkaptinña, kay material oficialkuna kunanmantaraq disponible kachkan.",
    "estr.res1.title": "Finanzas para Ti (SBS)",
    "estr.res1.desc": "Tips, webinar hinaspa curso pisillakuna, runa hatunkunapaq, waqaychay, mañay hinaspa segurokunamanta.",
    "estr.res2.title": "Finanzas en el Cole (SBS)",
    "estr.res2.desc": "Material qullqinwan mana, primaria hinaspa secundaria yachachiqkunapaq, currículo nacionalwan tinkusqa.",
    "estr.res3.title": "Ñuqaykupa waqaychay pukllay",
    "estr.res3.desc": "Sapa p'unchay decisionkunata ruwariy, mana chiqaq qullqita riesgopi churaspa.",
    "estr.res4.title": "Yachachiykuna kayllapi",
    "estr.res4.desc": "Mapa, maypichus piloto Perú-pi ruwakuchkan kaqkunawan.",
    "estr.res.cta": "Qhaway"
  }
};

const LANG_KEY = "yanapay-lang";

function getLang() {
  try { return localStorage.getItem(LANG_KEY) || "es"; }
  catch (e) { return "es"; }
}

function applyLang(lang) {
  document.documentElement.lang = lang === "qu" ? "qu" : "es";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const dict = I18N[lang] || I18N.es;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function t(key, lang) {
  lang = lang || getLang();
  const dict = I18N[lang] || I18N.es;
  return dict[key] || I18N.es[key] || key;
}

function initNav() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    const setMenu = (open) => {
      navLinks.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    setMenu(false);

    menuBtn.addEventListener("click", () =>
      setMenu(!navLinks.classList.contains("open"))
    );
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setMenu(false))
    );

    // Tocar fuera del menú lo contrae (pointerdown funciona también en iOS)
    document.addEventListener("pointerdown", (e) => {
      if (!navLinks.classList.contains("open")) return;
      if (navLinks.contains(e.target) || menuBtn.contains(e.target)) return;
      setMenu(false);
    });
    // Tecla Escape y cambio a pantalla ancha también lo cierran
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setMenu(false);
    });
  }
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      applyLang(btn.dataset.lang);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  applyLang(getLang());
});

/* PWA: guarda el sitio para que abra igual sin señal después de la
   primera visita, y permite "Agregar a pantalla de inicio". */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* Si falla (por ejemplo, abierto desde un archivo local sin servidor),
         el sitio sigue funcionando normal, solo sin modo offline. */
    });
  });
}