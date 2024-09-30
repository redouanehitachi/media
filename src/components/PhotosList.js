import { useFetchPhotosQuery, useAddPhotoMutation } from "../store"
import Skeleton from './Skeleton';
import PhotosListItem from './PhotoListItem';
function PhotosList({ album }) {
    const { data, isFetching, error } = useFetchPhotosQuery(album);
    const [addPhoto, result] = useAddPhotoMutation();
    const handleAddPhoto = () => {
        addPhoto(album)

    };
    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4} />
    } else if (error) {
        content = <div>Error Fetching Photos</div>
    } else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justif-between">
                <h3 className="texte-lg font-bold">Photo In {album.title}</h3>
                <button onClick={handleAddPhoto}>+ADD PHOTO</button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
        </div>
    )
}

export default PhotosList
