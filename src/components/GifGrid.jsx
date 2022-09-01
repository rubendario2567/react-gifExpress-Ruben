import { useFetchGisfs } from "../hooks/useFetchGisfs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGisfs( category );

    console.log({ isLoading });

  return (
    <>
        <h3>{ category }</h3>

        {
            isLoading &&(<div>Cargando ...</div>)
        }
                    
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifCard 
                    key={ image.id }
                    { ...image }
                    />
                ))
            }
        </div>
        
    </>
  )
}
