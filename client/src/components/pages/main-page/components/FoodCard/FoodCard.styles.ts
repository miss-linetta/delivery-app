import palette from '@/styles/palete';
import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
    width: '250px',
    textAlign: 'center',
    borderRadius: '10px',
    border: `0.5px solid ${palette.primary}`,
}

export const content: SxProps<Theme> = {
    div: {
        marginBottom: '0'
    }
}

export const media: SxProps<Theme> = {
    height: '200px'
}

export const action: SxProps<Theme> = {
    justifyContent: "flex-end",
    paddingTop: '0',
    button: {
        borderRadius: '10px'
    }
}