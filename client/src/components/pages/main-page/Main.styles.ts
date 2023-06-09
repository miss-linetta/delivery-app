import palette from '@/styles/palete/palette';
import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
    height: '100%',
    padding: '30px',
    marginTop: 0,
    '& > div': {
        display: 'flex',
        justifyContent: 'center',
    }
}

export const foodList: SxProps<Theme> = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
}

export const button: SxProps<Theme> = {
    borderRadius: '10px',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
}

export const shopsList: SxProps<Theme> = {
    width: '100%',
    height: 'fit-content',
    border: `0.5px solid ${palette.primary}`,
    borderRadius: '10px',
    padding: '20px 60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
}