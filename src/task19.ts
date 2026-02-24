import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  return response.data;
};

const getUserName = async (id: number): Promise<void> => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);
