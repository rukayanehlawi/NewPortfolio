# Ruqaya Nehlawi - Video Editor Portfolio

## نظرة عامة

تم تعديل هذا القالب ليعرض محفظة أعمال احترافية لمونتاج الفيديو مع تصنيف المشاريع إلى فئتين:
- **Commercial/Promo Videos**: الفيديوهات التجارية والترويجية
- **Short Reels & Social Media Edits**: الريلز القصيرة ومنشورات السوشيال ميديا

## التعديلات الرئيسية

### 1. قسم Portfolio المحدث
- تم استبدال قسم Portfolio بالكامل بمحتوى فيديوهات احترافي
- تم إضافة فلترة حسب الفئات (Commercial/Reels)
- تم ربط كل فيديو بروابط خارجية (YouTube, Instagram, LinkedIn, Facebook)

### 2. الفيديوهات المضافة

#### Commercial/Promo Videos:
1. **Global Citizen Consultants** - فيديو ترويجي للجنسية الاستثمارية
   - YouTube: https://www.youtube.com/watch?v=2veudW1lsZU
   - Instagram: https://www.instagram.com/reel/DM90h23op4D/

2. **Bemo Bank** - محتوى مؤسسي لبنك بيمو

3. **SkyWays Technics** - فيديو مؤسسي لشركة طيران
   - LinkedIn: https://www.linkedin.com/posts/skyways-technics-a-s_skywaystechnics-mroap-mro-activity-7363072190319153153-mKq7

4. **Agartha Academy - Cloud Computing** - بودكاست تعليمي
   - YouTube: https://www.youtube.com/watch?v=pd_vvCR6yHU

5. **Agartha Academy - Graphic Design** - بودكاست تعليمي
   - YouTube: https://www.youtube.com/watch?v=dT3Xy8iT2pI

#### Short Reels & Social Media Edits:
1. **EliteWhereGo - Reel 1**
   - Instagram: https://www.instagram.com/reel/DK9uObXSHbp/

2. **EliteWhereGo - Reel 2**
   - Instagram: https://www.instagram.com/reel/DLet0eFSNXq/

3. **Sinalco**
   - Facebook: https://www.facebook.com/share/v/1A4LEXfNb4/

4. **MBank - Mwallet** (3 منشورات)
   - Post 1: https://www.instagram.com/reel/DLC6TXpzOw4/
   - Post 2: https://www.instagram.com/reel/DKh0eBBIusY/
   - Post 3: https://www.instagram.com/reel/DJliAGzTxXf/

5. **Misyaf** - محتوى سوشيال ميديا

6. **Skillet - Ibtikar Showreel**
   - Instagram: https://www.instagram.com/reel/DNQXdKMIBSD/

### 3. ملف CSS مخصص
تم إنشاء ملف `assets/css/video-portfolio.css` يحتوي على:
- تنسيقات حديثة للبطاقات (cards)
- تأثيرات hover احترافية
- تصميم responsive للموبايل
- أزرار تواصل اجتماعي منسقة

## كيفية التخصيص

### استبدال الصور
الصور الحالية هي placeholders. لاستبدالها بصور حقيقية:

1. انتقل إلى مجلد `assets/img/portfolio/`
2. استبدل الصور التالية بصور من مشاريعك:
   - `bemo-bank.jpg`
   - `skyways.jpg`
   - `elite-wherego-1.jpg`
   - `elite-wherego-2.jpg`
   - `sinalco.jpg`
   - `mbank-1.jpg`, `mbank-2.jpg`, `mbank-3.jpg`
   - `misyaf.jpg`
   - `skillet-showreel.jpg`

### تحديث الروابط
لتحديث روابط الفيديوهات، افتح ملف `index.html` وابحث عن القسم المناسب ثم عدل الروابط في:
```html
<ul class="icon">
    <li><a href="YOUR_LINK_HERE" target="_blank" rel="noopener"><i class="fa fa-play"></i></a></li>
</ul>
```

### إضافة/حذف فيديوهات
لإضافة فيديو جديد، انسخ أحد الأقسام الموجودة (من `<div class="col-xs-12...">` إلى `</div><!--- END COL -->`) وعدل:
- الصورة في `<img src="..."`
- العنوان في `<h3 class="title">...</h3>`
- الوصف في `<span class="post">...</span>`
- الروابط في `<ul class="icon">...</ul>`
- الفئة في `class="... mix commercial"` أو `class="... mix reels"`

## الملفات المهمة

- `index.html` - الصفحة الرئيسية المعدلة
- `assets/css/video-portfolio.css` - ملف CSS المخصص
- `assets/img/portfolio/` - مجلد صور المشاريع

## ملاحظات مهمة

1. **الروابط غير قابلة للتنزيل**: جميع الروابط تفتح في نوافذ جديدة وتوجه للمنصات الأصلية (YouTube, Instagram, etc.)
2. **صور YouTube**: بعض الفيديوهات تستخدم صور مصغرة من YouTube مباشرة عبر `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
3. **Responsive Design**: القالب متجاوب مع جميع الأجهزة (موبايل، تابلت، ديسكتوب)

## التشغيل

1. افتح ملف `index.html` في المتصفح
2. أو ارفع المجلد كاملاً على استضافة ويب
3. للتطوير المحلي، يمكنك استخدام Live Server في VS Code

## الدعم

لأي استفسارات أو تعديلات إضافية، يرجى التواصل.

---

**تم التعديل بواسطة:** Manus AI Assistant
**التاريخ:** أكتوبر 2025

