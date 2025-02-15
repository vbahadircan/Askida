import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './GizlilikPage.module.css';
import './GizlilikPage.css';
import logo from '../logo_beyaz.png';

const GizlilikPage = () => {
  return (
    <div className="gizlilik-page">
      <Helmet>
        <title>Gizlilik Politikası</title>
        <meta name="description" content="Asunatech'in gizlilik politikası hakkında bilgi edinin. Kişisel verilerinizin nasıl korunduğunu öğrenin." />
      </Helmet>
      <Navbar logo={logo} customClass={styles.customNavbar}
      /> {/* Apply custom class */}
      <div className="gizlilik-content">
        <h1>Gizlilik Politikası</h1>
        <h2>KİŞİSEL VERİLERİN KORUNMASI HAKKINDA BİLGİLENDİRME </h2>
        <p>
          Asunatech tarafından elektronik ortamda gerçekleştirilecek “askıda” adlı mobil uygulamaya katılmak üzere form dolduran gerçek kişilerin kimlik,  iletişim ve okul kategorilerindeki kişisel verileri; elektronik aktarımla elde edilmekte ve 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 5.maddesinde belirtilen; veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi ve meşru menfaatleri için zorunlu olması hukuki sebepleri ve Organizasyon ve etkinlik yönetimi ve reklam/kampanya/promosyon süreçlerinin yürütülmesi amacıyla kaydedilmektedir.
          İşlenen kişisel veriler yurtiçinde ve yurtdışında üçüncü kişilere aktarılmamaktadır.
        </p>
        <p>
          Veriler güvenlik düzeyi yüksek teknik ve idari önlemler alınarak muhafaza edilmekte, saklama süresi sonunda silinmektedir.
          Toplanan tüm bilgiler hakkında KVKK’nın 11. maddesi gereği  info@asunatech.com e-posta adresine güvenli elektronik imza ile imzalanmış elektronik posta göndererek ya da Göztepe Mh. İnönü Cd. N:396 D:7 Konak İzmir adresine şahsen veya ıslak imzalı dilekçeniz ile başvurarak kişisel verilerinizin; a) işlenip işlenmediğini öğrenme, b) işlenmişse bilgi talep etme, c) işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, ç) yurtiçinde veya yurtdışında aktarıldığı 3. kişileri bilme, d) eksik veya yanlış işlenmişse düzeltilmesini isteme, e) KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme, f) aktarıldığı 3. kişilere yukarıda sayılan (d) ve (e) bentleri uyarınca yapılan işlemlerin bildirilmesini isteme, g) münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme, ğ) kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme hakkına sahipsiniz.
        </p>
        <p>
          Başvurunuz, hangi hakkınızı kullanmayı talep ettiğinizi açık ve anlaşılır bir dille ifade etmeniz halinde, talebinizin niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret talep edilebilir. Başvurunuz hakkında sizinle iletişime geçebilmemiz ve talep edilen bilgi hakkında sehven üçüncü kişilere bilgi verilmesini önlemek amacıyla, başvurunuzda kimlik ve adres bilgilerinizle birlikte kimliğinizi doğrulamaya yarar belgelerinde eklenmesi önem arz etmektedir.
        </p>
        <p>
          Veri Sorumlusu : Asunatech Yazılım Ege Cem Sun Elif Sena Asana Adi Ortaklığı
        </p>

        <p>


          Çocuk Güvenliği ve CSAM Politikamız

          Uygulamamız, çocuk istismarı ve çocuk güvenliği ile ilgili en yüksek güvenlik standartlarını benimsemektedir. Kullanıcılarımızın, çocuk istismarına veya kötü muameleye yönelik içerik oluşturması, paylaşması, dağıtması veya yüklemesi kesinlikle yasaktır.

          Şüpheli içeriklerin bildirilmesi:
          Eğer uygulamamızda çocuk istismarına yönelik herhangi bir içerikle karşılaşırsanız, uygulama içindeki [Rapor Et] butonunu kullanarak veya doğrudan info@asunatech.com üzerinden bizimle iletişime geçerek bildirimde bulunabilirsiniz.

          İçerik Moderasyonu ve Yetkililere Bildirim:

          Uygulamamız, CSAM ve çocuk istismarına yönelik içerikleri proaktif olarak izler.
          Şüpheli içerikler anında kaldırılır ve ilgili yetkililere bildirilir.
          Yetkililere bildirim, Ulusal Kayıp ve İstismara Uğramış Çocuklar Merkezi (NCMEC) veya bölgesel otoriteler aracılığıyla yapılır.
          Çocuk Güvenliği Yasalarına Uyum:
          Uygulamamız, çocuk koruma yasalarına ve Google Play Çocuk Güvenliği Standartlarına tam uyum sağlar.

          İletişim ve Destek:
          Eğer çocuk güvenliği ile ilgili bir ihlal fark ederseniz veya çocukların tehlikede olduğunu düşünüyorsanız, info@asunatech.com adresinden veya yerel kolluk kuvvetleriyle iletişime geçerek bize bildirebilirsiniz.
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default GizlilikPage;