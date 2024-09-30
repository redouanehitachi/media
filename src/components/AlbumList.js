import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';

import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    const handleAddAlbum = () => {
        addAlbum(user)

    }
    let content;
    if (isLoading) {
        content = <Skeleton className="w-3 h-5" time={3} />
    } else if (error) {
        content = <div>Error loading albums.</div>
    } else {
        content = data.map((album) => {
            return <AlbumListItem album={album} key={album.key} />
        })
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg  font-bold">  Album for {user.name}</h3>
                <button className="border rounded p-2 text-red-600" onClick={handleAddAlbum} >Add Album</button>
            </div>
            <div>{content}</div>
        </div>
    )
}

export default AlbumList
