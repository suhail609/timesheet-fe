import { store } from '@/store/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToastify = (message: string) => {
  if (store.getState().user.soundPermission) {
    const audio = new Audio('/sound/bell.mp3');
    audio.play();
  }
  toast.success(message);
};

export const errorToastify = (error: any) => {
  if (store.getState().user.soundPermission) {
    const audio = new Audio('/sound/error.mp3');
    audio.play();
  }
  toast.error(error?.response?.data?.message || error?.message || error);
};
