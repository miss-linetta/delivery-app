import palette from '@/styles/palete/palette';
import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
    height: '100%',
    marginTop: 0,
    marginBottom: '50px',
    '& > div': {
        display: 'flex',
        justifyContent: 'center',
    }
}