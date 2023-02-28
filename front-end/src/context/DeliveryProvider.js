import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

export default function DeliveryProvider({ children }) {
  const INITIAL_STATE = {
    name: 'Nome Da Pessoa Usuária',
    email: 'email@dominio.com',
    role: '',
    token: '',
  };
  const [userInfos, setUserInfos] = useState(INITIAL_STATE);

  const contextValue = useMemo(() => ({
    userInfos, setUserInfos,
  }), [userInfos]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
