import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "pages/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
    //useState permite criar o estado e a função para atualizar o estado
    const [pageNumber, setPageNumber] = useState(0);

    //no momento que chamar o componente, atualizar o estado (mundança no estado)
    useEffect(() => {
        //axios do a get request to ``
        //then throw a lambda expression 
        //to get the data from the backend
         axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                //moldando os dados da resposta de acordo com o objeto MoviePage
                 const data = response.data as MoviePage;
                 console.log(data);
                 //atualizando estado
                 setPageNumber(data.number);
         });
    }, []);   

    return (
        <>
            <p>{pageNumber}</p>
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