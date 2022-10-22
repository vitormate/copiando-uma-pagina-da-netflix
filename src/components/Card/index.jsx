import { Image } from "./style"

export default function Card({ url, nome }) {
  return (
    <>
      <Image>
        <img src={url} alt={nome}/>
      </Image>
    </>
  )
}