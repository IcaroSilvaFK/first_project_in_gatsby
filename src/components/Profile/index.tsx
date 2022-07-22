import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

import './styles.scss';

interface IUserProps {
  name: string;
  created_at: string;
  avatar_url: string;
  location: string;
}

export function Profile() {
  const [user, setUser] = useState<IUserProps | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<IUserProps>(
        'https://api.github.com/users/IcaroSilvaFK'
      );
      setUser(data);
    })();
  }, []);

  return (
    <section className='profile'>
      <img src={user?.avatar_url} alt={user?.name} />
      <div className='profile__cardUser'>
        <div className='cardUser__column'>
          <span className='column__user'>{user?.name}</span>
          {user?.created_at && (
            <span className='column__date'>
              {format(new Date(user.created_at), 'yy/dd/mm')}
            </span>
          )}
        </div>
        <span className='profile__location'>{user?.location}</span>
      </div>
    </section>
  );
}
