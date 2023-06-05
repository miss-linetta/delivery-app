import palette from '@/styles/palete';
import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
    width: '70%',
    height: 'fit-content',
    minWidth: '250px',
    maxWidth: '500px',
    padding: '30px',
    borderRadius: '15px',
    border: `0.5px solid ${palette.primary}`,
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        div: {
            borderRadius: '10px',
        },
        button: {
            borderRadius: '10px',
        }
    }
}

export const total: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between'
}