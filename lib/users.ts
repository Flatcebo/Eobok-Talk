interface UserProps {
  id: string;
  name: string;
  phoneNumber: number;
  birthday?: Date;
  email?: string;
  image?: string;
  backgroundImage?: string;
  stateMessage?: string;
  imoticon?: any;
}

export async function createUsers({
  id,
  name,
  phoneNumber,
  birthday,
  email,
  image,
  backgroundImage,
  stateMessage,
  imoticon,
}: UserProps) {
  fetch('');
}
