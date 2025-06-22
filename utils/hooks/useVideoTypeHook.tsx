import { useInfluencerActions } from '@/store/influencer/influencerAction';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useVideoTypeHook = (id?: string) => {
  const [videoTypes, setVideoTypes] = useState('application/x-mpegURL');
  const { getVideoTypeById } = useInfluencerActions();
  useEffect(() => {
    if (id) {
      getVideoTypeById(id)
        .then((response) => {
          const { data } = response;
          setVideoTypes(
            data.videoType == 'm3u8' ? 'application/x-mpegURL' : 'video/mp4'
          );
        })
        .catch((e) => {
          toast.error('Video type not found');
        });
    }
  }, [id]);

  return videoTypes;
};

export default useVideoTypeHook;
