import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ImgMediaCard({ src_imagen, alto, titulo, texto, color,enlace}) {
    const handleButtonClick = () => {
        window.location.href = enlace; // Dirección de envío del enlace
    };
    const cardStyles = {
        backgroundColor: color, // Color del fondo de la carta
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: 600, // Ancho máximo de la carta
    };
    return (
    <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="usm"
            height={alto}
            style={{ maxWidth: '100%', maxHeight: '140px', objectFit: 'contain' }}
            image={src_imagen}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {texto}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={handleButtonClick} size='small'>
                Ver más información
            </Button>
        </CardActions>
    </Card>
    );
}

export default ImgMediaCard;