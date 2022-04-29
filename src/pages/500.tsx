import Button from 'components/Button';
import { useRouter } from 'next/router';

import routes from 'routes';

export const Error = () => {
  const router = useRouter();

  const redirectToPage = () => router.push(routes.home);

  return (
    <section>
      <h1>Ei, fica assim não, foi culpa nossa. Já vamos resolver!</h1>
      <Button name="Voltar pra home" onClick={redirectToPage} />
    </section>
  );
};

export default Error;
