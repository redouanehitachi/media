import useThunk from "../hook/use-thunk";
import { FcDatabase } from "react-icons/fc"
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const handleClick = () => {
        doRemoveUser(user);
    }
    const header = <><button onClick={handleClick} className="mr-3"><FcDatabase /></button>
        {error && <div>Error Deleting User.</div>}
        {user.name}</>
    return (
        <ExpandablePanel header={header} >
            <AlbumList user={user} />
        </ExpandablePanel>
    )
}

export default UserListItem
