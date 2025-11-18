# Ruqaya Nehlawi - Video Editor Portfolio (Updated Version)

## ✨ التحديثات الجديدة

### 1. المعلومات الشخصية
- ✅ **الاسم**: Ruqaya Nehlawi
- ✅ **الصورة الشخصية**: تم استبدالها بصورتك الحقيقية
- ✅ **المهنة**: Video Editor, Creative Director, Visual Storyteller
- ✅ **المهارات المحدثة**:
  - Adobe Premiere & After Effects (95%)
  - Storyboarding & Visual Development (90%)
  - Creative Direction & Branding (88%)

### 2. تحسينات عرض الفيديوهات

#### معاينة الفيديو (Video Preview)
كل فيديو الآن يحتوي على:
- ✅ **Play Button Overlay**: زر تشغيل يظهر عند hover
- ✅ **Gradient Overlay**: تأثير تدرج لوني عند hover
- ✅ **نسبة عرض 16:9**: جميع الصور بنفس النسبة للاحترافية
- ✅ **Object-fit Cover**: الصور تملأ الصندوق بشكل كامل دون تشويه

#### تحسينات CSS
```css
/* Play button يظهر عند hover */
.portfolio_area .box:hover::after {
    transform: translate(-50%, -60%) scale(1);
    opacity: 0.9;
}

/* الصور تناسب الصناديق بشكل مثالي */
.portfolio_area .box img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: center;
}
```

### 3. الفيديوهات المصنفة

#### Commercial/Promo Videos (5 مشاريع):
1. **Global Citizen Consultants** - Investment Citizenship Video
   - YouTube + Instagram
   - صورة مصغرة من YouTube API

2. **Bemo Bank** - Corporate Banking Video
   - صورة placeholder (يمكن استبدالها)

3. **SkyWays Technics** - Corporate Aviation Video
   - LinkedIn
   - صورة placeholder (يمكن استبدالها)

4. **Agartha Academy - Cloud Computing** - Educational Podcast
   - YouTube
   - صورة مصغرة من YouTube API

5. **Agartha Academy - Graphic Design** - Educational Podcast
   - YouTube
   - صورة مصغرة من YouTube API

#### Short Reels & Social Media Edits (8 مشاريع):
1. **EliteWhereGo - Reel 1** - Delivery Service Reel (Instagram)
2. **EliteWhereGo - Reel 2** - Delivery Service Reel (Instagram)
3. **Sinalco** - Beverage Brand Content (Facebook)
4. **MBank - Mwallet Post 1** - Digital Banking (Instagram)
5. **MBank - Mwallet Post 2** - Digital Banking (Instagram)
6. **MBank - Mwallet Post 3** - Digital Banking (Instagram)
7. **Misyaf** - Social Media Content
8. **Skillet - Ibtikar Showreel** - Portfolio Compilation (Instagram)

## 🎨 الميزات الجديدة

### Video Preview في كل صندوق
- عند hover على أي فيديو، يظهر:
  - زر Play كبير في المنتصف
  - تأثير تدرج لوني
  - تكبير طفيف للصورة (zoom effect)
  - ظل أعمق للصندوق

### Responsive Design
- الصور تتكيف مع جميع الأجهزة
- على الموبايل: ارتفاع 220px
- على الديسكتوب: ارتفاع 280px
- نسبة العرض محفوظة دائماً

### أيقونات وسائل التواصل
- أيقونات في الزاوية العلوية اليمنى
- تتغير للون أزرق عند hover
- روابط تفتح في نوافذ جديدة
- rel="noopener" للأمان

## 📸 استبدال الصور

### الصور التي تحتاج استبدال (Placeholders):
المسار: `assets/img/portfolio/`

| الملف | المشروع | ملاحظات |
|------|---------|---------|
| `bemo-bank.jpg` | Bemo Bank | استبدل بصورة من الفيديو |
| `skyways.jpg` | SkyWays | استبدل بصورة من الفيديو |
| `elite-wherego-1.jpg` | EliteWhereGo Reel 1 | استبدل بصورة من الريل |
| `elite-wherego-2.jpg` | EliteWhereGo Reel 2 | استبدل بصورة من الريل |
| `sinalco.jpg` | Sinalco | استبدل بصورة من الفيديو |
| `mbank-1.jpg` | MBank Post 1 | استبدل بصورة من المنشور |
| `mbank-2.jpg` | MBank Post 2 | استبدل بصورة من المنشور |
| `mbank-3.jpg` | MBank Post 3 | استبدل بصورة من المنشور |
| `misyaf.jpg` | Misyaf | استبدل بصورة من الفيديو |
| `skillet-showreel.jpg` | Skillet Showreel | استبدل بصورة من الشورييل |

### نصائح لاستخراج الصور:
1. **من YouTube**: افتح الفيديو، اضغط pause على لقطة جيدة، خذ screenshot
2. **من Instagram**: افتح الريل على الكمبيوتر، خذ screenshot
3. **من Facebook**: نفس الطريقة
4. **الحجم المثالي**: 1280x720 بكسل (16:9)

### الصور التي تعمل تلقائياً:
- ✅ Global Citizen Consultants (من YouTube API)
- ✅ Agartha Academy - Cloud Computing (من YouTube API)
- ✅ Agartha Academy - Graphic Design (من YouTube API)

## 🚀 كيفية الاستخدام

### 1. فتح القالب
```bash
# فك ضغط الملف
unzip portfolio_template_final.zip

# فتح في VS Code
code portfolio_template/
```

### 2. اختبار القالب
**طريقة 1: VS Code Live Server**
- افتح `index.html`
- اضغط بزر الماوس الأيمن
- اختر "Open with Live Server"

**طريقة 2: متصفح مباشر**
- افتح `index.html` في Chrome أو Firefox

### 3. استبدال الصور
- انتقل إلى `assets/img/portfolio/`
- استبدل الصور بصور حقيقية من مشاريعك
- احتفظ بنفس أسماء الملفات

### 4. تحديث الروابط (اختياري)
إذا تغيرت روابط الفيديوهات:
- افتح `index.html`
- ابحث عن اسم المشروع
- عدل الرابط في `<a href="...">`

## 🎯 التخصيص المتقدم

### تغيير الألوان
افتح `assets/css/video-portfolio.css`:
```css
/* لون الفلتر النشط */
.portfolio_filter ul li.active {
    background: #00d4ff; /* غير هذا اللون */
}

/* لون الأيقونات عند hover */
.portfolio_area .icon li a:hover {
    background: #00d4ff; /* غير هذا اللون */
}
```

### تغيير حجم الصور
```css
.portfolio_area .box img {
    height: 280px; /* غير الارتفاع */
}
```

### إضافة فيديو جديد
1. انسخ أي قسم من `<div class="col-xs-12...">` إلى `</div><!--- END COL -->`
2. عدل:
   - الصورة: `<img src="..."`
   - العنوان: `<h3 class="title">...</h3>`
   - الوصف: `<span class="post">...</span>`
   - الروابط: `<a href="...">`
   - الفئة: `class="... mix commercial"` أو `class="... mix reels"`

## 📱 Responsive Design

القالب يعمل بشكل مثالي على:
- ✅ Desktop (1920x1080 وأكبر)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667 وأصغر)

## 🔒 الأمان

- جميع الروابط الخارجية تحتوي على `rel="noopener"`
- الروابط تفتح في نوافذ جديدة `target="_blank"`
- لا توجد أكواد ضارة أو trackers

## 📝 الملفات المهمة

| الملف | الوصف |
|------|-------|
| `index.html` | الصفحة الرئيسية المحدثة |
| `assets/css/video-portfolio.css` | CSS المخصص للفيديوهات |
| `assets/img/profile-pic.jpg` | صورتك الشخصية |
| `assets/img/portfolio/` | مجلد صور المشاريع |

## ✅ Checklist قبل النشر

- [ ] استبدال جميع صور الفيديوهات بصور حقيقية
- [ ] التأكد من صحة جميع الروابط
- [ ] اختبار القالب على أجهزة مختلفة
- [ ] تحديث معلومات التواصل (Email, Phone, Address)
- [ ] إزالة أقسام غير مطلوبة (Team, Blog إذا لم تكن بحاجتها)

## 🎉 النتيجة النهائية

القالب الآن يحتوي على:
- ✅ معلوماتك الشخصية الحقيقية
- ✅ صورتك الشخصية
- ✅ مهاراتك في Video Editing
- ✅ 13 مشروع فيديو مصنف
- ✅ معاينة احترافية لكل فيديو
- ✅ روابط مباشرة لجميع المنصات
- ✅ تصميم responsive وحديث

---

**تم التحديث بواسطة:** Manus AI Assistant  
**التاريخ:** 19 أكتوبر 2025  
**الإصدار:** 2.0 (Final)

