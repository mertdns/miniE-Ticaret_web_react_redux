# E-Ticaret Projesi - React & Redux

Bu proje, React ve Redux kullanılarak geliştirilmiş basit bir e-ticaret uygulamasıdır. Projenin temel amacı React, Redux ve modern web geliştirme teknolojilerini öğrenmektir.

## 🚀 Özellikler

- **Modern React**: React 19.1.1 ile geliştirilmiş
- **State Management**: Redux Toolkit ile merkezi state yönetimi
- **Routing**: React Router ile sayfa yönlendirmeleri
- **API Entegrasyonu**: Fake Store API ile ürün verilerini çekme
- **Responsive Tasarım**: Mobil uyumlu arayüz
- **Ürün Listeleme**: Tüm ürünleri görüntüleme
- **Ürün Detayı**: Seçilen ürünün detaylı bilgilerini görüntüleme

## 🛠️ Teknolojiler

- **React** (19.1.1) - UI kütüphanesi
- **Redux Toolkit** (2.9.0) - State management
- **React Redux** (9.2.0) - React-Redux bağlantısı
- **React Router** (7.9.3) - Sayfa yönlendirmeleri
- **Vite** - Build tool ve development server
- **ESLint** - Code linting

## 📁 Proje Yapısı

```
src/
├── components/
│   └── Header.jsx          # Ana navigasyon bileşeni
├── pages/
│   ├── About/              # Hakkımızda sayfası
│   ├── Contact/            # İletişim sayfası
│   ├── Products/           # Ürünler listesi sayfası
│   ├── productDetail/      # Ürün detay sayfası
│   └── notFound/           # 404 sayfası
├── store/
│   ├── productSlice/       # Ürün state management
│   └── store.js           # Redux store yapılandırması
├── App.jsx                # Ana uygulama bileşeni
├── main.jsx              # Uygulama giriş noktası
└── index.css             # Global stiller
```

## 🔧 Kurulum

1. Projeyi klonlayın veya indirin
2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:5173` adresine gidin

## 📋 Mevcut Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Üretim için build alır
- `npm run lint` - ESLint ile kod kontrolü yapar
- `npm run preview` - Build alınmış projeyi önizler

## 🌐 API Entegrasyonu

Proje, [Fake Store API](https://fakestoreapi.com/) kullanarak ürün verilerini çeker:
- **Tüm Ürünler**: `GET /products`
- **Tek Ürün**: `GET /products/{id}`

## 📱 Sayfalar

1. **Ana Sayfa** (`/`) - Hoş geldin mesajı
2. **Ürünler** (`/products`) - Tüm ürünlerin listelendiği sayfa
3. **Ürün Detayı** (`/productdetail/:id`) - Seçilen ürünün detayları
4. **Hakkımızda** (`/about`) - Şirket bilgileri
5. **İletişim** (`/contact`) - İletişim formu
6. **404 Sayfası** - Bulunamayan sayfalar için

## 🎯 Öğrenme Hedefleri

Bu proje ile şunları öğrenebilirsiniz:
- React functional components ve hooks kullanımı
- Redux Toolkit ile state management
- React Router ile sayfa yönlendirmeleri
- API entegrasyonu ve asenkron işlemler
- Modern CSS ile responsive tasarım
- Vite build tool kullanımı

## 🔮 Gelecek Geliştirmeler

- Sepet işlevselliği
- Kullanıcı girişi ve kayıt
- Ürün filtreleme ve arama
- Ödeme sistemi entegrasyonu
- TypeScript desteği
