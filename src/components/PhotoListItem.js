import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from 'react-icons/go';

function PhotoListItem({ photo }) {
    const [removePhoto, results] = useRemovePhotoMutation();
    const handleRemovePhoto = () => {
        removePhoto(photo);
    }
    return (
        <div className='relative m-2'>
            <img src={photo.url} alt="" className="h-20 w-20" />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrashcan className="text-3xl" onClick={handleRemovePhoto} />
            </div>
        </div>
    )
}

export default PhotoListItem;
