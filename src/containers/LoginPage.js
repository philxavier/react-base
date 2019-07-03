import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useSession, useDispatch } from 'hooks';
import LoginForm from 'components/user/LoginForm';
import CustomFormik from 'components/common/CustomFormik';
import { login } from 'actions/sessionActions';
import { loginSchema } from 'utils/constraints';
import routes from 'constants/routesPaths';

const LoginPage = () => {
  const { authenticated } = useSession();
  const loginRequest = useDispatch(login);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div>
      <p><FormattedMessage id="login.title" /></p>
      <CustomFormik
        handleSubmit={loginRequest}
        initialValues={{ email: '', password: '' }}
        component={LoginForm}
        validationSchema={loginSchema}
      />
      <Link to={routes.signUp}>
        <FormattedMessage id="login.signup" />
      </Link>
    </div>
  );
};

export default memo(LoginPage);
