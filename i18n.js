const T = {
  ar: {
    nav_home:'الرئيسية', nav_about:'من نحن', nav_contact:'تواصل معنا',
    back:'← العودة للرئيسية', footer_about:'من نحن', footer_contact:'تواصل معنا',
    footer_copy:'© 2026 أدواتي — كل الأدوات مجانية وخاصة',
    hero_title:'أدوات مجانية أونلاين للحساب والتحويل والإنتاجية',
    hero_sub:'احسب، حوّل، أنشئ واستخدم أدوات مجانية مباشرة من متصفحك — بدون تثبيت، تعمل على الهاتف والكمبيوتر',
    badge_count:'14 أداة', badge_free:'مجانية 100%', badge_noreg:'بدون تسجيل', badge_privacy:'معالجة محلية',
    bmi_card_title:'حاسبة مؤشر الجسم', bmi_card_desc:'احسب مؤشر كتلة جسمك واعرف وضعك الصحي',
    diet_card_title:'حاسبة السعرات والخطة الغذائية', diet_card_desc:'احسب احتياجك اليومي + خطة غذائية كاملة',
    loan_card_title:'حاسبة القسط الشهري', loan_card_desc:'احسب قسط أي قرض أو تمويل بسهولة',
    age_card_title:'حاسبة العمر', age_card_desc:'عمرك بالتفصيل — سنوات وأشهر وأيام',
    discount_card_title:'حاسبة نسبة وخصم', discount_card_desc:'احسب النسب المئوية والخصومات بسرعة',
    unit_card_title:'محول الوحدات', unit_card_desc:'حول بين وحدات الطول والوزن والحرارة',
    pass_card_title:'مولد كلمات المرور', pass_card_desc:'كلمات مرور قوية وآمنة بضغطة واحدة',
    word_card_title:'عداد الكلمات والأحرف', word_card_desc:'عداد فوري لمقالاتك ونصوصك',
    start:'ابدأ ←',
    bmi_title:'حاسبة مؤشر كتلة الجسم', bmi_sub:'اعرف وضعك الصحي في ثانية',
    bmi_weight:'الوزن (كيلوغرام)', bmi_height:'الطول (سنتيمتر)', bmi_btn:'احسب المؤشر',
    bmi_underweight:'نقص في الوزن', bmi_normal:'وزن طبيعي ✓', bmi_overweight:'زيادة في الوزن', bmi_obese:'سمنة', bmi_invalid:'الرجاء إدخال أرقام صحيحة',
    age_title:'حاسبة العمر', age_sub:'عمرك بالتفصيل — سنوات وأشهر وأيام',
    age_label:'تاريخ ميلادك', age_btn:'احسب عمري',
    age_years:'سنة', age_months:'شهر', age_days:'يوم', age_total:'إجمالي الأيام', age_next:'يوم حتى عيد ميلادك', age_alert:'اختر تاريخ ميلادك',
    loan_title:'حاسبة القسط الشهري', loan_sub:'احسب قسط أي قرض أو تمويل',
    loan_amount:'مبلغ القرض', loan_rate:'نسبة الفائدة السنوية %', loan_years:'مدة السداد (بالسنوات)',
    loan_monthly:'القسط الشهري', loan_total:'إجمالي المدفوع', loan_interest:'إجمالي الفائدة',
    discount_title:'حاسبة نسبة وخصم', discount_sub:'احسب النسب المئوية والخصومات بسرعة',
    tab_percent:'نسبة مئوية', tab_discount:'خصم',
    percent_label1:'ما هي', percent_label2:'% من الرقم',
    discount_label1:'السعر الأصلي', discount_label2:'نسبة الخصم %',
    unit_title:'محول الوحدات', unit_sub:'حول بين وحدات الطول والوزن',
    tab_length:'الطول', tab_weight:'الوزن', unit_value:'القيمة', unit_from:'من', unit_to:'إلى',
    pass_title:'مولد كلمات المرور', pass_sub:'كلمات مرور قوية وآمنة بضغطة واحدة',
    pass_length:'الطول:', pass_numbers:'أرقام (0–9)', pass_symbols:'رموز (!@#$)', pass_upper:'الأحرف الكبيرة',
    pass_btn:'توليد كلمة مرور جديدة', pass_copied:'تم النسخ ✓',
    word_title:'عداد الكلمات والأحرف', word_sub:'عداد فوري لمقالاتك ونصوصك',
    word_words:'كلمة', word_chars:'حرف', word_nospace:'بدون مسافات', word_sentences:'جملة',
    diet_title:'حاسبة السعرات والخطة الغذائية', diet_sub:'احسب احتياجك اليومي من السعرات والبروتين والكربوهيدرات',
    diet_gender:'الجنس', diet_male:'ذكر', diet_female:'أنثى',
    diet_age:'العمر', diet_weight:'الوزن (كغم)', diet_height:'الطول (سم)',
    diet_activity:'مستوى النشاط', diet_goal:'الهدف', diet_btn:'احسب احتياجي اليومي',
    diet_calories:'سعرة حرارية يومياً', diet_protein:'بروتين (غ)', diet_carb:'كارب (غ)', diet_fat:'دهون (غ)',
    diet_act1:'قليل الحركة (مكتبي)', diet_act2:'نشاط خفيف (1–3 أيام رياضة)',
    diet_act3:'نشاط متوسط (3–5 أيام رياضة)', diet_act4:'نشاط عالي (6–7 أيام رياضة)', diet_act5:'نشاط عالي جداً (رياضي / عمل بدني)',
    diet_goal1:'نزول وزن', diet_goal2:'ثبات الوزن', diet_goal3:'زيادة وزن',
    diet_goal4:'تنشيف الجسم', diet_goal5:'شد الجسم', diet_goal6:'زيادة كتلة العضلات',
    diet_free_badge:'🎉 عرض خاص — أول 21 يوم مجاناً تماماً!',
    diet_pro_title:'🔒 الخطة الغذائية الكاملة',
    diet_pro_f1:'جدول وجبات يومي مفصّل (7 أيام)', diet_pro_f2:'قائمة بدائل الأطعمة حسب ذوقك',
    diet_pro_f3:'ملف قابل للطباعة والتنزيل', diet_pro_f4:'تحديث أسبوعي حسب تقدمك',
    diet_trial:'21 يوم مجاناً • بدون بطاقة ائتمانية', diet_pro_btn:'ابدأ تجربتك المجانية الآن',
    diet_alert:'الرجاء تعبئة العمر والوزن والطول',
    about_title:'من نحن', about_sub:'قصة أدواتي',
    about_p1:'موقع "أدواتي" هو مجموعة أدوات إلكترونية مجانية وبسيطة، صُممت لمساعدتك في إنجاز حسابات ومهام يومية بسرعة وبدون تعقيد.',
    about_p2:'هدفنا تقديم أدوات دقيقة وسهلة الاستخدام على أي جهاز، مع الحفاظ على خصوصية بياناتك — كل الحسابات تتم مباشرة على متصفحك.',
    about_p3:'الموقع في تطوير مستمر، ونضيف أدوات جديدة بشكل دوري بناءً على احتياجات المستخدمين.',
    contact_title:'تواصل معنا', contact_sub:'عندك اقتراح لأداة جديدة أو واجهت مشكلة؟ راسلنا',
    contact_name:'الاسم', contact_email:'البريد الإلكتروني', contact_msg:'رسالتك',
    contact_btn:'إرسال الرسالة', contact_error:'الرجاء تعبئة جميع الحقول', contact_email_invalid:'البريد الإلكتروني غير صحيح',
    word_placeholder:'اكتب أو الصق نصك هنا...',
    signup_btn:'تسجيل', signup_title:'إنشاء حساب مجاني', signup_name:'الاسم', signup_email:'البريد الإلكتروني',
    signup_submit:'إنشاء الحساب', signup_welcome:'مرحباً', signup_logout:'خروج',
    signup_note:'اختياري — احفظ إعداداتك عبر الأجهزة',
    hero_label:'أدوات مجانية وسريعة للاستخدام اليومي',
    badge_langs:'6 لغات', stat_tools:'أداة مجانية', stat_games:'🎮 ألعاب', stat_langs:'لغات مدعومة',
    stat_private:'معالجة محلية', stat_available:'متاح دائماً',
    section_tools:'جميع الأدوات', section_tools_sub:'اختر الأداة التي تحتاجها',
    footer_desc:'مجموعة أدوات إلكترونية مجانية تعمل مباشرة في متصفحك. بدون تسجيل، مجاني 100%، خصوصيتك محفوظة.',
    footer_tools_title:'الأدوات', footer_more_title:'المزيد', footer_links_title:'روابط',
    currency_card_title:'محول العملات', currency_card_desc:'حول بين أكثر من 30 عملة عالمية بأسعار حية',
    tip_card_title:'حاسبة الإكرامية', tip_card_desc:'احسب الإكرامية وقسّم الفاتورة بين الأصدقاء',
    qr_card_title:'مولد رمز QR', qr_card_desc:'ولّد رمز QR لأي رابط أو نص فوراً',
    tz_card_title:'محول المناطق الزمنية', tz_card_desc:'اعرف الوقت في أي مدينة حول العالم',
    rng_card_title:'مولد أرقام عشوائية', rng_card_desc:'ولّد أرقاماً عشوائية للقرعات والألعاب',
    sw_card_title:'ساعة إيقاف ومؤقت', sw_card_desc:'ساعة توقيت ومؤقت احترافي للتمارين والعمل',
    currency_title:'محول العملات', currency_sub:'أسعار صرف حية من الإنترنت',
    currency_amount:'المبلغ', currency_from:'من', currency_to:'إلى',
    currency_loading:'جاري تحميل الأسعار...', currency_offline:'تعذّر تحميل الأسعار — تأكد من اتصالك بالإنترنت',
    tip_title:'حاسبة الإكرامية', tip_sub:'احسب الإكرامية وقسّم الفاتورة بسهولة',
    tip_bill:'إجمالي الفاتورة', tip_pct:'نسبة الإكرامية:', tip_people:'عدد الأشخاص',
    tip_amount:'الإكرامية', tip_total:'الإجمالي', tip_per_person:'للشخص الواحد',
    qr_title:'مولد رمز QR', qr_sub:'ولّد رمز QR لأي رابط أو نص فوراً',
    qr_input:'الرابط أو النص', qr_placeholder:'https://example.com أو أي نص...',
    qr_generate:'توليد الرمز', qr_download:'تنزيل الصورة', qr_hint:'اكتب أي رابط أو نص لتوليد الرمز',
    tz_title:'محول المناطق الزمنية', tz_sub:'اعرف الوقت في أي مدينة حول العالم',
    tz_convert:'حوّل وقتاً محدداً', tz_from:'من منطقة', tz_to:'إلى منطقة',
    rng_title:'مولد أرقام عشوائية', rng_sub:'ولّد أرقاماً عشوائية للقرعات والألعاب',
    rng_min:'أصغر رقم', rng_max:'أكبر رقم', rng_count:'عدد الأرقام:', rng_btn:'🎲 ولّد مرة أخرى', rng_history:'السجل',
    sw_title:'ساعة إيقاف ومؤقت', sw_sub:'ساعة توقيت ومؤقت للتمارين والعمل',
    sw_tab:'ساعة إيقاف', timer_tab:'مؤقت', sw_start:'ابدأ', sw_pause:'إيقاف مؤقت',
    sw_lap:'دورة', sw_reset:'إعادة', timer_min:'دقائق', timer_sec:'ثواني', timer_done:'⏰ انتهى الوقت!',
    cat_all:'الكل', cat_health:'💪 الصحة', cat_money:'💰 المال', cat_productivity:'⚙️ الإنتاجية', cat_quick:'⚡ سريعة',
    search_placeholder:'ابحث عن أداة...', search_no_results:'لم يُعثر على أداة بهذا الاسم',
    related_title:'أدوات ذات صلة',
    pwa_title:'ثبّت التطبيق', pwa_sub:'أضف أدواتي للشاشة الرئيسية للوصول السريع بدون إنترنت', pwa_install:'تثبيت', pwa_later:'لاحقاً',
    cat_oman:'🌍 عمان', cat_games:'🎮 ألعاب',
    guess_card_title:'لعبة تخمين الرقم', guess_card_desc:'خمّن الرقم السري في أقل عدد من المحاولات',
    memory_card_title:'لعبة الذاكرة', memory_card_desc:'طابق البطاقات واختبر ذاكرتك',
    qmath_card_title:'تحدي الأذكياء — الحساب السريع', qmath_card_desc:'100 مستوى — من مبتدئ إلى أسطورة! هل أنت ذكي؟',
    react_card_title:'اختبار رد الفعل', react_card_desc:'اضغط عند اخضرار الزر — كن أسرع!',
    car_card_title:'لعبة السيارات', car_card_desc:'تجنب السيارات الأخرى وحقق أعلى نقطة!',
    jump_card_title:'لعبة القفز — منصات', jump_card_desc:'اقفز بين المنصات واجمع النجوم مثل ماريو!',
    kids_card_title:'تعلّم مع الأطفال', kids_card_desc:'أرقام، ألوان، حيوانات — للأطفال من ٢ إلى ٦ سنوات',
    vat_card_title:'حاسبة VAT الخليج', vat_card_desc:'احسب ضريبة القيمة المضافة لعمان والسعودية والإمارات',
    sal_card_title:'حاسبة الراتب — عمان', sal_card_desc:'احسب راتبك الصافي مع خصم PASI للمواطنين',
    eos_card_title:'حاسبة نهاية الخدمة', eos_card_desc:'احسب مكافأة نهاية خدمتك وفق قانون العمل العماني',
    hijri_card_title:'محوّل التاريخ الهجري', hijri_card_desc:'حوّل بين التقويم الهجري والميلادي بسهولة',
    pct_card_title:'حاسبة النسبة والخصم', pct_card_desc:'احسب النسب المئوية والخصومات والزيادات بسهولة',
    ci_card_title:'حاسبة الفائدة المركبة', ci_card_desc:'احسب نمو استثمارك أو قرضك مع الفائدة المتراكمة',
    dd_card_title:'الفرق بين تاريخين', dd_card_desc:'احسب عدد الأيام والأسابيع والأشهر بين أي تاريخين',
    fc_card_title:'محوّل الملفات', fc_card_desc:'حوّل Word وExcel وCSV في متصفحك',
    ic_card_title:'ضغط الصور', ic_card_desc:'قلّل حجم صورتك بدون رفعها لأي خادم',
    fav_title:'⭐ المفضلة', recent_title:'✨ قد تهمك',
    badge_count:'22 أداة', badge_count_lbl:'أداة',
    dark_on:'🌙', dark_off:'☀️',
    related_tools:'أدوات مرتبطة:', popular_title:'الأكثر استخدامًا', country_recommended:'موصى به لـ',
    eos_title:'حاسبة نهاية الخدمة — سلطنة عُمان 🇴🇲',
    eos_sub:'وفق أحكام قانون العمل العماني',
    eos_start:'تاريخ بداية العمل', eos_end:'تاريخ انتهاء العمل',
    eos_salary:'الراتب الأساسي الأخير (ر.ع)', eos_reason:'سبب انتهاء الخدمة',
    eos_resignation:'استقالة', eos_termination:'فصل من الخدمة', eos_retirement:'تقاعد',
    eos_result_lbl:'مكافأة نهاية الخدمة (ر.ع)',
    eos_years_lbl:'سنوات الخدمة', eos_months_lbl:'أشهر إضافية', eos_daily_lbl:'الراتب اليومي (ر.ع)',
    faq_title:'❓ أسئلة شائعة',
    ic_title:'ضغط وتصغير الصور', ic_sub:'يعمل داخل متصفحك — لا يتم رفع صورك لأي خادم ✅',
    ic_drop_text:'اضغط هنا أو اسحب صورتك', ic_drop_sub:'JPG، PNG، WebP — حتى 20MB',
    ic_quality_lbl:'جودة الضغط:', ic_max_compress:'أقصى ضغط', ic_max_quality:'أعلى جودة',
    ic_orig_size_lbl:'الحجم الأصلي', ic_comp_size_lbl:'بعد الضغط', ic_savings_lbl:'التوفير',
    ic_orig_img:'الصورة الأصلية', ic_comp_img:'مضغوطة', ic_quality_short:'جودة',
    ic_download_btn:'⬇️ تحميل الصورة المضغوطة', ic_another_btn:'🔄 اختر صورة أخرى',
    ic_privacy_title:'🔒 خصوصية تامة',
    ic_privacy_text:'يعمل هذا الضاغط بالكامل داخل متصفحك باستخدام تقنية Canvas API. لا يتم إرسال صورتك إلى أي خادم — بياناتك لا تغادر جهازك.',
    ic_small_img:'الصورة صغيرة جداً — جرّب تخفيض الجودة أكثر للحصول على توفير أعلى',
    ic_faq1_q:'هل يُمكن ضغط PNG بدون خسارة؟',
    ic_faq1_a:'PNG يُحوَّل إلى JPEG للضغط (مع خسارة طفيفة). إذا أردت PNG شفافاً بدون خسارة، قلّل الأبعاد بدلاً من الجودة.',
    ic_faq2_q:'ما الجودة الموصى بها لمواقع الويب؟',
    ic_faq2_a:'70-80% تُعطي توازناً جيداً بين الحجم والجودة. للصور التي تُرفع على وسائل التواصل 60-75% كافية.',
    ic_faq3_q:'لماذا الصورة المضغوطة أحياناً أكبر؟',
    ic_faq3_a:'إذا كانت الصورة الأصلية بجودة منخفضة جداً أو تنسيق PNG، قد لا يُقلّل الضغط حجمها. جرّب تخفيض الجودة أكثر.',
    pct_sub:'ثلاثة أنواع من الحسابات في أداة واحدة',
    pct_tab1:'X% من رقم', pct_tab2:'ما النسبة؟', pct_tab3:'نسبة التغيير',
    pct_pct:'النسبة %', pct_num:'الرقم', pct_first:'الرقم الأول', pct_second:'الرقم الثاني',
    pct_from_val:'من القيمة', pct_to_val:'إلى القيمة',
    pct_quick_ref_title:'🧮 مرجع سريع — نسب شائعة',
    pct_increase:'زيادة بنسبة', pct_decrease:'انخفاض بنسبة', pct_pct_of:'% من', pct_is:'هو',
    ci_sub:'احسب نمو استثمارك أو قرضك مع الفائدة المتراكمة',
    ci_principal:'رأس المال (المبلغ الأساسي)', ci_rate:'معدل الفائدة السنوي %',
    ci_years:'المدة (بالسنوات)', ci_freq:'تكرار الاحتساب', ci_monthly:'إضافة شهرية اختيارية',
    ci_annually:'سنوياً', ci_quarterly:'ربع سنوي', ci_monthly_f:'شهرياً', ci_daily:'يومياً',
    ci_result_lbl:'المبلغ النهائي', ci_capital_lbl:'رأس المال الأصلي',
    ci_interest_lbl:'إجمالي الفائدة', ci_additions_lbl:'إجمالي الإضافات',
    ci_table_title:'📊 جدول النمو السنوي',
    ci_th_year:'السنة', ci_th_amount:'المبلغ', ci_th_int_added:'الفائدة المضافة', ci_th_total_int:'إجمالي الفائدة',
    dd_sub:'أيام، أسابيع، أشهر وسنوات بين أي تاريخين',
    dd_from_lbl:'التاريخ الأول (من)', dd_to_lbl:'التاريخ الثاني (إلى)',
    dd_preset_today:'من اليوم', dd_preset_ny:'حتى رأس السنة', dd_preset_ramadan:'حتى رمضان 2027',
    dd_result_lbl:'يوم إجمالاً',
    dd_years_lbl:'سنة', dd_months_lbl:'شهر', dd_days_lbl:'يوم',
    dd_weeks_lbl:'أسبوع', dd_hours_lbl:'ساعة', dd_workdays_lbl:'يوم عمل (تقريبي)',
    dd_upcoming_title:'⚡ أحداث قادمة',
    vat_sub:'عمان • السعودية • الإمارات • البحرين',
    vat_country_lbl:'الدولة', vat_mode_lbl:'نوع الحساب',
    vat_add_mode:'إضافة ضريبة', vat_extract_mode:'استخراج ضريبة',
    vat_amount_before:'المبلغ قبل الضريبة', vat_amount_after:'المبلغ شامل الضريبة',
    vat_rate_lbl:'نسبة الضريبة', vat_tax_lbl:'قيمة الضريبة', vat_total_lbl:'الإجمالي شامل الضريبة',
    vat_table_title:'نسب VAT في الخليج',
    sal_sub:'احسب راتبك الصافي مع خصم PASI للمواطنين',
    sal_nationality_lbl:'الجنسية', sal_omani:'عماني (خصم PASI 7%)', sal_expat:'وافد (بدون خصم PASI)',
    sal_basic_lbl:'الراتب الأساسي (ر.ع)', sal_housing_lbl:'بدل السكن (ر.ع)',
    sal_transport_lbl:'بدل النقل (ر.ع)', sal_other_lbl:'بدلات أخرى (ر.ع)',
    sal_net_lbl:'الراتب الصافي (ر.ع)', sal_gross_lbl:'الإجمالي قبل الخصم',
    sal_annual_lbl:'الراتب السنوي', sal_pasi_lbl:'خصم PASI (7%)',
    sal_info_title:'📌 معلومات PASI في عُمان',
    hij_sub:'تحويل فوري ودقيق في كلا الاتجاهين',
    hij_mode_gh:'🗓️ ميلادي → هجري', hij_mode_hg:'🌙 هجري → ميلادي',
    hij_greg_date_lbl:'اختر التاريخ الميلادي',
    hij_day_lbl:'اليوم', hij_month_lbl:'الشهر الهجري', hij_year_lbl:'السنة الهجرية',
    hij_today_title:'📅 التاريخ الهجري لليوم', hij_months_title:'🌙 الأشهر الهجرية',
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_contact:'Contact',
    back:'← Back to Home', footer_about:'About', footer_contact:'Contact',
    footer_copy:'© 2026 Adawati — All tools are free and private',
    hero_title:'Free Online Tools for Calculation, Conversion & Productivity',
    hero_sub:'Calculate, convert, create and use free tools directly from your browser — no install, works on mobile and desktop',
    badge_count:'14 Tools', badge_free:'100% Free', badge_noreg:'No Registration', badge_privacy:'Local Processing',
    bmi_card_title:'BMI Calculator', bmi_card_desc:'Calculate your Body Mass Index and check your health',
    diet_card_title:'Calorie & Diet Plan Calculator', diet_card_desc:'Calculate your daily needs + get a full diet plan',
    loan_card_title:'Monthly Payment Calculator', loan_card_desc:'Calculate payments for any loan or financing',
    age_card_title:'Age Calculator', age_card_desc:'Your exact age in years, months and days',
    discount_card_title:'Discount Calculator', discount_card_desc:'Calculate percentages and discounts instantly',
    unit_card_title:'Unit Converter', unit_card_desc:'Convert between length, weight and temperature units',
    pass_card_title:'Password Generator', pass_card_desc:'Strong and secure passwords in one click',
    word_card_title:'Word & Character Counter', word_card_desc:'Instant counter for your texts and articles',
    start:'Start →',
    bmi_title:'BMI Calculator', bmi_sub:'Know your health status in seconds',
    bmi_weight:'Weight (kg)', bmi_height:'Height (cm)', bmi_btn:'Calculate BMI',
    bmi_underweight:'Underweight', bmi_normal:'Normal weight ✓', bmi_overweight:'Overweight', bmi_obese:'Obese', bmi_invalid:'Please enter valid numbers',
    age_title:'Age Calculator', age_sub:'Your exact age in years, months and days',
    age_label:'Date of Birth', age_btn:'Calculate My Age',
    age_years:'Years', age_months:'Months', age_days:'Days', age_total:'Total Days', age_next:'Days to Birthday', age_alert:'Please select your date of birth',
    loan_title:'Monthly Payment Calculator', loan_sub:'Calculate payments for any loan or financing',
    loan_amount:'Loan Amount', loan_rate:'Annual Interest Rate %', loan_years:'Repayment Period (Years)',
    loan_monthly:'Monthly Payment', loan_total:'Total Amount Paid', loan_interest:'Total Interest',
    discount_title:'Discount & Percentage Calculator', discount_sub:'Calculate percentages and discounts quickly',
    tab_percent:'Percentage', tab_discount:'Discount',
    percent_label1:'What is', percent_label2:'% of the number',
    discount_label1:'Original Price', discount_label2:'Discount %',
    unit_title:'Unit Converter', unit_sub:'Convert between length and weight units',
    tab_length:'Length', tab_weight:'Weight', unit_value:'Value', unit_from:'From', unit_to:'To',
    pass_title:'Password Generator', pass_sub:'Strong and secure passwords in one click',
    pass_length:'Length:', pass_numbers:'Numbers (0–9)', pass_symbols:'Symbols (!@#$)', pass_upper:'Uppercase Letters',
    pass_btn:'Generate New Password', pass_copied:'Copied ✓',
    word_title:'Word & Character Counter', word_sub:'Instant counter for your texts and articles',
    word_words:'Words', word_chars:'Characters', word_nospace:'Without Spaces', word_sentences:'Sentences',
    diet_title:'Calorie & Diet Plan Calculator', diet_sub:'Calculate your daily calories, protein, carbs and fats',
    diet_gender:'Gender', diet_male:'Male', diet_female:'Female',
    diet_age:'Age', diet_weight:'Weight (kg)', diet_height:'Height (cm)',
    diet_activity:'Activity Level', diet_goal:'Goal', diet_btn:'Calculate My Daily Needs',
    diet_calories:'Calories per Day', diet_protein:'Protein (g)', diet_carb:'Carbs (g)', diet_fat:'Fat (g)',
    diet_act1:'Sedentary (desk job)', diet_act2:'Light activity (1–3 days/week)',
    diet_act3:'Moderate activity (3–5 days/week)', diet_act4:'High activity (6–7 days/week)', diet_act5:'Very active (athlete / physical work)',
    diet_goal1:'Lose Weight', diet_goal2:'Maintain Weight', diet_goal3:'Gain Weight',
    diet_goal4:'Body Shredding', diet_goal5:'Body Toning', diet_goal6:'Muscle Mass Building',
    diet_free_badge:'🎉 Special Offer — First 21 Days Completely Free!',
    diet_pro_title:'🔒 Complete Diet Plan',
    diet_pro_f1:'Detailed daily meal schedule (7 days)', diet_pro_f2:'Food alternatives list based on your taste',
    diet_pro_f3:'Printable and downloadable file', diet_pro_f4:'Weekly update based on your progress',
    diet_trial:'21 days free • No credit card required', diet_pro_btn:'Start Your Free Trial Now',
    diet_alert:'Please fill in age, weight and height',
    about_title:'About Us', about_sub:'The story of Adawati',
    about_p1:'"Adawati" is a collection of free and simple online tools, designed to help you complete daily calculations and tasks quickly and without complexity.',
    about_p2:'Our goal is to provide accurate and easy-to-use tools on any device, while fully protecting your privacy — all calculations happen directly in your browser.',
    about_p3:'The site is continuously evolving, and we regularly add new tools based on user needs.',
    contact_title:'Contact Us', contact_sub:'Have a suggestion or found a problem? Write to us',
    contact_name:'Name', contact_email:'Email Address', contact_msg:'Message',
    contact_btn:'Send Message', contact_error:'Please fill in all fields', contact_email_invalid:'Invalid email address',
    word_placeholder:'Type or paste your text here...',
    signup_btn:'Sign Up', signup_title:'Create Free Account', signup_name:'Name', signup_email:'Email',
    signup_submit:'Create Account', signup_welcome:'Welcome', signup_logout:'Sign Out',
    signup_note:'Optional — save your settings across devices',
    hero_label:'Free tools for your daily use',
    badge_langs:'6 Languages', stat_tools:'Free Tools', stat_games:'🎮 Games', stat_langs:'Languages',
    stat_private:'Local Processing', stat_available:'Always Available',
    section_tools:'All Tools', section_tools_sub:'Choose the tool you need',
    footer_desc:'A collection of free online tools that work directly in your browser. No registration, 100% free, your privacy is protected.',
    footer_tools_title:'Tools', footer_more_title:'More', footer_links_title:'Links',
    currency_card_title:'Currency Converter', currency_card_desc:'Convert between 30+ world currencies with live rates',
    tip_card_title:'Tip Calculator', tip_card_desc:'Calculate tip and split bill between friends',
    qr_card_title:'QR Code Generator', qr_card_desc:'Generate a QR code for any link or text instantly',
    tz_card_title:'Time Zone Converter', tz_card_desc:'Find the current time in any city around the world',
    rng_card_title:'Random Number Generator', rng_card_desc:'Generate random numbers for draws and games',
    sw_card_title:'Stopwatch & Timer', sw_card_desc:'Professional stopwatch and countdown timer',
    currency_title:'Currency Converter', currency_sub:'Live exchange rates from the internet',
    currency_amount:'Amount', currency_from:'From', currency_to:'To',
    currency_loading:'Loading rates...', currency_offline:'Could not load rates — check your internet connection',
    tip_title:'Tip Calculator', tip_sub:'Calculate tip and split the bill easily',
    tip_bill:'Total Bill', tip_pct:'Tip %:', tip_people:'Number of People',
    tip_amount:'Tip', tip_total:'Total', tip_per_person:'Per Person',
    qr_title:'QR Code Generator', qr_sub:'Generate a QR code for any link or text instantly',
    qr_input:'Link or Text', qr_placeholder:'https://example.com or any text...',
    qr_generate:'Generate Code', qr_download:'Download Image', qr_hint:'Type any link or text to generate the code',
    tz_title:'Time Zone Converter', tz_sub:'Find the current time in any city around the world',
    tz_convert:'Convert a specific time', tz_from:'From Zone', tz_to:'To Zone',
    rng_title:'Random Number Generator', rng_sub:'Generate random numbers for draws and games',
    rng_min:'Min Number', rng_max:'Max Number', rng_count:'Count:', rng_btn:'🎲 Generate Again', rng_history:'History',
    sw_title:'Stopwatch & Timer', sw_sub:'Professional stopwatch and timer for exercise and work',
    sw_tab:'Stopwatch', timer_tab:'Timer', sw_start:'Start', sw_pause:'Pause',
    sw_lap:'Lap', sw_reset:'Reset', timer_min:'Minutes', timer_sec:'Seconds', timer_done:'⏰ Time\'s up!',
    cat_all:'All', cat_health:'💪 Health', cat_money:'💰 Money', cat_productivity:'⚙️ Productivity', cat_quick:'⚡ Quick',
    search_placeholder:'Search tools...', search_no_results:'No tools found with that name',
    related_title:'Related Tools',
    pwa_title:'Install App', pwa_sub:'Add Adawati to your home screen for quick offline access', pwa_install:'Install', pwa_later:'Later',
    cat_oman:'🌍 Oman', cat_games:'🎮 Games',
    guess_card_title:'Number Guessing Game', guess_card_desc:'Guess the secret number in as few tries as possible',
    memory_card_title:'Memory Game', memory_card_desc:'Match the cards and test your memory',
    qmath_card_title:'Smart Challenge — Quick Math', qmath_card_desc:'100 levels from Beginner to Legend! Are you smart?',
    react_card_title:'Reaction Test', react_card_desc:'Click when the button turns green — be fastest!',
    car_card_title:'Car Race Game', car_card_desc:'Dodge the other cars and beat the high score!',
    jump_card_title:'Jump Game — Platformer', jump_card_desc:'Jump between platforms and collect stars like Mario!',
    kids_card_title:'Kids Learning Game', kids_card_desc:'Numbers, colors, animals — for children aged 2 to 6 years',
    vat_card_title:'VAT Calculator Gulf', vat_card_desc:'Calculate VAT for Oman, Saudi Arabia and UAE',
    sal_card_title:'Salary Calculator — Oman', sal_card_desc:'Calculate your net salary including PASI deduction',
    eos_card_title:'End of Service Calculator', eos_card_desc:'Calculate your gratuity under Omani labor law',
    hijri_card_title:'Hijri Date Converter', hijri_card_desc:'Convert between Hijri and Gregorian calendars easily',
    pct_card_title:'Percentage & Discount', pct_card_desc:'Calculate percentages, discounts and changes easily',
    ci_card_title:'Compound Interest Calculator', ci_card_desc:'Calculate how your investment or loan grows over time',
    dd_card_title:'Date Difference', dd_card_desc:'Count days, weeks and months between any two dates',
    fc_card_title:'File Converter', fc_card_desc:'Convert Word, Excel & CSV in your browser',
    ic_card_title:'Image Compressor', ic_card_desc:'Reduce image size without uploading to any server',
    fav_title:'⭐ Favorites', recent_title:'✨ You Might Like',
    badge_count:'22 Tools', badge_count_lbl:'Tools',
    dark_on:'🌙', dark_off:'☀️',
    related_tools:'Related Tools:', popular_title:'Most Used', country_recommended:'Recommended for',
    eos_title:'End of Service Calculator — Oman 🇴🇲',
    eos_sub:'As per Oman Labor Law',
    eos_start:'Start Date', eos_end:'End Date',
    eos_salary:'Last Basic Salary (OMR)', eos_reason:'Reason for Termination',
    eos_resignation:'Resignation', eos_termination:'Dismissal', eos_retirement:'Retirement',
    eos_result_lbl:'End of Service Gratuity (OMR)',
    eos_years_lbl:'Years of Service', eos_months_lbl:'Additional Months', eos_daily_lbl:'Daily Wage (OMR)',
    faq_title:'❓ FAQ',
    ic_title:'Compress & Resize Images', ic_sub:'Works in your browser — your images never leave your device ✅',
    ic_drop_text:'Click here or drag your image', ic_drop_sub:'JPG, PNG, WebP — up to 20MB',
    ic_quality_lbl:'Compression quality:', ic_max_compress:'Max compression', ic_max_quality:'Best quality',
    ic_orig_size_lbl:'Original size', ic_comp_size_lbl:'After compression', ic_savings_lbl:'Savings',
    ic_orig_img:'Original', ic_comp_img:'Compressed', ic_quality_short:'quality',
    ic_download_btn:'⬇️ Download Compressed Image', ic_another_btn:'🔄 Choose another image',
    ic_privacy_title:'🔒 Full Privacy',
    ic_privacy_text:'This compressor works entirely in your browser using Canvas API. Your image is never sent to any server — your data never leaves your device.',
    ic_small_img:'Image is already small — try lowering quality further for more savings',
    ic_faq1_q:'Can PNG be compressed without loss?',
    ic_faq1_a:'PNG is converted to JPEG for compression (with slight loss). For a transparent PNG without loss, reduce dimensions instead of quality.',
    ic_faq2_q:'What quality is recommended for websites?',
    ic_faq2_a:'70-80% gives a good balance between size and quality. For social media uploads, 60-75% is sufficient.',
    ic_faq3_q:'Why is the compressed image sometimes larger?',
    ic_faq3_a:'If the original image has very low quality or PNG format, compression may not reduce its size. Try lowering quality further.',
    pct_sub:'Three types of calculations in one tool',
    pct_tab1:'X% of a number', pct_tab2:'What percentage?', pct_tab3:'% change',
    pct_pct:'Percentage %', pct_num:'Number', pct_first:'First number', pct_second:'Second number',
    pct_from_val:'From value', pct_to_val:'To value',
    pct_quick_ref_title:'🧮 Quick Reference — Common Rates',
    pct_increase:'increase of', pct_decrease:'decrease of', pct_pct_of:'% of', pct_is:'is',
    ci_sub:'Calculate how your investment or loan grows with compound interest',
    ci_principal:'Principal (initial amount)', ci_rate:'Annual interest rate %',
    ci_years:'Duration (years)', ci_freq:'Compounding frequency', ci_monthly:'Optional monthly addition',
    ci_annually:'Annually', ci_quarterly:'Quarterly', ci_monthly_f:'Monthly', ci_daily:'Daily',
    ci_result_lbl:'Final Amount', ci_capital_lbl:'Original Capital',
    ci_interest_lbl:'Total Interest', ci_additions_lbl:'Total Additions',
    ci_table_title:'📊 Annual Growth Table',
    ci_th_year:'Year', ci_th_amount:'Amount', ci_th_int_added:'Interest Added', ci_th_total_int:'Total Interest',
    dd_sub:'Days, weeks, months and years between any two dates',
    dd_from_lbl:'First date (from)', dd_to_lbl:'Second date (to)',
    dd_preset_today:'From today', dd_preset_ny:'Until New Year', dd_preset_ramadan:'Until Ramadan 2027',
    dd_result_lbl:'days total',
    dd_years_lbl:'Year', dd_months_lbl:'Month', dd_days_lbl:'Day',
    dd_weeks_lbl:'Week', dd_hours_lbl:'Hour', dd_workdays_lbl:'Work day (approx.)',
    dd_upcoming_title:'⚡ Upcoming Events',
    vat_sub:'Oman • Saudi Arabia • UAE • Bahrain',
    vat_country_lbl:'Country', vat_mode_lbl:'Calculation type',
    vat_add_mode:'Add tax', vat_extract_mode:'Extract tax',
    vat_amount_before:'Amount before tax', vat_amount_after:'Amount including tax',
    vat_rate_lbl:'Tax rate', vat_tax_lbl:'Tax amount', vat_total_lbl:'Total including tax',
    vat_table_title:'Gulf VAT Rates',
    sal_sub:'Calculate your net salary with PASI deduction for Omanis',
    sal_nationality_lbl:'Nationality', sal_omani:'Omani (7% PASI deduction)', sal_expat:'Expat (no PASI deduction)',
    sal_basic_lbl:'Basic salary (OMR)', sal_housing_lbl:'Housing allowance (OMR)',
    sal_transport_lbl:'Transport allowance (OMR)', sal_other_lbl:'Other allowances (OMR)',
    sal_net_lbl:'Net salary (OMR)', sal_gross_lbl:'Gross before deduction',
    sal_annual_lbl:'Annual salary', sal_pasi_lbl:'PASI deduction (7%)',
    sal_info_title:'📌 PASI Information in Oman',
    hij_sub:'Instant and accurate conversion in both directions',
    hij_mode_gh:'🗓️ Gregorian → Hijri', hij_mode_hg:'🌙 Hijri → Gregorian',
    hij_greg_date_lbl:'Select Gregorian date',
    hij_day_lbl:'Day', hij_month_lbl:'Hijri Month', hij_year_lbl:'Hijri Year',
    hij_today_title:'📅 Today\'s Hijri Date', hij_months_title:'🌙 Hijri Months',
  },
  fr: {
    nav_home:'Accueil', nav_about:'À propos', nav_contact:'Contact',
    back:'← Retour à l\'accueil', footer_about:'À propos', footer_contact:'Contact',
    footer_copy:'© 2026 Adawati — Tous les outils sont gratuits et privés',
    hero_title:'Outils gratuits en ligne pour calculer, convertir et être productif',
    hero_sub:'Outils rapides et précis, fonctionnant directement dans votre navigateur — sans inscription, 100% gratuit',
    badge_count:'14 Outils', badge_free:'100% Gratuit', badge_noreg:'Sans inscription', badge_privacy:'Traitement local',
    bmi_card_title:'Calculateur d\'IMC', bmi_card_desc:'Calculez votre indice de masse corporelle',
    diet_card_title:'Calculateur de calories', diet_card_desc:'Calculez vos besoins quotidiens + plan alimentaire',
    loan_card_title:'Calculateur de mensualité', loan_card_desc:'Calculez les mensualités pour n\'importe quel prêt',
    age_card_title:'Calculateur d\'âge', age_card_desc:'Votre âge exact en années, mois et jours',
    discount_card_title:'Calculateur de remise', discount_card_desc:'Calculez les pourcentages et remises instantanément',
    unit_card_title:'Convertisseur d\'unités', unit_card_desc:'Convertissez entre unités de longueur et de poids',
    pass_card_title:'Générateur de mot de passe', pass_card_desc:'Mots de passe forts en un clic',
    word_card_title:'Compteur de mots', word_card_desc:'Compteur instantané pour vos textes',
    start:'Commencer →',
    bmi_title:'Calculateur d\'IMC', bmi_sub:'Connaissez votre état de santé en secondes',
    bmi_weight:'Poids (kg)', bmi_height:'Taille (cm)', bmi_btn:'Calculer l\'IMC',
    bmi_underweight:'Insuffisance pondérale', bmi_normal:'Poids normal ✓', bmi_overweight:'Surpoids', bmi_obese:'Obésité', bmi_invalid:'Veuillez entrer des nombres valides',
    age_title:'Calculateur d\'âge', age_sub:'Votre âge exact en années, mois et jours',
    age_label:'Date de naissance', age_btn:'Calculer mon âge',
    age_years:'Ans', age_months:'Mois', age_days:'Jours', age_total:'Total des jours', age_next:'Jours jusqu\'à votre anniversaire', age_alert:'Veuillez sélectionner votre date de naissance',
    loan_title:'Calculateur de mensualité', loan_sub:'Calculez les mensualités pour n\'importe quel prêt',
    loan_amount:'Montant du prêt', loan_rate:'Taux d\'intérêt annuel %', loan_years:'Durée (années)',
    loan_monthly:'Mensualité', loan_total:'Total payé', loan_interest:'Total des intérêts',
    discount_title:'Calculateur de remise', discount_sub:'Calculez les pourcentages et remises rapidement',
    tab_percent:'Pourcentage', tab_discount:'Remise',
    percent_label1:'Quelle est', percent_label2:'% du nombre',
    discount_label1:'Prix original', discount_label2:'Remise %',
    unit_title:'Convertisseur d\'unités', unit_sub:'Convertissez entre unités de longueur et de poids',
    tab_length:'Longueur', tab_weight:'Poids', unit_value:'Valeur', unit_from:'De', unit_to:'À',
    pass_title:'Générateur de mot de passe', pass_sub:'Mots de passe forts et sécurisés en un clic',
    pass_length:'Longueur :', pass_numbers:'Chiffres (0–9)', pass_symbols:'Symboles (!@#$)', pass_upper:'Majuscules',
    pass_btn:'Générer un nouveau mot de passe', pass_copied:'Copié ✓',
    word_title:'Compteur de mots et caractères', word_sub:'Compteur instantané pour vos textes',
    word_words:'Mots', word_chars:'Caractères', word_nospace:'Sans espaces', word_sentences:'Phrases',
    diet_title:'Calculateur de calories', diet_sub:'Calculez vos besoins quotidiens avec précision',
    diet_gender:'Genre', diet_male:'Homme', diet_female:'Femme',
    diet_age:'Âge', diet_weight:'Poids (kg)', diet_height:'Taille (cm)',
    diet_activity:'Niveau d\'activité', diet_goal:'Objectif', diet_btn:'Calculer mes besoins quotidiens',
    diet_calories:'Calories par jour', diet_protein:'Protéines (g)', diet_carb:'Glucides (g)', diet_fat:'Graisses (g)',
    diet_act1:'Sédentaire (bureau)', diet_act2:'Activité légère (1–3 jours/semaine)',
    diet_act3:'Activité modérée (3–5 jours/semaine)', diet_act4:'Activité élevée (6–7 jours/semaine)', diet_act5:'Très actif (athlète / travail physique)',
    diet_goal1:'Perdre du poids', diet_goal2:'Maintenir le poids', diet_goal3:'Prendre du poids',
    diet_goal4:'Sèche musculaire', diet_goal5:'Tonifier le corps', diet_goal6:'Prise de masse musculaire',
    diet_free_badge:'🎉 Offre spéciale — 21 premiers jours totalement gratuits!',
    diet_pro_title:'🔒 Plan alimentaire complet',
    diet_pro_f1:'Programme de repas détaillé (7 jours)', diet_pro_f2:'Liste d\'alternatives alimentaires',
    diet_pro_f3:'Fichier imprimable et téléchargeable', diet_pro_f4:'Mise à jour hebdomadaire',
    diet_trial:'21 jours gratuits • Sans carte bancaire', diet_pro_btn:'Commencer l\'essai gratuit',
    diet_alert:'Veuillez remplir l\'âge, le poids et la taille',
    about_title:'À propos de nous', about_sub:'L\'histoire d\'Adawati',
    about_p1:'"Adawati" est une collection d\'outils en ligne gratuits et simples, conçus pour vous aider à effectuer des calculs et tâches quotidiennes rapidement.',
    about_p2:'Notre objectif est de fournir des outils précis sur n\'importe quel appareil, tout en protégeant totalement votre vie privée — tous les calculs s\'effectuent dans votre navigateur.',
    about_p3:'Le site est en développement continu, et nous ajoutons régulièrement de nouveaux outils.',
    contact_title:'Contactez-nous', contact_sub:'Une suggestion ou un problème? Écrivez-nous',
    contact_name:'Nom', contact_email:'Adresse e-mail', contact_msg:'Message',
    contact_btn:'Envoyer le message', contact_error:'Veuillez remplir tous les champs', contact_email_invalid:'Adresse e-mail invalide',
    word_placeholder:'Tapez ou collez votre texte ici...',
    signup_btn:'S\'inscrire', signup_title:'Créer un compte gratuit', signup_name:'Nom', signup_email:'E-mail',
    signup_submit:'Créer le compte', signup_welcome:'Bienvenue', signup_logout:'Déconnexion',
    signup_note:'Facultatif — enregistrez vos paramètres sur tous vos appareils',
    hero_label:'Outils gratuits pour votre usage quotidien',
    badge_langs:'6 Langues', stat_tools:'Outils gratuits', stat_games:'🎮 Jeux', stat_langs:'Langues',
    stat_private:'Traitement local', stat_available:'Toujours disponible',
    section_tools:'Tous les outils', section_tools_sub:'Choisissez l\'outil dont vous avez besoin',
    footer_desc:'Des outils gratuits qui fonctionnent directement dans votre navigateur.',
    footer_tools_title:'Outils', footer_more_title:'Plus', footer_links_title:'Liens',
    currency_card_title:'Convertisseur de devises', currency_card_desc:'Convertissez entre 30+ devises mondiales avec des taux en direct',
    tip_card_title:'Calculateur de pourboire', tip_card_desc:'Calculez le pourboire et partagez la facture entre amis',
    qr_card_title:'Générateur de QR Code', qr_card_desc:'Générez un QR code pour n\'importe quel lien ou texte instantanément',
    tz_card_title:'Convertisseur de fuseaux horaires', tz_card_desc:'Trouvez l\'heure actuelle dans n\'importe quelle ville',
    rng_card_title:'Générateur de nombres aléatoires', rng_card_desc:'Générez des nombres aléatoires pour les tirages et jeux',
    sw_card_title:'Chronomètre et minuteur', sw_card_desc:'Chronomètre et minuteur professionnels',
    currency_title:'Convertisseur de devises', currency_sub:'Taux de change en direct',
    currency_amount:'Montant', currency_from:'De', currency_to:'À',
    currency_loading:'Chargement des taux...', currency_offline:'Impossible de charger les taux — vérifiez votre connexion',
    tip_title:'Calculateur de pourboire', tip_sub:'Calculez le pourboire et divisez la facture facilement',
    tip_bill:'Total de la facture', tip_pct:'Pourboire %:', tip_people:'Nombre de personnes',
    tip_amount:'Pourboire', tip_total:'Total', tip_per_person:'Par personne',
    qr_title:'Générateur de QR Code', qr_sub:'Générez un QR code instantanément',
    qr_input:'Lien ou texte', qr_placeholder:'https://example.com ou n\'importe quel texte...',
    qr_generate:'Générer le code', qr_download:'Télécharger l\'image', qr_hint:'Entrez un lien ou un texte pour générer le code',
    tz_title:'Convertisseur de fuseaux horaires', tz_sub:'Heure actuelle dans le monde',
    tz_convert:'Convertir une heure', tz_from:'Depuis', tz_to:'Vers',
    rng_title:'Générateur de nombres aléatoires', rng_sub:'Pour les tirages et jeux',
    rng_min:'Min', rng_max:'Max', rng_count:'Quantité:', rng_btn:'🎲 Générer à nouveau', rng_history:'Historique',
    sw_title:'Chronomètre et minuteur', sw_sub:'Chronomètre professionnel',
    sw_tab:'Chronomètre', timer_tab:'Minuteur', sw_start:'Démarrer', sw_pause:'Pause',
    sw_lap:'Tour', sw_reset:'Réinitialiser', timer_min:'Minutes', timer_sec:'Secondes', timer_done:'⏰ Temps écoulé!',
    cat_all:'Tous', cat_health:'💪 Santé', cat_money:'💰 Argent', cat_productivity:'⚙️ Productivité', cat_quick:'⚡ Rapides',
    search_placeholder:'Rechercher un outil...', search_no_results:'Aucun outil trouvé', related_title:'Outils similaires',
    pwa_title:'Installer l\'app', pwa_sub:'Ajoutez Adawati à votre écran d\'accueil', pwa_install:'Installer', pwa_later:'Plus tard',
    cat_oman:'🌍 Oman', cat_games:'🎮 Jeux',
    guess_card_title:'Jeu de devinette de nombre', guess_card_desc:'Devinez le nombre secret en un minimum d\'essais',
    memory_card_title:'Jeu de mémoire', memory_card_desc:'Associez les cartes et testez votre mémoire',
    qmath_card_title:'Défi des Génies — Maths', qmath_card_desc:'100 niveaux de Débutant à Légendaire!',
    react_card_title:'Test de Réaction', react_card_desc:'Cliquez quand le bouton devient vert — soyez le plus rapide!',
    car_card_title:'Jeu de Course Automobile', car_card_desc:'Évitez les voitures et battez le record!',
    jump_card_title:'Jeu de Sauts — Platformer', jump_card_desc:'Sautez entre les plateformes et collectez des étoiles!',
    kids_card_title:'Jeu Éducatif Enfants', kids_card_desc:'Chiffres, couleurs, animaux — pour enfants de 2 à 6 ans',
    vat_card_title:'Calculateur TVA Golfe', vat_card_desc:'Calculez la TVA pour Oman, l\'Arabie Saoudite et les EAU',
    sal_card_title:'Calculateur de salaire — Oman', sal_card_desc:'Calculez votre salaire net avec déductions PASI',
    eos_card_title:'Calculateur de fin de service', eos_card_desc:'Calculez votre indemnité selon le droit du travail omanais',
    hijri_card_title:'Convertisseur de date Hijri', hijri_card_desc:'Convertissez entre les calendriers hijri et grégorien',
    pct_card_title:'Pourcentage & Remise', pct_card_desc:'Calculez les pourcentages, remises et variations',
    ci_card_title:'Intérêts composés', ci_card_desc:'Calculez la croissance de votre investissement',
    dd_card_title:'Différence entre dates', dd_card_desc:'Comptez les jours, semaines et mois entre deux dates',
    fc_card_title:'Convertisseur de fichiers', fc_card_desc:'Convertissez Word, Excel et CSV dans votre navigateur',
    ic_card_title:'Compresseur d\'images', ic_card_desc:'Réduisez la taille de votre image sans envoi au serveur',
    fav_title:'⭐ Favoris', recent_title:'✨ Vous aimerez peut-être',
    badge_count:'22 Outils', badge_count_lbl:'Outils',
    dark_on:'🌙', dark_off:'☀️',
    related_tools:'Outils associés:', popular_title:'Les plus utilisés', country_recommended:'Recommandé pour',
    eos_title:'Calculateur de fin de service — Oman 🇴🇲',
    eos_sub:'Selon le droit du travail omanais',
    eos_start:'Date de début', eos_end:'Date de fin',
    eos_salary:'Dernier salaire de base (OMR)', eos_reason:'Raison de fin de contrat',
    eos_resignation:'Démission', eos_termination:'Licenciement', eos_retirement:'Retraite',
    eos_result_lbl:'Indemnité de fin de service (OMR)',
    eos_years_lbl:'Années de service', eos_months_lbl:'Mois supplémentaires', eos_daily_lbl:'Salaire journalier (OMR)',
    faq_title:'❓ Questions fréquentes',
    ic_title:'Compresser les images', ic_sub:'Fonctionne dans votre navigateur — vos images ne quittent jamais votre appareil ✅',
    ic_drop_text:'Cliquez ici ou faites glisser votre image', ic_drop_sub:'JPG, PNG, WebP — jusqu\'à 20 Mo',
    ic_quality_lbl:'Qualité de compression:', ic_max_compress:'Compression max', ic_max_quality:'Meilleure qualité',
    ic_orig_size_lbl:'Taille originale', ic_comp_size_lbl:'Après compression', ic_savings_lbl:'Économies',
    ic_orig_img:'Original', ic_comp_img:'Compressé', ic_quality_short:'qualité',
    ic_download_btn:'⬇️ Télécharger l\'image compressée', ic_another_btn:'🔄 Choisir une autre image',
    ic_privacy_title:'🔒 Confidentialité totale',
    ic_privacy_text:'Ce compresseur fonctionne entièrement dans votre navigateur via Canvas API. Votre image n\'est jamais envoyée à un serveur.',
    ic_small_img:'Image déjà petite — essayez de réduire la qualité pour plus d\'économies',
    ic_faq1_q:'Peut-on compresser un PNG sans perte?',
    ic_faq1_a:'Le PNG est converti en JPEG pour la compression (avec légère perte). Pour un PNG transparent sans perte, réduisez plutôt les dimensions.',
    ic_faq2_q:'Quelle qualité est recommandée pour les sites web?',
    ic_faq2_a:'70-80% offre un bon équilibre entre taille et qualité. Pour les réseaux sociaux, 60-75% est suffisant.',
    ic_faq3_q:'Pourquoi l\'image compressée est-elle parfois plus grande?',
    ic_faq3_a:'Si l\'image originale est de faible qualité ou en PNG, la compression peut ne pas réduire sa taille. Essayez de baisser davantage la qualité.',
    pct_sub:'Trois types de calculs en un seul outil',
    pct_tab1:'X% d\'un nombre', pct_tab2:'Quel pourcentage?', pct_tab3:'Variation %',
    pct_pct:'Pourcentage %', pct_num:'Nombre', pct_first:'Premier nombre', pct_second:'Deuxième nombre',
    pct_from_val:'De la valeur', pct_to_val:'À la valeur', pct_quick_ref_title:'🧮 Référence rapide',
    pct_increase:'augmentation de', pct_decrease:'diminution de', pct_pct_of:'% de', pct_is:'est',
    ci_sub:'Calculez la croissance de votre investissement avec les intérêts composés',
    ci_principal:'Capital initial', ci_rate:'Taux d\'intérêt annuel %', ci_years:'Durée (années)',
    ci_freq:'Fréquence de calcul', ci_monthly:'Ajout mensuel optionnel',
    ci_annually:'Annuellement', ci_quarterly:'Trimestriellement', ci_monthly_f:'Mensuellement', ci_daily:'Quotidiennement',
    ci_result_lbl:'Montant final', ci_capital_lbl:'Capital initial', ci_interest_lbl:'Intérêts totaux', ci_additions_lbl:'Ajouts totaux',
    ci_table_title:'📊 Tableau de croissance annuelle',
    ci_th_year:'Année', ci_th_amount:'Montant', ci_th_int_added:'Intérêts ajoutés', ci_th_total_int:'Total des intérêts',
    dd_sub:'Jours, semaines, mois et années entre deux dates',
    dd_from_lbl:'Première date (de)', dd_to_lbl:'Deuxième date (à)',
    dd_preset_today:'Depuis aujourd\'hui', dd_preset_ny:'Jusqu\'au Nouvel An', dd_preset_ramadan:'Jusqu\'au Ramadan 2027',
    dd_result_lbl:'jours au total', dd_years_lbl:'Année', dd_months_lbl:'Mois', dd_days_lbl:'Jour',
    dd_weeks_lbl:'Semaine', dd_hours_lbl:'Heure', dd_workdays_lbl:'Jour ouvré (approx.)', dd_upcoming_title:'⚡ Événements à venir',
    vat_sub:'Oman • Arabie Saoudite • Émirats • Bahreïn',
    vat_country_lbl:'Pays', vat_mode_lbl:'Type de calcul', vat_add_mode:'Ajouter taxe', vat_extract_mode:'Extraire taxe',
    vat_amount_before:'Montant HT', vat_amount_after:'Montant TTC',
    vat_rate_lbl:'Taux de taxe', vat_tax_lbl:'Montant de la taxe', vat_total_lbl:'Total TTC', vat_table_title:'TVA dans le Golfe',
    sal_sub:'Calculez votre salaire net avec déduction PASI pour Omanais',
    sal_nationality_lbl:'Nationalité', sal_omani:'Omanais (déduction PASI 7%)', sal_expat:'Expatrié (sans PASI)',
    sal_basic_lbl:'Salaire de base (OMR)', sal_housing_lbl:'Indemnité logement (OMR)',
    sal_transport_lbl:'Indemnité transport (OMR)', sal_other_lbl:'Autres indemnités (OMR)',
    sal_net_lbl:'Salaire net (OMR)', sal_gross_lbl:'Brut avant déduction',
    sal_annual_lbl:'Salaire annuel', sal_pasi_lbl:'Déduction PASI (7%)', sal_info_title:'📌 Informations PASI',
    hij_sub:'Conversion instantanée et précise dans les deux sens',
    hij_mode_gh:'🗓️ Grégorien → Hégirien', hij_mode_hg:'🌙 Hégirien → Grégorien',
    hij_greg_date_lbl:'Sélectionner la date grégorienne',
    hij_day_lbl:'Jour', hij_month_lbl:'Mois hégirien', hij_year_lbl:'Année hégirienne',
    hij_today_title:'📅 Date hégirienne d\'aujourd\'hui', hij_months_title:'🌙 Mois hégiriens',
  },
  es: {
    nav_home:'Inicio', nav_about:'Sobre nosotros', nav_contact:'Contacto',
    back:'← Volver al inicio', footer_about:'Sobre nosotros', footer_contact:'Contacto',
    footer_copy:'© 2026 Adawati — Todas las herramientas son gratuitas y privadas',
    hero_title:'Herramientas gratuitas en línea para calcular, convertir y ser productivo',
    hero_sub:'Herramientas rápidas y precisas que funcionan en tu navegador — sin registro, 100% gratuito',
    badge_count:'14 Herramientas', badge_free:'100% Gratis', badge_noreg:'Sin registro', badge_privacy:'Procesamiento local',
    bmi_card_title:'Calculadora de IMC', bmi_card_desc:'Calcula tu índice de masa corporal',
    diet_card_title:'Calculadora de calorías', diet_card_desc:'Calcula tus necesidades + plan de dieta',
    loan_card_title:'Calculadora de cuotas', loan_card_desc:'Calcula las cuotas para cualquier préstamo',
    age_card_title:'Calculadora de edad', age_card_desc:'Tu edad exacta en años, meses y días',
    discount_card_title:'Calculadora de descuento', discount_card_desc:'Calcula porcentajes y descuentos al instante',
    unit_card_title:'Conversor de unidades', unit_card_desc:'Convierte entre unidades de longitud y peso',
    pass_card_title:'Generador de contraseñas', pass_card_desc:'Contraseñas fuertes con un clic',
    word_card_title:'Contador de palabras', word_card_desc:'Contador instantáneo para tus textos',
    start:'Empezar →',
    bmi_title:'Calculadora de IMC', bmi_sub:'Conoce tu estado de salud en segundos',
    bmi_weight:'Peso (kg)', bmi_height:'Altura (cm)', bmi_btn:'Calcular IMC',
    bmi_underweight:'Bajo peso', bmi_normal:'Peso normal ✓', bmi_overweight:'Sobrepeso', bmi_obese:'Obesidad', bmi_invalid:'Por favor ingresa números válidos',
    age_title:'Calculadora de edad', age_sub:'Tu edad exacta en años, meses y días',
    age_label:'Fecha de nacimiento', age_btn:'Calcular mi edad',
    age_years:'Años', age_months:'Meses', age_days:'Días', age_total:'Total de días', age_next:'Días hasta tu cumpleaños', age_alert:'Por favor selecciona tu fecha de nacimiento',
    loan_title:'Calculadora de cuota mensual', loan_sub:'Calcula las cuotas para cualquier préstamo',
    loan_amount:'Monto del préstamo', loan_rate:'Tasa de interés anual %', loan_years:'Plazo (años)',
    loan_monthly:'Cuota mensual', loan_total:'Total pagado', loan_interest:'Total de intereses',
    discount_title:'Calculadora de descuento', discount_sub:'Calcula porcentajes y descuentos rápidamente',
    tab_percent:'Porcentaje', tab_discount:'Descuento',
    percent_label1:'¿Cuánto es', percent_label2:'% del número',
    discount_label1:'Precio original', discount_label2:'Descuento %',
    unit_title:'Conversor de unidades', unit_sub:'Convierte entre unidades de longitud y peso',
    tab_length:'Longitud', tab_weight:'Peso', unit_value:'Valor', unit_from:'De', unit_to:'A',
    pass_title:'Generador de contraseñas', pass_sub:'Contraseñas fuertes y seguras con un clic',
    pass_length:'Longitud:', pass_numbers:'Números (0–9)', pass_symbols:'Símbolos (!@#$)', pass_upper:'Letras mayúsculas',
    pass_btn:'Generar nueva contraseña', pass_copied:'Copiado ✓',
    word_title:'Contador de palabras y caracteres', word_sub:'Contador instantáneo para tus textos',
    word_words:'Palabras', word_chars:'Caracteres', word_nospace:'Sin espacios', word_sentences:'Oraciones',
    diet_title:'Calculadora de calorías', diet_sub:'Calcula tus necesidades diarias con precisión',
    diet_gender:'Género', diet_male:'Masculino', diet_female:'Femenino',
    diet_age:'Edad', diet_weight:'Peso (kg)', diet_height:'Altura (cm)',
    diet_activity:'Nivel de actividad', diet_goal:'Objetivo', diet_btn:'Calcular mis necesidades diarias',
    diet_calories:'Calorías por día', diet_protein:'Proteínas (g)', diet_carb:'Carbohidratos (g)', diet_fat:'Grasas (g)',
    diet_act1:'Sedentario (oficina)', diet_act2:'Actividad ligera (1–3 días/semana)',
    diet_act3:'Actividad moderada (3–5 días/semana)', diet_act4:'Actividad alta (6–7 días/semana)', diet_act5:'Muy activo (atleta / trabajo físico)',
    diet_goal1:'Perder peso', diet_goal2:'Mantener peso', diet_goal3:'Ganar peso',
    diet_goal4:'Definición muscular', diet_goal5:'Tonificación corporal', diet_goal6:'Aumento de masa muscular',
    diet_free_badge:'🎉 ¡Oferta especial — Primeros 21 días completamente gratis!',
    diet_pro_title:'🔒 Plan de dieta completo',
    diet_pro_f1:'Horario de comidas detallado (7 días)', diet_pro_f2:'Lista de alternativas alimentarias',
    diet_pro_f3:'Archivo imprimible y descargable', diet_pro_f4:'Actualización semanal según tu progreso',
    diet_trial:'21 días gratis • Sin tarjeta de crédito', diet_pro_btn:'Comenzar prueba gratuita',
    diet_alert:'Por favor completa la edad, peso y altura',
    about_title:'Sobre nosotros', about_sub:'La historia de Adawati',
    about_p1:'"Adawati" es una colección de herramientas en línea gratuitas y simples, diseñadas para ayudarte a realizar cálculos y tareas diarias rápidamente.',
    about_p2:'Nuestro objetivo es proporcionar herramientas precisas en cualquier dispositivo, protegiendo totalmente tu privacidad — todos los cálculos se realizan en tu navegador.',
    about_p3:'El sitio está en desarrollo continuo, y añadimos nuevas herramientas regularmente.',
    contact_title:'Contáctenos', contact_sub:'¿Sugerencia o problema? Escríbenos',
    contact_name:'Nombre', contact_email:'Correo electrónico', contact_msg:'Mensaje',
    contact_btn:'Enviar mensaje', contact_error:'Por favor completa todos los campos', contact_email_invalid:'Correo electrónico inválido',
    word_placeholder:'Escribe o pega tu texto aquí...',
    signup_btn:'Registrarse', signup_title:'Crear cuenta gratis', signup_name:'Nombre', signup_email:'Correo electrónico',
    signup_submit:'Crear cuenta', signup_welcome:'Bienvenido', signup_logout:'Cerrar sesión',
    signup_note:'Opcional — guarda tus ajustes en todos tus dispositivos',
    hero_label:'Herramientas gratuitas para tu uso diario',
    badge_langs:'6 Idiomas', stat_tools:'Herramientas', stat_games:'🎮 Juegos', stat_langs:'Idiomas',
    stat_private:'Procesamiento local', stat_available:'Siempre disponible',
    section_tools:'Todas las herramientas', section_tools_sub:'Elige la herramienta que necesitas',
    footer_desc:'Herramientas gratuitas que funcionan directamente en tu navegador.',
    footer_tools_title:'Herramientas', footer_more_title:'Más', footer_links_title:'Enlaces',
    currency_card_title:'Conversor de divisas', currency_card_desc:'Convierte entre 30+ divisas con tasas en vivo',
    tip_card_title:'Calculadora de propina', tip_card_desc:'Calcula la propina y divide la factura entre amigos',
    qr_card_title:'Generador de QR', qr_card_desc:'Genera un código QR para cualquier enlace o texto',
    tz_card_title:'Conversor de zonas horarias', tz_card_desc:'Encuentra la hora en cualquier ciudad del mundo',
    rng_card_title:'Generador de números aleatorios', rng_card_desc:'Genera números aleatorios para sorteos y juegos',
    sw_card_title:'Cronómetro y temporizador', sw_card_desc:'Cronómetro y temporizador profesional',
    currency_title:'Conversor de divisas', currency_sub:'Tasas de cambio en tiempo real',
    currency_amount:'Cantidad', currency_from:'De', currency_to:'A',
    currency_loading:'Cargando tasas...', currency_offline:'No se pudo cargar las tasas',
    tip_title:'Calculadora de propina', tip_sub:'Calcula la propina y divide la factura',
    tip_bill:'Total de la factura', tip_pct:'Propina %:', tip_people:'Número de personas',
    tip_amount:'Propina', tip_total:'Total', tip_per_person:'Por persona',
    qr_title:'Generador de QR', qr_sub:'Genera un código QR instantáneamente',
    qr_input:'Enlace o texto', qr_placeholder:'https://example.com o cualquier texto...',
    qr_generate:'Generar código', qr_download:'Descargar imagen', qr_hint:'Escribe un enlace o texto para generar el código',
    tz_title:'Conversor de zonas horarias', tz_sub:'Hora actual en el mundo',
    tz_convert:'Convertir una hora', tz_from:'Desde', tz_to:'Hacia',
    rng_title:'Generador aleatorio', rng_sub:'Para sorteos y juegos',
    rng_min:'Mínimo', rng_max:'Máximo', rng_count:'Cantidad:', rng_btn:'🎲 Generar de nuevo', rng_history:'Historial',
    sw_title:'Cronómetro y temporizador', sw_sub:'Cronómetro profesional',
    sw_tab:'Cronómetro', timer_tab:'Temporizador', sw_start:'Iniciar', sw_pause:'Pausar',
    sw_lap:'Vuelta', sw_reset:'Reiniciar', timer_min:'Minutos', timer_sec:'Segundos', timer_done:'⏰ ¡Tiempo terminado!',
    cat_all:'Todos', cat_health:'💪 Salud', cat_money:'💰 Dinero', cat_productivity:'⚙️ Productividad', cat_quick:'⚡ Rápidas',
    search_placeholder:'Buscar herramienta...', search_no_results:'No se encontraron herramientas', related_title:'Herramientas relacionadas',
    pwa_title:'Instalar app', pwa_sub:'Añade Adawati a tu pantalla de inicio', pwa_install:'Instalar', pwa_later:'Después',
    cat_oman:'🌍 Omán', cat_games:'🎮 Juegos',
    guess_card_title:'Juego de adivinar número', guess_card_desc:'Adivina el número secreto en el menor número de intentos',
    memory_card_title:'Juego de memoria', memory_card_desc:'Empareja las cartas y pon a prueba tu memoria',
    qmath_card_title:'Desafío de Genios — Matemáticas', qmath_card_desc:'¡100 niveles de Principiante a Leyenda!',
    react_card_title:'Test de Reacción', react_card_desc:'¡Haz clic cuando el botón se ponga verde — sé el más rápido!',
    car_card_title:'Juego de Carros', car_card_desc:'¡Esquiva los autos y bate el récord!',
    jump_card_title:'Juego de Saltos — Plataformas', jump_card_desc:'¡Salta entre plataformas y recoge estrellas!',
    kids_card_title:'Juego Educativo Niños', kids_card_desc:'Números, colores, animales — para niños de 2 a 6 años',
    vat_card_title:'Calculadora IVA Golfo', vat_card_desc:'Calcula el IVA para Omán, Arabia Saudí y EAU',
    sal_card_title:'Calculadora de sueldo — Omán', sal_card_desc:'Calcula tu sueldo neto con deducción PASI',
    eos_card_title:'Calculadora de fin de servicio', eos_card_desc:'Calcula tu gratificación según la ley laboral omaní',
    hijri_card_title:'Convertidor de fecha Hijri', hijri_card_desc:'Convierte entre calendarios hijri y gregoriano',
    pct_card_title:'Porcentaje y Descuento', pct_card_desc:'Calcula porcentajes, descuentos y variaciones',
    ci_card_title:'Interés compuesto', ci_card_desc:'Calcula el crecimiento de tu inversión',
    dd_card_title:'Diferencia entre fechas', dd_card_desc:'Cuenta días, semanas y meses entre dos fechas',
    fc_card_title:'Conversor de archivos', fc_card_desc:'Convierte Word, Excel y CSV en tu navegador',
    ic_card_title:'Compresor de imágenes', ic_card_desc:'Reduce el tamaño sin subir al servidor',
    fav_title:'⭐ Favoritos', recent_title:'✨ Puede que te interese',
    badge_count:'22 Herramientas', badge_count_lbl:'Herramientas',
    dark_on:'🌙', dark_off:'☀️',
    related_tools:'Herramientas relacionadas:', popular_title:'Más usados', country_recommended:'Recomendado para',
    eos_title:'Calculadora de fin de servicio — Omán 🇴🇲',
    eos_sub:'Según la Ley Laboral de Omán',
    eos_start:'Fecha de inicio', eos_end:'Fecha de fin',
    eos_salary:'Último salario básico (OMR)', eos_reason:'Motivo de terminación',
    eos_resignation:'Renuncia', eos_termination:'Despido', eos_retirement:'Jubilación',
    eos_result_lbl:'Indemnización por fin de servicio (OMR)',
    eos_years_lbl:'Años de servicio', eos_months_lbl:'Meses adicionales', eos_daily_lbl:'Salario diario (OMR)',
    faq_title:'❓ Preguntas frecuentes',
    ic_title:'Comprimir imágenes', ic_sub:'Funciona en tu navegador — tus imágenes nunca salen de tu dispositivo ✅',
    ic_drop_text:'Haz clic aquí o arrastra tu imagen', ic_drop_sub:'JPG, PNG, WebP — hasta 20MB',
    ic_quality_lbl:'Calidad de compresión:', ic_max_compress:'Máxima compresión', ic_max_quality:'Mejor calidad',
    ic_orig_size_lbl:'Tamaño original', ic_comp_size_lbl:'Tras compresión', ic_savings_lbl:'Ahorro',
    ic_orig_img:'Original', ic_comp_img:'Comprimido', ic_quality_short:'calidad',
    ic_download_btn:'⬇️ Descargar imagen comprimida', ic_another_btn:'🔄 Elegir otra imagen',
    ic_privacy_title:'🔒 Privacidad total',
    ic_privacy_text:'Este compresor funciona en tu navegador con Canvas API. Tu imagen nunca se envía a ningún servidor.',
    ic_small_img:'Imagen ya pequeña — prueba reducir la calidad para más ahorro',
    ic_faq1_q:'¿Se puede comprimir PNG sin pérdida?',
    ic_faq1_a:'El PNG se convierte a JPEG para compresión (con ligera pérdida). Para PNG transparente sin pérdida, reduce las dimensiones en lugar de la calidad.',
    ic_faq2_q:'¿Qué calidad se recomienda para sitios web?',
    ic_faq2_a:'70-80% ofrece buen equilibrio entre tamaño y calidad. Para redes sociales, 60-75% es suficiente.',
    ic_faq3_q:'¿Por qué la imagen comprimida a veces es más grande?',
    ic_faq3_a:'Si la imagen original tiene muy baja calidad o formato PNG, la compresión puede no reducir su tamaño. Intenta bajar más la calidad.',
    pct_sub:'Tres tipos de cálculos en una herramienta',
    pct_tab1:'X% de un número', pct_tab2:'¿Qué porcentaje?', pct_tab3:'Variación %',
    pct_pct:'Porcentaje %', pct_num:'Número', pct_first:'Primer número', pct_second:'Segundo número',
    pct_from_val:'Desde valor', pct_to_val:'Hasta valor', pct_quick_ref_title:'🧮 Referencia rápida',
    pct_increase:'aumento de', pct_decrease:'disminución de', pct_pct_of:'% de', pct_is:'es',
    ci_sub:'Calcula cómo crece tu inversión con interés compuesto',
    ci_principal:'Capital inicial', ci_rate:'Tasa de interés anual %', ci_years:'Duración (años)',
    ci_freq:'Frecuencia de capitalización', ci_monthly:'Adición mensual opcional',
    ci_annually:'Anualmente', ci_quarterly:'Trimestralmente', ci_monthly_f:'Mensualmente', ci_daily:'Diariamente',
    ci_result_lbl:'Cantidad final', ci_capital_lbl:'Capital original', ci_interest_lbl:'Interés total', ci_additions_lbl:'Adiciones totales',
    ci_table_title:'📊 Tabla de crecimiento anual',
    ci_th_year:'Año', ci_th_amount:'Cantidad', ci_th_int_added:'Interés añadido', ci_th_total_int:'Interés total',
    dd_sub:'Días, semanas, meses y años entre dos fechas',
    dd_from_lbl:'Primera fecha (desde)', dd_to_lbl:'Segunda fecha (hasta)',
    dd_preset_today:'Desde hoy', dd_preset_ny:'Hasta Año Nuevo', dd_preset_ramadan:'Hasta Ramadán 2027',
    dd_result_lbl:'días en total', dd_years_lbl:'Año', dd_months_lbl:'Mes', dd_days_lbl:'Día',
    dd_weeks_lbl:'Semana', dd_hours_lbl:'Hora', dd_workdays_lbl:'Día laboral (aprox.)', dd_upcoming_title:'⚡ Próximos eventos',
    vat_sub:'Omán • Arabia Saudita • EAU • Baréin',
    vat_country_lbl:'País', vat_mode_lbl:'Tipo de cálculo', vat_add_mode:'Añadir impuesto', vat_extract_mode:'Extraer impuesto',
    vat_amount_before:'Monto antes de impuesto', vat_amount_after:'Monto con impuesto',
    vat_rate_lbl:'Tasa de impuesto', vat_tax_lbl:'Monto del impuesto', vat_total_lbl:'Total con impuesto', vat_table_title:'IVA en el Golfo',
    sal_sub:'Calcula tu salario neto con deducción PASI',
    sal_nationality_lbl:'Nacionalidad', sal_omani:'Omaní (deducción PASI 7%)', sal_expat:'Expatriado (sin PASI)',
    sal_basic_lbl:'Salario básico (OMR)', sal_housing_lbl:'Subsidio vivienda (OMR)',
    sal_transport_lbl:'Subsidio transporte (OMR)', sal_other_lbl:'Otros subsidios (OMR)',
    sal_net_lbl:'Salario neto (OMR)', sal_gross_lbl:'Bruto antes de deducción',
    sal_annual_lbl:'Salario anual', sal_pasi_lbl:'Deducción PASI (7%)', sal_info_title:'📌 Información PASI en Omán',
    hij_sub:'Conversión instantánea y precisa en ambas direcciones',
    hij_mode_gh:'🗓️ Gregoriano → Hijri', hij_mode_hg:'🌙 Hijri → Gregoriano',
    hij_greg_date_lbl:'Seleccionar fecha gregoriana',
    hij_day_lbl:'Día', hij_month_lbl:'Mes Hijri', hij_year_lbl:'Año Hijri',
    hij_today_title:'📅 Fecha Hijri de hoy', hij_months_title:'🌙 Meses Hijri',
  },
  de: {
    nav_home:'Startseite', nav_about:'Über uns', nav_contact:'Kontakt',
    back:'← Zurück zur Startseite', footer_about:'Über uns', footer_contact:'Kontakt',
    footer_copy:'© 2026 Adawati — Alle Tools sind kostenlos und privat',
    hero_title:'Kostenlose Online-Tools zum Berechnen, Konvertieren und Produktivsein',
    hero_sub:'Schnelle und genaue Tools, die direkt in Ihrem Browser funktionieren — ohne Registrierung, 100% kostenlos',
    badge_count:'14 Tools', badge_free:'100% Kostenlos', badge_noreg:'Ohne Registrierung', badge_privacy:'Lokale Verarbeitung',
    bmi_card_title:'BMI-Rechner', bmi_card_desc:'Berechnen Sie Ihren Body-Mass-Index',
    diet_card_title:'Kalorienrechner', diet_card_desc:'Berechnen Sie Ihren täglichen Bedarf + Ernährungsplan',
    loan_card_title:'Kreditrechner', loan_card_desc:'Berechnen Sie die Raten für jeden Kredit',
    age_card_title:'Altersrechner', age_card_desc:'Ihr genaues Alter in Jahren, Monaten und Tagen',
    discount_card_title:'Rabattrechner', discount_card_desc:'Prozentsätze und Rabatte sofort berechnen',
    unit_card_title:'Einheitenumrechner', unit_card_desc:'Konvertieren Sie Längen- und Gewichtseinheiten',
    pass_card_title:'Passwort-Generator', pass_card_desc:'Starke Passwörter mit einem Klick',
    word_card_title:'Wörterzähler', word_card_desc:'Sofortzähler für Ihre Texte',
    start:'Starten →',
    bmi_title:'BMI-Rechner', bmi_sub:'Kennen Sie Ihren Gesundheitsstatus in Sekunden',
    bmi_weight:'Gewicht (kg)', bmi_height:'Größe (cm)', bmi_btn:'BMI berechnen',
    bmi_underweight:'Untergewicht', bmi_normal:'Normalgewicht ✓', bmi_overweight:'Übergewicht', bmi_obese:'Fettleibigkeit', bmi_invalid:'Bitte gültige Zahlen eingeben',
    age_title:'Altersrechner', age_sub:'Ihr genaues Alter in Jahren, Monaten und Tagen',
    age_label:'Geburtsdatum', age_btn:'Mein Alter berechnen',
    age_years:'Jahre', age_months:'Monate', age_days:'Tage', age_total:'Gesamttage', age_next:'Tage bis zum Geburtstag', age_alert:'Bitte wählen Sie Ihr Geburtsdatum',
    loan_title:'Kreditrechner', loan_sub:'Berechnen Sie die Raten für jeden Kredit',
    loan_amount:'Kreditbetrag', loan_rate:'Jährlicher Zinssatz %', loan_years:'Laufzeit (Jahre)',
    loan_monthly:'Monatliche Rate', loan_total:'Gesamtzahlung', loan_interest:'Gesamtzinsen',
    discount_title:'Rabattrechner', discount_sub:'Prozentsätze und Rabatte schnell berechnen',
    tab_percent:'Prozentsatz', tab_discount:'Rabatt',
    percent_label1:'Wie viel ist', percent_label2:'% der Zahl',
    discount_label1:'Originalpreis', discount_label2:'Rabatt %',
    unit_title:'Einheitenumrechner', unit_sub:'Konvertieren Sie Längen- und Gewichtseinheiten',
    tab_length:'Länge', tab_weight:'Gewicht', unit_value:'Wert', unit_from:'Von', unit_to:'Nach',
    pass_title:'Passwort-Generator', pass_sub:'Starke und sichere Passwörter mit einem Klick',
    pass_length:'Länge:', pass_numbers:'Zahlen (0–9)', pass_symbols:'Symbole (!@#$)', pass_upper:'Großbuchstaben',
    pass_btn:'Neues Passwort generieren', pass_copied:'Kopiert ✓',
    word_title:'Wörter- und Zeichenzähler', word_sub:'Sofortzähler für Ihre Texte',
    word_words:'Wörter', word_chars:'Zeichen', word_nospace:'Ohne Leerzeichen', word_sentences:'Sätze',
    diet_title:'Kalorienrechner', diet_sub:'Berechnen Sie Ihren täglichen Bedarf',
    diet_gender:'Geschlecht', diet_male:'Männlich', diet_female:'Weiblich',
    diet_age:'Alter', diet_weight:'Gewicht (kg)', diet_height:'Größe (cm)',
    diet_activity:'Aktivitätsniveau', diet_goal:'Ziel', diet_btn:'Meinen täglichen Bedarf berechnen',
    diet_calories:'Kalorien pro Tag', diet_protein:'Protein (g)', diet_carb:'Kohlenhydrate (g)', diet_fat:'Fett (g)',
    diet_act1:'Sitzend (Bürojob)', diet_act2:'Leichte Aktivität (1–3 Tage/Woche)',
    diet_act3:'Mäßige Aktivität (3–5 Tage/Woche)', diet_act4:'Hohe Aktivität (6–7 Tage/Woche)', diet_act5:'Sehr aktiv (Athlet / körperliche Arbeit)',
    diet_goal1:'Gewicht verlieren', diet_goal2:'Gewicht halten', diet_goal3:'Gewicht zunehmen',
    diet_goal4:'Körperdefinition', diet_goal5:'Körperstraffung', diet_goal6:'Muskelaufbau',
    diet_free_badge:'🎉 Sonderangebot — Erste 21 Tage völlig kostenlos!',
    diet_pro_title:'🔒 Vollständiger Ernährungsplan',
    diet_pro_f1:'Detaillierter Mahlzeitenplan (7 Tage)', diet_pro_f2:'Liste von Lebensmittelalternativen',
    diet_pro_f3:'Druckbare und herunterladbare Datei', diet_pro_f4:'Wöchentliche Aktualisierung',
    diet_trial:'21 Tage kostenlos • Keine Kreditkarte', diet_pro_btn:'Kostenlose Testversion starten',
    diet_alert:'Bitte Alter, Gewicht und Größe eingeben',
    about_title:'Über uns', about_sub:'Die Geschichte von Adawati',
    about_p1:'"Adawati" ist eine Sammlung kostenloser Online-Tools, die entwickelt wurden, um tägliche Berechnungen schnell und unkompliziert zu erledigen.',
    about_p2:'Unser Ziel ist es, genaue Tools auf jedem Gerät bereitzustellen und dabei Ihre Privatsphäre vollständig zu schützen — alle Berechnungen erfolgen in Ihrem Browser.',
    about_p3:'Die Website wird kontinuierlich weiterentwickelt, und wir fügen regelmäßig neue Tools hinzu.',
    contact_title:'Kontaktieren Sie uns', contact_sub:'Vorschlag oder Problem? Schreiben Sie uns',
    contact_name:'Name', contact_email:'E-Mail-Adresse', contact_msg:'Nachricht',
    contact_btn:'Nachricht senden', contact_error:'Bitte alle Felder ausfüllen', contact_email_invalid:'Ungültige E-Mail-Adresse',
    word_placeholder:'Geben Sie Ihren Text hier ein oder fügen Sie ihn ein...',
    signup_btn:'Registrieren', signup_title:'Kostenloses Konto erstellen', signup_name:'Name', signup_email:'E-Mail',
    signup_submit:'Konto erstellen', signup_welcome:'Willkommen', signup_logout:'Abmelden',
    signup_note:'Optional — Einstellungen auf allen Geräten speichern',
    hero_label:'Kostenlose Tools für den täglichen Gebrauch',
    badge_langs:'6 Sprachen', stat_tools:'Kostenlose Tools', stat_games:'🎮 Spiele', stat_langs:'Sprachen',
    stat_private:'Lokale Verarbeitung', stat_available:'Immer verfügbar',
    section_tools:'Alle Tools', section_tools_sub:'Wählen Sie das benötigte Tool',
    footer_desc:'Kostenlose Online-Tools, die direkt in Ihrem Browser funktionieren.',
    footer_tools_title:'Tools', footer_more_title:'Mehr', footer_links_title:'Links',
    currency_card_title:'Währungsrechner', currency_card_desc:'Konvertieren Sie zwischen 30+ Währungen mit Live-Kursen',
    tip_card_title:'Trinkgeldrechner', tip_card_desc:'Berechnen Sie Trinkgeld und teilen Sie die Rechnung',
    qr_card_title:'QR-Code-Generator', qr_card_desc:'Erstellen Sie sofort einen QR-Code für jeden Link',
    tz_card_title:'Zeitzonenrechner', tz_card_desc:'Finden Sie die aktuelle Zeit in jeder Stadt der Welt',
    rng_card_title:'Zufallszahlengenerator', rng_card_desc:'Generieren Sie Zufallszahlen für Lotterien und Spiele',
    sw_card_title:'Stoppuhr und Timer', sw_card_desc:'Professionelle Stoppuhr und Countdown-Timer',
    currency_title:'Währungsrechner', currency_sub:'Live-Wechselkurse',
    currency_amount:'Betrag', currency_from:'Von', currency_to:'Nach',
    currency_loading:'Kurse werden geladen...', currency_offline:'Kurse konnten nicht geladen werden',
    tip_title:'Trinkgeldrechner', tip_sub:'Berechnen Sie Trinkgeld einfach',
    tip_bill:'Gesamtrechnung', tip_pct:'Trinkgeld %:', tip_people:'Anzahl Personen',
    tip_amount:'Trinkgeld', tip_total:'Gesamt', tip_per_person:'Pro Person',
    qr_title:'QR-Code-Generator', qr_sub:'Sofort QR-Code erstellen',
    qr_input:'Link oder Text', qr_placeholder:'https://example.com oder beliebiger Text...',
    qr_generate:'Code generieren', qr_download:'Bild herunterladen', qr_hint:'Geben Sie einen Link oder Text ein',
    tz_title:'Zeitzonenrechner', tz_sub:'Aktuelle Zeit weltweit',
    tz_convert:'Bestimmte Zeit umrechnen', tz_from:'Von Zone', tz_to:'Nach Zone',
    rng_title:'Zufallszahlengenerator', rng_sub:'Für Lotterien und Spiele',
    rng_min:'Minimum', rng_max:'Maximum', rng_count:'Anzahl:', rng_btn:'🎲 Erneut generieren', rng_history:'Verlauf',
    sw_title:'Stoppuhr und Timer', sw_sub:'Professionelle Stoppuhr',
    sw_tab:'Stoppuhr', timer_tab:'Timer', sw_start:'Starten', sw_pause:'Pause',
    sw_lap:'Runde', sw_reset:'Zurücksetzen', timer_min:'Minuten', timer_sec:'Sekunden', timer_done:'⏰ Zeit abgelaufen!',
    cat_all:'Alle', cat_health:'💪 Gesundheit', cat_money:'💰 Geld', cat_productivity:'⚙️ Produktivität', cat_quick:'⚡ Schnell',
    search_placeholder:'Werkzeug suchen...', search_no_results:'Kein Werkzeug gefunden', related_title:'Ähnliche Werkzeuge',
    pwa_title:'App installieren', pwa_sub:'Adawati zum Startbildschirm hinzufügen', pwa_install:'Installieren', pwa_later:'Später',
    cat_oman:'🌍 Oman', cat_games:'🎮 Spiele',
    guess_card_title:'Zahlen-Ratespiel', guess_card_desc:'Errate die geheime Zahl in so wenig Versuchen wie möglich',
    memory_card_title:'Gedächtnisspiel', memory_card_desc:'Paare die Karten und teste dein Gedächtnis',
    qmath_card_title:'Genie-Herausforderung — Mathe', qmath_card_desc:'100 Level von Anfänger bis Legende!',
    react_card_title:'Reaktionstest', react_card_desc:'Klicke wenn der Button grün wird — sei der Schnellste!',
    car_card_title:'Autorennspiel', car_card_desc:'Weiche den Autos aus und schlage den Highscore!',
    jump_card_title:'Sprung-Spiel — Plattformer', jump_card_desc:'Springe zwischen Plattformen und sammle Sterne!',
    kids_card_title:'Kinderlernspiel', kids_card_desc:'Zahlen, Farben, Tiere — für Kinder von 2 bis 6 Jahren',
    vat_card_title:'Mehrwertsteuer-Rechner Golf', vat_card_desc:'MwSt. für Oman, Saudi-Arabien und VAE berechnen',
    sal_card_title:'Gehaltsrechner — Oman', sal_card_desc:'Nettogehalt mit PASI-Abzug berechnen',
    eos_card_title:'Abfindungsrechner', eos_card_desc:'Abfindung nach omanischem Arbeitsrecht berechnen',
    hijri_card_title:'Hijri-Datumskonverter', hijri_card_desc:'Zwischen Hijri- und gregorianischem Kalender konvertieren',
    pct_card_title:'Prozent & Rabatt', pct_card_desc:'Prozentsätze, Rabatte und Änderungen berechnen',
    ci_card_title:'Zinseszins-Rechner', ci_card_desc:'Investitionswachstum berechnen',
    dd_card_title:'Datumsdifferenz', dd_card_desc:'Tage, Wochen und Monate zwischen zwei Daten zählen',
    fc_card_title:'Datei-Konverter', fc_card_desc:'Word, Excel und CSV im Browser konvertieren',
    ic_card_title:'Bildkompressor', ic_card_desc:'Bildgröße ohne Server-Upload reduzieren',
    fav_title:'⭐ Favoriten', recent_title:'✨ Das könnte Sie interessieren',
    badge_count:'22 Tools', badge_count_lbl:'Tools',
    dark_on:'🌙', dark_off:'☀️',
    related_tools:'Verwandte Tools:', popular_title:'Am häufigsten genutzt', country_recommended:'Empfohlen für',
    eos_title:'Abfindungsrechner — Oman 🇴🇲',
    eos_sub:'Gemäß dem omanischen Arbeitsrecht',
    eos_start:'Startdatum', eos_end:'Enddatum',
    eos_salary:'Letztes Grundgehalt (OMR)', eos_reason:'Beendigungsgrund',
    eos_resignation:'Kündigung', eos_termination:'Entlassung', eos_retirement:'Rente',
    eos_result_lbl:'Abfindung (OMR)',
    eos_years_lbl:'Dienstjahre', eos_months_lbl:'Zusätzliche Monate', eos_daily_lbl:'Tageslohn (OMR)',
    faq_title:'❓ Häufige Fragen',
    ic_title:'Bilder komprimieren', ic_sub:'Läuft in Ihrem Browser — Ihre Bilder verlassen nie Ihr Gerät ✅',
    ic_drop_text:'Hier klicken oder Bild hierher ziehen', ic_drop_sub:'JPG, PNG, WebP — bis zu 20MB',
    ic_quality_lbl:'Komprimierungsqualität:', ic_max_compress:'Max. Komprimierung', ic_max_quality:'Beste Qualität',
    ic_orig_size_lbl:'Originalgröße', ic_comp_size_lbl:'Nach Komprimierung', ic_savings_lbl:'Ersparnis',
    ic_orig_img:'Original', ic_comp_img:'Komprimiert', ic_quality_short:'Qualität',
    ic_download_btn:'⬇️ Komprimiertes Bild herunterladen', ic_another_btn:'🔄 Anderes Bild wählen',
    ic_privacy_title:'🔒 Vollständige Privatsphäre',
    ic_privacy_text:'Dieser Kompressor läuft vollständig in Ihrem Browser via Canvas API. Ihr Bild wird nie an einen Server gesendet.',
    ic_small_img:'Bild ist bereits klein — versuchen Sie, die Qualität weiter zu reduzieren',
    ic_faq1_q:'Kann PNG verlustfrei komprimiert werden?',
    ic_faq1_a:'PNG wird für die Komprimierung in JPEG konvertiert (mit leichtem Verlust). Für transparentes PNG ohne Verlust reduzieren Sie stattdessen die Abmessungen.',
    ic_faq2_q:'Welche Qualität wird für Websites empfohlen?',
    ic_faq2_a:'70-80% bietet eine gute Balance zwischen Größe und Qualität. Für Social-Media-Uploads sind 60-75% ausreichend.',
    ic_faq3_q:'Warum ist das komprimierte Bild manchmal größer?',
    ic_faq3_a:'Wenn das Originalbild sehr niedrige Qualität hat oder im PNG-Format ist, kann die Komprimierung die Größe nicht reduzieren. Senken Sie die Qualität weiter.',
    pct_sub:'Drei Arten von Berechnungen in einem Tool',
    pct_tab1:'X% einer Zahl', pct_tab2:'Welcher Prozentsatz?', pct_tab3:'% Änderung',
    pct_pct:'Prozentsatz %', pct_num:'Zahl', pct_first:'Erste Zahl', pct_second:'Zweite Zahl',
    pct_from_val:'Von Wert', pct_to_val:'Zu Wert', pct_quick_ref_title:'🧮 Schnellreferenz',
    pct_increase:'Zunahme von', pct_decrease:'Abnahme von', pct_pct_of:'% von', pct_is:'ist',
    ci_sub:'Berechnen Sie das Wachstum Ihrer Investition mit Zinseszins',
    ci_principal:'Kapital (Anfangsbetrag)', ci_rate:'Jährlicher Zinssatz %', ci_years:'Laufzeit (Jahre)',
    ci_freq:'Verzinsungsfrequenz', ci_monthly:'Optionale monatliche Ergänzung',
    ci_annually:'Jährlich', ci_quarterly:'Vierteljährlich', ci_monthly_f:'Monatlich', ci_daily:'Täglich',
    ci_result_lbl:'Endbetrag', ci_capital_lbl:'Anfangskapital', ci_interest_lbl:'Gesamtzinsen', ci_additions_lbl:'Gesamtergänzungen',
    ci_table_title:'📊 Jährliche Wachstumstabelle',
    ci_th_year:'Jahr', ci_th_amount:'Betrag', ci_th_int_added:'Zinsen hinzugefügt', ci_th_total_int:'Gesamtzinsen',
    dd_sub:'Tage, Wochen, Monate und Jahre zwischen zwei Daten',
    dd_from_lbl:'Erstes Datum (von)', dd_to_lbl:'Zweites Datum (bis)',
    dd_preset_today:'Ab heute', dd_preset_ny:'Bis Neujahr', dd_preset_ramadan:'Bis Ramadan 2027',
    dd_result_lbl:'Tage gesamt', dd_years_lbl:'Jahr', dd_months_lbl:'Monat', dd_days_lbl:'Tag',
    dd_weeks_lbl:'Woche', dd_hours_lbl:'Stunde', dd_workdays_lbl:'Arbeitstag (ca.)', dd_upcoming_title:'⚡ Bevorstehende Ereignisse',
    vat_sub:'Oman • Saudi-Arabien • VAE • Bahrain',
    vat_country_lbl:'Land', vat_mode_lbl:'Berechnungsart', vat_add_mode:'Steuer hinzufügen', vat_extract_mode:'Steuer extrahieren',
    vat_amount_before:'Betrag vor Steuer', vat_amount_after:'Betrag inkl. Steuer',
    vat_rate_lbl:'Steuersatz', vat_tax_lbl:'Steuerbetrag', vat_total_lbl:'Gesamt inkl. Steuer', vat_table_title:'MwSt. am Golf',
    sal_sub:'Berechnen Sie Ihr Nettogehalt mit PASI-Abzug',
    sal_nationality_lbl:'Nationalität', sal_omani:'Omanisch (7% PASI-Abzug)', sal_expat:'Ausländer (ohne PASI)',
    sal_basic_lbl:'Grundgehalt (OMR)', sal_housing_lbl:'Wohnungszulage (OMR)',
    sal_transport_lbl:'Transportzulage (OMR)', sal_other_lbl:'Andere Zulagen (OMR)',
    sal_net_lbl:'Nettogehalt (OMR)', sal_gross_lbl:'Brutto vor Abzug',
    sal_annual_lbl:'Jahresgehalt', sal_pasi_lbl:'PASI-Abzug (7%)', sal_info_title:'📌 PASI-Informationen in Oman',
    hij_sub:'Sofortige und genaue Konvertierung in beide Richtungen',
    hij_mode_gh:'🗓️ Gregorianisch → Hijri', hij_mode_hg:'🌙 Hijri → Gregorianisch',
    hij_greg_date_lbl:'Gregorianisches Datum auswählen',
    hij_day_lbl:'Tag', hij_month_lbl:'Hijri-Monat', hij_year_lbl:'Hijri-Jahr',
    hij_today_title:'📅 Heutiges Hijri-Datum', hij_months_title:'🌙 Hijri-Monate',
  },
  ru: {
    nav_home:'Главная', nav_about:'О нас', nav_contact:'Контакт',
    back:'← Назад на главную', footer_about:'О нас', footer_contact:'Контакт',
    footer_copy:'© 2026 Adawati — Все инструменты бесплатны и конфиденциальны',
    hero_title:'Бесплатные онлайн-инструменты для расчётов, конвертации и продуктивности',
    hero_sub:'Быстрые и точные инструменты, работающие прямо в вашем браузере — без регистрации, 100% бесплатно',
    badge_count:'14 инструментов', badge_free:'100% бесплатно', badge_noreg:'Без регистрации', badge_privacy:'Локальная обработка',
    bmi_card_title:'Калькулятор ИМТ', bmi_card_desc:'Вычислите индекс массы тела',
    diet_card_title:'Калькулятор калорий', diet_card_desc:'Рассчитайте ежедневные потребности + план питания',
    loan_card_title:'Калькулятор платежей', loan_card_desc:'Рассчитайте платежи по любому кредиту',
    age_card_title:'Калькулятор возраста', age_card_desc:'Ваш точный возраст в годах, месяцах и днях',
    discount_card_title:'Калькулятор скидок', discount_card_desc:'Мгновенный расчёт процентов и скидок',
    unit_card_title:'Конвертер единиц', unit_card_desc:'Конвертируйте единицы длины и веса',
    pass_card_title:'Генератор паролей', pass_card_desc:'Надёжные пароли одним кликом',
    word_card_title:'Счётчик слов', word_card_desc:'Мгновенный счётчик для ваших текстов',
    start:'Начать →',
    bmi_title:'Калькулятор ИМТ', bmi_sub:'Узнайте своё состояние здоровья за секунды',
    bmi_weight:'Вес (кг)', bmi_height:'Рост (см)', bmi_btn:'Рассчитать ИМТ',
    bmi_underweight:'Недостаточный вес', bmi_normal:'Нормальный вес ✓', bmi_overweight:'Избыточный вес', bmi_obese:'Ожирение', bmi_invalid:'Пожалуйста, введите корректные числа',
    age_title:'Калькулятор возраста', age_sub:'Ваш точный возраст в годах, месяцах и днях',
    age_label:'Дата рождения', age_btn:'Рассчитать мой возраст',
    age_years:'Лет', age_months:'Месяцев', age_days:'Дней', age_total:'Всего дней', age_next:'Дней до дня рождения', age_alert:'Пожалуйста, выберите дату рождения',
    loan_title:'Калькулятор платежей', loan_sub:'Рассчитайте платежи по любому кредиту',
    loan_amount:'Сумма кредита', loan_rate:'Годовая процентная ставка %', loan_years:'Срок погашения (лет)',
    loan_monthly:'Ежемесячный платёж', loan_total:'Итого выплачено', loan_interest:'Итого процентов',
    discount_title:'Калькулятор скидок', discount_sub:'Быстрый расчёт процентов и скидок',
    tab_percent:'Процент', tab_discount:'Скидка',
    percent_label1:'Сколько составляет', percent_label2:'% от числа',
    discount_label1:'Исходная цена', discount_label2:'Скидка %',
    unit_title:'Конвертер единиц', unit_sub:'Конвертируйте единицы длины и веса',
    tab_length:'Длина', tab_weight:'Вес', unit_value:'Значение', unit_from:'Из', unit_to:'В',
    pass_title:'Генератор паролей', pass_sub:'Надёжные и безопасные пароли одним кликом',
    pass_length:'Длина:', pass_numbers:'Цифры (0–9)', pass_symbols:'Символы (!@#$)', pass_upper:'Заглавные буквы',
    pass_btn:'Создать новый пароль', pass_copied:'Скопировано ✓',
    word_title:'Счётчик слов и символов', word_sub:'Мгновенный счётчик для ваших текстов',
    word_words:'Слов', word_chars:'Символов', word_nospace:'Без пробелов', word_sentences:'Предложений',
    diet_title:'Калькулятор калорий', diet_sub:'Рассчитайте ежедневные потребности',
    diet_gender:'Пол', diet_male:'Мужской', diet_female:'Женский',
    diet_age:'Возраст', diet_weight:'Вес (кг)', diet_height:'Рост (см)',
    diet_activity:'Уровень активности', diet_goal:'Цель', diet_btn:'Рассчитать мои потребности',
    diet_calories:'Калорий в день', diet_protein:'Белки (г)', diet_carb:'Углеводы (г)', diet_fat:'Жиры (г)',
    diet_act1:'Сидячий образ жизни', diet_act2:'Лёгкая активность (1–3 дня/неделю)',
    diet_act3:'Умеренная активность (3–5 дней/неделю)', diet_act4:'Высокая активность (6–7 дней/неделю)', diet_act5:'Очень активный (спортсмен / физический труд)',
    diet_goal1:'Похудеть', diet_goal2:'Сохранить вес', diet_goal3:'Набрать вес',
    diet_goal4:'Сушка тела', diet_goal5:'Тонус тела', diet_goal6:'Набор мышечной массы',
    diet_free_badge:'🎉 Специальное предложение — первые 21 день бесплатно!',
    diet_pro_title:'🔒 Полный план питания',
    diet_pro_f1:'Подробный план питания (7 дней)', diet_pro_f2:'Список альтернативных продуктов',
    diet_pro_f3:'Файл для печати и скачивания', diet_pro_f4:'Еженедельное обновление',
    diet_trial:'21 день бесплатно • Без кредитной карты', diet_pro_btn:'Начать бесплатный пробный период',
    diet_alert:'Пожалуйста, заполните возраст, вес и рост',
    about_title:'О нас', about_sub:'История Adawati',
    about_p1:'"Adawati" — это коллекция бесплатных онлайн-инструментов для быстрого выполнения ежедневных вычислений.',
    about_p2:'Наша цель — предоставить точные инструменты на любом устройстве, полностью защищая вашу конфиденциальность — все вычисления выполняются в вашем браузере.',
    about_p3:'Сайт постоянно развивается, и мы регулярно добавляем новые инструменты.',
    contact_title:'Свяжитесь с нами', contact_sub:'Есть предложение или проблема? Напишите нам',
    contact_name:'Имя', contact_email:'Электронная почта', contact_msg:'Сообщение',
    contact_btn:'Отправить сообщение', contact_error:'Пожалуйста, заполните все поля', contact_email_invalid:'Неверный адрес электронной почты',
    word_placeholder:'Введите или вставьте текст здесь...',
    signup_btn:'Регистрация', signup_title:'Создать бесплатный аккаунт', signup_name:'Имя', signup_email:'Электронная почта',
    signup_submit:'Создать аккаунт', signup_welcome:'Добро пожаловать', signup_logout:'Выйти',
    signup_note:'Необязательно — сохраняйте настройки на всех устройствах',
    hero_label:'Бесплатные инструменты для ежедневного использования',
    badge_langs:'6 Языков', stat_tools:'Бесплатных инструментов', stat_games:'🎮 Игры', stat_langs:'Языков',
    stat_private:'Локальная обработка', stat_available:'Всегда доступен',
    section_tools:'Все инструменты', section_tools_sub:'Выберите нужный инструмент',
    footer_desc:'Бесплатные онлайн-инструменты, работающие прямо в вашем браузере.',
    footer_tools_title:'Инструменты', footer_more_title:'Ещё', footer_links_title:'Ссылки',
    currency_card_title:'Конвертер валют', currency_card_desc:'Конвертируйте между 30+ валютами по актуальным курсам',
    tip_card_title:'Калькулятор чаевых', tip_card_desc:'Рассчитайте чаевые и разделите счёт между друзьями',
    qr_card_title:'Генератор QR-кода', qr_card_desc:'Создайте QR-код для любой ссылки или текста мгновенно',
    tz_card_title:'Конвертер часовых поясов', tz_card_desc:'Узнайте текущее время в любом городе мира',
    rng_card_title:'Генератор случайных чисел', rng_card_desc:'Генерируйте случайные числа для розыгрышей и игр',
    sw_card_title:'Секундомер и таймер', sw_card_desc:'Профессиональный секундомер и таймер обратного отсчёта',
    currency_title:'Конвертер валют', currency_sub:'Актуальные обменные курсы',
    currency_amount:'Сумма', currency_from:'Из', currency_to:'В',
    currency_loading:'Загрузка курсов...', currency_offline:'Не удалось загрузить курсы',
    tip_title:'Калькулятор чаевых', tip_sub:'Рассчитайте чаевые и разделите счёт',
    tip_bill:'Итого по счёту', tip_pct:'Чаевые %:', tip_people:'Количество человек',
    tip_amount:'Чаевые', tip_total:'Итого', tip_per_person:'На человека',
    qr_title:'Генератор QR-кода', qr_sub:'Мгновенно создайте QR-код',
    qr_input:'Ссылка или текст', qr_placeholder:'https://example.com или любой текст...',
    qr_generate:'Создать код', qr_download:'Скачать изображение', qr_hint:'Введите ссылку или текст для генерации кода',
    tz_title:'Конвертер часовых поясов', tz_sub:'Текущее время по всему миру',
    tz_convert:'Конвертировать время', tz_from:'Из зоны', tz_to:'В зону',
    rng_title:'Генератор случайных чисел', rng_sub:'Для розыгрышей и игр',
    rng_min:'Минимум', rng_max:'Максимум', rng_count:'Количество:', rng_btn:'🎲 Сгенерировать снова', rng_history:'История',
    sw_title:'Секундомер и таймер', sw_sub:'Профессиональный секундомер',
    sw_tab:'Секундомер', timer_tab:'Таймер', sw_start:'Старт', sw_pause:'Пауза',
    sw_lap:'Круг', sw_reset:'Сброс', timer_min:'Минуты', timer_sec:'Секунды', timer_done:'⏰ Время вышло!',
    cat_all:'Все', cat_health:'💪 Здоровье', cat_money:'💰 Деньги', cat_productivity:'⚙️ Продуктивность', cat_quick:'⚡ Быстрые',
    search_placeholder:'Поиск инструментов...', search_no_results:'Инструменты не найдены', related_title:'Похожие инструменты',
    pwa_title:'Установить приложение', pwa_sub:'Добавьте Adawati на главный экран', pwa_install:'Установить', pwa_later:'Позже',
    cat_oman:'🌍 Оман', cat_games:'🎮 Игры',
    guess_card_title:'Игра «Угадай число»', guess_card_desc:'Угадайте секретное число за наименьшее количество попыток',
    memory_card_title:'Игра на память', memory_card_desc:'Совмещайте карточки и проверьте свою память',
    qmath_card_title:'Вызов гениев — Математика', qmath_card_desc:'100 уровней от Новичка до Легенды!',
    react_card_title:'Тест на реакцию', react_card_desc:'Нажмите когда кнопка станет зелёной — будьте быстрее!',
    car_card_title:'Автогонка', car_card_desc:'Уворачивайся от машин и бей рекорд!',
    jump_card_title:'Прыжковая игра — Платформер', jump_card_desc:'Прыгай между платформами и собирай звёзды!',
    kids_card_title:'Детская обучающая игра', kids_card_desc:'Цифры, цвета, животные — для детей от 2 до 6 лет',
    vat_card_title:'Калькулятор НДС Залив', vat_card_desc:'Рассчитайте НДС для Омана, Саудовской Аравии и ОАЭ',
    sal_card_title:'Калькулятор зарплаты — Оман', sal_card_desc:'Рассчитайте чистую зарплату с вычетом PASI',
    eos_card_title:'Калькулятор выходного пособия', eos_card_desc:'Рассчитайте выходное пособие по оманскому трудовому праву',
    hijri_card_title:'Конвертер хиджры', hijri_card_desc:'Конвертируйте между хиджрой и григорианским календарём',
    pct_card_title:'Процент и скидки', pct_card_desc:'Рассчитайте проценты, скидки и изменения',
    ci_card_title:'Сложные проценты', ci_card_desc:'Рассчитайте рост инвестиций',
    dd_card_title:'Разница между датами', dd_card_desc:'Считайте дни, недели и месяцы между датами',
    fc_card_title:'Конвертер файлов', fc_card_desc:'Конвертируйте Word, Excel и CSV в браузере',
    ic_card_title:'Компрессор изображений', ic_card_desc:'Уменьшите размер без загрузки на сервер',
    fav_title:'⭐ Избранное', recent_title:'✨ Вам может понравиться',
    badge_count:'22 инструмента', badge_count_lbl:'инструментов',
    dark_on:'🌙', dark_off:'☀️',
    related_tools:'Связанные инструменты:', popular_title:'Самые популярные', country_recommended:'Рекомендуется для',
    eos_title:'Калькулятор выходного пособия — Оман 🇴🇲',
    eos_sub:'В соответствии с трудовым законодательством Омана',
    eos_start:'Дата начала', eos_end:'Дата окончания',
    eos_salary:'Последний базовый оклад (OMR)', eos_reason:'Причина увольнения',
    eos_resignation:'Увольнение по собственному желанию', eos_termination:'Увольнение', eos_retirement:'Выход на пенсию',
    eos_result_lbl:'Выходное пособие (OMR)',
    eos_years_lbl:'Лет службы', eos_months_lbl:'Дополнительные месяцы', eos_daily_lbl:'Дневная ставка (OMR)',
    faq_title:'❓ Часто задаваемые вопросы',
    ic_title:'Сжать изображения', ic_sub:'Работает в вашем браузере — ваши изображения никуда не загружаются ✅',
    ic_drop_text:'Нажмите или перетащите изображение сюда', ic_drop_sub:'JPG, PNG, WebP — до 20MB',
    ic_quality_lbl:'Качество сжатия:', ic_max_compress:'Макс. сжатие', ic_max_quality:'Лучшее качество',
    ic_orig_size_lbl:'Оригинальный размер', ic_comp_size_lbl:'После сжатия', ic_savings_lbl:'Экономия',
    ic_orig_img:'Оригинал', ic_comp_img:'Сжатое', ic_quality_short:'Качество',
    ic_download_btn:'⬇️ Скачать сжатое изображение', ic_another_btn:'🔄 Выбрать другое изображение',
    ic_privacy_title:'🔒 Полная конфиденциальность',
    ic_privacy_text:'Этот компрессор работает полностью в вашем браузере через Canvas API. Ваше изображение никогда не отправляется на сервер.',
    ic_small_img:'Изображение уже маленькое — попробуйте уменьшить качество для большей экономии',
    ic_faq1_q:'Можно ли сжать PNG без потерь?',
    ic_faq1_a:'PNG конвертируется в JPEG для сжатия (с незначительной потерей). Для прозрачного PNG без потерь уменьшите размеры вместо качества.',
    ic_faq2_q:'Какое качество рекомендуется для сайтов?',
    ic_faq2_a:'70-80% обеспечивает хороший баланс между размером и качеством. Для загрузки в соцсети достаточно 60-75%.',
    ic_faq3_q:'Почему сжатое изображение иногда больше?',
    ic_faq3_a:'Если исходное изображение очень низкого качества или в формате PNG, сжатие может не уменьшить его размер. Попробуйте снизить качество.',
    pct_sub:'Три типа вычислений в одном инструменте',
    pct_tab1:'X% от числа', pct_tab2:'Какой процент?', pct_tab3:'% изменение',
    pct_pct:'Процент %', pct_num:'Число', pct_first:'Первое число', pct_second:'Второе число',
    pct_from_val:'Исходное значение', pct_to_val:'Конечное значение', pct_quick_ref_title:'🧮 Краткий справочник',
    pct_increase:'Увеличение с', pct_decrease:'Уменьшение с', pct_pct_of:'% от', pct_is:'равно',
    ci_sub:'Рассчитайте рост ваших инвестиций с учётом сложных процентов',
    ci_principal:'Начальная сумма', ci_rate:'Годовая процентная ставка %', ci_years:'Срок (лет)',
    ci_freq:'Период начисления', ci_monthly:'Ежемесячное пополнение (опционально)',
    ci_annually:'Ежегодно', ci_quarterly:'Ежеквартально', ci_monthly_f:'Ежемесячно', ci_daily:'Ежедневно',
    ci_result_lbl:'Итоговая сумма', ci_capital_lbl:'Начальный капитал', ci_interest_lbl:'Всего процентов', ci_additions_lbl:'Всего пополнений',
    ci_table_title:'📊 Таблица ежегодного роста',
    ci_th_year:'Год', ci_th_amount:'Сумма', ci_th_int_added:'Начислено %', ci_th_total_int:'Всего %',
    dd_sub:'Дни, недели, месяцы и годы между двумя датами',
    dd_from_lbl:'Первая дата (от)', dd_to_lbl:'Вторая дата (до)',
    dd_preset_today:'От сегодня', dd_preset_ny:'До Нового года', dd_preset_ramadan:'До Рамадан 2027',
    dd_result_lbl:'Всего дней', dd_years_lbl:'Год', dd_months_lbl:'Месяц', dd_days_lbl:'День',
    dd_weeks_lbl:'Неделя', dd_hours_lbl:'Час', dd_workdays_lbl:'Рабочий день (прим.)', dd_upcoming_title:'⚡ Предстоящие события',
    vat_sub:'Оман • Саудовская Аравия • ОАЭ • Бахрейн',
    vat_country_lbl:'Страна', vat_mode_lbl:'Режим расчёта', vat_add_mode:'Добавить налог', vat_extract_mode:'Извлечь налог',
    vat_amount_before:'Сумма до налога', vat_amount_after:'Сумма с налогом',
    vat_rate_lbl:'Ставка налога', vat_tax_lbl:'Сумма налога', vat_total_lbl:'Итого с налогом', vat_table_title:'НДС в Заливе',
    sal_sub:'Рассчитайте чистую зарплату с вычетом PASI',
    sal_nationality_lbl:'Гражданство', sal_omani:'Оманец (7% вычет PASI)', sal_expat:'Иностранец (без PASI)',
    sal_basic_lbl:'Базовая зарплата (OMR)', sal_housing_lbl:'Жилищная надбавка (OMR)',
    sal_transport_lbl:'Транспортная надбавка (OMR)', sal_other_lbl:'Другие надбавки (OMR)',
    sal_net_lbl:'Чистая зарплата (OMR)', sal_gross_lbl:'Брутто до вычетов',
    sal_annual_lbl:'Годовая зарплата', sal_pasi_lbl:'Вычет PASI (7%)', sal_info_title:'📌 Информация о PASI в Омане',
    hij_sub:'Мгновенная и точная конвертация в обе стороны',
    hij_mode_gh:'🗓️ Григорианский → Хиджра', hij_mode_hg:'🌙 Хиджра → Григорианский',
    hij_greg_date_lbl:'Выберите григорианскую дату',
    hij_day_lbl:'День', hij_month_lbl:'Месяц хиджры', hij_year_lbl:'Год хиджры',
    hij_today_title:'📅 Сегодняшняя дата по хиджре', hij_months_title:'🌙 Месяцы хиджры',
  }
};

const LABELS = {ar:'عر', en:'EN', fr:'FR', es:'ES', de:'DE', ru:'RU'};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  const t = T[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  const cl = document.getElementById('currentLang');
  if (cl) cl.textContent = LABELS[lang] || lang.toUpperCase();
  const menu = document.getElementById('langMenu');
  if (menu) menu.classList.remove('open');
  // Brand name: Arabic script for AR, Latin for all others
  const brandName = lang === 'ar' ? 'أدواتي' : 'Adawati';
  document.querySelectorAll('.nav-brand, .footer-brand').forEach(function(el) {
    el.textContent = brandName;
  });
  updateSignupBtn();
  // Re-render country section cards with the new language
  const cc = localStorage.getItem('adawati_country');
  if (cc && typeof COUNTRY_DATA !== 'undefined' && COUNTRY_DATA[cc] && document.getElementById('countrySection')) {
    renderCountrySection(cc);
  }
}

function toggleLangMenu() {
  document.getElementById('langMenu').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-switcher')) {
    const m = document.getElementById('langMenu');
    if (m) m.classList.remove('open');
  }
});

function updateSignupBtn() {
  const btn = document.getElementById('signupNavBtn');
  if (!btn) return;
  const lang = localStorage.getItem('lang') || 'ar';
  const t = T[lang] || T.ar;
  const user = getUser();
  if (user) {
    btn.textContent = '👤 ' + user.name.split(' ')[0];
    btn.onclick = openSignup;
  } else {
    btn.textContent = t.signup_btn || 'Sign Up';
    btn.onclick = openSignup;
  }
}

function getUser() {
  try { return JSON.parse(localStorage.getItem('adawati_user')); } catch { return null; }
}

function openSignup() {
  const lang = localStorage.getItem('lang') || 'ar';
  const t = T[lang] || T.ar;
  const user = getUser();
  const existing = document.getElementById('signupModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'signupModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';

  const box = document.createElement('div');
  box.style.cssText = 'background:#fff;border-radius:16px;padding:32px 28px;max-width:380px;width:100%;box-shadow:0 20px 40px rgba(0,0,0,0.15);';

  if (user) {
    box.style.textAlign = 'center';
    const avatar = document.createElement('div');
    avatar.style.cssText = 'font-size:48px;margin-bottom:12px;';
    avatar.textContent = '👤';
    const greeting = document.createElement('div');
    greeting.style.cssText = 'font-size:20px;font-weight:700;margin-bottom:4px;';
    greeting.textContent = (t.signup_welcome || 'Welcome') + ', ' + user.name + '!';
    const emailEl = document.createElement('div');
    emailEl.style.cssText = 'font-size:14px;color:#64748b;margin-bottom:24px;';
    emailEl.textContent = user.email;
    const logoutBtn = document.createElement('button');
    logoutBtn.style.cssText = 'width:100%;padding:12px;background:#ef4444;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;margin-bottom:8px;';
    logoutBtn.textContent = t.signup_logout || 'Sign Out';
    logoutBtn.onclick = logoutUser;
    const closeBtn = document.createElement('button');
    closeBtn.style.cssText = 'width:100%;padding:12px;background:#f1f5f9;color:#334155;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;';
    closeBtn.textContent = '✕';
    closeBtn.onclick = () => document.getElementById('signupModal').remove();
    box.append(avatar, greeting, emailEl, logoutBtn, closeBtn);
  } else {
    box.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const header = document.createElement('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;';
    const title = document.createElement('div');
    title.style.cssText = 'font-size:19px;font-weight:700;';
    title.textContent = t.signup_title || 'Create Account';
    const xBtn = document.createElement('button');
    xBtn.style.cssText = 'background:none;border:none;font-size:20px;cursor:pointer;color:#94a3b8;';
    xBtn.textContent = '✕';
    xBtn.onclick = () => document.getElementById('signupModal').remove();
    header.append(title, xBtn);
    const note = document.createElement('div');
    note.style.cssText = 'font-size:13px;color:#64748b;margin-bottom:20px;';
    note.textContent = t.signup_note || '';
    const lbl1 = document.createElement('label');
    lbl1.style.cssText = 'display:block;font-size:13px;font-weight:700;margin-bottom:6px;';
    lbl1.textContent = t.signup_name || 'Name';
    const inp1 = document.createElement('input');
    inp1.id = 'su_name'; inp1.type = 'text'; inp1.maxLength = 60;
    inp1.style.cssText = 'width:100%;padding:11px 14px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:15px;font-family:inherit;margin-bottom:14px;box-sizing:border-box;';
    const lbl2 = document.createElement('label');
    lbl2.style.cssText = 'display:block;font-size:13px;font-weight:700;margin-bottom:6px;';
    lbl2.textContent = t.signup_email || 'Email';
    const inp2 = document.createElement('input');
    inp2.id = 'su_email'; inp2.type = 'email'; inp2.dir = 'ltr'; inp2.maxLength = 120;
    inp2.style.cssText = 'width:100%;padding:11px 14px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:15px;font-family:inherit;margin-bottom:20px;box-sizing:border-box;';
    const submitBtn = document.createElement('button');
    submitBtn.style.cssText = 'width:100%;padding:12px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;';
    submitBtn.textContent = t.signup_submit || 'Create Account';
    submitBtn.onclick = () => submitSignup(lang);
    box.append(header, note, lbl1, inp1, lbl2, inp2, submitBtn);
  }

  modal.appendChild(box);

  modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
  const nameInput = document.getElementById('su_name');
  if (nameInput) nameInput.focus();
}

function showToast(msg, type) {
  const existing = document.getElementById('adawatiToast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'adawatiToast';
  const bg = type === 'error' ? '#ef4444' : '#22c55e';
  toast.style.cssText = `position:fixed;bottom:28px;${document.documentElement.dir==='rtl'?'right':'left'}:50%;transform:translateX(${document.documentElement.dir==='rtl'?'50%':'-50%'});background:${bg};color:#fff;padding:12px 24px;border-radius:10px;font-size:15px;font-weight:600;z-index:99999;box-shadow:0 4px 16px rgba(0,0,0,0.18);pointer-events:none;`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; setTimeout(() => toast.remove(), 400); }, 2800);
}

function submitSignup(lang) {
  const name = (document.getElementById('su_name').value || '').trim();
  const email = (document.getElementById('su_email').value || '').trim();
  const t = T[lang] || T.ar;
  if (!name || !email) { showToast(t.contact_error || 'Please fill in all fields', 'error'); return; }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRe.test(email)) { showToast(t.contact_email_invalid || 'Invalid email address', 'error'); return; }
  localStorage.setItem('adawati_user', JSON.stringify({ name: name.slice(0,60), email: email.slice(0,120) }));
  document.getElementById('signupModal').remove();
  updateSignupBtn();
  showToast((t.signup_welcome || 'Welcome') + ', ' + name.split(' ')[0] + '!', 'success');
}

function logoutUser() {
  localStorage.removeItem('adawati_user');
  document.getElementById('signupModal').remove();
  updateSignupBtn();
}

function detectDefaultLang() {
  const saved = localStorage.getItem('lang');
  if (saved && T[saved]) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'ar').toLowerCase();
  if (browser.startsWith('ar')) return 'ar';
  if (browser.startsWith('fr')) return 'fr';
  if (browser.startsWith('es')) return 'es';
  if (browser.startsWith('de')) return 'de';
  if (browser.startsWith('ru')) return 'ru';
  if (browser.startsWith('en')) return 'en';
  return 'ar';
}

/* ── Dark Mode ── */
function initDarkMode() {
  if (localStorage.getItem('dark') === '1') document.documentElement.classList.add('dark');
}
function toggleDark() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('dark', isDark ? '1' : '0');
  updateDarkBtn();
}
function updateDarkBtn() {
  const btn = document.getElementById('darkToggleBtn');
  if (!btn) return;
  const isDark = document.documentElement.classList.contains('dark');
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.title = isDark ? 'Light mode' : 'Dark mode';
}
function injectDarkToggle() {
  const nav = document.querySelector('.nav-links');
  if (!nav || document.getElementById('darkToggleBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'darkToggleBtn';
  btn.className = 'dark-toggle';
  btn.onclick = toggleDark;
  const isDark = document.documentElement.classList.contains('dark');
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.title = isDark ? 'Light mode' : 'Dark mode';
  const langSwitcher = nav.querySelector('.lang-switcher');
  if (langSwitcher) nav.insertBefore(btn, langSwitcher);
  else nav.appendChild(btn);
}

/* ── PWA / Service Worker ── */
let _deferredInstall = null;
function initPWA() {
  if (!('serviceWorker' in navigator)) return;
  const base = location.pathname.includes('/my-tools-site') ? '/my-tools-site' : '';
  navigator.serviceWorker.register(base + '/sw.js').catch(() => {});

  if (!document.querySelector('link[rel="manifest"]')) {
    const l = document.createElement('link');
    l.rel = 'manifest'; l.href = base + '/manifest.json';
    document.head.appendChild(l);
  }
  if (!document.querySelector('meta[name="theme-color"]')) {
    const m = document.createElement('meta');
    m.name = 'theme-color'; m.content = '#2563eb';
    document.head.appendChild(m);
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    _deferredInstall = e;
    if (!localStorage.getItem('pwa_dismissed')) showPWABanner();
  });
}

function showPWABanner() {
  if (document.getElementById('pwaBanner')) return;
  const lang = localStorage.getItem('lang') || 'ar';
  const t = T[lang] || T.ar;
  const banner = document.createElement('div');
  banner.id = 'pwaBanner';
  banner.className = 'pwa-banner';
  banner.innerHTML = '';
  const title = document.createElement('div');
  title.className = 'pwa-banner-title';
  title.textContent = '⚡ ' + (t.pwa_title || 'Install App');
  const sub = document.createElement('div');
  sub.className = 'pwa-banner-sub';
  sub.textContent = t.pwa_sub || 'Add to your home screen';
  const btns = document.createElement('div');
  btns.className = 'pwa-banner-btns';
  const installBtn = document.createElement('button');
  installBtn.className = 'pwa-install-btn';
  installBtn.textContent = t.pwa_install || 'Install';
  installBtn.onclick = () => { if (_deferredInstall) { _deferredInstall.prompt(); _deferredInstall.userChoice.then(() => { banner.remove(); }); } };
  const dismissBtn = document.createElement('button');
  dismissBtn.className = 'pwa-dismiss-btn';
  dismissBtn.textContent = t.pwa_later || 'Later';
  dismissBtn.onclick = () => { localStorage.setItem('pwa_dismissed', '1'); banner.remove(); };
  btns.append(installBtn, dismissBtn);
  banner.append(title, sub, btns);
  document.body.appendChild(banner);
}

/* ── Related Tools ── */
const RELATED_MAP = {
  'bmi-calculator':      [['diet-plan','🥗','diet_card_title'],['age-calculator','📅','age_card_title']],
  'diet-plan':           [['bmi-calculator','⚖️','bmi_card_title'],['unit-converter','🔄','unit_card_title']],
  'currency-converter':  [['loan-calculator','🧮','loan_card_title'],['tip-calculator','🤝','tip_card_title']],
  'loan-calculator':     [['currency-converter','💱','currency_card_title'],['discount-calculator','💯','discount_card_title']],
  'age-calculator':      [['bmi-calculator','⚖️','bmi_card_title'],['diet-plan','🥗','diet_card_title']],
  'discount-calculator': [['loan-calculator','🧮','loan_card_title'],['tip-calculator','🤝','tip_card_title']],
  'tip-calculator':      [['currency-converter','💱','currency_card_title'],['discount-calculator','💯','discount_card_title']],
  'unit-converter':      [['currency-converter','💱','currency_card_title'],['word-counter','🔤','word_card_title']],
  'password-generator':  [['qr-generator','📱','qr_card_title'],['word-counter','🔤','word_card_title']],
  'word-counter':        [['password-generator','🔑','pass_card_title'],['qr-generator','📱','qr_card_title']],
  'qr-generator':        [['password-generator','🔑','pass_card_title'],['word-counter','🔤','word_card_title']],
  'timezone-converter':  [['stopwatch','⏱️','sw_card_title'],['currency-converter','💱','currency_card_title']],
  'random-number':       [['stopwatch','⏱️','sw_card_title'],['qr-generator','📱','qr_card_title']],
  'stopwatch':           [['random-number','🎲','rng_card_title'],['timezone-converter','🕐','tz_card_title']],
  'vat-calculator':     [['salary-calculator','💼','sal_card_title'],['loan-calculator','🧮','loan_card_title']],
  'salary-calculator':  [['end-of-service','📋','eos_card_title'],['vat-calculator','🧾','vat_card_title']],
  'end-of-service':     [['salary-calculator','💼','sal_card_title'],['loan-calculator','🧮','loan_card_title']],
  'hijri-converter':    [['age-calculator','📅','age_card_title'],['end-of-service','📋','eos_card_title']],
};

function injectRelatedTools() {
  const page = location.pathname.split('/').pop().replace('.html','');
  const related = RELATED_MAP[page];
  if (!related) return;
  const card = document.querySelector('.card');
  if (!card) return;
  const lang = localStorage.getItem('lang') || 'ar';
  const t = T[lang] || T.ar;
  const base = location.pathname.includes('/my-tools-site') ? '/my-tools-site' : '';
  const section = document.createElement('div');
  section.className = 'related-tools';
  const heading = document.createElement('h3');
  heading.textContent = t.related_title || 'Related Tools';
  const links = document.createElement('div');
  links.className = 'related-links';
  related.forEach(([slug, icon, titleKey]) => {
    const a = document.createElement('a');
    a.href = base + '/' + slug + '.html';
    a.className = 'related-link';
    a.textContent = icon + ' ' + (t[titleKey] || slug);
    links.appendChild(a);
  });
  section.append(heading, links);
  card.appendChild(section);
}

/* ── Favorites & Recent ── */
const TOOL_META = {
  'bmi-calculator':      {icon:'⚖️', bg:'#eff6ff', titleKey:'bmi_card_title', descKey:'bmi_card_desc'},
  'diet-plan':           {icon:'🥗', bg:'#f0fdf4', titleKey:'diet_card_title', descKey:'diet_card_desc'},
  'currency-converter':  {icon:'💱', bg:'#fefce8', titleKey:'currency_card_title', descKey:'currency_card_desc'},
  'loan-calculator':     {icon:'🧮', bg:'#faf5ff', titleKey:'loan_card_title', descKey:'loan_card_desc'},
  'age-calculator':      {icon:'📅', bg:'#fff7ed', titleKey:'age_card_title', descKey:'age_card_desc'},
  'discount-calculator': {icon:'💯', bg:'#fef2f2', titleKey:'discount_card_title', descKey:'discount_card_desc'},
  'tip-calculator':      {icon:'🤝', bg:'#fdf4ff', titleKey:'tip_card_title', descKey:'tip_card_desc'},
  'unit-converter':      {icon:'🔄', bg:'#f0f9ff', titleKey:'unit_card_title', descKey:'unit_card_desc'},
  'password-generator':  {icon:'🔑', bg:'#f8fafc', titleKey:'pass_card_title', descKey:'pass_card_desc'},
  'word-counter':        {icon:'🔤', bg:'#fefce8', titleKey:'word_card_title', descKey:'word_card_desc'},
  'qr-generator':        {icon:'📱', bg:'#f0fdf4', titleKey:'qr_card_title', descKey:'qr_card_desc'},
  'timezone-converter':  {icon:'🕐', bg:'#fff7ed', titleKey:'tz_card_title', descKey:'tz_card_desc'},
  'random-number':       {icon:'🎲', bg:'#fdf4ff', titleKey:'rng_card_title', descKey:'rng_card_desc'},
  'stopwatch':           {icon:'⏱️', bg:'#eff6ff', titleKey:'sw_card_title', descKey:'sw_card_desc'},
  'vat-calculator':      {icon:'🧾', bg:'#fefce8', titleKey:'vat_card_title', descKey:'vat_card_desc'},
  'salary-calculator':   {icon:'💼', bg:'#f0fdf4', titleKey:'sal_card_title', descKey:'sal_card_desc'},
  'end-of-service':      {icon:'📋', bg:'#f0f9ff', titleKey:'eos_card_title', descKey:'eos_card_desc'},
  'hijri-converter':     {icon:'🌙', bg:'#fdf4ff', titleKey:'hijri_card_title', descKey:'hijri_card_desc'},
  'percentage-calculator':{icon:'💯', bg:'#fef2f2', titleKey:'pct_card_title', descKey:'pct_card_desc'},
  'compound-interest':   {icon:'📈', bg:'#f0fdf4', titleKey:'ci_card_title', descKey:'ci_card_desc'},
  'date-diff':           {icon:'📆', bg:'#fff7ed', titleKey:'dd_card_title', descKey:'dd_card_desc'},
  'file-converter':      {icon:'📂', bg:'#f0fdf4', titleKey:'fc_card_title', descKey:'fc_card_desc'},
  'image-compressor':    {icon:'🖼️', bg:'#f0f9ff', titleKey:'ic_card_title', descKey:'ic_card_desc'},
  'number-guess':        {icon:'🎯', bg:'#fdf4ff', titleKey:'guess_card_title', descKey:'guess_card_desc'},
  'memory-game':         {icon:'🃏', bg:'#fef9c3', titleKey:'memory_card_title', descKey:'memory_card_desc'},
  'quick-math':          {icon:'🔢', bg:'#fef3c7', titleKey:'qmath_card_title', descKey:'qmath_card_desc'},
  'reaction-test':       {icon:'⚡', bg:'#f0fdf4', titleKey:'react_card_title', descKey:'react_card_desc'},
  'car-game':            {icon:'🚗', bg:'#fef3c7', titleKey:'car_card_title',  descKey:'car_card_desc'},
  'jump-game':           {icon:'🦸', bg:'#f0fdf4', titleKey:'jump_card_title', descKey:'jump_card_desc'},
  'kids-learn':          {icon:'🧒', bg:'#fef9c3', titleKey:'kids_card_title', descKey:'kids_card_desc'},
};

function getFavs() {
  try { return JSON.parse(localStorage.getItem('adawati_favs') || '[]'); } catch { return []; }
}
function saveFavs(arr) { localStorage.setItem('adawati_favs', JSON.stringify(arr)); }
function isFav(id) { return getFavs().includes(id); }
function toggleFav(id) {
  const favs = getFavs();
  const idx = favs.indexOf(id);
  if (idx > -1) favs.splice(idx, 1); else favs.push(id);
  saveFavs(favs);
  renderFavSection();
  document.querySelectorAll('.fav-star[data-id="' + id + '"]').forEach(function(s) {
    s.textContent = isFav(id) ? '⭐' : '☆';
    s.classList.toggle('fav-active', isFav(id));
  });
}
function getRecent() {
  try { return JSON.parse(localStorage.getItem('adawati_recent') || '[]'); } catch { return []; }
}
function trackRecent(id) {
  var list = getRecent().filter(function(x) { return x !== id; });
  list.unshift(id);
  localStorage.setItem('adawati_recent', JSON.stringify(list.slice(0, 6)));
}

function buildMiniCard(id, t, base) {
  const meta = TOOL_META[id];
  if (!meta) return null;
  const a = document.createElement('a');
  a.href = base + '/' + id + '.html';
  a.className = 'tool-card';
  a.style.position = 'relative';
  a.innerHTML =
    '<div class="tool-icon-wrap" style="background:' + meta.bg + ';">' + meta.icon + '</div>' +
    '<div class="tool-card-title" data-i18n="' + meta.titleKey + '">' + (t[meta.titleKey] || id) + '</div>' +
    '<div class="tool-card-desc" data-i18n="' + meta.descKey + '">' + (t[meta.descKey] || '') + '</div>' +
    '<div class="tool-card-arrow" data-i18n="start">' + (t.start || '→') + '</div>';
  return a;
}

function renderFavSection() {
  const favSection = document.getElementById('favSection');
  const favGrid = document.getElementById('favGrid');
  if (!favSection || !favGrid) return;
  const favs = getFavs();
  const lang = localStorage.getItem('lang') || 'ar';
  const t = T[lang] || T.ar;
  const base = location.pathname.includes('/my-tools-site') ? '/my-tools-site' : '';
  favGrid.innerHTML = '';
  if (favs.length === 0) { favSection.style.display = 'none'; return; }
  favs.forEach(function(id) {
    const card = buildMiniCard(id, t, base);
    if (card) favGrid.appendChild(card);
  });
  favSection.style.display = favGrid.querySelector('.tool-card') ? '' : 'none';
  injectStarBtns();
}

function renderRecentSection() {
  const recentSection = document.getElementById('recentSection');
  const recentGrid = document.getElementById('recentGrid');
  if (!recentSection || !recentGrid) return;
  const recent = getRecent();
  const lang = localStorage.getItem('lang') || 'ar';
  const t = T[lang] || T.ar;
  const base = location.pathname.includes('/my-tools-site') ? '/my-tools-site' : '';
  recentGrid.innerHTML = '';
  if (recent.length === 0) { recentSection.style.display = 'none'; return; }
  recent.forEach(function(id) {
    const card = buildMiniCard(id, t, base);
    if (card) recentGrid.appendChild(card);
  });
  recentSection.style.display = recentGrid.querySelector('.tool-card') ? '' : 'none';
}

function injectStarBtns() {
  if (!document.getElementById('toolsGrid')) return;
  document.querySelectorAll('#toolsGrid .tool-card, #favGrid .tool-card, #recentGrid .tool-card').forEach(function(card) {
    if (card.querySelector('.fav-star')) return;
    const href = card.getAttribute('href') || '';
    const id = href.split('/').pop().replace('.html', '');
    if (!TOOL_META[id]) return;
    const star = document.createElement('button');
    star.className = 'fav-star' + (isFav(id) ? ' fav-active' : '');
    star.setAttribute('data-id', id);
    star.textContent = isFav(id) ? '⭐' : '☆';
    star.title = isFav(id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة';
    star.onclick = function(e) { e.preventDefault(); e.stopPropagation(); toggleFav(id); };
    card.style.position = 'relative';
    card.appendChild(star);
  });
}

/* ── Country Detection & Geo-recommended tools ── */
const COUNTRY_DATA = {
  // ── Gulf & Levant ──────────────────────────────────────────────────────────
  'OM': { flag:'🇴🇲', name:'عُمان',          nameEn:'Oman',
    tools:['vat-calculator','salary-calculator','end-of-service','hijri-converter'] },
  'SA': { flag:'🇸🇦', name:'السعودية',        nameEn:'Saudi Arabia',
    tools:['vat-calculator','loan-calculator','hijri-converter','currency-converter'] },
  'AE': { flag:'🇦🇪', name:'الإمارات',        nameEn:'UAE',
    tools:['vat-calculator','loan-calculator','currency-converter','hijri-converter'] },
  'KW': { flag:'🇰🇼', name:'الكويت',          nameEn:'Kuwait',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'QA': { flag:'🇶🇦', name:'قطر',             nameEn:'Qatar',
    tools:['currency-converter','loan-calculator','discount-calculator','hijri-converter'] },
  'BH': { flag:'🇧🇭', name:'البحرين',         nameEn:'Bahrain',
    tools:['vat-calculator','loan-calculator','currency-converter','hijri-converter'] },
  'JO': { flag:'🇯🇴', name:'الأردن',          nameEn:'Jordan',
    tools:['currency-converter','loan-calculator','age-calculator','hijri-converter'] },
  'PS': { flag:'🇵🇸', name:'فلسطين',          nameEn:'Palestine',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'SY': { flag:'🇸🇾', name:'سوريا',           nameEn:'Syria',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'LB': { flag:'🇱🇧', name:'لبنان',           nameEn:'Lebanon',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'IQ': { flag:'🇮🇶', name:'العراق',          nameEn:'Iraq',
    tools:['currency-converter','loan-calculator','percentage-calculator','hijri-converter'] },
  // ── North Africa ───────────────────────────────────────────────────────────
  'EG': { flag:'🇪🇬', name:'مصر',             nameEn:'Egypt',
    tools:['currency-converter','loan-calculator','discount-calculator','age-calculator'] },
  'MA': { flag:'🇲🇦', name:'المغرب',          nameEn:'Morocco',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'DZ': { flag:'🇩🇿', name:'الجزائر',         nameEn:'Algeria',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'TN': { flag:'🇹🇳', name:'تونس',            nameEn:'Tunisia',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'LY': { flag:'🇱🇾', name:'ليبيا',           nameEn:'Libya',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'SD': { flag:'🇸🇩', name:'السودان',         nameEn:'Sudan',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  // ── Sub-Saharan & Horn of Africa (Arab League members) ────────────────────
  'SO': { flag:'🇸🇴', name:'الصومال',         nameEn:'Somalia',
    tools:['currency-converter','loan-calculator','age-calculator','hijri-converter'] },
  'MR': { flag:'🇲🇷', name:'موريتانيا',       nameEn:'Mauritania',
    tools:['currency-converter','loan-calculator','percentage-calculator','hijri-converter'] },
  'DJ': { flag:'🇩🇯', name:'جيبوتي',          nameEn:'Djibouti',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'KM': { flag:'🇰🇲', name:'جزر القمر',       nameEn:'Comoros',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'YE': { flag:'🇾🇪', name:'اليمن',           nameEn:'Yemen',
    tools:['currency-converter','loan-calculator','age-calculator','hijri-converter'] },
  // ── Top world countries by internet users ─────────────────────────────────
  'CN': { flag:'🇨🇳', name:'الصين',           nameEn:'China',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'IN': { flag:'🇮🇳', name:'الهند',           nameEn:'India',
    tools:['currency-converter','bmi-calculator','loan-calculator','percentage-calculator'] },
  'US': { flag:'🇺🇸', name:'الولايات المتحدة',nameEn:'USA',
    tools:['tip-calculator','discount-calculator','loan-calculator','currency-converter'] },
  'ID': { flag:'🇮🇩', name:'إندونيسيا',       nameEn:'Indonesia',
    tools:['currency-converter','loan-calculator','percentage-calculator','hijri-converter'] },
  'BR': { flag:'🇧🇷', name:'البرازيل',        nameEn:'Brazil',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'RU': { flag:'🇷🇺', name:'روسيا',           nameEn:'Russia',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'JP': { flag:'🇯🇵', name:'اليابان',         nameEn:'Japan',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'NG': { flag:'🇳🇬', name:'نيجيريا',        nameEn:'Nigeria',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'PK': { flag:'🇵🇰', name:'باكستان',         nameEn:'Pakistan',
    tools:['currency-converter','loan-calculator','percentage-calculator','hijri-converter'] },
  'BD': { flag:'🇧🇩', name:'بنغلاديش',        nameEn:'Bangladesh',
    tools:['currency-converter','loan-calculator','percentage-calculator','hijri-converter'] },
  'DE': { flag:'🇩🇪', name:'ألمانيا',         nameEn:'Germany',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'GB': { flag:'🇬🇧', name:'المملكة المتحدة', nameEn:'United Kingdom',
    tools:['tip-calculator','currency-converter','loan-calculator','discount-calculator'] },
  'TR': { flag:'🇹🇷', name:'تركيا',           nameEn:'Turkey',
    tools:['currency-converter','loan-calculator','percentage-calculator','hijri-converter'] },
  'FR': { flag:'🇫🇷', name:'فرنسا',           nameEn:'France',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'MX': { flag:'🇲🇽', name:'المكسيك',         nameEn:'Mexico',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'PH': { flag:'🇵🇭', name:'الفلبين',         nameEn:'Philippines',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'ET': { flag:'🇪🇹', name:'إثيوبيا',         nameEn:'Ethiopia',
    tools:['currency-converter','loan-calculator','percentage-calculator','age-calculator'] },
  'KR': { flag:'🇰🇷', name:'كوريا الجنوبية', nameEn:'South Korea',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'IT': { flag:'🇮🇹', name:'إيطاليا',         nameEn:'Italy',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
  'ES': { flag:'🇪🇸', name:'إسبانيا',         nameEn:'Spain',
    tools:['currency-converter','loan-calculator','discount-calculator','percentage-calculator'] },
};

// Map browser language to country code
const LANG_COUNTRY = {
  // Arabic dialects → Arab countries
  'ar-om':'OM','ar-sa':'SA','ar-ae':'AE','ar-kw':'KW','ar-qa':'QA','ar-bh':'BH',
  'ar-jo':'JO','ar-ps':'PS','ar-sy':'SY','ar-eg':'EG','ar-iq':'IQ','ar-ye':'YE',
  'ar-ma':'MA','ar-dz':'DZ','ar-tn':'TN','ar-lb':'LB','ar-ly':'LY','ar-sd':'SD',
  'ar-so':'SO','ar-mr':'MR','ar-dj':'DJ','ar-km':'KM','ar':'SA',
  // Major world languages
  'zh':'CN','zh-cn':'CN','zh-hans':'CN','zh-hant':'CN','zh-tw':'CN',
  'hi':'IN','hi-in':'IN','en-in':'IN',
  'en-us':'US','en-ca':'US',
  'id':'ID','id-id':'ID',
  'pt-br':'BR','pt':'BR',
  'ru':'RU','ru-ru':'RU',
  'ja':'JP','ja-jp':'JP',
  'ha':'NG','en-ng':'NG',
  'ur':'PK','ur-pk':'PK',
  'bn':'BD','bn-bd':'BD',
  'de':'DE','de-de':'DE','de-at':'DE','de-ch':'DE',
  'en-gb':'GB','en-au':'GB','en-nz':'GB',
  'tr':'TR','tr-tr':'TR',
  'fr':'FR','fr-fr':'FR','fr-be':'FR','fr-ch':'FR','fr-ca':'FR',
  'es-mx':'MX','es':'ES','es-es':'ES','es-ar':'MX','es-co':'MX',
  'fil':'PH','tl':'PH','en-ph':'PH',
  'am':'ET',
  'ko':'KR','ko-kr':'KR',
  'it':'IT','it-it':'IT',
};

function detectCountryFromLang() {
  const lang = (navigator.language || navigator.languages && navigator.languages[0] || '').toLowerCase();
  return LANG_COUNTRY[lang] || null;
}

function renderCountrySection(countryCode) {
  const cd = COUNTRY_DATA[countryCode];
  if (!cd || !document.getElementById('toolsGrid')) return;
  const existing = document.getElementById('countrySection');
  if (existing) existing.remove();

  const lang = localStorage.getItem('lang') || 'ar';
  const t = T[lang] || T.ar;
  const base = location.pathname.includes('/my-tools-site') ? '/my-tools-site' : '';

  const section = document.createElement('div');
  section.id = 'countrySection';
  section.style.cssText = 'margin-bottom:28px;';

  const heading = document.createElement('div');
  heading.style.cssText = 'font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;';
  const countryName = lang === 'ar' ? cd.name : cd.nameEn;
  heading.textContent = '📍 ' + (t.country_recommended || 'Recommended for') + ' ' + countryName;

  const grid = document.createElement('div');
  grid.className = 'tools-grid';
  grid.id = 'countryGrid';

  cd.tools.forEach(function(id) {
    const card = buildMiniCard(id, t, base);
    if (card) grid.appendChild(card);
  });

  section.append(heading, grid);

  // Insert before favSection (or before toolsGrid if no favSection)
  const favSection = document.getElementById('favSection');
  const toolsGrid = document.getElementById('toolsGrid');
  const parent = toolsGrid.parentNode;
  const ref = favSection || toolsGrid;
  parent.insertBefore(section, ref);
  injectStarBtns();

  // Hide Oman tab + Oman tool cards for non-Oman users
  const omanTab = document.querySelector('.cat-tab[data-cat="oman"]');
  if (omanTab) omanTab.style.display = countryCode === 'OM' ? '' : 'none';
  window._hideOmanTools = (countryCode !== 'OM');
  if (typeof filterTools === 'function') filterTools();
}

async function initCountryDetect() {
  if (!document.getElementById('toolsGrid')) return;
  // URL override for testing — ?country=jo (not saved to localStorage)
  const _urlCode = (new URLSearchParams(location.search).get('country') || '').toUpperCase();
  if (_urlCode && COUNTRY_DATA[_urlCode]) { renderCountrySection(_urlCode); return; }
  let code = localStorage.getItem('adawati_country');
  if (!code) {
    code = detectCountryFromLang();
    if (!code) {
      // Try free IP API as fallback (no key needed)
      try {
        const r = await fetch('https://api.country.is/');
        const d = await r.json();
        code = d.country || null;
      } catch(e) {}
    }
    if (code) localStorage.setItem('adawati_country', code);
  }
  if (code && COUNTRY_DATA[code]) renderCountrySection(code);
}

/* ── Track recent on tool pages ── */
function autoTrackRecent() {
  const page = location.pathname.split('/').pop().replace('.html', '');
  if (TOOL_META[page] && page !== 'index') trackRecent(page);
}

/* ── Universal "Return to Home" floating prompt ── */
var _homePromptShown = false;
var _homePromptTimer = null;

function showHomePrompt() {
  if (_homePromptShown) return;
  // Don't show on the homepage itself
  var page = location.pathname.split('/').pop();
  if (!page || page === '' || page === 'index.html') return;
  _homePromptShown = true;
  if (_homePromptTimer) { clearTimeout(_homePromptTimer); _homePromptTimer = null; }

  var lang = localStorage.getItem('lang') || 'ar';
  var msgs = {
    ar: '🏠 العودة للصفحة الرئيسية',
    en: '🏠 Back to Home',
    fr: '🏠 Retour à l\'accueil',
    es: '🏠 Volver al inicio',
    de: '🏠 Zur Startseite',
    ru: '🏠 На главную'
  };
  var msg = msgs[lang] || msgs.en;
  var base = location.pathname.includes('/my-tools-site') ? '/my-tools-site' : '';

  // Inject CSS once
  if (!document.getElementById('hp-style')) {
    var s = document.createElement('style');
    s.id = 'hp-style';
    s.textContent = [
      '.hp-prompt{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);',
      'background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;border-radius:99px;',
      'padding:12px 20px 12px 16px;display:flex;align-items:center;gap:10px;',
      'box-shadow:0 4px 24px rgba(37,99,235,0.35);z-index:9999;font-weight:700;',
      'font-size:14px;white-space:nowrap;font-family:inherit;',
      'animation:hp-up 0.35s cubic-bezier(.4,0,.2,1);}',
      '@keyframes hp-up{from{transform:translateX(-50%) translateY(80px);opacity:0}',
      'to{transform:translateX(-50%) translateY(0);opacity:1}}',
      '.hp-prompt a{color:#fff;text-decoration:none;flex:1;}',
      '.hp-dismiss{background:rgba(255,255,255,0.2);border:none;color:#fff;',
      'border-radius:50%;width:22px;height:22px;cursor:pointer;font-size:13px;',
      'display:flex;align-items:center;justify-content:center;flex-shrink:0;',
      'font-family:inherit;line-height:1;}'
    ].join('');
    document.head.appendChild(s);
  }

  var prompt = document.createElement('div');
  prompt.className = 'hp-prompt';
  prompt.innerHTML = '<a href="' + base + '/index.html">' + msg + '</a>' +
    '<button class="hp-dismiss" onclick="this.parentNode.remove()" title="Dismiss">✕</button>';
  document.body.appendChild(prompt);

  // Auto-dismiss after 10 seconds
  setTimeout(function() { if (prompt.parentNode) prompt.remove(); }, 10000);
}

function initHomePrompt() {
  var page = location.pathname.split('/').pop();
  if (!page || page === '' || page === 'index.html') return;
  // Show after 15 seconds of being on a tool page
  _homePromptTimer = setTimeout(showHomePrompt, 15000);
}

document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  setLang(detectDefaultLang());
  updateSignupBtn();
  injectDarkToggle();
  injectRelatedTools();
  initPWA();
  autoTrackRecent();
  initHomePrompt();
  if (document.getElementById('toolsGrid')) {
    renderFavSection();
    renderRecentSection();
    injectStarBtns();
    initCountryDetect();
  }
});
