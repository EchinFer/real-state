import { Wrapper, Status  } from "@googlemaps/react-wrapper"


export const PropertyMap = ({ isMarkerShown }) => {
  const render = (status) =>{
    switch (status) {
      case Status.LOADING:
        console.log("Cargando");
        break;
      case Status.FAILURE:
        console.log("Failure google maps");
        break;
    }
  }
  return (
    <Wrapper apiKey="" render={render} />
  )
}
