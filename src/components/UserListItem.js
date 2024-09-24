import useThunk from "../hook/use-thunk";
import { FcDatabase } from "react-icons/fc"
import { removeUser } from "../store";

function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const handleClick = () => {
        doRemoveUser(user);
    }
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <button onClick={handleClick} className="mr-3"><FcDatabase /></button>
                    {error && <div>Error Deleting User.</div>}
                    {user.name}
                </div>

            </div>
        </div>
    )
}

export default UserListItem
