import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16" dir="rtl">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        پیتزایی متفاوت
        <br />
        <span className="text-yellow-500">به حرف دلت گوش کن</span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
