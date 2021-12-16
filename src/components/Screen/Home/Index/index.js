import PageTitle from '../../../Generic/PageTitle/index'
import MovieList from '../MovieList/Index/index'

import './style.css'

export default function Home() {
    return (
        <>
            <PageTitle title="Selecione o filme" />
            <MovieList /> 
        </>
    )
}