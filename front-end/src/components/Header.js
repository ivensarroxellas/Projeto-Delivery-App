import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

export default function Header() {
  const { userInfos } = useContext(DeliveryContext);

  return (
    <section>
      <nav>
        <ul>
          <li
            datatest-id="customer_products__element-navbar-link-products"
          >
            Produtos

          </li>
          <li
            datatest-id="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos

          </li>
        </ul>
        <ul>
          <li
            datatest-id="customer_products__element-navbar-user-full-name"
          >
            {userInfos.name}

          </li>
          <li
            datatest-id="customer_products__element-navbar-link-logout"
          >
            Sair

          </li>
        </ul>
      </nav>
    </section>
  );
}
