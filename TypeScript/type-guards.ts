type Person = { id: number; name: string; };
type User = Person & { role: 'USER' };
type Admin = Person & { role: 'ADMIN' };

const getUser = (): User | Admin => {
  return { id: 1, name: 'Adm', role: 'ADMIN' };
};

const isAdmin = (person: User | Admin): person is Admin => {
  return person.role === 'ADMIN';
};

const user = getUser(); // User | Admin

if (isAdmin(user)) {
  // user.role === 'ADMIN'
}

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`/user/${id}`);
  const json = await response.json();

  return json as User;
};

const isValidUser = (value: unknown): value is User => {
  if (value == null) {
    return false;
  }
  if (typeof value !== 'object') {
    return false;
  }
  return ('id' in value) && ('name' in value);
}

fetchUser(1).then((user: unknown) => {
	if (isValidUser(user)) {
    // переменная user имеет правильный тип
    // Обработка пользователя
  } else {
    // Обработка ошибок
  }
});