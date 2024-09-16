import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

export default function PricingCard({ title, chipLabel, content, price, buttonLabel, buttonAction, cardColor, chipColor }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        buttonAction(); // Execute any additional logic passed via props
        navigate(`/calendly/${chipLabel.toLowerCase()}`); // Redirect to the Calendly page
    };

    return (
        <Card
            size="lg"
            variant={cardColor === 'solid' ? 'solid' : 'outlined'}
            sx={{
                bgcolor: cardColor,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
                height: '100%',
            }}
        >
            <Chip size="sm" variant="outlined" color={chipColor || 'neutral'}>
                {chipLabel}
            </Chip>
            <Typography level="h2">{title}</Typography>
            <Divider inset="none" />
            {Array.isArray(content) ? (
                <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                    {content.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemDecorator>
                                <Check />
                            </ListItemDecorator>
                            {item}
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography sx={{ padding: '16px' }}>{content}</Typography>
            )}
            <Divider inset="none" />
            <CardActions>
                <Typography level="title-lg" sx={{ mr: 'auto' }}>
                    {price}
                </Typography>
                <Button
                    variant="soft"
                    color="neutral"
                    endDecorator={<KeyboardArrowRight />}
                    onClick={handleButtonClick}
                >
                    {buttonLabel}
                </Button>
            </CardActions>
        </Card>
    );
}
