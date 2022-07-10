import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "pages/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
    //useState permite criar o estado e a função para atualizar o estado
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    //no momento que chamar o componente, atualizar o estado (mundança no estado)
    useEffect(() => {
        //axios do a get request to ``
        //then throw a lambda expression 
        //to get the data from the backend
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                //moldando os dados da resposta de acordo com o objeto MoviePage
                const data = response.data as MoviePage;
                setPage(data);
            });
        //[caso page number mudar, faça a requisição novamente]
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>
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
                    {/* para cada item/objeto da lista faça uma div
                    com a chave única com o valor do id (exigência do react),
                    renderizando um componente MovieCard passando o objeto filme como parâmetro */}
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;