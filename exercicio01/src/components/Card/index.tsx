import './styles.css';

type Props = {
    title: string;
}

export default function Card( {title} : Props ){
    return(
        <div className="card">
            <h1>{title}</h1>
        </div>
    );
}