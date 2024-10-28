import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/images/logo_beyaz.webp'; // Update with actual logo path
import styles from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Navbar with full-width background */}
            <div className={styles.navbarContainer}>
                <Navbar logo={logo} customClass={styles.customNavbar} />
            </div>

            {/* Content */}
            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>Biz Kimiz?</h2>
                    <p>
                        Merhaba! Biz, teknolojiye ve yazılıma tutkuyla bağlı dört kişilik bir arkadaş grubuyuz.
                        Yenilikçi fikirlerimizi hayata geçirirken, samimiyet ve işbirliği bizim için en önemli değerler arasında.
                        Teknoloji dünyasında iz bırakmak ve birlikte büyümek için buradayız.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Ne Yapıyoruz?</h2>
                    <p>
                        Yazılım geliştirme, mobil uygulamalar ve yenilikçi çözümler üretme alanlarında uzmanız.
                        Müşterilerimizin ihtiyaçlarına özel, kullanıcı dostu ve verimli uygulamalar geliştiriyoruz.
                        Amacımız, kullanıcı deneyimini en üst seviyede tutarak değer yaratmak.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Neler Başardık?</h2>
                    <p>
                        <strong>Askıda</strong>, sosyal dayanışma fikri ile oluşturduğumuz ilk projemizdir.
                        Öğrencilerin ve kafe müdavimlerinin sosyal dayanışma içinde olmasını sağlayan yenilikçi bir mobil uygulamadır.
                        Teknolojiyi sosyal faydaya dönüştüren bu proje ile gurur duyuyoruz.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>İletişim Bilgilerimiz</h2>
                    <p><strong>Adres:</strong> Göztepe Mahallesi İnönü Caddesi No: 396  Daire: 07 Konak/İzmir</p>
                    <p><strong>Telefon:</strong> +90 506 628 82 92 Ege Cem Sun  +90 545 266 20 02 Elif Sena Asana </p>
                    <p><strong>Email:</strong> info@asunatech.com</p>
                </section>
            </div>

            {/* Footer with full-width background */}
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
