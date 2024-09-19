import React from 'react';
import Image from 'next/image';

interface UserProfileProps {
  name: string;
  position: string;
  imageUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

export default UserProfile;