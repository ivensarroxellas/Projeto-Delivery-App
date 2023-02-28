import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

export default function DeliveryProvider({ children }) {
  const [value, setValue] = useState('');

  const contextValue = useMemo(() => ({
    value, setValue,
  }), []);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
