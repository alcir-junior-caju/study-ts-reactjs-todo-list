type userType = {
  [key: string]: string;
};

export const getAvatarGender = (name: string): string => {
  const user: userType = {
    'Leanne Graham': 'https://i.pravatar.cc/150?img=45',
    'Ervin Howell': 'https://i.pravatar.cc/150?img=69',
    'Clementine Bauch': 'https://i.pravatar.cc/150?img=49',
    'Patricia Lebsack': 'https://i.pravatar.cc/150?img=22',
    'Chelsey Dietrich': 'https://i.pravatar.cc/150?img=1',
    'Mrs. Dennis Schulist': 'https://i.pravatar.cc/150?img=63',
    'Kurtis Weissnat': 'https://i.pravatar.cc/150?img=59',
    'Nicholas Runolfsdottir V': 'https://i.pravatar.cc/150?img=61',
    'Glenna Reichert': 'https://i.pravatar.cc/150?img=34',
    'Clementina DuBuque': 'https://i.pravatar.cc/150?img=23'
  };

  return user[name] || '';
};
