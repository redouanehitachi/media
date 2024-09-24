import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import useThunk from "../hook/use-thunk";
import UserListItem from "./UserListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUser, loadingUserError] = useThunk(fetchUsers)
  const [doCreateUSer, isCreatingUser, creatingUserError] = useThunk(addUser)


  const { data } = useSelector((state) => {
    return state.users;
  })
  useEffect(() => {
    doFetchUsers()

  }, []);
  const handleAddUser = () => {
    doCreateUSer();
  }
  let content;
  if (isLoadingUser) {
    content = <Skeleton key={6} className='h-10 w-full' />
  };
  if (loadingUserError) {
    content = <div>Error Fetching Data</div>
  } else {
    content = data.map((user) => {
      return (
   
        <UserListItem user={user} />
      )

    });
  }


  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <button disabled={isCreatingUser} onClick={handleAddUser}>+ Add User</button>

        {creatingUserError && 'Error Creating User'}
      </div>
      {content}</div>
  )
}

export default UsersList
