/* Scene Translator — built-in EMS phrasebook
 * Column order for every phrase: English, Spanish, Chinese (Mandarin, Simplified), Vietnamese, Tagalog, Arabic, Russian
 * Answer types: yn = Yes/No/Don't know buttons, scale = 0–10 pain scale, open = spoken answer,
 *               point = patient points (optional spoken answer), instr = instruction (no answer)
 * IMPORTANT: Have every translation reviewed by a qualified medical interpreter before field use.
 */
const CURATED = ['es', 'zh', 'vi', 'tl', 'ar', 'ru'];
function P(tag, type, en, ...tr) { const o = { tag, type, en }; CURATED.forEach((c, i) => (o[c] = tr[i])); return o; }

const UI_TR = {
  yes:    { en: 'Yes', es: 'Sí', zh: '是', vi: 'Có', tl: 'Oo', ar: 'نعم', ru: 'Да' },
  no:     { en: 'No', es: 'No', zh: '不是', vi: 'Không', tl: 'Hindi', ar: 'لا', ru: 'Нет' },
  unsure: { en: "I don't know", es: 'No sé', zh: '不知道', vi: 'Không biết', tl: 'Hindi ko alam', ar: 'لا أعرف', ru: 'Не знаю' },
  nopain: { en: 'No pain', es: 'Sin dolor', zh: '不疼', vi: 'Không đau', tl: 'Walang sakit', ar: 'لا ألم', ru: 'Нет боли' },
  worst:  { en: 'Worst pain', es: 'El peor dolor', zh: '最疼', vi: 'Đau nhất', tl: 'Pinakamasakit', ar: 'أشد ألم', ru: 'Сильнейшая боль' },
  speak:  { en: 'Please speak now', es: 'Hable ahora, por favor', zh: '请现在说', vi: 'Hãy nói bây giờ', tl: 'Magsalita na po', ar: 'تكلّم الآن من فضلك', ru: 'Говорите, пожалуйста' },
};

const BLOOD_THINNERS = P('', 'yn', 'Do you take blood thinners?',
  '¿Toma anticoagulantes (medicina para adelgazar la sangre)?', '您在服用抗凝血药（稀释血液的药）吗？',
  'Bạn có dùng thuốc chống đông máu (thuốc làm loãng máu) không?', 'Umiinom po ba kayo ng pampalabnaw ng dugo (blood thinner)?',
  'هل تتناول أدوية مميعة للدم؟', 'Вы принимаете препараты для разжижения крови?');

const CATEGORIES = [
  { id: 'basics', name: 'Start / Basics', phrases: [
    P('', 'instr', 'Hello. We are paramedics. We are here to help you.', 'Hola. Somos paramédicos. Estamos aquí para ayudarle.', '您好。我们是急救人员。我们是来帮助您的。', 'Xin chào. Chúng tôi là nhân viên cấp cứu. Chúng tôi đến để giúp bạn.', 'Magandang araw po. Kami ay mga paramediko. Nandito kami para tulungan kayo.', 'مرحباً. نحن مسعفون. نحن هنا لمساعدتك.', 'Здравствуйте. Мы — скорая помощь. Мы здесь, чтобы помочь вам.'),
    P('', 'instr', 'I am using this phone to translate.', 'Estoy usando este teléfono para traducir.', '我正在用这部手机翻译。', 'Tôi đang dùng điện thoại này để dịch.', 'Gumagamit po ako ng teleponong ito para magsalin.', 'أنا أستخدم هذا الهاتف للترجمة.', 'Я использую этот телефон для перевода.'),
    P('', 'instr', 'Please answer by tapping the screen, or nod yes or no.', 'Por favor, responda tocando la pantalla, o diga sí o no con la cabeza.', '请点击屏幕回答，或者点头或摇头。', 'Vui lòng trả lời bằng cách chạm vào màn hình, hoặc gật đầu hay lắc đầu.', 'Pakisagot po sa pamamagitan ng pagpindot sa screen, o tumango o umiling.', 'من فضلك أجب بالضغط على الشاشة، أو بهزّ رأسك بنعم أو لا.', 'Пожалуйста, отвечайте, нажимая на экран, или кивните «да» или «нет».'),
    P('', 'yn', 'Do you understand me?', '¿Me entiende?', '您听得懂吗？', 'Bạn có hiểu tôi không?', 'Naiintindihan po ba ninyo ako?', 'هل تفهمني؟', 'Вы меня понимаете?'),
    P('', 'open', 'What is your name?', '¿Cómo se llama?', '您叫什么名字？', 'Bạn tên là gì?', 'Ano po ang pangalan ninyo?', 'ما اسمك؟', 'Как вас зовут?'),
    P('', 'open', 'How old are you?', '¿Cuántos años tiene?', '您多大年纪？', 'Bạn bao nhiêu tuổi?', 'Ilang taon na po kayo?', 'كم عمرك؟', 'Сколько вам лет?'),
    P('', 'yn', 'Is there someone here who speaks English?', '¿Hay alguien aquí que hable inglés?', '这里有人会说英语吗？', 'Ở đây có ai nói được tiếng Anh không?', 'May tao po ba rito na marunong mag-Ingles?', 'هل يوجد أحد هنا يتكلم الإنجليزية؟', 'Здесь есть кто-нибудь, кто говорит по-английски?'),
    P('', 'yn', 'May we examine and treat you?', '¿Podemos examinarle y atenderle?', '我们可以为您检查和治疗吗？', 'Chúng tôi có thể khám và điều trị cho bạn không?', 'Maaari po ba namin kayong suriin at gamutin?', 'هل تسمح لنا بفحصك وعلاجك؟', 'Можно нам вас осмотреть и оказать помощь?'),
    P('', 'point', 'Where does it hurt? Point to it.', '¿Dónde le duele? Señálelo.', '哪里疼？请指给我看。', 'Bạn đau ở đâu? Hãy chỉ cho tôi.', 'Saan po masakit? Ituro po ninyo.', 'أين يؤلمك؟ أشر إلى المكان.', 'Где болит? Покажите, пожалуйста.'),
    P('', 'yn', 'Is anyone else hurt?', '¿Hay alguien más herido?', '还有其他人受伤吗？', 'Có ai khác bị thương không?', 'May iba pa po bang nasaktan?', 'هل هناك شخص آخر مصاب؟', 'Кто-нибудь ещё пострадал?'),
    P('', 'instr', 'Stay still. Do not move.', 'Quédese quieto. No se mueva.', '请保持不动。不要动。', 'Hãy giữ yên. Đừng cử động.', 'Huwag po kayong gumalaw. Manatili lang po kayo.', 'ابقَ ثابتاً. لا تتحرك.', 'Не двигайтесь, пожалуйста.'),
    P('', 'instr', 'We are going to check your blood pressure.', 'Vamos a tomarle la presión.', '我们要给您量血压。', 'Chúng tôi sẽ đo huyết áp cho bạn.', 'Kukunin po namin ang blood pressure ninyo.', 'سنقيس ضغط دمك.', 'Сейчас мы измерим вам давление.'),
    P('', 'yn', 'Do you want to go to the hospital?', '¿Quiere ir al hospital?', '您想去医院吗？', 'Bạn có muốn đến bệnh viện không?', 'Gusto po ba ninyong pumunta sa ospital?', 'هل تريد الذهاب إلى المستشفى؟', 'Вы хотите поехать в больницу?'),
    P('', 'instr', 'We are taking you to the hospital.', 'Le vamos a llevar al hospital.', '我们要送您去医院。', 'Chúng tôi sẽ đưa bạn đến bệnh viện.', 'Dadalhin po namin kayo sa ospital.', 'سننقلك إلى المستشفى.', 'Мы отвезём вас в больницу.'),
  ]},

  { id: 'opqrst', name: 'OPQRST – Pain assessment', phrases: [
    P('O', 'open', 'When did it start?', '¿Cuándo empezó?', '什么时候开始的？', 'Nó bắt đầu khi nào?', 'Kailan po ito nagsimula?', 'متى بدأ؟', 'Когда это началось?'),
    P('O', 'open', 'What were you doing when it started?', '¿Qué estaba haciendo cuando empezó?', '开始的时候您在做什么？', 'Bạn đang làm gì khi nó bắt đầu?', 'Ano po ang ginagawa ninyo nang magsimula ito?', 'ماذا كنت تفعل عندما بدأ؟', 'Что вы делали, когда это началось?'),
    P('O', 'yn', 'Did it start suddenly?', '¿Empezó de repente?', '是突然开始的吗？', 'Nó có bắt đầu đột ngột không?', 'Bigla po ba itong nagsimula?', 'هل بدأ فجأة؟', 'Это началось внезапно?'),
    P('P', 'yn', 'Does anything make it better?', '¿Hay algo que lo mejore?', '有什么能让它好一点吗？', 'Có điều gì làm nó đỡ hơn không?', 'May nakapagpapagaan po ba nito?', 'هل هناك شيء يجعله أفضل؟', 'Что-нибудь облегчает это?'),
    P('P', 'yn', 'Does anything make it worse?', '¿Hay algo que lo empeore?', '有什么会让它更严重吗？', 'Có điều gì làm nó tệ hơn không?', 'May nakapagpapalala po ba nito?', 'هل هناك شيء يجعله أسوأ؟', 'Что-нибудь усиливает это?'),
    P('P', 'yn', 'Does it hurt more when you breathe or move?', '¿Le duele más al respirar o al moverse?', '呼吸或活动时会更疼吗？', 'Bạn có đau hơn khi thở hoặc cử động không?', 'Mas sumasakit po ba kapag humihinga o gumagalaw kayo?', 'هل يزداد الألم عند التنفس أو الحركة؟', 'Болит сильнее, когда вы дышите или двигаетесь?'),
    P('P', 'yn', 'Does it hurt when I press here?', '¿Le duele cuando presiono aquí?', '我按这里会疼吗？', 'Tôi ấn vào đây bạn có đau không?', 'Masakit po ba kapag pinindot ko rito?', 'هل يؤلمك عندما أضغط هنا؟', 'Больно, когда я нажимаю здесь?'),
    P('Q', 'yn', 'Is the pain sharp or stabbing?', '¿El dolor es agudo o punzante?', '是刺痛或者锐痛吗？', 'Cơn đau có nhói như dao đâm không?', 'Matalas po ba o parang tinutusok ang sakit?', 'هل الألم حاد أو كالطعن؟', 'Боль острая или колющая?'),
    P('Q', 'yn', 'Does it feel like pressure or squeezing?', '¿Se siente como presión u opresión?', '感觉像压迫或者被挤压吗？', 'Có cảm giác bị đè nặng hoặc bóp chặt không?', 'Parang may nakadagan o pumipiga po ba?', 'هل تشعر بضغط أو انقباض؟', 'Это похоже на давление или сжатие?'),
    P('Q', 'yn', 'Is it a burning pain?', '¿Siente ardor, como quemazón?', '是烧灼样的疼吗？', 'Có phải đau rát như bỏng không?', 'Mahapdi po ba o parang nag-aapoy ang sakit?', 'هل هو ألم حارق؟', 'Боль жгучая?'),
    P('Q', 'yn', 'Is it a dull ache?', '¿Es un dolor sordo?', '是隐隐的钝痛吗？', 'Có phải đau âm ỉ không?', 'Banayad pero tuloy-tuloy po ba ang kirot?', 'هل هو ألم خفيف مستمر؟', 'Боль тупая, ноющая?'),
    P('Q', 'yn', 'Does it feel like tearing or ripping?', '¿Se siente como si algo se desgarrara?', '有撕裂样的感觉吗？', 'Có cảm giác như bị xé rách không?', 'Parang napupunit po ba?', 'هل تشعر وكأن شيئاً يتمزق؟', 'Ощущение, будто что-то разрывается?'),
    P('R', 'point', 'Does the pain move anywhere else? Point to where.', '¿El dolor se mueve hacia otra parte? Señale dónde.', '疼痛会扩散到其他地方吗？请指出来。', 'Cơn đau có lan sang chỗ khác không? Hãy chỉ cho tôi.', 'Kumakalat po ba ang sakit sa ibang bahagi? Ituro po kung saan.', 'هل ينتقل الألم إلى مكان آخر؟ أشر إلى المكان.', 'Боль отдаёт куда-нибудь? Покажите куда.'),
    P('S', 'scale', 'From 0 to 10, how bad is the pain? 0 is no pain, 10 is the worst pain.', 'Del 0 al 10, ¿qué tan fuerte es el dolor? 0 es sin dolor y 10 es el peor dolor.', '从0到10，疼痛有多严重？0是不疼，10是最疼。', 'Từ 0 đến 10, bạn đau mức nào? 0 là không đau, 10 là đau nhất.', 'Mula 0 hanggang 10, gaano po kasakit? Ang 0 ay walang sakit, ang 10 ay pinakamatinding sakit.', 'من 0 إلى 10، ما شدة الألم؟ 0 يعني لا ألم، و10 يعني أشد ألم.', 'По шкале от 0 до 10, насколько сильная боль? 0 — нет боли, 10 — самая сильная боль.'),
    P('T', 'yn', 'Is the pain constant?', '¿El dolor es constante?', '疼痛是持续的吗？', 'Cơn đau có liên tục không?', 'Tuloy-tuloy po ba ang sakit?', 'هل الألم مستمر؟', 'Боль постоянная?'),
    P('T', 'yn', 'Does the pain come and go?', '¿El dolor va y viene?', '疼痛时有时无吗？', 'Cơn đau có lúc đến lúc đi không?', 'Pabalik-balik po ba ang sakit?', 'هل يأتي الألم ويذهب؟', 'Боль то появляется, то проходит?'),
    P('T', 'yn', 'Have you had this pain before?', '¿Ha tenido este dolor antes?', '您以前有过这种疼痛吗？', 'Bạn đã từng bị đau như thế này trước đây chưa?', 'Naranasan na po ba ninyo ang sakit na ito dati?', 'هل شعرت بهذا الألم من قبل؟', 'У вас раньше была такая боль?'),
  ]},

  { id: 'sample', name: 'SAMPLE – History', phrases: [
    P('S', 'open', 'What is bothering you the most right now?', '¿Qué es lo que más le molesta ahora?', '您现在最不舒服的是什么？', 'Điều gì làm bạn khó chịu nhất lúc này?', 'Ano po ang pinakanararamdaman ninyo ngayon?', 'ما الذي يزعجك أكثر الآن؟', 'Что вас сейчас беспокоит больше всего?'),
    P('A', 'yn', 'Are you allergic to any medicines?', '¿Es alérgico a algún medicamento?', '您对任何药物过敏吗？', 'Bạn có bị dị ứng với thuốc nào không?', 'May allergy po ba kayo sa anumang gamot?', 'هل لديك حساسية من أي دواء؟', 'У вас есть аллергия на лекарства?'),
    P('A', 'yn', 'Are you allergic to anything else, like food, latex, or bee stings?', '¿Es alérgico a algo más, como comida, látex o picaduras de abeja?', '您对其他东西过敏吗？比如食物、乳胶或蜜蜂蜇伤？', 'Bạn có dị ứng với thứ gì khác không, như thức ăn, cao su latex, hoặc ong đốt?', 'May allergy po ba kayo sa iba pa, tulad ng pagkain, latex, o kagat ng bubuyog?', 'هل لديك حساسية من أي شيء آخر، مثل الطعام أو اللاتكس أو لسعات النحل؟', 'У вас есть аллергия на что-то ещё, например на еду, латекс или укусы пчёл?'),
    P('M', 'yn', 'Do you take any medicines?', '¿Toma algún medicamento?', '您在服用什么药吗？', 'Bạn có đang dùng thuốc nào không?', 'May iniinom po ba kayong gamot?', 'هل تتناول أي أدوية؟', 'Вы принимаете какие-нибудь лекарства?'),
    P('M', 'instr', 'Please show me your medicines.', 'Por favor, enséñeme sus medicamentos.', '请把您的药拿给我看。', 'Vui lòng cho tôi xem thuốc của bạn.', 'Pakipakita po ang mga gamot ninyo.', 'من فضلك أرني أدويتك.', 'Пожалуйста, покажите мне ваши лекарства.'),
    { ...BLOOD_THINNERS, tag: 'M' },
    P('M', 'yn', 'Did you take your medicines today?', '¿Tomó sus medicamentos hoy?', '您今天吃药了吗？', 'Hôm nay bạn đã uống thuốc chưa?', 'Nainom po ba ninyo ang mga gamot ninyo ngayong araw?', 'هل تناولت أدويتك اليوم؟', 'Вы сегодня принимали свои лекарства?'),
    P('P', 'yn', 'Do you have any medical problems?', '¿Tiene algún problema de salud?', '您有什么疾病吗？', 'Bạn có bệnh gì không?', 'May sakit po ba kayo o kondisyong medikal?', 'هل لديك أي مشاكل صحية؟', 'У вас есть какие-нибудь заболевания?'),
    P('P', 'yn', 'Do you have heart problems?', '¿Tiene problemas del corazón?', '您有心脏病吗？', 'Bạn có bệnh tim không?', 'May sakit po ba kayo sa puso?', 'هل لديك مشاكل في القلب؟', 'У вас есть проблемы с сердцем?'),
    P('P', 'yn', 'Do you have diabetes?', '¿Tiene diabetes?', '您有糖尿病吗？', 'Bạn có bị tiểu đường không?', 'May diabetes po ba kayo?', 'هل لديك مرض السكري؟', 'У вас диабет?'),
    P('P', 'yn', 'Do you have high blood pressure?', '¿Tiene la presión alta?', '您有高血压吗？', 'Bạn có bị cao huyết áp không?', 'Mataas po ba ang presyon ng dugo ninyo?', 'هل لديك ارتفاع في ضغط الدم؟', 'У вас повышенное давление?'),
    P('P', 'yn', 'Do you have asthma or lung problems?', '¿Tiene asma o problemas de los pulmones?', '您有哮喘或肺病吗？', 'Bạn có bị hen suyễn hoặc bệnh phổi không?', 'May hika po ba kayo o sakit sa baga?', 'هل لديك ربو أو مشاكل في الرئة؟', 'У вас астма или заболевания лёгких?'),
    P('P', 'yn', 'Have you had surgery recently?', '¿Le han operado recientemente?', '您最近做过手术吗？', 'Gần đây bạn có phẫu thuật không?', 'Naoperahan po ba kayo kamakailan?', 'هل أجريت عملية جراحية مؤخراً؟', 'Вам недавно делали операцию?'),
    P('L', 'open', 'When did you last eat or drink?', '¿Cuándo comió o bebió por última vez?', '您最后一次吃东西或喝水是什么时候？', 'Lần cuối bạn ăn hoặc uống là khi nào?', 'Kailan po kayo huling kumain o uminom?', 'متى أكلت أو شربت آخر مرة؟', 'Когда вы в последний раз ели или пили?'),
    P('E', 'open', 'What happened?', '¿Qué pasó?', '发生了什么事？', 'Chuyện gì đã xảy ra?', 'Ano po ang nangyari?', 'ماذا حدث؟', 'Что случилось?'),
    P('E', 'open', 'What happened right before this started?', '¿Qué pasó justo antes de que empezara esto?', '这开始之前发生了什么？', 'Chuyện gì đã xảy ra ngay trước khi việc này bắt đầu?', 'Ano po ang nangyari bago ito nagsimula?', 'ماذا حدث قبل أن يبدأ هذا مباشرة؟', 'Что произошло прямо перед тем, как это началось?'),
  ]},

  { id: 'stroke', name: 'Stroke', phrases: [
    P('', 'instr', 'Please smile and show me your teeth.', 'Por favor, sonría y enséñeme los dientes.', '请笑一下，露出牙齿。', 'Vui lòng cười và cho tôi xem răng.', 'Pakingiti po at ipakita ang inyong ngipin.', 'من فضلك ابتسم وأرني أسنانك.', 'Пожалуйста, улыбнитесь и покажите зубы.'),
    P('', 'instr', 'Close your eyes and hold both arms out for 10 seconds.', 'Cierre los ojos y extienda los dos brazos por 10 segundos.', '请闭上眼睛，双臂向前伸直，保持10秒。', 'Hãy nhắm mắt và giơ thẳng hai tay ra trước trong 10 giây.', 'Pumikit po kayo at iunat ang dalawang braso nang 10 segundo.', 'أغمض عينيك ومدّ ذراعيك للأمام لمدة 10 ثوانٍ.', 'Закройте глаза и вытяните обе руки вперёд на 10 секунд.'),
    P('', 'open', "Repeat after me: 'The sky is blue.'", 'Repita después de mí: «El cielo es azul».', '请跟我说：“天空是蓝色的。”', 'Hãy nói theo tôi: “Bầu trời màu xanh.”', "Ulitin po ninyo: 'Asul ang langit.'", 'كرّر بعدي: «السماء زرقاء».', 'Повторите за мной: «Небо голубое».'),
    P('', 'instr', 'Squeeze my hands.', 'Apriete mis manos.', '请握紧我的手。', 'Hãy bóp chặt tay tôi.', 'Pisilin po ang mga kamay ko.', 'اضغط على يديّ.', 'Сожмите мои руки.'),
    P('', 'open', 'What time did you last feel normal?', '¿A qué hora se sintió normal por última vez?', '您最后一次感觉正常是几点？', 'Lần cuối bạn cảm thấy bình thường là lúc mấy giờ?', 'Anong oras po kayo huling naging normal ang pakiramdam?', 'في أي ساعة شعرت بأنك طبيعي آخر مرة؟', 'В котором часу вы последний раз чувствовали себя нормально?'),
    P('', 'yn', 'Do you feel weak or numb on one side of your body?', '¿Siente debilidad o adormecimiento en un lado del cuerpo?', '您身体一侧感到无力或麻木吗？', 'Bạn có thấy yếu hoặc tê một bên người không?', 'Nanghihina o namamanhid po ba ang isang bahagi ng katawan ninyo?', 'هل تشعر بضعف أو خدر في جانب واحد من جسمك؟', 'Вы чувствуете слабость или онемение с одной стороны тела?'),
    P('', 'yn', 'Is it hard to speak or find words?', '¿Le cuesta hablar o encontrar las palabras?', '您说话或找词有困难吗？', 'Bạn có khó nói hoặc khó tìm từ không?', 'Nahihirapan po ba kayong magsalita o makahanap ng salita?', 'هل تجد صعوبة في الكلام أو إيجاد الكلمات؟', 'Вам трудно говорить или подбирать слова?'),
    P('', 'yn', 'Is your vision blurry or are you seeing double?', '¿Ve borroso o doble?', '您看东西模糊或者有重影吗？', 'Bạn có nhìn mờ hoặc nhìn thấy hai hình không?', 'Malabo po ba ang paningin ninyo o doble ang nakikita?', 'هل رؤيتك ضبابية أو ترى الأشياء مزدوجة؟', 'У вас нечёткое зрение или двоится в глазах?'),
    P('', 'yn', 'Is this the worst headache of your life?', '¿Es el peor dolor de cabeza de su vida?', '这是您这辈子最严重的头痛吗？', 'Đây có phải là cơn đau đầu tồi tệ nhất trong đời bạn không?', 'Ito na po ba ang pinakamatinding sakit ng ulo sa buhay ninyo?', 'هل هذا أسوأ صداع في حياتك؟', 'Это самая сильная головная боль в вашей жизни?'),
    BLOOD_THINNERS,
    P('', 'open', 'What day is it today?', '¿Qué día es hoy?', '今天是星期几？', 'Hôm nay là thứ mấy?', 'Anong araw po ngayon?', 'ما هو اليوم؟', 'Какой сегодня день?'),
  ]},

  { id: 'cardiac', name: 'Cardiac / Chest pain', phrases: [
    P('', 'yn', 'Do you have chest pain or pressure?', '¿Tiene dolor o presión en el pecho?', '您胸口疼或者有压迫感吗？', 'Bạn có đau hoặc tức ngực không?', 'May sakit o paninikip po ba sa dibdib ninyo?', 'هل لديك ألم أو ضغط في الصدر؟', 'У вас боль или давление в груди?'),
    P('', 'yn', 'Does the pain go to your arm, jaw, neck, or back?', '¿El dolor se va al brazo, la mandíbula, el cuello o la espalda?', '疼痛会传到手臂、下巴、脖子或背部吗？', 'Cơn đau có lan ra tay, hàm, cổ hoặc lưng không?', 'Umaabot po ba ang sakit sa braso, panga, leeg, o likod?', 'هل ينتقل الألم إلى ذراعك أو فكك أو رقبتك أو ظهرك؟', 'Боль отдаёт в руку, челюсть, шею или спину?'),
    P('', 'yn', 'Are you short of breath?', '¿Le falta el aire?', '您呼吸急促吗？', 'Bạn có bị khó thở không?', 'Hinihingal po ba kayo?', 'هل تشعر بضيق في التنفس؟', 'Вам не хватает воздуха?'),
    P('', 'yn', 'Do you feel sick to your stomach?', '¿Tiene náuseas?', '您恶心吗？', 'Bạn có buồn nôn không?', 'Nasusuka po ba kayo?', 'هل تشعر بالغثيان؟', 'Вас тошнит?'),
    P('', 'yn', 'Are you sweating more than usual?', '¿Está sudando más de lo normal?', '您比平时出汗多吗？', 'Bạn có đổ mồ hôi nhiều hơn bình thường không?', 'Mas pinagpapawisan po ba kayo kaysa karaniwan?', 'هل تتعرّق أكثر من المعتاد؟', 'Вы потеете сильнее обычного?'),
    P('', 'yn', 'Did you feel dizzy or pass out?', '¿Se mareó o se desmayó?', '您头晕或者昏倒过吗？', 'Bạn có bị chóng mặt hoặc ngất xỉu không?', 'Nahilo po ba kayo o nawalan ng malay?', 'هل شعرت بدوار أو أغمي عليك؟', 'У вас кружилась голова или был обморок?'),
    P('', 'yn', 'Do you have a pacemaker or defibrillator?', '¿Tiene marcapasos o desfibrilador?', '您装了心脏起搏器或除颤器吗？', 'Bạn có máy tạo nhịp tim hoặc máy khử rung tim không?', 'May pacemaker o defibrillator po ba kayo?', 'هل لديك جهاز تنظيم ضربات القلب أو مزيل رجفان؟', 'У вас есть кардиостимулятор или дефибриллятор?'),
    P('', 'yn', 'Have you taken nitroglycerin today?', '¿Ha tomado nitroglicerina hoy?', '您今天用过硝酸甘油吗？', 'Hôm nay bạn có dùng nitroglycerin không?', 'Uminom po ba kayo ng nitroglycerin ngayong araw?', 'هل تناولت النيتروغليسرين اليوم؟', 'Вы сегодня принимали нитроглицерин?'),
    P('', 'yn', 'In the last 2 days, have you taken medicine for erections, like Viagra or Cialis?', 'En los últimos 2 días, ¿ha tomado medicina para la erección, como Viagra o Cialis?', '最近两天内，您服用过治疗勃起的药物吗？比如伟哥或希爱力？', 'Trong 2 ngày qua, bạn có dùng thuốc cương dương như Viagra hoặc Cialis không?', 'Sa nakaraang 2 araw, uminom po ba kayo ng gamot para sa erection, tulad ng Viagra o Cialis?', 'خلال اليومين الماضيين، هل تناولت دواءً لضعف الانتصاب مثل الفياغرا أو السياليس؟', 'За последние 2 дня вы принимали препараты для эрекции, например Виагру или Сиалис?'),
    P('', 'yn', 'Are you allergic to aspirin?', '¿Es alérgico a la aspirina?', '您对阿司匹林过敏吗？', 'Bạn có dị ứng với aspirin không?', 'May allergy po ba kayo sa aspirin?', 'هل لديك حساسية من الأسبرين؟', 'У вас есть аллергия на аспирин?'),
    P('', 'instr', 'Chew this aspirin, then swallow it.', 'Mastique esta aspirina y luego tráguesela.', '请嚼碎这片阿司匹林，然后吞下去。', 'Hãy nhai viên aspirin này rồi nuốt.', 'Nguyain po ninyo ang aspirin na ito, tapos lunukin.', 'امضغ قرص الأسبرين هذا ثم ابتلعه.', 'Разжуйте эту таблетку аспирина и проглотите.'),
    P('', 'instr', 'Put this under your tongue. Do not swallow it.', 'Póngase esto debajo de la lengua. No se lo trague.', '请把这个放在舌头下面，不要吞下去。', 'Hãy đặt cái này dưới lưỡi. Đừng nuốt.', 'Ilagay po ito sa ilalim ng dila. Huwag lunukin.', 'ضع هذا تحت لسانك. لا تبتلعه.', 'Положите это под язык. Не глотайте.'),
  ]},

  { id: 'breathing', name: 'Breathing / Respiratory', phrases: [
    P('', 'yn', 'Are you having trouble breathing?', '¿Tiene dificultad para respirar?', '您呼吸困难吗？', 'Bạn có khó thở không?', 'Nahihirapan po ba kayong huminga?', 'هل تجد صعوبة في التنفس؟', 'Вам трудно дышать?'),
    P('', 'yn', 'Do you use an inhaler? Where is it?', '¿Usa un inhalador? ¿Dónde está?', '您用吸入器吗？在哪里？', 'Bạn có dùng ống hít không? Nó ở đâu?', 'Gumagamit po ba kayo ng inhaler? Nasaan po ito?', 'هل تستخدم بخاخاً؟ أين هو؟', 'Вы пользуетесь ингалятором? Где он?'),
    P('', 'yn', 'Do you use oxygen at home?', '¿Usa oxígeno en casa?', '您在家用氧气吗？', 'Bạn có dùng ôxy ở nhà không?', 'Gumagamit po ba kayo ng oxygen sa bahay?', 'هل تستخدم الأكسجين في المنزل؟', 'Вы дома пользуетесь кислородом?'),
    P('', 'yn', 'Do you have a cough?', '¿Tiene tos?', '您咳嗽吗？', 'Bạn có ho không?', 'May ubo po ba kayo?', 'هل لديك سعال؟', 'У вас есть кашель?'),
    P('', 'yn', 'Is your throat or tongue swelling?', '¿Se le está hinchando la garganta o la lengua?', '您的喉咙或舌头肿了吗？', 'Cổ họng hoặc lưỡi của bạn có bị sưng không?', 'Namamaga po ba ang lalamunan o dila ninyo?', 'هل حلقك أو لسانك متورّم؟', 'У вас отекает горло или язык?'),
    P('', 'instr', 'This mask will give you oxygen. Breathe normally.', 'Esta mascarilla le dará oxígeno. Respire normalmente.', '这个面罩会给您输氧。请正常呼吸。', 'Mặt nạ này sẽ cung cấp ôxy cho bạn. Hãy thở bình thường.', 'Ang mask na ito ay magbibigay ng oxygen. Huminga po nang normal.', 'هذا القناع سيعطيك الأكسجين. تنفّس بشكل طبيعي.', 'Эта маска даст вам кислород. Дышите спокойно.'),
    P('', 'instr', 'Breathe slowly with me.', 'Respire despacio conmigo.', '请跟着我慢慢呼吸。', 'Hãy thở chậm cùng tôi.', 'Huminga po nang dahan-dahan kasabay ko.', 'تنفّس ببطء معي.', 'Дышите медленно вместе со мной.'),
    P('', 'instr', 'Take a deep breath in.', 'Respire profundo.', '请深吸一口气。', 'Hãy hít một hơi thật sâu.', 'Huminga po nang malalim.', 'خذ نفساً عميقاً.', 'Сделайте глубокий вдох.'),
  ]},

  { id: 'trauma', name: 'Trauma', phrases: [
    P('', 'yn', 'Did you fall?', '¿Se cayó?', '您摔倒了吗？', 'Bạn có bị ngã không?', 'Nahulog o natumba po ba kayo?', 'هل سقطت؟', 'Вы упали?'),
    P('', 'yn', 'Did you hit your head?', '¿Se golpeó la cabeza?', '您撞到头了吗？', 'Bạn có bị đập đầu không?', 'Tumama po ba ang ulo ninyo?', 'هل ارتطم رأسك؟', 'Вы ударились головой?'),
    P('', 'yn', 'Did you pass out?', '¿Perdió el conocimiento?', '您失去过意识吗？', 'Bạn có bị bất tỉnh không?', 'Nawalan po ba kayo ng malay?', 'هل فقدت الوعي؟', 'Вы теряли сознание?'),
    P('', 'yn', 'Does your neck or back hurt?', '¿Le duele el cuello o la espalda?', '您脖子或背部疼吗？', 'Cổ hoặc lưng bạn có đau không?', 'Masakit po ba ang leeg o likod ninyo?', 'هل تؤلمك رقبتك أو ظهرك؟', 'У вас болит шея или спина?'),
    P('', 'instr', 'Do not move your head.', 'No mueva la cabeza.', '请不要动头。', 'Đừng cử động đầu.', 'Huwag po ninyong igalaw ang ulo ninyo.', 'لا تحرّك رأسك.', 'Не двигайте головой.'),
    P('', 'instr', 'Wiggle your fingers and toes.', 'Mueva los dedos de las manos y de los pies.', '请动一动您的手指和脚趾。', 'Hãy cử động các ngón tay và ngón chân.', 'Igalaw po ang mga daliri sa kamay at paa.', 'حرّك أصابع يديك وقدميك.', 'Пошевелите пальцами рук и ног.'),
    P('', 'yn', 'Can you feel me touching you?', '¿Siente que le estoy tocando?', '您能感觉到我在碰您吗？', 'Bạn có cảm thấy tôi đang chạm vào bạn không?', 'Nararamdaman po ba ninyo na hinahawakan ko kayo?', 'هل تشعر بلمسي لك؟', 'Вы чувствуете, как я к вам прикасаюсь?'),
    P('', 'yn', 'Were you wearing a seatbelt?', '¿Llevaba puesto el cinturón de seguridad?', '您系安全带了吗？', 'Bạn có thắt dây an toàn không?', 'Naka-seatbelt po ba kayo?', 'هل كنت ترتدي حزام الأمان؟', 'Вы были пристёгнуты ремнём безопасности?'),
    P('', 'point', 'Where are you bleeding? Point to it.', '¿Dónde está sangrando? Señálelo.', '哪里在流血？请指给我看。', 'Bạn bị chảy máu ở đâu? Hãy chỉ cho tôi.', 'Saan po kayo dumudugo? Ituro po ninyo.', 'أين تنزف؟ أشر إلى المكان.', 'Где у вас кровотечение? Покажите.'),
    P('', 'instr', 'We need to cut your clothes to check for injuries.', 'Necesitamos cortarle la ropa para revisar si tiene heridas.', '我们需要剪开您的衣服检查伤势。', 'Chúng tôi cần cắt quần áo của bạn để kiểm tra vết thương.', 'Kailangan po naming gupitin ang damit ninyo para tingnan ang mga sugat.', 'نحتاج إلى قصّ ملابسك لفحص الإصابات.', 'Нам нужно разрезать вашу одежду, чтобы осмотреть травмы.'),
    P('', 'yn', 'Can you walk?', '¿Puede caminar?', '您能走路吗？', 'Bạn có đi được không?', 'Nakakalakad po ba kayo?', 'هل تستطيع المشي؟', 'Вы можете идти?'),
  ]},

  { id: 'illness', name: 'Illness / Medical', phrases: [
    P('', 'yn', 'Do you have a fever?', '¿Tiene fiebre?', '您发烧吗？', 'Bạn có bị sốt không?', 'May lagnat po ba kayo?', 'هل لديك حمّى؟', 'У вас температура?'),
    P('', 'yn', 'Do you feel dizzy or weak?', '¿Se siente mareado o débil?', '您感到头晕或无力吗？', 'Bạn có thấy chóng mặt hoặc yếu không?', 'Nahihilo o nanghihina po ba kayo?', 'هل تشعر بدوار أو ضعف؟', 'У вас кружится голова или слабость?'),
    P('', 'yn', 'Are you vomiting?', '¿Está vomitando?', '您呕吐吗？', 'Bạn có bị nôn không?', 'Nagsusuka po ba kayo?', 'هل تتقيأ؟', 'У вас рвота?'),
    P('', 'yn', 'Is there blood in your vomit or stool?', '¿Hay sangre en el vómito o en las heces?', '您的呕吐物或大便里有血吗？', 'Có máu trong chất nôn hoặc phân của bạn không?', 'May dugo po ba sa suka o dumi ninyo?', 'هل يوجد دم في القيء أو البراز؟', 'Есть кровь в рвоте или стуле?'),
    P('', 'yn', 'Do you have diarrhea?', '¿Tiene diarrea?', '您腹泻吗？', 'Bạn có bị tiêu chảy không?', 'Nagtatae po ba kayo?', 'هل لديك إسهال؟', 'У вас понос?'),
    P('', 'open', 'How many days have you been sick?', '¿Cuántos días lleva enfermo?', '您病了几天了？', 'Bạn bị bệnh mấy ngày rồi?', 'Ilang araw na po kayong may sakit?', 'منذ كم يوم وأنت مريض؟', 'Сколько дней вы болеете?'),
    P('', 'yn', 'Do you use insulin?', '¿Usa insulina?', '您用胰岛素吗？', 'Bạn có dùng insulin không?', 'Gumagamit po ba kayo ng insulin?', 'هل تستخدم الإنسولين؟', 'Вы колете инсулин?'),
    P('', 'instr', 'We need to check your blood sugar with a small finger prick.', 'Necesitamos medirle el azúcar con un pequeño pinchazo en el dedo.', '我们需要扎一下您的手指来测血糖。', 'Chúng tôi cần chích nhẹ đầu ngón tay để đo đường huyết.', 'Kailangan po naming tusukin nang kaunti ang daliri ninyo para sukatin ang asukal sa dugo.', 'نحتاج إلى وخز إصبعك وخزة صغيرة لقياس السكر في الدم.', 'Нам нужно уколоть палец, чтобы измерить сахар в крови.'),
    P('', 'yn', 'Did you just have a seizure?', '¿Acaba de tener una convulsión?', '您刚才发生抽搐了吗？', 'Bạn có vừa bị co giật không?', 'Nagkaroon po ba kayo ng seizure (kombulsyon) kanina?', 'هل أصبت بنوبة تشنج للتو؟', 'У вас только что был судорожный приступ?'),
    P('', 'yn', 'Do you have epilepsy?', '¿Tiene epilepsia?', '您有癫痫吗？', 'Bạn có bị động kinh không?', 'May epilepsy po ba kayo?', 'هل لديك صرع؟', 'У вас эпилепсия?'),
    P('', 'yn', 'Have you had any alcohol or drugs today?', '¿Ha tomado alcohol o drogas hoy?', '您今天喝过酒或用过毒品吗？', 'Hôm nay bạn có uống rượu hoặc dùng ma túy không?', 'Uminom po ba kayo ng alak o gumamit ng droga ngayong araw?', 'هل تناولت أي كحول أو مخدرات اليوم؟', 'Вы сегодня употребляли алкоголь или наркотики?'),
    P('', 'yn', 'Did you take too much of any medicine?', '¿Tomó demasiada cantidad de algún medicamento?', '您是否服用了过量的药物？', 'Bạn có uống quá liều thuốc nào không?', 'Sobra po ba ang nainom ninyong gamot?', 'هل تناولت جرعة زائدة من أي دواء؟', 'Вы приняли слишком много какого-либо лекарства?'),
    P('', 'yn', 'Are you thinking about hurting yourself?', '¿Está pensando en hacerse daño?', '您有伤害自己的想法吗？', 'Bạn có đang nghĩ đến việc làm hại bản thân không?', 'Iniisip po ba ninyong saktan ang sarili ninyo?', 'هل تفكّر في إيذاء نفسك؟', 'Вы думаете о том, чтобы причинить себе вред?'),
  ]},

  { id: 'ob', name: 'OB / Pregnancy', phrases: [
    P('', 'yn', 'Are you pregnant?', '¿Está embarazada?', '您怀孕了吗？', 'Bạn có đang mang thai không?', 'Buntis po ba kayo?', 'هل أنتِ حامل؟', 'Вы беременны?'),
    P('', 'open', 'How many months pregnant are you?', '¿De cuántos meses está embarazada?', '您怀孕几个月了？', 'Bạn mang thai được mấy tháng rồi?', 'Ilang buwan na po kayong buntis?', 'في أي شهر من الحمل أنتِ؟', 'Какой у вас срок беременности (в месяцах)?'),
    P('', 'yn', 'Is this your first baby?', '¿Es su primer bebé?', '这是您的第一个孩子吗？', 'Đây có phải là con đầu lòng của bạn không?', 'Ito po ba ang una ninyong anak?', 'هل هذا طفلك الأول؟', 'Это ваш первый ребёнок?'),
    P('', 'yn', 'Are you having contractions?', '¿Tiene contracciones?', '您有宫缩吗？', 'Bạn có đang bị cơn gò tử cung không?', 'Naghihilab po ba ang tiyan ninyo (contractions)?', 'هل لديكِ تقلصات (طَلْق)؟', 'У вас схватки?'),
    P('', 'open', 'How many minutes apart are the contractions?', '¿Cada cuántos minutos le vienen las contracciones?', '宫缩间隔几分钟？', 'Các cơn gò cách nhau bao nhiêu phút?', 'Ilang minuto po ang pagitan ng bawat hilab?', 'كم دقيقة بين كل تقلص والآخر؟', 'Через сколько минут повторяются схватки?'),
    P('', 'yn', 'Has your water broken?', '¿Se le rompió la fuente?', '您破水了吗？', 'Bạn đã vỡ ối chưa?', 'Pumutok na po ba ang panubigan ninyo?', 'هل نزل ماء الرأس؟', 'У вас отошли воды?'),
    P('', 'yn', 'Are you bleeding?', '¿Está sangrando?', '您在出血吗？', 'Bạn có bị chảy máu không?', 'Dinudugo po ba kayo?', 'هل تنزفين؟', 'У вас кровотечение?'),
    P('', 'yn', 'Do you feel the urge to push?', '¿Siente ganas de pujar?', '您有想用力的感觉吗？', 'Bạn có cảm giác muốn rặn không?', 'Nararamdaman po ba ninyong gusto nang umire?', 'هل تشعرين برغبة في الدفع؟', 'Вы чувствуете потребность тужиться?'),
    P('', 'yn', 'Can you feel the baby moving?', '¿Siente que el bebé se mueve?', '您能感觉到宝宝在动吗？', 'Bạn có cảm thấy em bé cử động không?', 'Nararamdaman po ba ninyong gumagalaw ang sanggol?', 'هل تشعرين بحركة الجنين؟', 'Вы чувствуете, как шевелится ребёнок?'),
    P('', 'yn', 'Have you had any problems with this pregnancy?', '¿Ha tenido algún problema con este embarazo?', '这次怀孕有过什么问题吗？', 'Lần mang thai này bạn có gặp vấn đề gì không?', 'Nagkaroon po ba kayo ng problema sa pagbubuntis na ito?', 'هل واجهتِ أي مشاكل في هذا الحمل؟', 'Были ли проблемы во время этой беременности?'),
    P('', 'open', 'When was your last period?', '¿Cuándo fue su última regla?', '您上次月经是什么时候？', 'Kỳ kinh cuối cùng của bạn là khi nào?', 'Kailan po ang huli ninyong regla?', 'متى كانت آخر دورة شهرية لكِ؟', 'Когда у вас были последние месячные?'),
    P('', 'instr', 'Do not push. Breathe.', 'No puje. Respire.', '先不要用力。呼吸。', 'Đừng rặn. Hãy thở.', 'Huwag po munang umire. Huminga.', 'لا تدفعي. تنفّسي.', 'Не тужьтесь. Дышите.'),
    P('', 'instr', 'Push now!', '¡Puje ahora!', '现在用力！', 'Rặn đi!', 'Umire na po!', 'ادفعي الآن!', 'Тужьтесь!'),
  ]},
];

/* ---------- Japanese (日本語) — polite form. Keyed by the English phrase. ---------- */
Object.assign(UI_TR.yes, { ja: 'はい' });
Object.assign(UI_TR.no, { ja: 'いいえ' });
Object.assign(UI_TR.unsure, { ja: 'わかりません' });
Object.assign(UI_TR.nopain, { ja: '痛みなし' });
Object.assign(UI_TR.worst, { ja: '最悪の痛み' });
Object.assign(UI_TR.speak, { ja: '今、話してください' });

const JA = {
  // Basics
  'Hello. We are paramedics. We are here to help you.': 'こんにちは。私たちは救急隊です。あなたを助けに来ました。',
  'I am using this phone to translate.': 'このスマートフォンで翻訳しています。',
  'Please answer by tapping the screen, or nod yes or no.': '画面をタップして答えてください。または、うなずくか、首を横に振ってください。',
  'Do you understand me?': '私の言っていることがわかりますか？',
  'What is your name?': 'お名前は何ですか？',
  'How old are you?': '何歳ですか？',
  'Is there someone here who speaks English?': 'ここに英語を話せる人はいますか？',
  'May we examine and treat you?': '診察と処置をしてもよろしいですか？',
  'Where does it hurt? Point to it.': 'どこが痛いですか？指でさしてください。',
  'Is anyone else hurt?': '他にけがをした人はいますか？',
  'Stay still. Do not move.': 'じっとしていてください。動かないでください。',
  'We are going to check your blood pressure.': '血圧を測ります。',
  'Do you want to go to the hospital?': '病院に行きたいですか？',
  'We are taking you to the hospital.': 'これから病院へ搬送します。',
  // OPQRST
  'When did it start?': 'いつから始まりましたか？',
  'What were you doing when it started?': '始まったとき、何をしていましたか？',
  'Did it start suddenly?': '急に始まりましたか？',
  'Does anything make it better?': '何かをすると楽になりますか？',
  'Does anything make it worse?': '何かをすると悪くなりますか？',
  'Does it hurt more when you breathe or move?': '息をしたり動いたりすると、もっと痛みますか？',
  'Does it hurt when I press here?': 'ここを押すと痛いですか？',
  'Is the pain sharp or stabbing?': '鋭い痛み、または刺すような痛みですか？',
  'Does it feel like pressure or squeezing?': '押される感じ、または締めつけられる感じですか？',
  'Is it a burning pain?': '焼けるような痛みですか？',
  'Is it a dull ache?': '鈍い痛みですか？',
  'Does it feel like tearing or ripping?': '裂けるような痛みですか？',
  'Does the pain move anywhere else? Point to where.': '痛みは他の場所に広がりますか？その場所を指でさしてください。',
  'From 0 to 10, how bad is the pain? 0 is no pain, 10 is the worst pain.': '0から10で、痛みはどのくらいですか？0は痛みなし、10は最悪の痛みです。',
  'Is the pain constant?': '痛みはずっと続いていますか？',
  'Does the pain come and go?': '痛みは出たり消えたりしますか？',
  'Have you had this pain before?': '以前にもこの痛みがありましたか？',
  // SAMPLE
  'What is bothering you the most right now?': '今、一番つらいことは何ですか？',
  'Are you allergic to any medicines?': '薬のアレルギーはありますか？',
  'Are you allergic to anything else, like food, latex, or bee stings?': '食べ物、ラテックス、ハチ刺されなど、他にアレルギーはありますか？',
  'Do you take any medicines?': '何か薬を飲んでいますか？',
  'Please show me your medicines.': '飲んでいる薬を見せてください。',
  'Do you take blood thinners?': '血液をサラサラにする薬（抗凝固薬）を飲んでいますか？',
  'Did you take your medicines today?': '今日、薬を飲みましたか？',
  'Do you have any medical problems?': '何か持病はありますか？',
  'Do you have heart problems?': '心臓の病気はありますか？',
  'Do you have diabetes?': '糖尿病はありますか？',
  'Do you have high blood pressure?': '高血圧はありますか？',
  'Do you have asthma or lung problems?': 'ぜんそくや肺の病気はありますか？',
  'Have you had surgery recently?': '最近、手術を受けましたか？',
  'When did you last eat or drink?': '最後に食べたり飲んだりしたのはいつですか？',
  'What happened?': '何がありましたか？',
  'What happened right before this started?': 'これが始まる直前に何がありましたか？',
  // Stroke
  'Please smile and show me your teeth.': '歯を見せて笑ってください。',
  'Close your eyes and hold both arms out for 10 seconds.': '目を閉じて、両腕を前に伸ばしたまま10秒間保ってください。',
  "Repeat after me: 'The sky is blue.'": '私のあとに続けて言ってください：「空は青い。」',
  'Squeeze my hands.': '私の手を強く握ってください。',
  'What time did you last feel normal?': '最後に普段どおりだったのは何時ですか？',
  'Do you feel weak or numb on one side of your body?': '体の片側に力が入らない、またはしびれがありますか？',
  'Is it hard to speak or find words?': '話しにくい、または言葉が出てこないですか？',
  'Is your vision blurry or are you seeing double?': '目がかすんだり、物が二重に見えたりしますか？',
  'Is this the worst headache of your life?': '今までで一番ひどい頭痛ですか？',
  'What day is it today?': '今日は何曜日ですか？',
  // Cardiac
  'Do you have chest pain or pressure?': '胸の痛みや圧迫感はありますか？',
  'Does the pain go to your arm, jaw, neck, or back?': '痛みは腕、あご、首、背中に広がりますか？',
  'Are you short of breath?': '息苦しいですか？',
  'Do you feel sick to your stomach?': '吐き気がしますか？',
  'Are you sweating more than usual?': 'いつもより汗をかいていますか？',
  'Did you feel dizzy or pass out?': 'めまいがしたり、気を失ったりしましたか？',
  'Do you have a pacemaker or defibrillator?': 'ペースメーカーや除細動器を入れていますか？',
  'Have you taken nitroglycerin today?': '今日、ニトログリセリンを使いましたか？',
  'In the last 2 days, have you taken medicine for erections, like Viagra or Cialis?': 'この2日以内に、バイアグラやシアリスなどの勃起不全の薬を飲みましたか？',
  'Are you allergic to aspirin?': 'アスピリンのアレルギーはありますか？',
  'Chew this aspirin, then swallow it.': 'このアスピリンをかんでから、飲み込んでください。',
  'Put this under your tongue. Do not swallow it.': 'これを舌の下に入れてください。飲み込まないでください。',
  // Breathing
  'Are you having trouble breathing?': '呼吸が苦しいですか？',
  'Do you use an inhaler? Where is it?': '吸入器を使っていますか？どこにありますか？',
  'Do you use oxygen at home?': '家で酸素を使っていますか？',
  'Do you have a cough?': 'せきは出ますか？',
  'Is your throat or tongue swelling?': 'のどや舌が腫れていますか？',
  'This mask will give you oxygen. Breathe normally.': 'このマスクから酸素が出ます。普通に呼吸してください。',
  'Breathe slowly with me.': '私と一緒にゆっくり呼吸してください。',
  'Take a deep breath in.': '大きく息を吸ってください。',
  // Trauma
  'Did you fall?': '転んだり、落ちたりしましたか？',
  'Did you hit your head?': '頭を打ちましたか？',
  'Did you pass out?': '気を失いましたか？',
  'Does your neck or back hurt?': '首や背中は痛いですか？',
  'Do not move your head.': '頭を動かさないでください。',
  'Wiggle your fingers and toes.': '手と足の指を動かしてください。',
  'Can you feel me touching you?': '私が触っているのがわかりますか？',
  'Were you wearing a seatbelt?': 'シートベルトをしていましたか？',
  'Where are you bleeding? Point to it.': 'どこから出血していますか？指でさしてください。',
  'We need to cut your clothes to check for injuries.': 'けがを確認するため、服を切らせてください。',
  'Can you walk?': '歩けますか？',
  // Illness
  'Do you have a fever?': '熱はありますか？',
  'Do you feel dizzy or weak?': 'めまいや力が入らない感じはありますか？',
  'Are you vomiting?': '吐いていますか？',
  'Is there blood in your vomit or stool?': '吐いたものや便に血が混じっていますか？',
  'Do you have diarrhea?': '下痢をしていますか？',
  'How many days have you been sick?': '何日前から具合が悪いですか？',
  'Do you use insulin?': 'インスリンを使っていますか？',
  'We need to check your blood sugar with a small finger prick.': '指先を少し刺して、血糖値を測ります。',
  'Did you just have a seizure?': '今、けいれんの発作がありましたか？',
  'Do you have epilepsy?': 'てんかんはありますか？',
  'Have you had any alcohol or drugs today?': '今日、お酒や薬物を使いましたか？',
  'Did you take too much of any medicine?': '薬を飲みすぎましたか？',
  'Are you thinking about hurting yourself?': '自分を傷つけようと考えていますか？',
  // OB / Pregnancy
  'Are you pregnant?': '妊娠していますか？',
  'How many months pregnant are you?': '妊娠何か月ですか？',
  'Is this your first baby?': '初めての出産ですか？',
  'Are you having contractions?': '陣痛はありますか？',
  'How many minutes apart are the contractions?': '陣痛は何分おきですか？',
  'Has your water broken?': '破水しましたか？',
  'Are you bleeding?': '出血していますか？',
  'Do you feel the urge to push?': 'いきみたい感じがしますか？',
  'Can you feel the baby moving?': '赤ちゃんが動いているのを感じますか？',
  'Have you had any problems with this pregnancy?': '今回の妊娠で何か問題はありましたか？',
  'When was your last period?': '最後の生理はいつでしたか？',
  'Do not push. Breathe.': 'いきまないでください。呼吸をしてください。',
  'Push now!': '今、いきんでください！',
};
CATEGORIES.forEach(c => c.phrases.forEach(p => { if (JA[p.en]) p.ja = JA[p.en]; }));

/* ======================================================================
 * v1.7 — Field feedback additions (A&O x4, stroke, cardiac, respiratory)
 * PJ() = phrase with Japanese included: English, es, zh, vi, tl, ar, ru, ja
 * REF() = reuse an existing phrase (same translations) in another section
 * ====================================================================== */
function PJ(tag, type, en, es, zh, vi, tl, ar, ru, ja) { return { tag, type, en, es, zh, vi, tl, ar, ru, ja }; }
function REF(en, tag = '') {
  for (const c of CATEGORIES) for (const p of c.phrases) if (p.en === en) return { ...p, tag };
  throw new Error('Phrase not found: ' + en);
}
function catById(id) { return CATEGORIES.find(c => c.id === id); }
function insertAfter(list, afterEn, ...items) { const i = list.findIndex(p => p.en === afterEn); list.splice(i < 0 ? list.length : i + 1, 0, ...items); }
function replacePhrase(list, en, ...items) { const i = list.findIndex(p => p.en === en); list.splice(i, 1, ...items); }

// Mucus color buttons (patient taps a color)
Object.assign(UI_TR, {
  c_none:   { en: 'No mucus', es: 'No tengo flema', zh: '没有痰', vi: 'Không có đờm', tl: 'Walang plema', ar: 'لا يوجد بلغم', ru: 'Нет мокроты', ja: 'たんは出ない' },
  c_clear:  { en: 'Clear', es: 'Transparente', zh: '透明', vi: 'Trong', tl: 'Malinaw', ar: 'شفاف', ru: 'Прозрачная', ja: '透明' },
  c_white:  { en: 'White', es: 'Blanca', zh: '白色', vi: 'Trắng', tl: 'Puti', ar: 'أبيض', ru: 'Белая', ja: '白' },
  c_yellow: { en: 'Yellow', es: 'Amarilla', zh: '黄色', vi: 'Vàng', tl: 'Dilaw', ar: 'أصفر', ru: 'Жёлтая', ja: '黄色' },
  c_green:  { en: 'Green', es: 'Verde', zh: '绿色', vi: 'Xanh lá', tl: 'Berde', ar: 'أخضر', ru: 'Зелёная', ja: '緑' },
  c_brown:  { en: 'Brown', es: 'Café', zh: '棕色', vi: 'Nâu', tl: 'Kayumanggi', ar: 'بني', ru: 'Коричневая', ja: '茶色' },
  c_blood:  { en: 'Red / bloody', es: 'Roja / con sangre', zh: '红色/带血', vi: 'Đỏ / có máu', tl: 'Pula / may dugo', ar: 'أحمر / فيه دم', ru: 'Красная / с кровью', ja: '赤／血が混じる' },
  c_pink:   { en: 'Pink & foamy', es: 'Rosada y espumosa', zh: '粉红色带泡沫', vi: 'Hồng và có bọt', tl: 'Rosas at mabula', ar: 'وردي ورغوي', ru: 'Розовая, пенистая', ja: 'ピンクで泡状' },
});

/* ---- A&O x4 (tags 1–4 = Person, Place, Time, Event) ---- */
const AO = [
  REF('What is your name?', '1'),
  PJ('2', 'open', 'Where are you right now?', '¿Dónde está usted ahora?', '您现在在哪里？', 'Bây giờ bạn đang ở đâu?', 'Nasaan po kayo ngayon?', 'أين أنت الآن؟', 'Где вы сейчас находитесь?', '今、どこにいますか？'),
  PJ('3', 'open', 'What year is it? What month?', '¿En qué año estamos? ¿En qué mes?', '现在是哪一年？几月？', 'Bây giờ là năm nào? Tháng mấy?', 'Anong taon po ngayon? Anong buwan?', 'في أي سنة نحن؟ وفي أي شهر؟', 'Какой сейчас год? Какой месяц?', '今年は何年ですか？何月ですか？'),
  REF('What day is it today?', '3'),
  PJ('4', 'open', 'Do you know what happened to you today?', '¿Sabe lo que le pasó hoy?', '您知道今天发生了什么事吗？', 'Bạn có biết hôm nay chuyện gì đã xảy ra với bạn không?', 'Alam po ba ninyo kung ano ang nangyari sa inyo ngayon?', 'هل تعرف ماذا حدث لك اليوم؟', 'Вы знаете, что с вами сегодня произошло?', '今日、何があったかわかりますか？'),
];
const aoCopy = () => AO.map(p => ({ ...p }));

/* ---- Shared new phrases ---- */
const LKW = PJ('', 'open', 'When was the last time you were completely normal? What time?', '¿Cuándo fue la última vez que se sintió completamente normal? ¿A qué hora?', '您最后一次完全正常是什么时候？几点？', 'Lần cuối bạn hoàn toàn bình thường là khi nào? Lúc mấy giờ?', 'Kailan po ang huling beses na lubos kayong normal? Anong oras?', 'متى كانت آخر مرة كنت فيها طبيعياً تماماً؟ في أي ساعة؟', 'Когда вы в последний раз были в полном порядке? Во сколько?', '最後に完全に普段どおりだったのはいつですか？何時ですか？');
const LKW_WITNESS = PJ('', 'yn', 'Is there someone here who saw you when you were last normal?', '¿Hay alguien aquí que le haya visto cuando todavía estaba normal?', '这里有人在您还正常的时候见过您吗？', 'Ở đây có ai đã gặp bạn lúc bạn còn bình thường không?', 'May tao po ba rito na nakakita sa inyo noong normal pa kayo?', 'هل هنا شخص رآك عندما كنت طبيعياً آخر مرة؟', 'Есть ли здесь кто-то, кто видел вас, когда вы ещё были в порядке?', '最後に普段どおりだったあなたを見た人は、ここにいますか？');
const LKW_BYSTANDER = PJ('', 'open', 'For family or bystanders: When did you last see this person acting normal?', 'Para familiares o testigos: ¿Cuándo fue la última vez que vio a esta persona actuar normal?', '请家属或旁人回答：您最后一次看到这个人正常是什么时候？', 'Dành cho người nhà hoặc người chứng kiến: Lần cuối bạn thấy người này bình thường là khi nào?', 'Para sa pamilya o nakasaksi: Kailan po ninyo huling nakita na normal ang taong ito?', 'للعائلة أو الحاضرين: متى رأيت هذا الشخص يتصرف بشكل طبيعي آخر مرة؟', 'Для родственников или свидетелей: когда вы в последний раз видели этого человека в нормальном состоянии?', 'ご家族または周りの方へ：この方が普段どおりだったのを最後に見たのはいつですか？');
const RECENT_TRAUMA = PJ('', 'yn', 'Have you had a fall or any injury recently?', '¿Se ha caído o se ha lastimado recientemente?', '您最近摔倒过或受过伤吗？', 'Gần đây bạn có bị ngã hoặc bị thương không?', 'Natumba o nasaktan po ba kayo kamakailan?', 'هل سقطت أو تعرضت لأي إصابة مؤخراً؟', 'Вы недавно падали или получали какие-либо травмы?', '最近、転んだりけがをしたりしましたか？');
const CHF = PJ('', 'yn', 'Do you have congestive heart failure?', '¿Tiene insuficiencia cardíaca?', '您有心力衰竭吗？', 'Bạn có bị suy tim không?', 'May congestive heart failure (paghina ng puso) po ba kayo?', 'هل لديك قصور في القلب؟', 'У вас сердечная недостаточность?', '心不全はありますか？');
const ACTING_DIFFERENT = PJ('', 'yn', 'For family or bystanders: Is this person acting differently than normal?', 'Para familiares o testigos: ¿Esta persona se está comportando diferente de lo normal?', '请家属或旁人回答：这个人的表现和平时不一样吗？', 'Dành cho người nhà hoặc người chứng kiến: Người này có cư xử khác bình thường không?', 'Para sa pamilya o nakasaksi: Iba po ba ang kilos ng taong ito kaysa karaniwan?', 'للعائلة أو الحاضرين: هل يتصرف هذا الشخص بشكل مختلف عن المعتاد؟', 'Для родственников или свидетелей: этот человек ведёт себя не так, как обычно?', 'ご家族または周りの方へ：この方はいつもと様子が違いますか？');
const SEIZURE_LENGTH = PJ('', 'open', 'For bystanders: How long did the seizure last?', 'Para testigos: ¿Cuánto tiempo duró la convulsión?', '请旁人回答：抽搐持续了多长时间？', 'Dành cho người chứng kiến: Cơn co giật kéo dài bao lâu?', 'Para sa nakasaksi: Gaano po katagal ang seizure?', 'للحاضرين: كم استمرت نوبة التشنج؟', 'Для свидетелей: сколько длился приступ судорог?', '周りの方へ：けいれんはどのくらい続きましたか？');

/* ---- New section: A&O x4 (right after Basics) ---- */
CATEGORIES.splice(1, 0, { id: 'ao', name: 'A&O ×4 – Orientation', phrases: aoCopy() });

/* ---- Stroke ---- */
{
  const s = catById('stroke').phrases;
  s.unshift(...aoCopy());
  replacePhrase(s, 'What time did you last feel normal?', LKW, LKW_WITNESS, LKW_BYSTANDER);
  s.splice(s.findIndex(p => p.en === 'What day is it today?' && !p.tag), 1); // now covered by A&O
  insertAfter(s, 'Is this the worst headache of your life?',
    REF('Have you had surgery recently?'), { ...RECENT_TRAUMA }, REF('Do you have diabetes?'));
  s.push(REF('We need to check your blood sugar with a small finger prick.'));
}

/* ---- New section: Altered mental status / Seizure ---- */
CATEGORIES.splice(CATEGORIES.findIndex(c => c.id === 'stroke') + 1, 0, { id: 'altered', name: 'Altered / Seizure', phrases: [
  ...aoCopy(),
  { ...ACTING_DIFFERENT }, { ...LKW_BYSTANDER },
  REF('Did you just have a seizure?'), REF('Do you have epilepsy?'), { ...SEIZURE_LENGTH },
  REF('Did you hit your head?'), { ...RECENT_TRAUMA },
  REF('Do you have diabetes?'), REF('Do you use insulin?'), REF('When did you last eat or drink?'),
  REF('We need to check your blood sugar with a small finger prick.'),
  REF('Have you had any alcohol or drugs today?'), REF('Did you take too much of any medicine?'),
]});

/* ---- Trauma: A&O first ---- */
catById('trauma').phrases.unshift(...aoCopy());

/* ---- Cardiac: nitro sequence + cardiac history ---- */
{
  const c = catById('cardiac').phrases;
  replacePhrase(c, 'Have you taken nitroglycerin today?',
    PJ('', 'yn', 'Has a doctor prescribed nitroglycerin for you?', '¿Su médico le ha recetado nitroglicerina?', '医生给您开过硝酸甘油吗？', 'Bác sĩ có kê đơn nitroglycerin cho bạn không?', 'Niresetahan po ba kayo ng doktor ng nitroglycerin?', 'هل وصف لك الطبيب النيتروغليسرين؟', 'Вам врач назначал нитроглицерин?', '医師からニトログリセリンを処方されていますか？'),
    PJ('', 'yn', 'Have you taken any nitroglycerin for this pain?', '¿Ha tomado nitroglicerina para este dolor?', '这次疼痛您用过硝酸甘油吗？', 'Bạn đã dùng nitroglycerin cho cơn đau này chưa?', 'Uminom po ba kayo ng nitroglycerin para sa sakit na ito?', 'هل تناولت النيتروغليسرين لهذا الألم؟', 'Вы принимали нитроглицерин от этой боли?', 'この痛みのためにニトログリセリンを使いましたか？'),
    PJ('', 'yn', 'Did the nitroglycerin relieve the pain?', '¿Se le quitó o mejoró el dolor con la nitroglicerina?', '用了硝酸甘油后疼痛缓解了吗？', 'Nitroglycerin có làm bớt đau không?', 'Gumaan po ba ang sakit dahil sa nitroglycerin?', 'هل خفّف النيتروغليسرين الألم؟', 'Нитроглицерин облегчил боль?', 'ニトログリセリンで痛みは楽になりましたか？'));
  insertAfter(c, 'Did you feel dizzy or pass out?',
    PJ('', 'yn', 'Have you ever had a heart attack?', '¿Alguna vez ha tenido un infarto?', '您以前得过心肌梗塞（心脏病发作）吗？', 'Bạn đã từng bị nhồi máu cơ tim chưa?', 'Inatake na po ba kayo sa puso dati?', 'هل أصبت بنوبة قلبية من قبل؟', 'У вас когда-нибудь был инфаркт?', '心筋梗塞（心臓発作）を起こしたことはありますか？'),
    PJ('', 'yn', 'Have you had heart surgery, stents, or bypass surgery?', '¿Le han hecho cirugía del corazón, le han puesto stents o un bypass?', '您做过心脏手术、放过支架或做过搭桥手术吗？', 'Bạn đã từng phẫu thuật tim, đặt stent hoặc mổ bắc cầu chưa?', 'Naoperahan na po ba kayo sa puso, nalagyan ng stent, o nag-bypass surgery?', 'هل أجريت عملية في القلب أو تركيب دعامات أو عملية مجازة (بايباس)؟', 'Вам делали операцию на сердце, ставили стенты или шунтирование?', '心臓の手術、ステント、またはバイパス手術を受けたことはありますか？'),
    { ...CHF },
    PJ('', 'yn', 'Do you have an irregular heartbeat (arrhythmia)?', '¿Tiene arritmia (latidos irregulares del corazón)?', '您有心律不齐吗？', 'Bạn có bị loạn nhịp tim không?', 'Iregular po ba ang tibok ng puso ninyo (arrhythmia)?', 'هل لديك عدم انتظام في ضربات القلب؟', 'У вас нарушение сердечного ритма (аритмия)?', '不整脈はありますか？'),
    PJ('', 'yn', 'Have you ever had a dangerous fast heart rhythm, like V-fib or V-tach?', '¿Alguna vez ha tenido un ritmo cardíaco rápido y peligroso, como fibrilación o taquicardia ventricular?', '您以前有过危险的快速心律吗？比如室颤或室速？', 'Bạn đã từng bị nhịp tim nhanh nguy hiểm như rung thất hoặc nhịp nhanh thất chưa?', 'Nagkaroon na po ba kayo ng mapanganib na mabilis na tibok ng puso, tulad ng V-fib o V-tach?', 'هل أصبت من قبل بنظم قلب سريع وخطير، مثل الرجفان البطيني أو تسرّع القلب البطيني؟', 'У вас когда-нибудь был опасный учащённый ритм сердца, например фибрилляция или тахикардия желудочков?', '心室細動や心室頻拍など、危険な速い不整脈を起こしたことはありますか？'));
}

/* ---- Breathing: COPD, CHF, recent illness, pneumonia, mucus color, pain ---- */
{
  const b = catById('breathing').phrases;
  insertAfter(b, 'Do you use oxygen at home?',
    PJ('', 'yn', 'Do you have COPD, emphysema, or chronic bronchitis?', '¿Tiene EPOC, enfisema o bronquitis crónica?', '您有慢阻肺、肺气肿或慢性支气管炎吗？', 'Bạn có bị bệnh phổi tắc nghẽn mạn tính (COPD), khí phế thũng hoặc viêm phế quản mạn không?', 'May COPD, emphysema, o chronic bronchitis po ba kayo?', 'هل لديك مرض الانسداد الرئوي المزمن أو انتفاخ الرئة أو التهاب الشعب الهوائية المزمن؟', 'У вас ХОБЛ, эмфизема или хронический бронхит?', 'COPD（慢性閉塞性肺疾患）、肺気腫、または慢性気管支炎はありますか？'),
    { ...CHF },
    PJ('', 'yn', 'Have you been sick recently, like a cold or the flu?', '¿Ha estado enfermo recientemente, como con un resfriado o gripe?', '您最近生过病吗？比如感冒或流感？', 'Gần đây bạn có bị bệnh không, như cảm lạnh hoặc cúm?', 'Nagkasakit po ba kayo kamakailan, tulad ng sipon o trangkaso?', 'هل كنت مريضاً مؤخراً، مثل نزلة برد أو إنفلونزا؟', 'Вы недавно болели, например простудой или гриппом?', '最近、風邪やインフルエンザなどで具合が悪かったですか？'),
    PJ('', 'yn', 'Have you ever had pneumonia?', '¿Alguna vez ha tenido neumonía (pulmonía)?', '您得过肺炎吗？', 'Bạn đã từng bị viêm phổi chưa?', 'Nagkaroon na po ba kayo ng pulmonya?', 'هل أصبت بالتهاب رئوي من قبل؟', 'У вас когда-нибудь была пневмония?', '肺炎になったことはありますか？'));
  insertAfter(b, 'Do you have a cough?',
    PJ('', 'color', 'Are you coughing up mucus? Tap its color.', '¿Está sacando flema al toser? Toque el color.', '您咳痰吗？请点击痰的颜色。', 'Bạn có ho ra đờm không? Hãy chạm vào màu của đờm.', 'May plema po ba kapag umuubo kayo? Pindutin ang kulay nito.', 'هل يخرج بلغم مع السعال؟ اضغط على لونه.', 'Вы откашливаете мокроту? Нажмите на её цвет.', 'せきでたんが出ますか？たんの色をタップしてください。'),
    PJ('', 'yn', 'Does it hurt when you breathe?', '¿Le duele al respirar?', '呼吸时会疼吗？', 'Bạn có đau khi thở không?', 'Masakit po ba kapag humihinga kayo?', 'هل يؤلمك التنفس؟', 'Вам больно дышать?', '息をすると痛みますか？'));
}

/* ---- v2.5: Basics — pain check near the top (replaces "Where does it hurt? Point to it.") ---- */
replacePhrase(catById('basics').phrases, 'Where does it hurt? Point to it.',
  PJ('', 'yn', 'Are you having any pain?', '¿Tiene algún dolor?', '您有哪里疼吗？', 'Bạn có bị đau ở đâu không?', 'May nararamdaman po ba kayong sakit?', 'هل تشعر بأي ألم؟', 'У вас что-нибудь болит?', 'どこか痛みはありますか？'),
  PJ('', 'point', 'Where are you having pain? Point to it.', '¿Dónde tiene el dolor? Señálelo.', '您哪里疼？请指给我看。', 'Bạn đau ở đâu? Hãy chỉ cho tôi.', 'Saan po kayo may nararamdamang sakit? Ituro po ninyo.', 'أين تشعر بالألم؟ أشر إلى المكان.', 'Где у вас болит? Покажите, пожалуйста.', 'どこが痛いですか？指でさしてください。'));
