import palette from '@/styles/palete/palette';
import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary,
    color: palette.backgroundLight
}