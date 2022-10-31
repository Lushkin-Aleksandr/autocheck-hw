import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                width: 147,
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22',
                },
                '.css-eg0mwd-MuiSlider-thumb:hover, .css-eg0mwd-MuiSlider-thumb.Mui-focusVisible': {
                    boxShadow: 'none'
                },
                '& .MuiSlider-thumb::after': {
                    content: "''",
                    width: 6,
                    height: 6,
                    backgroundColor: '#00CC22'
                },
                '& .MuiSlider-track': {
                    height: 4,
                    color: '#00CC22'
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    opacity: 1,
                    height: 4,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
