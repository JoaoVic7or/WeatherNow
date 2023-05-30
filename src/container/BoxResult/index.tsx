import InfoBloco from "../../components/InfoBloco";
import { Container, Ul, Bloco, BlocoTempInfo } from "./BoxResultStyles";

interface BoxResultProps {
    data: any;
}

export const BoxResult: React.FC<BoxResultProps> = ({ data }) => {
    const info: any = {
        feels_like: { title: 'Sensação térmica', value: data.main.feels_like.toFixed(1) + ' ºC' },
        clouds: { title: 'Nuvens', value: data.clouds.all + '%' },
        humidity: { title: 'Umidade', value: data.main.humidity + '%' },
        visibility: { title: 'Visibilidade', value: (data.visibility / 1000).toFixed(1) + ' km' },
        wind_deg: { title: 'Direção do vento', value: data.wind.deg + 'º' },
        wind_speed: { title: 'Velocidade do vento', value: data.wind.speed + ' m/s' },
    }

    return (
        <Container>
            <Bloco>
                <h2>{data.name}</h2>
                <BlocoTempInfo>
                    <p>{data.main.temp.toFixed(1)} ºC</p>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="icon weather" />
                </BlocoTempInfo>
                <p>{data.weather[0].description}</p>
            </Bloco>
            <Ul>
                {Object.keys(info).map((key) => (
                    <InfoBloco key={key} info={info[key]} />
                ))}
            </Ul>
        </Container>
    );
};