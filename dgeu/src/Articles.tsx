import React, { useState } from 'react';
import Article from './Article';

interface IProps {
  title: string;
  articlesPerPage: number;
};

const Articles = ({ title, articlesPerPage }: IProps) => {

  const articles = [
    {
      title: "Un mar violeta oscuro: Finalista Premio Planeta 2018: 3 (Autores Españoles e Iberoamericanos)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81Rpie3Y-VL._AC_UL480_SR315,480_.jpg",
      linkUrl: "https://www.amazon.es/mar-violeta-oscuro-Finalista-Iberoamericanos/dp/840819741X/ref=bmx_1/259-6544150-3296161?_encoding=UTF8&amp;pd_rd_i=840819741X&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;psc=1&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      linkOpinions: "https://www.amazon.es/product-reviews/840819741X/ref=bmx_cr_1/259-6544150-3296161?ie=UTF8&amp;pd_rd_i=840819741X&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      numberOpinions: 110,
      rating: 4.3,
      author: "Ayanta Barilli",
      cover: "Tapa dura",
      price: "20,42 €"
    },
    {
      title: "ql xvii la sangre de roma (Narrativas Históricas)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91Kish2XV-L._AC_UL480_SR312,480_.jpg",
      linkUrl: "https://www.amazon.es/ql-xvii-sangre-roma/dp/8435063496/ref=bmx_2/259-6544150-3296161?_encoding=UTF8&amp;pd_rd_i=8435063496&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;psc=1&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      linkOpinions: "https://www.amazon.es/product-reviews/8435063496/ref=bmx_cr_2/259-6544150-3296161?ie=UTF8&amp;pd_rd_i=8435063496&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      numberOpinions: 39,
      rating: 4.7,
      author: "Simon Scarrow",
      cover: "Tapa dura",
      price: "23,75 €"
    },
    {
      title: "La novia gitana (La novia gitana 1)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91pUtW10aTL._AC_UL480_SR303,480_.jpg",
      linkUrl: "https://www.amazon.es/novia-gitana-ALFAGUARA-NEGRA/dp/8420433187/ref=bmx_3/259-6544150-3296161?_encoding=UTF8&amp;pd_rd_i=8420433187&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;psc=1&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      linkOpinions: "https://www.amazon.es/product-reviews/8420433187/ref=bmx_cr_3/259-6544150-3296161?ie=UTF8&amp;pd_rd_i=8420433187&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      numberOpinions: 759,
      rating: 4.5,
      author: "Carmen Mola",
      cover: "Tapa blanda",
      price: "18,90 €"
    },
    {
      title: "La última cripta",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51wPrIZBwNL._AC_UL480_SR321,480_.jpg",
      linkUrl: "https://www.amazon.es/%C3%BAltima-cripta-Mr-Fernando-Gamboa/dp/1481924699/ref=bmx_4/259-6544150-3296161?_encoding=UTF8&amp;pd_rd_i=1481924699&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;psc=1&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      linkOpinions: "https://www.amazon.es/product-reviews/842043938X/ref=bmx_cr_5/259-6544150-3296161?ie=UTF8&amp;pd_rd_i=842043938X&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      numberOpinions: 1424,
      rating: 4.0,
      author: "Mr Fernando Gamboa",
      cover: "Tapa blanda",
      price: "20,68 €"
    },
    {
      title: "El enigma de la habitación 622 (Literaturas)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81--8-2w7OL._AC_UL480_SR303,480_.jpg",
      linkUrl: "https://www.amazon.es/El-enigma-habitaci%C3%B3n-622-Literaturas/dp/842043938X/ref=bmx_5/259-6544150-3296161?_encoding=UTF8&amp;pd_rd_i=842043938X&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;psc=1&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      linkOpinions: "https://www.amazon.es/product-reviews/1481924699/ref=bmx_cr_4/259-6544150-3296161?ie=UTF8&amp;pd_rd_i=1481924699&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      numberOpinions: 456,
      rating: 3.8,
      author: "Joël Dicker",
      cover: "Tapa blanda",
      price: "21,75 €"
    },
    {
      title: "El chico de las bobinas (Áncora &amp; Delfin)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91gFvKohDPL._AC_UL480_SR282,480_.jpg",
      linkUrl: "https://www.amazon.es/chico-las-bobinas-%C3%81ncora-Delfin/dp/8423357171/ref=bmx_6/259-6544150-3296161?_encoding=UTF8&amp;pd_rd_i=8423357171&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;psc=1&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      linkOpinions: "https://www.amazon.es/product-reviews/8423357171/ref=bmx_cr_6/259-6544150-3296161?ie=UTF8&amp;pd_rd_i=8423357171&amp;pd_rd_r=c6b0e583-be80-4aa3-867d-b89df4127853&amp;pd_rd_w=PWZ4h&amp;pd_rd_wg=nVWqQ&amp;pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;refRID=VBVEMCD60R9FPEJFGNHW",
      numberOpinions: 47,
      rating: 4.7,
      author: "Pere Cervantes",
      cover: "Tapa blanda",
      price: "19,85 €"
    },
    {
      title: "El pintor de almas (Novela histórica)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91mVs9cU83L._AC_UL480_SR312,480_.jpg",
      linkUrl: "https://www.amazon.es/El-pintor-almas-Novela-hist%C3%B3rica/dp/8425357241/ref=bmx_1/259-6544150-3296161?_encoding=UTF8&pd_rd_i=8425357241&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&psc=1&refRID=7QY2MVG9T36VAJQCYR82",
      linkOpinions: "https://www.amazon.es/product-reviews/8425357241/ref=bmx_cr_1/259-6544150-3296161?ie=UTF8&pd_rd_i=8425357241&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&refRID=7QY2MVG9T36VAJQCYR82",
      numberOpinions: 518,
      rating: 4.3,
      author: "Ildefonso Falcones",
      cover: "Tapa blanda",
      price: "21,75 €"
    },
    {
      title: "Tú no matarás (Éxitos)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/817D4wVmN4L._AC_UL480_SR312,480_.jpg",
      linkUrl: "https://www.amazon.es/T%C3%BA-no-matar%C3%A1s-Julia-Navarro/dp/8401021162/ref=bmx_2/259-6544150-3296161?_encoding=UTF8&pd_rd_i=8401021162&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&psc=1&refRID=7QY2MVG9T36VAJQCYR82",
      linkOpinions: "https://www.amazon.es/product-reviews/8401021162/ref=bmx_cr_2/259-6544150-3296161?ie=UTF8&pd_rd_i=8401021162&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&refRID=7QY2MVG9T36VAJQCYR82",
      numberOpinions: 615,
      rating: 4.2,
      author: "Julia Navarro",
      cover: "Tapa blanda",
      price: "22,70 €"
    },
    {
      title: "La sangre manda (Éxitos)",
      imgUrl: "https://m.media-amazon.com/images/I/51eaWTBzmYL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
      linkUrl: "https://www.amazon.es/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&adId=A09058622ZP8LQEV6EZVY&qualifier=1598543179&id=346373722007478&widgetName=sp_detail&url=%2Fdp%2F8401024757%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1",
      linkOpinions: "https://www.amazon.es/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&adId=A09058622ZP8LQEV6EZVY&qualifier=1598543179&id=346373722007478&widgetName=sp_detail&url=%2Fdp%2F8401024757%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1#customerReviews",
      numberOpinions: 61,
      rating: 3.9,
      author: "Stephen King",
      cover: "Tapa dura",
      price: "22,70 €"
    },
    {
      title: "El destino de los héroes (Novela histórica)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81v3vzMKfQL._AC_UL480_SR312,480_.jpg",
      linkUrl: "https://www.amazon.es/destino-los-h%C3%A9roes-Novela-hist%C3%B3rica/dp/8425358213/ref=bmx_4/259-6544150-3296161?_encoding=UTF8&pd_rd_i=8425358213&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&psc=1&refRID=7QY2MVG9T36VAJQCYR82",
      linkOpinions: "https://www.amazon.es/product-reviews/8425358213/ref=bmx_cr_4/259-6544150-3296161?ie=UTF8&pd_rd_i=8425358213&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&refRID=7QY2MVG9T36VAJQCYR82",
      numberOpinions: 103,
      rating: 4.5,
      author: "Chufo Lloréns",
      cover: "Tapa dura",
      price: "22,70 €"
    },
    {
      title: "Despiértame cuando acabe septiembre (Thriller y suspense)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71G4f2oBXML._AC_UL480_SR306,480_.jpg",
      linkUrl: "https://www.amazon.es/Despi%C3%A9rtame-cuando-septiembre-Thriller-suspense/dp/8417305807/ref=bmx_5/259-6544150-3296161?_encoding=UTF8&pd_rd_i=8417305807&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&psc=1&refRID=7QY2MVG9T36VAJQCYR82",
      linkOpinions: "https://www.amazon.es/product-reviews/8417305807/ref=bmx_cr_5/259-6544150-3296161?ie=UTF8&pd_rd_i=8417305807&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&refRID=7QY2MVG9T36VAJQCYR82",
      numberOpinions: 570,
      rating: 4.3,
      author: "Mónica Rouanet",
      cover: "Tapa blanda",
      price: "17,00 €"
    },
    {
      title: "Estuche Trilogía de Trajano (Novela histórica)",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/8189f3OX9-L._AC_UL320_SR316,320_.jpg",
      linkUrl: "https://www.amazon.es/Estuche-Trilog%C3%ADa-Trajano-Novela-hist%C3%B3rica/dp/8408197428/ref=bmx_6/259-6544150-3296161?_encoding=UTF8&pd_rd_i=8408197428&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&psc=1&refRID=7QY2MVG9T36VAJQCYR82",
      linkOpinions: "https://www.amazon.es/product-reviews/8408197428/ref=bmx_cr_6/259-6544150-3296161?ie=UTF8&pd_rd_i=8408197428&pd_rd_r=7de7dff5-9c81-4365-b222-5dcfa00780fb&pd_rd_w=fh6of&pd_rd_wg=HsBZe&pf_rd_p=4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&pf_rd_r=7QY2MVG9T36VAJQCYR82&refRID=7QY2MVG9T36VAJQCYR82",
      numberOpinions: 323,
      rating: 4.7,
      author: "Santiago Posteguillo",
      cover: "Tapa blanda",
      price: "28,40 €"
    }
  ];

  const numberOfPages = Math.ceil(articles.length / articlesPerPage);
  const [page, setPage] = useState(1);

  const minIndex = (page - 1) * articlesPerPage;
  const maxIndex = page * articlesPerPage;
  const articlesFiltered = articles.filter((art, index) => (
    minIndex <= index && index < maxIndex
  ));

  const onPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const onNextPage = () => {
    if (page < numberOfPages) {
      setPage(page + 1);
    }
  }

  return (
    <div className="celwidget pd_rd_w-PWZ4h pf_rd_p-4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7 pf_rd_r-VBVEMCD60R9FPEJFGNHW pd_rd_r-c6b0e583-be80-4aa3-867d-b89df4127853 pd_rd_wg-nVWqQ" data-csa-c-id="1hepyn-9nt3gb-91itr4-2vher3" data-cel-widget="desktop-dp-sims_dpbmx2_ALL-single-bucket-0_5">
      <div id="p13n-m-desktop-dp-sims_dpbmx2.ALL-single-bucket-0.5-sims-feature-3" className="celwidget" data-csa-c-id="8lqtrn-rd1u6e-jhzdkn-knko9r" data-cel-widget="desktop-dp-sims_dpbmx2.ALL-single-bucket-0.5-sims-feature-3">
        <div data-similarity-type="desktop-dp-sims_dpbmx2.ALL-single-bucket-0.5" className="a-section similarities-widget sims-carousel-holder">
          <hr className="a-divider-normal sims-carousel-heading bucketDivider" />
          <div id="desktop-dp-sims_dpbmx2.ALL-single-bucket-0.5-sims-feature" className="a-section a-spacing-large bucket">
            <div data-a-carousel-options="{&quot;ajax&quot;:{&quot;params&quot;:{&quot;asinMetadataKeys&quot;:&quot;adId:ParentReasonId:ParentReasonId.substitutions.purchase_date:rId&quot;,&quot;widgetTemplateClass&quot;:&quot;PI::Similarities::ViewTemplates::Carousel::Desktop&quot;,&quot;linkGetParameters&quot;:&quot;{\&quot;pd_rd_wg\&quot;:\&quot;nVWqQ\&quot;,\&quot;pd_rd_r\&quot;:\&quot;c6b0e583-be80-4aa3-867d-b89df4127853\&quot;,\&quot;pf_rd_r\&quot;:\&quot;VBVEMCD60R9FPEJFGNHW\&quot;,\&quot;pf_rd_p\&quot;:\&quot;4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7\&quot;,\&quot;pd_rd_w\&quot;:\&quot;PWZ4h\&quot;}&quot;,&quot;productDetailsTemplateClass&quot;:&quot;PI::P13N::ViewTemplates::ProductDetails::Desktop::Base&quot;,&quot;forceFreshWin&quot;:0,&quot;painterId&quot;:&quot;PersonalizationDesktopSimilaritiesCarousel&quot;,&quot;featureId&quot;:&quot;SimilaritiesCarousel&quot;,&quot;reftagPrefix&quot;:&quot;bmx&quot;,&quot;imageHeight&quot;:160,&quot;faceoutTemplateClass&quot;:&quot;PI::P13N::ViewTemplates::Product::Desktop::CarouselFaceout&quot;,&quot;imageWidth&quot;:160,&quot;auiDeviceType&quot;:&quot;desktop&quot;,&quot;schemaVersion&quot;:2,&quot;relatedRequestID&quot;:&quot;VBVEMCD60R9FPEJFGNHW&quot;,&quot;productDataFlavor&quot;:&quot;Default&quot;,&quot;maxLineCount&quot;:6,&quot;faceoutArgs&quot;:&quot;{\&quot;productDetailsTemplateClass\&quot;:\&quot;PI::P13N::ViewTemplates::ProductDetails::Desktop::Base\&quot;}&quot;},&quot;id_list&quot;:[&quot;840819741X::::&quot;,&quot;8435063496::::&quot;,&quot;8420433187::::&quot;,&quot;1481924699::::&quot;,&quot;842043938X::::&quot;,&quot;8423357171::::&quot;,&quot;8435018660::::&quot;,&quot;8401021685::::&quot;,&quot;8408197428::::&quot;,&quot;8466348999::::&quot;,&quot;8420689858::::&quot;,&quot;8466666494::::&quot;,&quot;8417926313::::&quot;,&quot;8420433241::::&quot;,&quot;8420435473::::&quot;,&quot;8466350594::::&quot;,&quot;8466664416::::&quot;,&quot;8425358213::::&quot;,&quot;8425352908::::&quot;,&quot;8408232037::::&quot;,&quot;8408208071::::&quot;,&quot;8425357241::::&quot;,&quot;8408196286::::&quot;,&quot;8490667802::::&quot;,&quot;8416331170::::&quot;,&quot;8417761519::::&quot;,&quot;843506350X::::&quot;,&quot;8401025117::::&quot;,&quot;8498388988::::&quot;,&quot;8416291993::::&quot;,&quot;841780577X::::&quot;,&quot;8401022231::::&quot;,&quot;8401021162::::&quot;,&quot;8498725402::::&quot;,&quot;8401023599::::&quot;,&quot;8425357373::::&quot;,&quot;849838608X::::&quot;,&quot;8408107151::::&quot;,&quot;8417683186::::&quot;,&quot;8491393978::::&quot;,&quot;8425358477::::&quot;,&quot;8401024129::::&quot;,&quot;1546710205::::&quot;,&quot;8408196448::::&quot;,&quot;8408224697::::&quot;,&quot;8423356353::::&quot;,&quot;8415433271::::&quot;,&quot;8417216006::::&quot;,&quot;8417553681::::&quot;,&quot;8408208063::::&quot;,&quot;8432236365::::&quot;,&quot;8420438170::::&quot;,&quot;8417007571::::&quot;,&quot;841721660X::::&quot;,&quot;8498725410::::&quot;,&quot;8401021936::::&quot;,&quot;8498389852::::&quot;,&quot;8401024706::::&quot;,&quot;8435035832::::&quot;,&quot;8435063615::::&quot;,&quot;8423355683::::&quot;,&quot;8435062929::::&quot;,&quot;846634666X::::&quot;,&quot;846634991X::::&quot;,&quot;8497938895::::&quot;,&quot;8466667326::::&quot;,&quot;1540466507::::&quot;,&quot;8466350586::::&quot;,&quot;8420435570::::&quot;,&quot;8435018393::::&quot;,&quot;841314244X::::&quot;,&quot;8466666451::::&quot;,&quot;8490667314::::&quot;,&quot;8420439304::::&quot;,&quot;8401023750::::&quot;,&quot;8435063356::::&quot;,&quot;8408153854::::&quot;,&quot;8408071653::::&quot;,&quot;8466426345::::&quot;,&quot;8408209159::::&quot;,&quot;8420435988::::&quot;,&quot;840102241X::::&quot;,&quot;8423357627::::&quot;,&quot;8466335242::::&quot;,&quot;8499928080::::&quot;,&quot;2919805711::::&quot;,&quot;8425350522::::&quot;,&quot;8401021995::::&quot;,&quot;8423356930::::&quot;,&quot;849139480X::::&quot;,&quot;8435063593::::&quot;,&quot;8490322228::::&quot;,&quot;8446047969::::&quot;,&quot;8491892982::::&quot;,&quot;8423357562::::&quot;],&quot;url&quot;:&quot;/gp/p13n-shared/faceout-partial&quot;,&quot;id_param_name&quot;:&quot;asins&quot;},&quot;baseAsin&quot;:&quot;&quot;,&quot;name&quot;:&quot;desktop-dp-sims_dpbmx2.ALL-single-bucket-0.5&quot;,&quot;set_size&quot;:95}" data-p13n-feature-metadata="{&quot;baseAsin&quot;:null,&quot;pd_rd_wg&quot;:&quot;nVWqQ&quot;,&quot;pd_rd_r&quot;:&quot;c6b0e583-be80-4aa3-867d-b89df4127853&quot;,&quot;pf_rd_r&quot;:&quot;VBVEMCD60R9FPEJFGNHW&quot;,&quot;pf_rd_p&quot;:&quot;4ea5ccbb-51b9-48c0-85b0-9fb9c9265ee7&quot;,&quot;pd_rd_w&quot;:&quot;PWZ4h&quot;}" data-p13n-feature-name="bmx" data-p13n-global="{&quot;auiDeviceType&quot;:&quot;desktop&quot;,&quot;marketplaceId&quot;:&quot;A1RKKUPIHCS9HS&quot;,&quot;requestId&quot;:&quot;VBVEMCD60R9FPEJFGNHW&quot;,&quot;marketplace&quot;:&quot;ES&quot;,&quot;customerId&quot;:0,&quot;session&quot;:&quot;259-6544150-3296161&quot;}" data-a-display-strategy="swap" data-a-transition-strategy="swap" data-a-className="desktop" className="a-begin a-carousel-container a-carousel-display-swap a-carousel-transition-swap similarities-aui-carousel p13n-sc-carousel a-carousel-initialized">
              <input type="hidden" className="a-carousel-firstvisibleitem" />
              <div className="a-row a-carousel-header-row a-size-large">
                <div className="a-column a-span8">
                  <h2 className="a-carousel-heading">{title}</h2>
                </div>
                <div className="a-column a-span4 a-span-last a-text-right">
                  <span className="a-carousel-pagination a-size-base" style={{ visibility: "visible" }}>
                    <span className="a-carousel-page-count">
                      Página <span className="a-carousel-page-current">{page}</span> de <span className="a-carousel-page-max">{numberOfPages}</span>
                    </span>
                    <span className="a-carousel-restart-container" style={{ display: "none" }}>
                      <span className="a-text-separator"></span>
                      <a className="a-carousel-restart" href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#">Volver al inicio</a>
                    </span>
                    <span className="a-carousel-accessibility-page-info a-offscreen" aria-live="polite">Página 1 de 16  </span>
                  </span>
                </div>
              </div>
              <span className="aok-offscreen p13n-sc-offscreen">Esta función de compra continuará cargando productos cuando se presione la tecla Intro. Para navegar fuera de este carrusel, usa tu tecla de acceso rápido de encabezados para navegar hacia el encabezado siguiente o anterior.</span>
              <div className="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"><div className="a-carousel-row-inner">
                <div className="a-carousel-col a-carousel-left" style={{ height: "294px", visibility: "visible" }}>
                  <a className={`a-button a-button-image a-carousel-button a-carousel-goto-prevpage ${page === 1 ? 'a-button-disabled' : ''}`} id="a-autoid-19" style={{ top: "117.594px" }} onClick={onPrevPage}>
                    <span className="a-button-inner">
                      <i className="a-icon a-icon-previous">
                        <span className="a-icon-alt">Atrás</span>
                      </i>
                    </span>
                  </a>
                </div>
                <div className="a-carousel-col a-carousel-center">
                  <div className="a-carousel-viewport" style={{ height: "294px" }} id="anonCarousel4">
                    <ol className="a-carousel" role="list">
                      {articlesFiltered.map(art => (
                        <Article
                          title={art.title}
                          imgUrl={art.imgUrl}
                          linkUrl={art.linkUrl}
                          linkOpinions={art.linkOpinions}
                          numberOpinions={art.numberOpinions}
                          rating={art.rating}
                          author={art.author}
                          cover={art.cover}
                          price={art.price}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="a-carousel-col a-carousel-right" style={{ height: "294px", visibility: "visible" }}>
                  <a className={`a-button a-button-image a-carousel-button a-carousel-goto-nextpage ${page === numberOfPages ? 'a-button-disabled' : ''}`} id="a-autoid-20" style={{ top: "117.594px" }} onClick={onNextPage}>
                    <span className="a-button-inner">
                      <i className="a-icon a-icon-next">
                        <span className="a-icon-alt">Siguiente</span>
                      </i>
                    </span>
                  </a>
                </div>
              </div>
              </div>
              <span className="a-end aok-hidden"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;