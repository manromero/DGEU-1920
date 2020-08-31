import React from 'react';

interface IProps {
  title: string;
  imgUrl: string;
  linkUrl: string;
  linkOpinions: string;
  numberOpinions: number;
  rating: number;
  author: string;
  cover: string;
  price: string;
};

const Article = ({ title, imgUrl, linkUrl, linkOpinions, numberOpinions, rating, author, cover, price }: IProps) => {

  let startIcon = "a-star-0";
  if (rating > 0.5 && rating <= 1.5) {
    startIcon = "a-star-1";
  } else if (rating > 1.5 && rating <= 2.5) {
    startIcon = "a-star-2";
  } else if (rating > 2.5 && rating <= 3.5) {
    startIcon = "a-star-3";
  } else if (rating > 3.5 && rating <= 4.5) {
    startIcon = "a-star-4";
  } else if (rating > 4.5 && rating <= 5.5) {
    startIcon = "a-star-5";
  }

  return (
    <li className="a-carousel-card aok-float-left" role="listitem" style={{ marginLeft: "27px" }}>
      <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;bmx_1&quot;,&quot;asin&quot;:&quot;840819741X&quot;}" className="a-section a-spacing-none p13n-asin">
        <a className="a-link-normal" href={linkUrl}>
          <div className="a-section a-spacing-mini">
            <img alt={title} src={imgUrl} className="a-dynamic-image p13n-sc-dynamic-image" height="160" width="105" />
          </div>
          <div className="p13n-sc-truncated" aria-hidden="true" data-rows="3" title={title}>{title.substr(0, 64)}…</div>
        </a>
        <div className="a-row a-size-small">
          <span className="a-size-small a-color-base">{author}</span>
        </div>
        <div className="a-icon-row a-spacing-none">
          <a className="a-link-normal" title={`${rating} de un máximo de 5 estrellas`} href={linkOpinions}>
            <i className={`a-icon a-icon-star ${startIcon} aok-align-top`}><span className="a-icon-alt">{`${rating} de un máximo de 5 estrellas`}</span></i>
          </a>
          <a className="a-size-small a-link-normal" href={linkOpinions}>{numberOpinions}</a>
        </div>
        <div className="a-row a-size-small">
          <span className="a-size-small a-color-secondary">{cover}</span>
        </div>
        <div className="a-row">
          <a className="a-link-normal a-text-normal" href={linkUrl}>
            <span className="a-size-base a-color-price">
              <span className="p13n-sc-price">{price}</span>
            </span>
          </a>
        </div>
      </div>
    </li>
  );
}

export default Article;