import PageTitle from '../../../generic/PageTitle/index'
import MovieList from '../MovieList/index'

import './style.css'

export default function Home() {
    return (
        <>
            <PageTitle title="Selecione o filme" />
            <MovieList /> 
        </>
    )
}