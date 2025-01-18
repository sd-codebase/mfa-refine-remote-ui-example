import { AuthPage } from '@refinedev/antd';
import styles from './login.module.scss';

export const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <AuthPage
          type="login"
          formProps={{
            initialValues: { email: 'remote@refine.dev', password: 'demodemo' },
          }}
        />
      </div>
    </div>
  );
};
