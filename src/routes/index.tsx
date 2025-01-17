import React, { useContext } from 'react';
import { useAuth } from '../contexts/auth';

import OtherRoutes from './OtherRoutes';
import SignRoutes from './SignInRoutes';

const Routes: React.FC = () => {

    const { signed } = useAuth();
    
    return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;