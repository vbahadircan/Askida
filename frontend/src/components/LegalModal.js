import React, { useState, useRef, useEffect } from 'react';

const LegalModal = ({ isOpen, closeModal, formData, donationAmount }) => {
  const [activeTab, setActiveTab] = useState('onBilgilendirme');
  const modalRef = useRef(null);

  const renderBasketItems = () => {
    return (
      <p>
        {donationAmount} TL değerinde askıda kahve
      </p>
    );
  };



  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const renderOnBilgilendirmeFormu = () => {
    return (
      <div className="space-y-4 text-sm">
        <h2 className="text-xl font-bold mb-4">TÜKETİCİ MEVZUATI GEREĞİNCE ÖN BİLGİLENDİRME FORMU</h2>

        <section>
          <h3 className="font-semibold">1. SATICIYA İLİŞKİN BİLGİLER</h3>
          <p>Ticari Ünvan : Asunatech Yazılım Ege Cem Sun – Elif Sena Asana Adi Ortaklığı</p>
          <p>Adres : Göztepe Mahallesi İnönü Caddesi No:396 B blok Daire:7 Konak / İZMİR</p>
          <p>E-posta Adresi: info@asunatech.com</p>
          <p>Telefon : 0 506 628 82 92</p>
          <p>* Bu hat için yapılan aramalar kişinin kendi tarifesi üzerinden ücretlendirilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">2. ALICIYA İLİŞKİN BİLGİLER</h3>
          <p>Adı Soyadı : {formData.firstName} {formData.lastName}</p>
          <p>Adresi : {formData.address}</p>
          <p>Telefon : {formData.phone_number}</p>
          <p>E-mail : {formData.email}</p>
        </section>

        <section>
          <h3 className="font-semibold">3. KONU</h3>
          <p>İşbu Ön Bilgilendirme Formu'nun konusu; Alıcının, aşağıda nitelik ve satış fiyatı belirtilen ürün ya da ürünlerin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicilerin Korunması Hakkında Kanun ve 27 Kasım 2014 tarihli ve 29188 sayılı Resmi Gazetede yayınlanan Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince bilgilendirilmesidir.</p>
        </section>

        <section>
          <h3 className="font-semibold">4. SÖZLEŞME KONUSU ÜRÜNÜN TEMEL ÖZELLİKLERİ ve ÖDEME BİLGİLERİ</h3>
          <p>İşbu kısımda sözleşme konusu ürün ya da ürünlerin temel özellikleri açıklanmaktadır.</p>
          {renderBasketItems()} {/* Render the basket items here */}
          <p>Sepet Fiyatı: {donationAmount} TL</p>
          <p>Toplam Fiyat: {donationAmount} TL</p>
        </section>

        <section>
          <h3 className="font-semibold">5. ÖDEME ŞEKLİ</h3>
          <p>Ödemeler kredi kartı, EFT veya havale yöntemlerinden birisi kullanılarak yapılabilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">6. MAL/HİZMETİN TESLİMATI</h3>
          <p>Teslimat, işletmenin açık müsait olması ve mal bedelinin Satıcının hesabına geçmesinden sonra mümkün olan en kısa sürede yapılır. Doğal afetler, hava muhalefeti vs. gibi mücbir sebeplerle gecikmeler olabilir. Satıcı, malı/hizmeti siparişinden itibaren 30 (Otuz) gün içinde teslim eder.</p>
          <p>Mal/hizmetin teslimi Satıcının, web sitesinde, ilan ettiği şekilde, ……… işyerlerinde askıya çıkarılıp, tüketicinin askıdan alması yöntemi ile doğrudan tüketecek kişiye yapılmaktadır.</p>
          <p>Sipariş konusu mal/hizmetin teslimatı için mesafeli satış sözleşmesinin imzalı bir nüshasının Satıcıya ulaştırılmış olması ve bedelinin Alıcının tercih ettiği ödeme sekli ile ödenmiş olması şarttır. Herhangi bir nedenle mal/hizmet bedeli ödenmez veya banka kayıtlarında iptal edilir ise, Satıcı mal/hizmetin teslimi yükümlülüğünden kurtulmuş kabul edilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">7. MÜŞTERİ HİZMETLERİ</h3>
          <p>Alıcı, ürün hakkıda soru/şikayet, mal/hizmetin teslimatına ilişkin soru/şikayet, alışveriş yapılacak olan web sitesinin kullanımına dair soru/şikayetlerin tamamı bu formun 1. Maddesinde yer alan iletişim bilgilerinin herhangi biri aracılığıyla müşteri hizmetine iletilmesi durumunda, Satıcı tarafından mümkün olan en kısa zamanda yanıtlanacak ve/veya çözüm sağlanacaktır.</p>
        </section>

        <section>
          <h3 className="font-semibold">8. GEÇERLİLİK SÜRESİ</h3>
          <p>Listelenen ve siteden ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerliliğini korur. Ancak hatayla yanlış yazılan, tedarikçinin geç bildirmesi ile güncellenmemiş olan fiyat farklılıklarında Satıcının müşteriye bildireceği güncel fiyat geçerli kabul edilecektir. Hata durumlarında mal/hizmet bedelinden fazla çekim yapılmışsa farkı iade edilir. Mal/hizmetin gerçek fiyatı ilan edilenden farklı ise Alıcıya gerçek fiyat bildirilir. Müşterinin talebi doğrultusunda gerçek fiyat üzerinden satış gerçekleştirilir ya da satış iptal edilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">9. CAYMA HAKKI</h3>
          <p>Alıcı; mal satışına ilişkin mesafeli sözleşmelerde, malı teslim aldığı tarihten itibaren on dört gün içerisinde hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkına sahiptir. Hizmet sunumuna ilişkin mesafeli sözleşmelerde ise, bu süre sözleşmenin imzalandığı tarihte başlar. Sözleşmede, hizmetin ifasının on dört günlük süre dolmadan yapılması kararlaştırılmışsa, tüketici ifanın başlayacağı tarihe kadar cayma hakkını kullanabilir. Mal satışına ilişkin sözleşme konusu ürün askıda tüketiciye sunulmakta, tüketici askıdan aldığında tüketilmiş olmaktadır. Ürün tüketici tarafından askıdan alındığı andan itibaren cayma hakkı kullanılamaz. Cayma hakkının kullanılması için Alıcı tarafından on dört günlük süre içinde ve ürün askıdan alınmadan önce Satıcıya yukarıda bildirilen faks, telefon veya elektronik posta ile bildirimde bulunulması ve mal/hizmetin Mesafeli Satış Sözleşmesi'nin 4. Madde hükümleri çerçevesinde ve işbu Sözleşmenin ayrılmaz parçası olan ve web sitesinde yayınlanmış olan önbilgiler gereğince, Ödemeler kredi kartı, EFT veya havale yöntemlerinden birisi kullanılarak yapılabilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">10. CAYMA HAKKININ KULLANILAMAYACAĞI MAL/HİZMETLER</h3>
          <p>Niteliği itibarıyla iade edilemeyecek mal/hizmetler, hızla bozulan ve son kullanma tarihi geçen mal/hizmetler, tek kullanımlık mal/hizmetler, kopyalanabilir her türlü yazılım ve programlardır. Ayrıca, her türlü yazılım ve programlarında, DVD, DIVX, VCD, CD, MD, videokasetlerde, bilgisayar ve kırtasiye sarf malzemelerinde (toner, kartuş, şerit ve benzeri) ile kozmetik malzemelerinde cayma hakkının kullanılabilmesi için mal/hizmetin ambalajının açılmamış, bozulmamış ve kullanılmamış olmaları şartı bulunmaktadır.</p>
          <p>a) Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve satıcı veya sağlayıcının kontrolünde olmayan mal veya hizmetlere ilişkin sözleşmeler.</p>
          <p>b) Tüketicinin istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara ilişkin sözleşmeler.</p>
          <p>c) Çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmeler.</p>
          <p>ç) Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmeler.</p>
          <p>d) Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallara ilişkin sözleşmeler.</p>
          <p>e) Malın tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemelerine ilişkin sözleşmeler.</p>
          <p>f) Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınların teslimine ilişkin sözleşmeler.</p>
          <p>g) Belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler.</p>
          <p>ğ) Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallara ilişkin sözleşmeler.</p>
          <p>h) Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile ifasına başlanan hizmetlere ilişkin sözleşmeler.</p>
        </section>

        <section>
          <h3 className="font-semibold">11. GEÇERLİLİK</h3>
          <p>İşbu ön bilgilendirme formu, elektronik ortamda Alıcı tarafından okunarak kabul edildikten sonra Mesafeli Satış Sözleşmesi kurulması aşamasına geçilecektir.</p>
        </section>

        <section>
          <h3 className="font-semibold">12. YETKİLİ MAHKEME</h3>
          <p>Tüketici; şikâyet ve itirazları konusunda başvurularını, T.C. Gümrük ve Ticaret Bakanlığı tarafından her yıl Aralık ayında belirlenen parasal sınırlar dâhilinde tüketicinin mal veya hizmeti satın aldığı veya ikametgâhının bulunduğu yerdeki tüketici sorunları hakem heyetine veya tüketici mahkemesine yapabilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">13. SON HÜKÜMLER</h3>
          <p>Siparişe ilişkin verilen belge ve bilgilerin eksik, sahte ve/veya yanlış olduğunun saptanması veya siparişin kötü niyetle/veya ticari ve/veya kazanç elde etmek amacıyla yapılmış olduğuna dair şüphenin varlığı ya da tespiti halinde, herhangi bir zamanda, Alıcı'yı bilgilendirmek koşuluyla sipariş başvurusunu, gerekli incelemelerin yapılmasını teminen durdurma ve/veya iptal etme hakkını saklı tutar. İptal halinde, ödeme için iade süreci yine Alıcı'ya bildirilmek kaydıyla yapılabilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">14. İSTİSNA</h3>
          <p>İşbu ön bilgilendirme formunda yer alan ve 6502 sayılı Tüketicinin Korunması Hakkında Kanundan doğarak tüketicilere hukuki koruma sağlayan madde hükümleri sadece alıcının Tüketici olduğu hallerde geçerli olarak hüküm ifade edecek olup; alıcının 6502 sayılı kanunda yer alan Tüketici tanımına uymadığı hallerde ilgili maddeler taraflar arasında hüküm ifade etmeyecektir. Alıcı; 6502 S.K.’un M. 48, f.2 ve Mes. Söz. Yön. 5., 6. ve 7. maddeleri gereğince Ön Bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul, taahhüt ve beyan eder.</p>
        </section>
      </div>
    );
  };

  const renderMesafeliSatisSozlesmesi = () => {
    return (
      <div className="space-y-4 text-sm">
        <h2 className="text-xl font-bold mb-4">MESAFELİ SATIŞ SÖZLEŞMESİ</h2>

        <section>
          <p>13.06.2003 Tarih ve 25137 Sayılı resmi gazetede yayınlanan 'Mesafeli Sözleşmeler Uygulama Usul ve Esasları Hakkında Yönetmelik' gereğince internet üzerinden gerçekleştirilen satışlar için ön bilgilendirme ve sözleşme yapılması zorunluluğu getirilmiştir.</p>
          <p>Yapılan ön bilgilendirmeye uygun düzenlenen sözleşme detayları aşağıda belirtildiği gibidir.</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 1- TARAFLAR</h3>
          <p>1.1. Satıcı :</p>
          <p>Ünvanı : Asunatech Yazılım Ege Cem Sun – Elif Sena Asana Adi Ortaklığı (www.asunatech.com)</p>
          <p>Adresi : Göztepe Mahallesi İnönü Caddesi No:396 B blok Daire:7 Konak / İZMİR</p>
          <p>E-mail: info@asunatech.com</p>
          <p>Telefon : 0 506 628 82 92</p>
          <p>1.2. Alıcı :</p>
          <p>Adı Soyadı : {formData.firstName} {formData.lastName}</p>
          <p>Adresi : {formData.address}</p>
          <p>Telefon : {formData.phone_number}</p>
          <p>E-mail : {formData.email}</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 2- KONU</h3>
          <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait asunatech.com internet sitesindeki elektronik ortamda siparişini yaptığı, aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmeleri Uygulama Esas ve Usulleri Hakkında Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 3- SÖZLEŞME KONUSU ÜRÜN</h3>
          <p>3.1- Ürünlerin adı, miktarı, vergiler dahil satış bedeli (adet x birim fiyat olarak) aşağıda belirtildiği gibidir.</p>
          {renderBasketItems()} {/* Render the basket items here */}
          <p>Sepet Fiyatı: {donationAmount} TL</p>
          <p>Toplam Fiyat: {donationAmount} TL</p>
          <p>3.2- Ödeme Şekli : Kredi Kartı İle</p>
          <p>Bankanız, kampanyalar düzenleyerek sizin seçtiğiniz taksit adedinin daha üstünde bir taksit adedi uygulayabilir, taksit öteleme gibi hizmetler sunabilir. Bu tür kampanyalar bankanızın insiyatifindedir.</p>
          <p>Kredi kartınızın hesap kesim tarihinden itibaren sipariş toplamı taksit adedine bölünerek kredi kartı özetinize bankanız tarafından yansıtılacaktır. Bankanız, taksit tutarlarını küsurat farklarını dikkate alarak aylara eşit olarak dağıtmayabilir. Detaylı ödeme planınızın oluşturulması bankanız insiyatifindedir.</p>
          <p>3.3- Diğer yandan vadeli satışların sadece Bankalara ait kredi kartları ile yapılması nedeniyle, ALICI, ilgili faiz oranlarını ve temerrüt faizi ile ilgili bilgileri bankasından ayrıca teyit edeceğini, yürürlükte bulunan mevzuat hükümleri gereğince faiz ve temerrüt faizi ile ilgili hükümlerin Banka ve alıcı arasındaki kredi kartı sözleşmesi kapsamında uygulanacağını kabul, beyan ve taahhüt eder.</p>
          <p>Kredi kartına İade Prosedürü : Alıcının cayma hakkını kullandığı durumlarda ya da siparişe konu olan ürünün çeşitli sebeplerle tedarik edilememesi veya Hakem heyeti kararları ile Tüketiciye bedel iadesine karar verilen durumlarda, alışveriş kredi kartı ile ve taksitli olarak yapılmışsa, kredi kartına iade prosedürü aşağıda belirtilmiştir:</p>
          <p>Müşteriye nakit olarak iade yapılmaz. Taksitli satışlarda o ana kadar yapılan tahsilat iade edilir. Alıcı'ya ait olan iade ücreti satıcı tarafından ödenmiş ise, Alıcı'ya iade edilecek ücretten mahsup edilir.</p>
          <p>Alıcı, bu prosedürü okuduğunu ve kabul ettiğini kabul ve taahhüt eder.</p>
          <p>3.4- Teslimat Şekli ve Adresi :</p>
          <p>Fatura Bilgileri</p>
          <p>Fatura Tipi : Bireysel</p>
          <p>T.C. Kimlik No : 11111111111</p>
          <p>Ad Soyad: {formData.name}</p>
          <p>İl : Ankara</p>
          <p>Adres : {formData.address}</p>
          <p>E-mail : {formData.email}</p>
          <p>Telefon : {formData.phone}</p>
          <p>Teslimat Bilgileri</p>
          <p>Ad Soyad : {formData.name}</p>
          <p>Telefon : {formData.phone}</p>
          <p>İl : {formData.city}</p>
          <p>Adres : {formData.address}</p>
          <p>Ürün, askıdan alan tüketiciye teslim edilecektir.</p>
          <p>Teslimat Masrafları : Teslimat masrafı yoktur.</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 4- GENEL HÜKÜMLER</h3>
          <p>4.1- ALICI, www.asunatech.com internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</p>
          <p>4.2- Sözleşme konusu ürün, 3 ile 7 iş günü içerinde askıda ürünü talep eden tüketiciye teslim edilir.</p>
          <p>4.3- Sözleşme konusu ürün, teslim edilecek kişinin teslimatı kabul etmemesinden SATICI sorumlu tutulamaz. Bu gibi durumlarda 3.4-no.lu madde geçerlidir.</p>
          <p>4.4- SATICI, sözleşme konusu ürünün tüketiciye teslim edilmesinden sorumludur.</p>
          <p>4.5- Sözleşme konusu ürünün tüketiciye teslimi için, işbu sözleşmenin imzalı / onaylı nüshasının SATICI'ya ulaştırılmış olması ve bedelinin ALICI'nın tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilir ise, SATICI ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 5- CAYMA HAKKI</h3>
          <p>ALICI, sözleşme tarihinden itibaren 14 gün içinde sözleşmeden cayma hakkına sahiptir.</p>
          <p>Sanal pos'tan yapılan iade işlemlerinde, ALICI'nın cayma bildiriminin satıcıya ulaştığı tarihten itibaren kart hamiline 15 gün içinde, bankanın kuralları çerçevesinden ürün bedeli iade edilir, taksitle alınmış ise Madde 3.3 koşulları geçerlidir.</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 6- CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</h3>
          <p>Ürün satın alınmasından itibaren en geç üç gün içinde internet sitesinde açıklandığı şekilde askıya çıkarılır. Tüketicinin gıda ürününü askıdan alması ile ürün tüketildiğinden, niteliği itibarıyla tüketici iade edilemeyecek ürün olduğu için cayma hakkı kullanılamaz.</p>
          <p>Cayma hakkı kullanılacak ürünlerde, ürünün ambalajının açılmamış ve ürünün kullanılmamış olması şartı aranmaktadır!</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 7- TEMERRÜT HÜKÜMLERİ</h3>
          <p>Tarafların işbu sözleşmeden kaynaklanan edimlerini yerine getirmemesi durumunda, Borçlar Kanunu'nun 106.-108.maddesinde yer alan Borçlunun Temerrüdü hükümleri uygulanacaktır. Temerrüt durumlarında, herhangi bir tarafın edimlerini süresi içinde haklı bir sebebi olmaksızın yerine getirmemesi durumunda diğer taraf söz konusu edimin yerine getirilmesi için edimini yerine getirmeyen tarafa 7 günlük süre verecektir. Bu süre zarfında da yerine getirilmesi durumunda edimini yerine getirmeyen taraf mütemerrit olarak addolunacak ve alacaklı edimin ifasını talep etmek suretiyle malın teslimini, ve/veya sözleşmenin feshini ve bedelin iadesini talep etme hakkına sahiptir.</p>
          <p>Mesafeli Sözleşmeler Hakkında Yönetmeliğin 9.maddesinin son fıkrası gereğince SATICI, sipariş konusu mal veya hizmetin yerine getirilmesinin imkansızlaşması nedeniyle sözleşme konusu yükümlülüklerini yerine getiremiyorsa ,bu durumu sözleşmeden doğan ifa yükümlülüğünün süresi dolmadan tüketiciye bildirmeyi taahhüd eder.</p>
          <p>Bu durumda, Asunatech Yazılım Ege Cem Sun – Elif Sena Asana Adi Ortaklığı sözleşmeyi derhal fesih etme hakkına haiz olup, Müşterinin sipariş verdiği ürünün bedelini ve varsa borç altına sokan tüm belgeleri iade edeceğini taahhüt eder.</p>
          <p>Asunatech Yazılım Ege Cem Sun – Elif Sena Asana Adi Ortaklığı (www.asunatech.com) 'in işbu yükümlülüğünü yerine getirmesini engelleyebilecek mücbir sebepler veya nakliyeyi engelleyen hava muhalefetleri,ulaşımın kesilmesi, yangın, deprem, sel baskını gibi olağanüstü olaylar nedeni ile sözleşme konusu ürünü süresi içerisinde teslim edemez ise, Bu tip durumlarda Alıcı, Asunatech Yazılım Ege Cem Sun – Elif Sena Asana Adi Ortaklığı (www.asunatech.com)'in hiçbir sorumluluğu olmadığını,siparişin iptal edilmesini veya teslimat süresinin engelleyici durumunun ortadan kalkmasına kadar ertelenmesi haklarından birini kullanabilir. ALICInın siparişi iptal etmesi halinde ödediği tutar 10 gün içerisinde kendisine ödenir.(kredi kartı ile yapılan taksitli alışverişlerde ise kredi kartına iade için yukarıdaki prosedür ALICI tarafından kabul edilir)</p>
        </section>

        <section>
          <h3 className="font-semibold">MADDE 8- YETKİLİ MAHKEME</h3>
          <p>İşbu sözleşmenin uygulanmasında, anlaşmazlık halinde İzmir Mahkemeleri yetkilidir.</p>
          <p>Siparişin gerçekleşmesi durumunda ALICI işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.</p>
        </section>

        <section>
          <h3 className="font-semibold">SATICI :</h3>
          <p>Asunatech Yazılım Ege Cem Sun - Elif Sena Asana Adi Ortaklığı </p>
          <p> asunatech.com </p>
        </section>

        <section>
          <p>ALICI: {formData.name}</p>
          <p>TARİH: {new Date().toLocaleDateString()}</p>
        </section>

      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleOutsideClick}>
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="p-6 flex-shrink-0 border-b">
          <h2 className="text-2xl font-bold mb-4">Yasal Belgeler</h2>
          <div className="flex">
            <button
              onClick={() => setActiveTab('onBilgilendirme')}
              className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'onBilgilendirme' ? 'bg-gray-200 font-semibold' : 'bg-gray-100'}`}
            >
              Ön Bilgilendirme Formu
            </button>
            <button
              onClick={() => setActiveTab('mesafeliSatis')}
              className={`px-4 py-2 rounded-t-lg ${activeTab === 'mesafeliSatis' ? 'bg-gray-200 font-semibold' : 'bg-gray-100'}`}
            >
              Mesafeli Satış Sözleşmesi
            </button>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto p-6">
          {activeTab === 'onBilgilendirme' ? renderOnBilgilendirmeFormu() : renderMesafeliSatisSozlesmesi()}
        </div>
        <div className="p-6 flex justify-end border-t">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;