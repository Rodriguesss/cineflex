import { MovieItem } from './style.js'

export default function Movie({ url, title, dimesion: [dimesion] }) {
    const { width, heigth } = dimesion

    return (
        <MovieItem dimesion={dimesion}>
            <img src={url} alt={title} width={width} height={heigth} />
        </MovieItem>
    )
}