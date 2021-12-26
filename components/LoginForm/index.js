import { useState } from 'react';
import { useRouter } from 'next/router';

export default ({ onSubmit }) => {
  const router = useRouter();
  const [formData, setformData] = useState({
    loginId: '',
    loginPwd: '',
  });

  return (
    <div>
      <p>
        账号：
        <input
          type='text'
          value={formData.loginId}
          onChange={(e) => {
            setformData({
              ...formData,
              loginId: e.target.value,
            });
          }}
        />
      </p>
      <p>
        密码：
        <input
          type='password'
          value={formData.loginPwd}
          onChange={(e) => {
            setformData({
              ...formData,
              loginPwd: e.target.value,
            });
          }}
        />
      </p>
      <p>
        <button
          onClick={async () => {
            if (onSubmit) {
              const res = await onSubmit(formData);
              if (res) {
                router.push('/');
              } else {
                alert('账号密码错误');
              }
            }
          }}
        >
          登陆
        </button>
      </p>
    </div>
  );
};
