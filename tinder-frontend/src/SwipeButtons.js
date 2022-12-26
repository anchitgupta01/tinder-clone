import React from 'react'
import './SwipeButtons.css'

import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const SwipeButtons = () => {
  return (
    <div className='SwipeButtons'>
        <IconButton className="swipeButton__repeat">
            <ReplayIcon />
        </IconButton>
        <IconButton className="swipeButton__left">
            <CloseIcon />
        </IconButton>
        <IconButton className="swipeButton__star">
            <StarRateIcon />
        </IconButton>
        <IconButton className="swipeButton__right">
            <FavoriteIcon />
        </IconButton>
        <IconButton className="swipeButton__lightning">
            <FlashOnIcon />
        </IconButton>
        
        
    </div>
  )
}

export default SwipeButtons;