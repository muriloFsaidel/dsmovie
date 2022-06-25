import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "pages/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    //FORMA ERRADA
    //axios do a get request to ``
    //then throw a lambda expression 
    //to get the data from the backend
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data)
    });

    return (
        <>
            <Pagination />
            {/* classes bootstrap: container, row, col*/}
            <div className="container">
                <div className="row">
                    {/*se for coluna de comprimento pequeno(X pixels da tela) vai ocupar 6 colunas(X pixels) de um total de 12 do container
                       se for coluna de comprimento grande(X pixels da tela) vai ocupar 4 colunas(X pixels) de um total de 12 do container
                       se for coluna de comprimento extra grande(X pixels da tela) vai ocupar 3 colunas(X pixels) de um total de 12 do container
                       todos com uma margin-bottom: 3px
                       https://getbootstrap.com/docs/5.0/layout/breakpoints/
                       https://getbootstrap.com/docs/4.3/layout/grid/
                     */}
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;