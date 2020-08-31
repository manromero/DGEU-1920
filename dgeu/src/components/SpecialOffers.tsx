import React from 'react';

const SpecialOffers = () => {
  return (
    <div className="bucket" id="quickPromoBucketContent">
      <a id="productPromotions" ></a>
      <h2>Ofertas especiales y promociones</h2>
      <div className="content">
        <ul className="qpUL">
          <li>
            <div className="unified_widget rcmBody">
              <h2></h2>
              <a href="https://www.amazon.es/b/ref=b2b_reg_so_002?ie=UTF8&amp;node=14862331031&amp;pf_rd_m=A1AT7YVPFBWXBL&amp;pf_rd_s=special-offers-3&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;pf_rd_t=201&amp;pf_rd_p=82924848-85b8-4a03-a579-3a0c3723feef&amp;pf_rd_p=82924848-85b8-4a03-a579-3a0c3723feef&amp;pf_rd_i=8408197401">
                <b>Amazon Business</b>
              </a>
              - Precios con IVA excluido, gestión de facturas con IVA, cuentas multiusuario y más.
              <a href="https://www.amazon.es/business-register-so/ref=b2b_reg_so_002?pf_rd_m=A1AT7YVPFBWXBL&amp;pf_rd_s=special-offers-3&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;pf_rd_r=VBVEMCD60R9FPEJFGNHW&amp;pf_rd_t=201&amp;pf_rd_p=82924848-85b8-4a03-a579-3a0c3723feef&amp;pf_rd_p=82924848-85b8-4a03-a579-3a0c3723feef&amp;pf_rd_i=8408197401">Crea una cuenta gratis.</a>
              <div className="h_rule"></div>
            </div>
          </li>
          <input type="hidden" name="productPromosHidden" id="productPromosHidden" />
        </ul>
      </div>
    </div>
  );
}

export default SpecialOffers;