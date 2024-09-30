import { GoTrashcan } from "react-icons/go"
import ExpandablePanel from "./ExpandablePanel"
import { useRemoveAlbumMutation } from "../store"
import PhotosList from "./PhotosList";
function AlbumListItem({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation();
    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }
    const header = <>
        <button className="mr-2"><GoTrashcan onClick={handleRemoveAlbum} /></button>
        {album.title}</>
    return (

        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>

    )


}

export default AlbumListItem
