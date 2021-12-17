import { MovieItem } from './style.js'

export default function Movie({ url, title, dimesion }) {
    const { width, heigth } = dimesion[0]
    console.log()

    return (
        <MovieItem dimesion={dimesion[0]}>
            <img src={url} alt={title} width={width} height={heigth} />
        </MovieItem>
    )
}