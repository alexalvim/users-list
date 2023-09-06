import { IUser } from '../types'

const USER_STORE_NAME = 'users-list/users'

export const getUsers = async (): Promise<IUser[]> => {
  const users = sessionStorage.getItem(USER_STORE_NAME)

  if (users === null) {
    const defaultUsers = await fetch(
      'https://private-9d65b3-tinnova.apiary-mock.com/users',
    ).then((res) => res.json())
    return defaultUsers
  }

  return JSON.parse(users)
}

export const setUsers = (users: IUser[]) => {
  sessionStorage.setItem(USER_STORE_NAME, JSON.stringify(users))
}
