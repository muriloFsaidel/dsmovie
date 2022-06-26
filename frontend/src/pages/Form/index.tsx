import FormCard from 'components/FormCard';
import {useParams} from 'react-router-dom';

function Form(){
  
const params = useParams();

//{código javascript}
    return (
       <FormCard movieId={`${params.movieId}`} />
    );
}

export default Form;