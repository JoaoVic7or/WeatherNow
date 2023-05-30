import { useState } from 'react';
import { fetchData } from '../../components/Api';
import { Container, Form, Input, Button, Icon } from './Styles';
import iconSearch from '../../assets/icon-search.svg';

interface HeaderProps {
    setLocation: (data: any) => void;
    hasLocation: boolean;
}

export const Header: React.FC<HeaderProps> = ({ setLocation, hasLocation }) => {
    const [cidade, setCidade] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await fetchData(cidade);
            setLocation(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container hasLocation={hasLocation}>
            <h1>WeatherNow</h1>
            <Form onSubmit={handleSearch}>
                <Input
                    type='text'
                    placeholder='Buscar...'
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />
                <Button type='submit'>
                    <Icon src={iconSearch} alt='search' />
                </Button>
            </Form>
        </Container>
    );
};
